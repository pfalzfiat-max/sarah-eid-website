# TODO-SARAH.md – Website-Checkliste für Sarah Eid

Liebe Sarah, diese Datei enthält alle Schritte, die du selbst erledigen oder an Michael weitergeben kannst, um deine Website fertigzustellen.

---

## ✅ Bereits erledigt (technische Basis)

- Website vollständig aufgebaut (alle Sektionen: Hero, Leistungen, Über mich, Politik, Referenzen, Showreel, Kontakt)
- Design: Dunkles, cinematisches Farbschema mit Gold-Akzenten
- SEO: Titel, Beschreibung, Schema.org Daten, Open Graph
- Impressum & Datenschutz: Dunkles Design, rechtlich vollständig
- Kontaktformular: Bereit für Formspree-Integration (kein eigener Server nötig)
- Deployment auf Vercel: https://sarah-eid-website.vercel.app
- **✨ NEU: Admin-Panel integriert!** Du kannst jetzt selbst Inhalte bearbeiten

---

## 🎯 SCHNELLEINSTIEG: Admin-Panel (DEINE ERSTE AUFGABE!)

Ab sofort kannst du deine Website selbst bearbeiten – genau wie bei WordPress! 

### 🚀 Los geht's:

1. Öffne deine Website: **https://sarah-eid-website.vercel.app**
2. Klicke auf den **⚙️ Bearbeiten** Button (unten rechts)
3. Gib das Admin-Passwort ein
4. Bearbeite deine Texte und Daten
5. Klick auf **✓ Speichern**
6. Aktualisiere die Seite (F5)

**Fertig!** Deine Änderungen sind live ✅

**Ausführliche Anleitung:** [ADMIN-ANLEITUNG.md](./ADMIN-ANLEITUNG.md)

---

## 📋 WEITERE AUFGABEN

### 1. Kontaktformular aktivieren (Formspree) – ca. 5 Minuten

Das Kontaktformular sendet Anfragen direkt an deine E-Mail. Dafür brauchst du einen kostenlosen Formspree-Account:

1. Gehe auf **https://formspree.io** → „Get started free"
2. Registriere dich mit deiner E-Mail **mail@saraheid.de**
3. Erstelle ein neues Formular: Klicke auf „+ New Form" → Name: „saraheid.de Kontakt"
4. Du erhältst eine **Form-ID** (sieht so aus: `xpzvwqab`)
5. In Vercel (Schritt 4 unten) diese ID als Umgebungsvariable eintragen

**Kostenlos**: bis 50 Einsendungen/Monat. Für mehr: ~10 $/Monat.

---

### 2. Dein Profilbild hochladen

Das Bild in der „Über mich"-Sektion ist aktuell ein Platzhalter.

**Empfehlung**: Lade ein professionelles Foto hoch (z.B. auf Cloudinary, ImgBB oder direkt in Vercel Blob Storage).
- Format: JPG oder WebP
- Empfohlene Größe: ca. 600 × 800 px (Hochformat)
- Farblich: Helle oder neutrale Töne funktionieren gut auf dem dunklen Hintergrund

Sobald du eine URL hast, diese in Vercel als `NEXT_PUBLIC_PORTRAIT_URL` eintragen (Schritt 4).

---

### 3. Hero-Hintergrundbild aktualisieren

Der Hintergrund der Startseite zeigt einen Platzhalter. Ersetze ihn durch ein Bühnenfoto von dir.

- Format: JPG oder WebP
- Empfohlene Größe: 1920 × 1080 px (Querformat)
- Das Bild wird mit ca. 30% Deckkraft gezeigt – dunklere, dramatischere Fotos wirken besonders gut

Sobald du eine URL hast, diese als `NEXT_PUBLIC_HERO_IMAGE_URL` in Vercel eintragen.

---

### 4. Umgebungsvariablen in Vercel eintragen

1. Gehe auf **https://vercel.com** → Dein Projekt „sarah-eid-website"
2. Klicke auf **Settings** → **Environment Variables**
3. Trage folgende Variablen ein (jeweils Name + Wert):

| Variable | Wert | Wann |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Deine Formspree Form-ID (z.B. `xpzvwqab`) | Nach Schritt 1 |
| `NEXT_PUBLIC_PORTRAIT_URL` | URL deines Porträt-Fotos | Nach Schritt 2 |
| `NEXT_PUBLIC_HERO_IMAGE_URL` | URL deines Hero-Hintergrundbilds | Nach Schritt 3 |
| `NEXT_PUBLIC_SHOWREEL_URL` | YouTube-URL deines Showreels (z.B. `https://www.youtube.com/watch?v=XXXXX`) | Optional |

4. Nach dem Eintragen: Klicke auf **Deployments** → **Redeploy** → letztes Deployment neu starten

---

### 5. Impressum vervollständigen

Die echte Adresse muss noch eingetragen werden. Öffne:
- `app/impressum/page.tsx` (Zeilen 44–47)
- `app/datenschutz/page.tsx` (Zeilen 52–55)

Ersetze `[Straße und Hausnummer]` und `[PLZ Ort]` mit deiner echten Adresse.

---

### 6. Domain verbinden (optional)

Wenn du die eigene Domain **www.saraheid.de** verwenden möchtest:

1. In Vercel: Settings → Domains → „Add Domain" → `saraheid.de`
2. Du bekommst DNS-Einträge zum Eintragen bei deinem Domain-Anbieter
3. Nach Aktivierung ist die Website unter deiner eigenen URL erreichbar

---

### 7. Showreel hochladen (optional)

Wenn du ein Showreel auf YouTube hochgeladen hast:
- Kopiere den Link (z.B. `https://www.youtube.com/watch?v=XXXXX`)
- Trage ihn als `NEXT_PUBLIC_SHOWREEL_URL` in Vercel ein (Schritt 4)
- Die Seite zeigt dann automatisch deinen eingebetteten Video-Player

---

## 📞 Support

Bei Fragen zur technischen Umsetzung: Michael Weiss

---

*Erstellt: März 2026*
