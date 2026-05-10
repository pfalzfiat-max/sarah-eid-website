import { defineField, defineType } from 'sanity'

export const startseiteType = defineType({
  name: 'startseite',
  title: 'Startseite',
  type: 'document',
  fields: [
    // ─── HERO ────────────────────────────────────────────────
    defineField({
      name: 'heroTagline',
      title: 'Hero – Tagline (kleiner Text oben)',
      type: 'string',
      description: 'z.B. "Moderatorin · Bundesweit buchbar"',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero – Untertitel',
      type: 'string',
      description: 'z.B. "Ich bin die Stimme für Ihren besonderen Moment."',
    }),
    defineField({
      name: 'heroBeschreibung',
      title: 'Hero – Beschreibungstext',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroBadgeRegion',
      title: 'Hero – Region (Badge)',
      type: 'string',
      description: 'z.B. "Rheinland-Pfalz · Bundesweit"',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero – Kennzahlen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'wert', title: 'Zahl', type: 'number' }),
            defineField({ name: 'suffix', title: 'Suffix (z.B. +)', type: 'string' }),
            defineField({ name: 'label', title: 'Bezeichnung', type: 'string' }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),

    // ─── ÜBER MICH ───────────────────────────────────────────
    defineField({
      name: 'ueberMichHeadingLine1',
      title: 'Über mich – Überschrift Zeile 1',
      type: 'string',
    }),
    defineField({
      name: 'ueberMichHeadingLine2',
      title: 'Über mich – Überschrift Zeile 2',
      type: 'string',
    }),
    defineField({
      name: 'ueberMichBio1',
      title: 'Über mich – Absatz 1',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ueberMichBio2',
      title: 'Über mich – Absatz 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ueberMichZitat',
      title: 'Über mich – Zitat',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ueberMichStaerken',
      title: 'Über mich – Stärken (Checkliste)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // ─── POLITIK ─────────────────────────────────────────────
    defineField({
      name: 'politikHeading',
      title: 'Politik – Überschrift',
      type: 'string',
    }),
    defineField({
      name: 'politikParagraf1',
      title: 'Politik – Absatz 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'politikParagraf2',
      title: 'Politik – Absatz 2',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'politikHinweis',
      title: 'Politik – Hinweis (kursiv)',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Startseite' }),
  },
})
