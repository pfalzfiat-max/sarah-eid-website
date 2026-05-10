import { defineField, defineType } from 'sanity'

export const faqItemType = defineType({
  name: 'faqItem',
  title: 'FAQ – Frage & Antwort',
  type: 'document',
  fields: [
    defineField({
      name: 'frage',
      title: 'Frage',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'antwort',
      title: 'Antwort',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
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
    select: { title: 'frage' },
  },
})
