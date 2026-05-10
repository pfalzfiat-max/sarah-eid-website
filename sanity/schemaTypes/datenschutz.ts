import { defineField, defineType } from 'sanity'

export const datenschutzType = defineType({
  name: 'datenschutz',
  title: 'Datenschutz',
  type: 'document',
  fields: [
    defineField({
      name: 'inhalt',
      title: 'Datenschutzerklärung (Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Überschrift', value: 'h2' },
          ],
          marks: {
            decorators: [
              { title: 'Fett', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
            ],
          },
        },
      ],
      description: 'Hier den kompletten Datenschutztext einfügen und formatieren.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Datenschutz' }),
  },
})
