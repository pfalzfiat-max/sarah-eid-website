#!/usr/bin/env python3
"""Dynamisches 25-s-Reel (1080x1920, 30 fps), nur der Anhaenger, ohne Text und Ton.

Aufruf:  python3 make_reel_dynamic.py   -> reel-dynamisch-25s.mp4
Benoetigt: Pillow, numpy, ffmpeg
"""
import math
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
W, H, FPS = 1080, 1920, 30

PHOTOS = {k: Image.open(HERE / "photos" / f).convert("RGB") for k, f in {
    "plaza": "1-plaza.jpg",
    "wide": "2-front-wide.jpg",
    "front": "3-front.jpg",
    "close": "4-closeup.jpg",
}.items()}

# (Dauer, Foto, Start (cx, cy, h), Ende (cx, cy, h), Uebergang in diesen Shot, Drehung in Grad Start->Ende)
# cx/cy normiert auf Bildbreite/-hoehe, h = Anteil der Bildhoehe im Ausschnitt.
SHOTS = [
    (2.0, "plaza", (0.21, 0.47, 0.75), (0.21, 0.43, 0.42), "none", (0, 0)),     # Rueckseite, schneller Push-in
    (1.5, "close", (0.31, 0.33, 0.28), (0.30, 0.40, 0.55), "punch", (-3, 0)),   # Logo-Kreis, Zoom raus
    (2.0, "wide", (0.15, 0.52, 0.70), (0.44, 0.52, 0.70), "whip", (0, 0)),      # Fahrt entlang des Anhaengers
    (1.5, "front", (0.27, 0.72, 0.30), (0.42, 0.72, 0.30), "whip", (0, 0)),     # Raeder
    (1.5, "front", (0.15, 0.46, 0.30), (0.40, 0.46, 0.30), "whip", (0, 0)),     # JOSEPH & JOSEPH
    (1.5, "close", (0.415, 0.55, 0.58), (0.415, 0.55, 0.32), "punch", (2, 0)),  # Slogan Push-in
    (1.0, "plaza", (0.215, 0.44, 0.34), (0.215, 0.44, 0.24), "punch", (-2, 0)), # Slogan Rueckseite
    (2.0, "wide", (0.33, 0.55, 0.72), (0.33, 0.52, 1.00), "whip", (0, 0)),      # ganzer Anhaenger, Zoom raus
    (1.0, "front", (0.455, 0.44, 0.24), (0.455, 0.44, 0.40), "punch", (4, 0)),  # Logo-Kreis Punch
    (1.5, "close", (0.40, 0.72, 0.30), (0.12, 0.72, 0.30), "whip", (0, 0)),     # Webadresse, Fahrt nach links
    (1.5, "wide", (0.20, 0.56, 0.30), (0.42, 0.56, 0.30), "whip", (0, 0)),      # Marken-Logos
    (2.0, "front", (0.33, 0.80, 0.45), (0.33, 0.45, 0.45), "punch", (0, 0)),    # Tilt von Raedern hoch
    (1.5, "plaza", (0.21, 0.50, 0.42), (0.22, 0.45, 0.85), "whip", (0, 0)),     # Rueckseite, Pull-out
    (1.0, "close", (0.42, 0.55, 0.72), (0.42, 0.55, 0.40), "punch", (-3, 0)),   # Slogan schnell rein
    (3.5, "front", (0.36, 0.56, 0.95), (0.38, 0.55, 0.78), "whip", (0, 0)),     # Hero-Shot zum Schluss
]
TOTAL = sum(s[0] for s in SHOTS)
WHIP = 0.14  # Sekunden Bewegungsunschaerfe auf jeder Seite eines Wisch-Schnitts


def ease_fast(t):
    t = min(max(t, 0.0), 1.0)
    return 1 - (1 - t) ** 3


def ease_out(t):
    t = min(max(t, 0.0), 1.0)
    return 1 - (1 - t) ** 3


def lerp(a, b, t):
    return a + (b - a) * t


def render(img, cx, cy, h_frac, angle_deg=0.0, shift_x=0.0):
    """Affiner Ausschnitt (Mitte, Hoehe, Drehung) -> 1080x1920, subpixelgenau."""
    iw, ih = img.size
    a = math.radians(angle_deg)
    # bei Drehung etwas enger schneiden, damit keine Raender sichtbar werden
    ch = ih * h_frac / (1 + 0.6 * abs(math.sin(a)) * W / H + abs(math.sin(a)))
    cw = ch * W / H
    px = cx * iw + shift_x * cw
    py = cy * ih
    ext_w = cw * abs(math.cos(a)) + ch * abs(math.sin(a))
    ext_h = cw * abs(math.sin(a)) + ch * abs(math.cos(a))
    px = min(max(px, ext_w / 2), iw - ext_w / 2)
    py = min(max(py, ext_h / 2), ih - ext_h / 2)
    s = ch / H
    ca, sa = math.cos(a), math.sin(a)
    # Ausgabe (X,Y) -> Eingabe: p + s*R*(X-W/2, Y-H/2)
    A, B = s * ca, -s * sa
    D, E = s * sa, s * ca
    C = px - A * W / 2 - B * H / 2
    F = py - D * W / 2 - E * H / 2
    return img.transform((W, H), Image.Transform.AFFINE, (A, B, C, D, E, F), Image.Resampling.BICUBIC)


def hblur(arr, k):
    """Horizontale Bewegungsunschaerfe (Box-Filter) per kumulativer Summe."""
    k = int(k)
    if k < 3:
        return arr
    a = arr.astype(np.float32)
    pad = np.pad(a, ((0, 0), (k, k), (0, 0)), mode="edge")
    cs = np.cumsum(pad, axis=1)
    out = (cs[:, k + k // 2: k + k // 2 + W] - cs[:, k - k // 2 - 1: k - k // 2 - 1 + W]) / (2 * (k // 2) + 1)
    return np.clip(out, 0, 255).astype(np.uint8)


yy, xx = np.mgrid[0:H, 0:W]
_r = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
VIGNETTE = (1 - 0.28 * np.clip(_r - 0.55, 0, 1) ** 1.5)[..., None].astype(np.float32)


def grade(rgb):
    a = rgb.astype(np.float32) / 255
    lum = a.mean(axis=2, keepdims=True)
    a = lum + (a - lum) * 1.15
    a = 0.5 + (a - 0.5) * 1.08
    a = a * VIGNETTE
    return (np.clip(a, 0, 1) * 255).astype(np.uint8)


def frames():
    starts = np.cumsum([0] + [s[0] for s in SHOTS[:-1]])
    rng = np.random.default_rng(3)
    shake = rng.standard_normal((len(SHOTS), 64, 2))
    n = int(round(TOTAL * FPS))
    for i in range(n):
        t = i / FPS
        idx = int(np.searchsorted(starts, t, side="right") - 1)
        dur, key, a, b, trans, rot = SHOTS[idx]
        tl = t - starts[idx]
        k = ease_fast(tl / dur)
        cx, cy, h = (lerp(a[j], b[j], k) for j in range(3))
        angle = lerp(rot[0], rot[1], ease_out(tl / 0.5))

        shift, blur = 0.0, 0.0
        # Wisch-Schnitt: Ende des aktuellen Shots, wenn der naechste ein "whip" ist
        nxt = SHOTS[idx + 1] if idx + 1 < len(SHOTS) else None
        to_end = dur - tl
        if nxt and nxt[4] == "whip" and to_end < WHIP:
            p = 1 - to_end / WHIP
            shift, blur = 0.35 * p ** 2, 160 * p
        if trans == "whip" and tl < WHIP:
            p = 1 - tl / WHIP
            shift, blur = -0.35 * p ** 2, 160 * p

        punch, flash = 1.0, 0.0
        if trans == "punch":
            punch = 1 + 0.16 * (1 - ease_out(tl / 0.28))
            flash = max(0.0, 0.55 * (1 - tl / 0.12))
            # kurzes Wackeln nach dem Schnitt
            amp = max(0.0, 1 - tl / 0.35) * 0.012
            si = min(int(tl * FPS), 63)
            cx += shake[idx, si, 0] * amp
            cy += shake[idx, si, 1] * amp * 0.6

        base = render(PHOTOS[key], cx, cy, h / punch, angle, shift)
        arr = grade(np.asarray(base))
        if blur:
            arr = hblur(arr, blur)
        if flash:
            arr = (arr.astype(np.float32) * (1 - flash) + 255 * flash).astype(np.uint8)
        yield arr.tobytes()


def main():
    out = HERE / "reel-dynamisch-25s.mp4"
    proc = subprocess.Popen([
        "ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(out),
    ], stdin=subprocess.PIPE)
    for fb in frames():
        proc.stdin.write(fb)
    proc.stdin.close()
    proc.wait()
    print("fertig:", out, f"({TOTAL:.1f} s)")


if __name__ == "__main__":
    main()
