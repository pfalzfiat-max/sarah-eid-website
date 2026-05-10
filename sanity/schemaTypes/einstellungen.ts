import { defineField, defineType } from 'sanity'

export const einstellungenType = defineType({
  name: 'einstellungen',
  title: 'Einstellungen',
  type: 'document',
  fields: [
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
  ],
  preview: {
    prepare: () => ({ title: 'Einstellungen' }),
  },
})
