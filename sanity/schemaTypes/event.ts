import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name des Events',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          'Politik',
          'Politik & Wein',
          'Festival',
          'Live-Event',
          'Brauchtum',
          'Firmenevent',
          'Charity',
          'Sport',
          'Sonstiges',
        ],
      },
    }),
    defineField({
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
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
    select: {
      title: 'name',
      subtitle: 'kategorie',
      media: 'bild',
    },
  },
})
