#!/usr/bin/env python3
"""Instagram-Reel (1080x1920, 30 fps) aus den Joseph & Joseph Anhaenger-Fotos.

Aufruf:  python3 make_reel.py            -> reel.mp4 (mit Beat) + reel-ohne-musik.mp4
         python3 make_reel.py --clean    -> reel-clean.mp4 (nur Kamerafahrten, ohne Text/Musik/Effekte)
Benoetigt: Pillow, numpy, ffmpeg
"""
import math
import subprocess
import sys
import wave
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = Path(__file__).resolve().parent
W, H, FPS = 1080, 1920, 30
BPM = 120
BEAT = 60 / BPM
CLEAN = "--clean" in sys.argv

RED = (206, 17, 38)
BLUE = (30, 58, 160)
WHITE = (255, 255, 255)

ANTON = str(HERE / "fonts" / "Anton-Regular.ttf")
MONT = str(HERE / "fonts" / "Montserrat.ttf")


def font_anton(size):
    return ImageFont.truetype(ANTON, size)


def font_mont(size, weight=700):
    f = ImageFont.truetype(MONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


# ---------------------------------------------------------------- easing
def ease_io(t):
    t = min(max(t, 0.0), 1.0)
    return 0.5 - 0.5 * math.cos(math.pi * t)


def ease_out(t):
    t = min(max(t, 0.0), 1.0)
    return 1 - (1 - t) ** 3


def lerp(a, b, t):
    return a + (b - a) * t


# ---------------------------------------------------------------- text sprites
def text_sprite(text, font, fill=WHITE, box=None, pad=(28, 14), shadow=True, tracking=0):
    """Rendert eine Textzeile als RGBA-Sprite, optional mit farbigem Balken dahinter."""
    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    if tracking:
        widths = [probe.textlength(c, font=font) for c in text]
        tw = int(sum(widths) + tracking * (len(text) - 1))
    else:
        tw = int(probe.textlength(text, font=font))
    asc, desc = font.getmetrics()
    th = asc + desc
    px, py = pad if box else (0, 0)
    margin = 40
    sw, sh = tw + 2 * px + 2 * margin, th + 2 * py + 2 * margin
    img = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))

    def draw_text(d, ox, oy, color):
        if tracking:
            x = ox
            for c, cw in zip(text, widths):
                d.text((x, oy), c, font=font, fill=color)
                x += cw + tracking
        else:
            d.text((ox, oy), text, font=font, fill=color)

    if shadow:
        sh_layer = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
        d = ImageDraw.Draw(sh_layer)
        if box:
            d.rectangle([margin + 6, margin + 8, margin + tw + 2 * px + 6, margin + th + 2 * py + 8], fill=(0, 0, 0, 120))
        else:
            draw_text(d, margin + px + 3, margin + py + 5, (0, 0, 0, 170))
        sh_layer = sh_layer.filter(ImageFilter.GaussianBlur(10))
        img = Image.alpha_composite(img, sh_layer)
    d = ImageDraw.Draw(img)
    if box:
        d.rectangle([margin, margin, margin + tw + 2 * px, margin + th + 2 * py], fill=box + (255,))
    draw_text(d, margin + px, margin + py, fill + (255,))
    return img


class Line:
    def __init__(self, sprite, y, delay=0.0, align="center", x=None):
        self.sprite, self.y, self.delay, self.align, self.x = sprite, y, delay, align, x


def draw_lines(frame, lines, t_local, start=0.15):
    for ln in lines:
        p = ease_out((t_local - start - ln.delay) / 0.35)
        if p <= 0:
            continue
        spr = ln.sprite
        if p < 1:
            a = np.array(spr)
            a[..., 3] = (a[..., 3] * p).astype(np.uint8)
            spr = Image.fromarray(a)
        x = (W - spr.width) // 2 if ln.align == "center" else ln.x
        y = int(ln.y + (1 - p) * 70)
        frame.alpha_composite(spr, (x, y))


# ---------------------------------------------------------------- shots
PHOTOS = {k: Image.open(HERE / "photos" / f).convert("RGB") for k, f in {
    "plaza": "1-plaza.jpg",
    "wide": "2-front-wide.jpg",
    "front": "3-front.jpg",
    "close": "4-closeup.jpg",
}.items()}


def render_shot(img, cx, cy, h_frac, punch):
    """Schneidet ein 9:16-Fenster (Mitte cx,cy normiert, Hoehe h_frac) subpixelgenau aus."""
    iw, ih = img.size
    ch = ih * h_frac / punch
    cw = ch * W / H
    x0 = min(max(cx * iw - cw / 2, 0), iw - cw)
    y0 = min(max(cy * ih - ch / 2, 0), ih - ch)
    return img.transform((W, H), Image.Transform.EXTENT, (x0, y0, x0 + cw, y0 + ch), Image.Resampling.BICUBIC)


# Shots: (Dauer, Foto, Start (cx,cy,h), Ende (cx,cy,h), Textzeilen)
SHOTS = [
    (3.0, "plaza", (0.72, 0.52, 1.00), (0.26, 0.50, 0.92), [
        Line(text_sprite("LANDAU / PFALZ", font_mont(44, 800), box=RED, tracking=4), 1330),
        Line(text_sprite("RATHAUSPLATZ", font_anton(170)), 1420, delay=0.12),
    ]),
    (3.0, "wide", (0.24, 0.55, 0.98), (0.47, 0.53, 0.90), [
        Line(text_sprite("FEST GEPLANT?", font_anton(160)), 170),
        Line(text_sprite("MARKT · FEIER · EVENT", font_mont(46, 800), box=BLUE, tracking=3), 400, delay=0.12),
    ]),
    (3.0, "front", (0.40, 0.50, 1.00), (0.272, 0.46, 0.80), [
        Line(text_sprite("PLATZ FÜR", font_anton(150)), 170),
        Line(text_sprite("DEIN EQUIPMENT?", font_anton(150)), 360, delay=0.12),
    ]),
    (3.0, "close", (0.42, 0.55, 0.60), (0.39, 0.52, 0.90), [
        Line(text_sprite("MICH KANN", font_anton(160), box=RED, pad=(36, 6)), 1290),
        Line(text_sprite("MAN MIETEN!", font_anton(160), box=BLUE, pad=(36, 6)), 1520, delay=0.12),
    ]),
]
END_DUR = 0.0 if CLEAN else 3.5

# Endkarte: verschwommener, abgedunkelter Hintergrund + Branding
_bg = render_shot(PHOTOS["wide"], 0.33, 0.5, 1.0, 1.0).filter(ImageFilter.GaussianBlur(22))
_bg = Image.blend(_bg, Image.new("RGB", (W, H), (10, 14, 40)), 0.62).convert("RGBA")
END_BG = _bg


def joseph_logo():
    fa = font_anton(150)
    parts = [("JOSEPH", WHITE), ("&", RED), ("JOSEPH", WHITE)]
    probe = ImageDraw.Draw(Image.new("RGBA", (1, 1)))
    gap = 14
    widths = [probe.textlength(p, font=fa) for p, _ in parts]
    tw = int(sum(widths) + gap * 2)
    asc, desc = fa.getmetrics()
    img = Image.new("RGBA", (tw + 80, asc + desc + 80), (0, 0, 0, 0))
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ds, d = ImageDraw.Draw(sh), ImageDraw.Draw(img)
    x = 40
    for (p, c), w in zip(parts, widths):
        ds.text((x + 3, 45), p, font=fa, fill=(0, 0, 0, 180))
        d.text((x, 40), p, font=fa, fill=c + (255,))
        x += w + gap
    return Image.alpha_composite(sh.filter(ImageFilter.GaussianBlur(10)), img)


END_LINES = [
    Line(text_sprite("FLEISCHEREIMASCHINEN · GROSSKÜCHENTECHNIK", font_mont(30, 700), tracking=2, shadow=False), 560),
    Line(joseph_logo(), 610, delay=0.08),
    Line(text_sprite("BERATUNG · VERKAUF · SERVICE", font_mont(42, 800), box=RED, tracking=3), 840, delay=0.16),
    Line(text_sprite("Anhänger mieten?", font_mont(64, 800)), 1080, delay=0.32),
    Line(text_sprite("0174 173 48 84", font_anton(140)), 1170, delay=0.40),
    Line(text_sprite("fleischereimaschinen-joseph.de", font_mont(46, 600), box=BLUE, pad=(30, 16)), 1400, delay=0.48),
    Line(text_sprite("Oskar-von-Miller-Str. 4 · 76829 Landau", font_mont(36, 500), shadow=False), 1520, delay=0.56),
]

# Vignette + leichte Farbkorrektur
yy, xx = np.mgrid[0:H, 0:W]
_r = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
_yn = yy / H
_grad = 1.0 if CLEAN else 1 - 0.45 * np.clip(1 - _yn / 0.30, 0, 1) ** 1.6 - 0.40 * np.clip((_yn - 0.68) / 0.32, 0, 1) ** 1.6
VIGNETTE = ((1 - 0.28 * np.clip(_r - 0.55, 0, 1) ** 1.5) * _grad)[..., None].astype(np.float32)


def grade(rgb):
    a = rgb.astype(np.float32) / 255
    lum = a.mean(axis=2, keepdims=True)
    a = lum + (a - lum) * 1.12                     # Saettigung
    a = 0.5 + (a - 0.5) * 1.07                     # Kontrast
    a = a * VIGNETTE
    return (np.clip(a, 0, 1) * 255).astype(np.uint8)


def frames():
    total = sum(s[0] for s in SHOTS) + END_DUR
    n = int(round(total * FPS))
    bounds = []
    t0 = 0.0
    for s in SHOTS:
        bounds.append((t0, s))
        t0 += s[0]
    end_start = t0
    for i in range(n):
        t = i / FPS
        if t < end_start:
            start, (dur, key, a, b, lines) = [bs for bs in bounds if bs[0] <= t][-1]
            tl = t - start
            k = ease_io(tl / dur)
            punch = 1.0 if CLEAN else 1 + 0.10 * (1 - ease_out(tl / 0.30))
            cx, cy, h = (lerp(a[j], b[j], k) for j in range(3))
            base = render_shot(PHOTOS[key], cx, cy, h, punch)
            frame = Image.fromarray(grade(np.asarray(base))).convert("RGBA")
            if not CLEAN:
                draw_lines(frame, lines, tl)
        else:
            tl = t - end_start
            frame = END_BG.copy()
            draw_lines(frame, END_LINES, tl, start=0.05)
        # weisser Blitz an jedem Schnitt
        cut_t = tl
        flash = max(0.0, 0.65 * (1 - cut_t / 0.17)) if i > 0 and not CLEAN else 0.0
        out = frame.convert("RGB")
        if flash > 0:
            out = Image.blend(out, Image.new("RGB", (W, H), WHITE), flash)
        # Schluss-Fade
        if t > total - 0.4 and not CLEAN:
            out = Image.blend(out, Image.new("RGB", (W, H), (0, 0, 0)), (t - (total - 0.4)) / 0.4)
        yield out.tobytes()


# ---------------------------------------------------------------- Musik (selbst synthetisiert, lizenzfrei)
def make_music(path, total):
    sr = 44100
    n = int(total * sr)
    out = np.zeros(n, np.float32)
    rng = np.random.default_rng(7)
    tt = np.arange(int(0.45 * sr)) / sr

    kick = np.sin(2 * np.pi * (45 * tt + (110 / 18) * (1 - np.exp(-18 * tt)))) * np.exp(-tt * 9)
    hat_n = rng.standard_normal(int(0.06 * sr)).astype(np.float32)
    hat = np.diff(hat_n, prepend=0) * np.exp(-np.arange(hat_n.size) / sr * 70)
    clap_n = rng.standard_normal(int(0.2 * sr)).astype(np.float32)
    clap = np.diff(clap_n, prepend=0) * np.exp(-np.arange(clap_n.size) / sr * 22)

    def add(sig, t, gain):
        s = int(t * sr)
        e = min(n, s + sig.size)
        if s < n:
            out[s:e] += gain * sig[: e - s]

    music_end = sum(s[0] for s in SHOTS)        # Beat bis zur Endkarte, dann Ausklang
    roots = [55.0, 43.65, 65.41, 49.0]          # A, F, C, G (Bass)
    beats = int(round(total / BEAT))
    for bi in range(beats):
        t = bi * BEAT
        drums_on = t < music_end
        if drums_on:
            add(kick, t, 0.9)
            add(hat, t + BEAT / 2, 0.18)
            add(hat, t + BEAT * 0.75, 0.08)
            if bi % 2 == 1:
                add(clap, t, 0.35)
        bar = (bi // 4) % 4
        f = roots[bar]
        bl = int(BEAT / 2 * sr)
        bt = np.arange(bl) / sr
        saw = 2 * ((bt * f) % 1) - 1
        bass = (0.6 * np.sin(2 * np.pi * f * bt) + 0.25 * saw) * np.minimum(1, bt * 200) * np.exp(-bt * 5)
        add(bass, t + BEAT / 2, 0.45 if drums_on else 0.25)

    # Pad-Akkorde (weich)
    chords = [(220, 261.6, 329.6), (174.6, 220, 261.6), (196, 261.6, 329.6), (196, 246.9, 293.7)]
    bar_len = 4 * BEAT
    for b in range(int(math.ceil(total / bar_len))):
        s, e = int(b * bar_len * sr), min(n, int((b + 1) * bar_len * sr))
        t = np.arange(e - s) / sr
        env = np.minimum(1, t / 0.15) * np.minimum(1, (bar_len - t) / 0.2)
        sig = sum(np.sin(2 * np.pi * fr * t) + 0.3 * np.sin(2 * np.pi * fr * 2.003 * t) for fr in chords[b % 4])
        out[s:e] += 0.05 * sig * env

    # Riser vor der Endkarte + Impact
    rs, re_ = int((music_end - 1.5) * sr), int(music_end * sr)
    rn = rng.standard_normal(re_ - rs).astype(np.float32)
    ramp = np.linspace(0, 1, re_ - rs) ** 2
    out[rs:re_] += 0.12 * np.diff(rn, prepend=0) * ramp
    add(kick, music_end, 1.1)
    add(clap, music_end, 0.3)

    fade = int(1.5 * sr)
    out[-fade:] *= np.linspace(1, 0, fade)
    out = np.tanh(out * 1.2)
    out /= np.abs(out).max() / 0.89
    stereo = np.repeat((out * 32767).astype(np.int16)[:, None], 2, axis=1)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(stereo.tobytes())


def main():
    total = sum(s[0] for s in SHOTS) + END_DUR
    silent = HERE / ("reel-clean.mp4" if CLEAN else "reel-ohne-musik.mp4")
    proc = subprocess.Popen([
        "ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", str(silent),
    ], stdin=subprocess.PIPE)
    for fb in frames():
        proc.stdin.write(fb)
    proc.stdin.close()
    proc.wait()
    if CLEAN:
        print("fertig:", silent)
        return

    wav = HERE / "beat.wav"
    make_music(wav, total)
    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error", "-i", str(silent), "-i", str(wav),
        "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest",
        "-movflags", "+faststart", str(HERE / "reel.mp4"),
    ], check=True)
    wav.unlink()
    print("fertig:", HERE / "reel.mp4")


if __name__ == "__main__":
    main()
