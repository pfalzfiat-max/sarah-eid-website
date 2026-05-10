import { defineField, defineType } from 'sanity'

export const referenzType = defineType({
  name: 'referenz',
  title: 'Referenz / Kundenstimme',
  type: 'document',
  fields: [
    defineField({
      name: 'typ',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          { title: 'Textbewertung', value: 'text' },
          { title: 'Video (Vimeo)', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'text',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rolle',
      title: 'Rolle / Unternehmen',
      type: 'string',
    }),
    defineField({
      name: 'zitat',
      title: 'Zitat / Bewertungstext',
      type: 'text',
      rows: 4,
      hidden: ({ document }) => document?.typ === 'video',
    }),
    defineField({
      name: 'istInstagram',
      title: 'Instagram-Bewertung?',
      type: 'boolean',
      initialValue: false,
      hidden: ({ document }) => document?.typ === 'video',
    }),
    defineField({
      name: 'vimeoId',
      title: 'Vimeo Video-ID',
      type: 'string',
      description: 'Nur die Zahl aus der Vimeo-URL, z.B. 1180430038',
      hidden: ({ document }) => document?.typ !== 'video',
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge (niedrig = zuerst)',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'reihenfolgeAsc',
      by: [{ field: 'reihenfolge', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'rolle' },
  },
})
