#!/usr/bin/env python3
"""Ruhiges 20-s-Reel (1080x1920, 30 fps): nur der Anhaenger, sanfte Schwenks,
keine Zooms, keine Effekte, kein Text, kein Ton.

Aufruf:  python3 make_reel_20s.py   -> reel-20s.mp4
"""
import subprocess

import numpy as np

from make_reel_dynamic import FPS, H, HERE, PHOTOS, W, grade, render


def ease_io(t):
    t = min(max(t, 0.0), 1.0)
    return 0.5 - 0.5 * np.cos(np.pi * t)


# (Dauer, Foto, Start (cx, cy), Ende (cx, cy), Hoehe h) - h bleibt konstant -> reiner Schwenk
SHOTS = [
    (4.0, "plaza", (0.19, 0.45), (0.23, 0.45), 0.55),   # Rueckseite
    (4.0, "wide", (0.20, 0.53), (0.39, 0.53), 0.80),    # Seite mit Rathaus
    (4.0, "front", (0.22, 0.55), (0.38, 0.55), 0.80),   # Seite, naeher
    (4.0, "close", (0.20, 0.52), (0.35, 0.52), 0.85),   # Schriftzug "Mich kann man mieten!"
    (4.0, "wide", (0.30, 0.50), (0.33, 0.50), 1.00),    # ganzer Anhaenger
]


def frames():
    for dur, key, a, b, h in SHOTS:
        for i in range(int(round(dur * FPS))):
            k = ease_io(i / (dur * FPS - 1))
            cx, cy = a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k
            yield grade(np.asarray(render(PHOTOS[key], cx, cy, h))).tobytes()


def main():
    out = HERE / "reel-20s.mp4"
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
    print("fertig:", out)


if __name__ == "__main__":
    main()
