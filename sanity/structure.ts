import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sarah Eid – Inhalte')
    .items([
      // ─── SEITEN ──────────────────────────────────────────
      S.listItem()
        .title('🏠 Startseite')
        .child(
          S.document()
            .schemaType('startseite')
            .documentId('startseite')
            .title('Startseite bearbeiten')
        ),

      S.listItem()
        .title('⚙️ Einstellungen & Kontakt')
        .child(
          S.document()
            .schemaType('einstellungen')
            .documentId('einstellungen')
            .title('Einstellungen bearbeiten')
        ),

      S.divider(),

      // ─── LISTEN ──────────────────────────────────────────
      S.listItem()
        .title('📋 Leistungen')
        .schemaType('leistung')
        .child(S.documentTypeList('leistung').title('Leistungen')),

      S.listItem()
        .title('🗓️ Events & Portfolio')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),

      S.listItem()
        .title('⭐ Referenzen & Kundenstimmen')
        .schemaType('referenz')
        .child(S.documentTypeList('referenz').title('Referenzen')),

      S.listItem()
        .title('❓ FAQ – Häufige Fragen')
        .schemaType('faqItem')
        .child(S.documentTypeList('faqItem').title('FAQ')),

      S.divider(),

      // ─── RECHTLICHES ─────────────────────────────────────
      S.listItem()
        .title('📄 Impressum')
        .child(
          S.document()
            .schemaType('impressum')
            .documentId('impressum')
            .title('Impressum bearbeiten')
        ),

      S.listItem()
        .title('🔒 Datenschutz')
        .child(
          S.document()
            .schemaType('datenschutz')
            .documentId('datenschutz')
            .title('Datenschutz bearbeiten')
        ),
    ])
