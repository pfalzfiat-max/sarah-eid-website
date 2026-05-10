import { defineField, defineType } from 'sanity'

export const impressumType = defineType({
  name: 'impressum',
  title: 'Impressum',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'berufsbezeichnung',
      title: 'Berufsbezeichnung',
      type: 'string',
    }),
    defineField({
      name: 'strasse',
      title: 'Straße & Hausnummer',
      type: 'string',
    }),
    defineField({
      name: 'plzOrt',
      title: 'PLZ & Ort',
      type: 'string',
    }),
    defineField({
      name: 'land',
      title: 'Land',
      type: 'string',
      initialValue: 'Deutschland',
    }),
    defineField({
      name: 'telefon',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'ustIdNr',
      title: 'USt-IdNr.',
      type: 'string',
    }),
    defineField({
      name: 'steuernummer',
      title: 'Steuernummer',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Impressum' }),
  },
})
