import { defineField, defineType } from 'sanity'

export const einstellungenType = defineType({
  name: 'einstellungen',
  title: 'Einstellungen',
  type: 'document',
  fields: [
    // ─── IDENTITÄT ───────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Name (z.B. Sarah Eid)',
      type: 'string',
    }),
    defineField({
      name: 'berufsbezeichnung',
      title: 'Berufsbezeichnung (z.B. Moderatorin & Sprecherin)',
      type: 'string',
    }),

    // ─── KONTAKT ─────────────────────────────────────────────
    defineField({
      name: 'telefon',
      title: 'Telefonnummer',
      type: 'string',
      description: 'z.B. +49 176 32727160',
    }),
    defineField({
      name: 'email',
      title: 'E-Mail-Adresse',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Region (z.B. Rheinland-Pfalz · Bundesweit)',
      type: 'string',
    }),

    // ─── SOCIAL MEDIA ────────────────────────────────────────
    defineField({
      name: 'instagram',
      title: 'Instagram-URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook-URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn-URL',
      type: 'url',
    }),

    // ─── SEO ─────────────────────────────────────────────────
    defineField({
      name: 'seoTitel',
      title: 'SEO – Seitentitel (Browser-Tab)',
      type: 'string',
    }),
    defineField({
      name: 'seoBeschreibung',
      title: 'SEO – Meta-Beschreibung',
      type: 'text',
      rows: 2,
      description: 'Empfehlung: 140–160 Zeichen',
    }),

    // ─── FOOTER ──────────────────────────────────────────────
    defineField({
      name: 'footerBeschreibung',
      title: 'Footer – Kurzbeschreibung',
      type: 'text',
      rows: 2,
    }),

    // ─── BILDER ──────────────────────────────────────────────
    defineField({
      name: 'heroBild',
      title: 'Hero – Hintergrundbild',
      type: 'image',
      description: 'Atmosphärisches Hintergrundbild im Hero-Bereich (wird transparent eingeblendet)',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-Text (für Barrierefreiheit & SEO)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'portraitBild',
      title: 'Hero – Portrait-Foto (rechte Spalte)',
      type: 'image',
      description: 'Das Portrait-Foto von Sarah Eid im Hero-Bereich',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'ueberMichBild1',
      title: 'Über mich – Bild links oben',
      type: 'image',
      description: 'Erstes Bild in der Über-mich-Sektion (z.B. Bühne/Sport)',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'ueberMichBild2',
      title: 'Über mich – Bild rechts unten',
      type: 'image',
      description: 'Zweites Bild in der Über-mich-Sektion (z.B. mit Persönlichkeit)',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-Text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Einstellungen' }),
  },
})
