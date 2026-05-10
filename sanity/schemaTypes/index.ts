import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './event'
import { startseiteType } from './startseite'
import { leistungType } from './leistung'
import { faqItemType } from './faqItem'
import { referenzType } from './referenz'
import { einstellungenType } from './einstellungen'
import { impressumType } from './impressum'
import { datenschutzType } from './datenschutz'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    startseiteType,
    leistungType,
    faqItemType,
    referenzType,
    einstellungenType,
    impressumType,
    datenschutzType,
  ],
}
