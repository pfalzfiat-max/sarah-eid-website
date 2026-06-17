/**
 * Sanity Seed Script – Sarah Eid Website
 *
 * Überträgt alle bestehenden Inhalte in Sanity-Dokumente.
 * Nutzt createOrReplace – keine Duplikate, vorhandene Dokumente werden aktualisiert.
 *
 * Ausführen: node scripts/seed-sanity.mjs
 */

import { createClient } from 'next-sanity'
import { config } from 'dotenv'

// .env.local laden
config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.replace(/"/g, '') || 'qxejw50d'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.replace(/"/g, '') || 'production'
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('❌  SANITY_API_TOKEN fehlt in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-05-10',
  token,
  useCdn: false,
})

console.log(`📡  Verbunden mit Sanity-Projekt: ${projectId} (${dataset})\n`)

// ─── HILFSFUNKTIONEN ─────────────────────────────────────────

async function upsert(doc) {
  const { _id, _type, ...rest } = doc
  const existing = await client.getDocument(_id)
  if (existing) {
    console.log(`  ↻  Update:  ${_type} [${_id}]`)
  } else {
    console.log(`  +  Neu:     ${_type} [${_id}]`)
  }
  return client.createOrReplace({ _id, _type, ...rest })
}

// Für Listendokumente: bestehende prüfen und gezielt updaten
async function upsertList(type, docs) {
  const existing = await client.fetch(`*[_type == $type]{ _id, titel, name, frage }`, { type })
  const existingIds = new Set(existing.map((d) => d._id))

  for (const doc of docs) {
    if (existingIds.has(doc._id)) {
      console.log(`  ↻  Update:  ${type} [${doc._id}]`)
    } else {
      console.log(`  +  Neu:     ${type} [${doc._id}]`)
    }
    await client.createOrReplace(doc)
  }
}

// ─── EINSTELLUNGEN (Singleton) ────────────────────────────────

async function seedEinstellungen() {
  console.log('\n⚙️   Einstellungen (Identität, Kontakt, Social, SEO, Footer)')
  await upsert({
    _id: 'einstellungen',
    _type: 'einstellungen',
    // Identität
    name: 'Sarah Eid',
    berufsbezeichnung: 'Moderatorin & Sprecherin',
    // Kontakt
    telefon: '+49 176 32727160',
    email: 'mail@saraheid.de',
    region: 'Rheinland-Pfalz · Bundesweit',
    // Social
    instagram: 'https://www.instagram.com/_sarah_eid/',
    facebook: 'https://www.facebook.com/coach.socialmedia/',
    linkedin: 'https://www.linkedin.com/in/sarah-eid-3763b21a4/',
    // SEO
    seoTitel: 'Sarah Eid – Moderatorin & Sprecherin | Rheinland-Pfalz & Bundesweit',
    seoBeschreibung:
      'Sarah Eid moderiert Live-Events, Messen, politische Veranstaltungen, TV & Radio – bundesweit. Freie Traurednerin & Sprecherin aus Rheinland-Pfalz.',
    // Footer
    footerBeschreibung:
      'Ich moderiere Events und spreche für Imagefilme & Werbung – aus Rheinland-Pfalz, bundesweit buchbar.',
    // Bilder: keine Sanity-Assets gesetzt – Fallback auf lokale Pfade im Frontend
    // Bilder können im Studio unter Einstellungen hochgeladen werden
  })
}

// ─── STARTSEITE (Singleton) ───────────────────────────────────

async function seedStartseite() {
  console.log('\n🏠  Startseite (Hero, Über mich, Politik)')
  await upsert({
    _id: 'startseite',
    _type: 'startseite',
    // Hero
    heroTagline: 'Moderatorin · Bundesweit buchbar',
    heroSubtitle: 'Ich bin die Stimme für Ihren besonderen Moment.',
    heroBeschreibung:
      'Ich moderiere Live-Events, Messen, politische Veranstaltungen, TV & Radio – bundesweit. Und ich begleite Sie als freie Traurednerin durch den schönsten Tag Ihres Lebens.',
    heroBadgeRegion: 'Rheinland-Pfalz · Bundesweit',
    heroStats: [
      { _key: 'stat1', wert: 50, suffix: '+', label: 'Events' },
      { _key: 'stat2', wert: 10, suffix: '+', label: 'Jahre' },
      { _key: 'stat3', wert: 6, suffix: '', label: 'Bundesländer' },
      { _key: 'stat4', wert: 2400, suffix: '+', label: 'Follower' },
    ],
    // Über mich
    ueberMichHeadingLine1: 'Mehr als eine Stimme –',
    ueberMichHeadingLine2: 'eine Persönlichkeit.',
    ueberMichBio1:
      'Als Moderatorin aus Rheinland-Pfalz bringe ich Erfahrung, Empathie und Energie auf die Bühne. Ob große Gala, politische Podiumsdiskussion oder emotionaler Charity-Abend – ich passe mich jedem Event an, ohne meine Handschrift zu verlieren.',
    ueberMichBio2:
      'Mein Hintergrund als anerkannte Beraterin für Deutschen Wein und ehemalige Weinprinzessin verschafft mir eine besondere Glaubwürdigkeit für Wein- und Genussevents. Zuletzt war ich u.a. als Moderatorin für politische Großveranstaltungen in Rheinland-Pfalz tätig – ein Bereich, der höchste Anforderungen an Professionalität, Neutralität und Spontanität stellt.',
    ueberMichZitat:
      'Professionelle Moderation bedeutet für mich: Vorbereitung, Präsenz und Herzlichkeit – in dieser Reihenfolge.',
    ueberMichStaerken: [
      'Natürliche Bühnenpräsenz & authentische Ausstrahlung',
      'Souveräner Umgang mit spontanen Live-Situationen',
      'Erfahrung mit hochrangigen Persönlichkeiten aus Politik & Wirtschaft',
      'Weinexpertise: Ehemalige Weinprinzessin Südliche Weinstraße 23/24',
      'Zuletzt tätig als Moderatorin für politische Großveranstaltungen in Rheinland-Pfalz',
      'Sprachlich versiert – Vorbereitung auf Zielgruppe und Agenda',
    ],
    // Politik
    politikHeading: 'Moderation auf höchstem politischen Niveau.',
    politikParagraf1:
      'Politische Veranstaltungen verlangen besondere Sorgfalt, Neutralität und absolute Professionalität. Ich moderiere Parteiveranstaltungen, Podiumsdiskussionen und politische Bürgerevents mit Fingerspitzengefühl.',
    politikParagraf2:
      'Zu meinen Referenzen zählen Veranstaltungen im Umfeld der rheinland-pfälzischen Landespolitik – darunter Veranstaltungen im Kontext der Landtagswahl 2026.',
    politikHinweis:
      'Politische Anfragen nehme ich ausschließlich nach persönlichem Vorgespräch und sorgfältiger Prüfung an.',
  })
}

// ─── IMPRESSUM (Singleton) ───────────────────────────────────

async function seedImpressum() {
  console.log('\n📄  Impressum')
  await upsert({
    _id: 'impressum',
    _type: 'impressum',
    name: 'Sarah Eid',
    berufsbezeichnung: 'Moderatorin & Sprecherin',
    strasse: 'Guttenbergstr. 40',
    plzOrt: '76889 Oberotterbach',
    land: 'Deutschland',
    telefon: '+49 176 32727160',
    email: 'mail@saraheid.de',
    ustIdNr: 'DE423888887',
    steuernummer: '24/036/43114',
  })
}

// ─── LEISTUNGEN (Liste) ───────────────────────────────────────

async function seedLeistungen() {
  console.log('\n📋  Leistungen')
  const leistungen = [
    { _id: 'leistung-politik', titel: 'Politik & Gesellschaft', beschreibung: 'Ich moderiere Podiumsdiskussionen, Parteiveranstaltungen und politische Bürgerevents – mit Fingerspitzengefühl und überparteilicher Professionalität.', reihenfolge: 1 },
    { _id: 'leistung-firmenevents', titel: 'Firmenevents & Jubiläen', beschreibung: 'Jubiläumsfeiern und Corporate Events moderiere ich professionell, mit Stil und dem richtigen Gespür für Ihre Unternehmenskultur.', reihenfolge: 2 },
    { _id: 'leistung-messen', titel: 'Messen & Kongresse', beschreibung: 'Ob Messemoderation, Kongresseröffnung oder Podiumspräsentation – ich führe souverän und zielgruppengerecht durch Ihr Programm.', reihenfolge: 3 },
    { _id: 'leistung-traurednerin', titel: 'Freie Traurednerin', beschreibung: 'Ich gestalte Ihre Trauzeremonie individuell, konfessionslos und von Herzen – für den schönsten Tag Ihres Lebens.', reihenfolge: 4 },
    { _id: 'leistung-modenschau', titel: 'Modenschauen & Fashion', beschreibung: 'Runway-Shows, Fashion Weeks und Präsentationen begleite ich dynamisch, stylisch und im Takt der Kollektion.', reihenfolge: 5 },
    { _id: 'leistung-charity', titel: 'Charity & Benefiz', beschreibung: 'Benefizabende und Spendenveranstaltungen moderiere ich mit Empathie, Herz und der nötigen Seriosität.', reihenfolge: 6 },
    { _id: 'leistung-sport', titel: 'Sportevents & Konzerte', beschreibung: 'Sportveranstaltungen, Konzerte und Open-Air-Events begleite ich live – mitreißend und mit echter Begeisterung.', reihenfolge: 7 },
    { _id: 'leistung-imagefilm', titel: 'Imagefilm-Sprecherin', beschreibung: 'Meine Stimme steht für Imagefilme, Erklärvideos und Unternehmensporträts – klar, markant und auf den Punkt.', reihenfolge: 8 },
    { _id: 'leistung-werbespots', titel: 'Werbespots (Radio & TV)', beschreibung: 'Für Radio-Spots und TV-Werbung bringe ich stimmliche Präsenz und Professionalität – einprägsam und wirkungsvoll.', reihenfolge: 9 },
  ].map((l) => ({ ...l, _type: 'leistung' }))

  await upsertList('leistung', leistungen)
}

// ─── FAQ (Liste) ─────────────────────────────────────────────

async function seedFaq() {
  console.log('\n❓  FAQ')
  const faqs = [
    { _id: 'faq-kosten', frage: 'Was kostet eine professionelle Moderatorin?', antwort: 'Die Kosten variieren je nach Veranstaltungsformat, Dauer und Reiseaufwand. Sarah Eid erstellt auf Anfrage ein individuelles Angebot – gerne über das Kontaktformular.', reihenfolge: 1 },
    { _id: 'faq-events', frage: 'Welche Events moderiert Sarah Eid?', antwort: 'Sarah Eid moderiert Firmenevents, Jubiläen, Messen, Kongresse, Galas, politische Podiumsdiskussionen, Parteitage, Wahlkampfveranstaltungen, Charity-Events, Modenschauen und Sportevents – bundesweit.', reihenfolge: 2 },
    { _id: 'faq-buchung', frage: 'Wie kann ich Sarah Eid als Moderatorin buchen?', antwort: 'Eine Buchungsanfrage ist über das Kontaktformular auf dieser Seite, per E-Mail an mail@saraheid.de oder telefonisch unter +49-176-32727160 möglich.', reihenfolge: 3 },
    { _id: 'faq-region', frage: 'In welchen Bundesländern ist Sarah Eid buchbar?', antwort: 'Sarah Eid ist bundesweit buchbar. Ihr Schwerpunkt liegt in Rheinland-Pfalz, sie ist jedoch für Veranstaltungen in ganz Deutschland verfügbar.', reihenfolge: 4 },
    { _id: 'faq-politik', frage: 'Hat Sarah Eid Erfahrung mit politischen Veranstaltungen?', antwort: 'Ja. Sarah Eid hat u.a. den Landesparteitag der Freien Wähler RLP, Gesprächsrunden mit Bundesverkehrsminister Patrick Schnieder sowie Veranstaltungen im Kontext der rheinland-pfälzischen Landtagswahl 2026 moderiert. Politische Anfragen werden nach sorgfältiger Prüfung angenommen.', reihenfolge: 5 },
  ].map((f) => ({ ...f, _type: 'faqItem' }))

  await upsertList('faqItem', faqs)
}

// ─── REFERENZEN (Liste) ───────────────────────────────────────

async function seedReferenzen() {
  console.log('\n⭐  Referenzen')
  const referenzen = [
    // Video-Testimonials
    { _id: 'ref-video-gorges', _type: 'referenz', typ: 'video', name: 'Monika Gorges', rolle: 'Veranstaltungsteilnehmerin', vimeoId: '1180430038', reihenfolge: 1 },
    { _id: 'ref-video-mueller', _type: 'referenz', typ: 'video', name: 'Raimund Müller', rolle: 'Veranstaltungsteilnehmer', vimeoId: '1180430835', reihenfolge: 2 },
    { _id: 'ref-video-schneider', _type: 'referenz', typ: 'video', name: 'Helga Schneider', rolle: 'Veranstaltungsteilnehmerin', vimeoId: '1180430733', reihenfolge: 3 },
    // Text-Testimonials
    { _id: 'ref-text-markus', _type: 'referenz', typ: 'text', name: 'Markus L.', rolle: 'Geschäftsführer, Mittelständisches Unternehmen, Mannheim', zitat: 'Sarah Eid hat unsere Jubiläumsfeier auf ein völlig neues Level gehoben. Professionell, charmant und immer souverän – auch wenn der Abend eine unerwartete Wendung nahm.', istInstagram: false, reihenfolge: 4 },
    { _id: 'ref-text-claudia', _type: 'referenz', typ: 'text', name: 'Claudia F.', rolle: 'Eventmanagerin, Fachmesse Rhein-Neckar', zitat: 'Die Messe-Moderation durch Sarah war genau das, was wir gesucht haben: strukturiert, sympathisch und mit der richtigen Dosierung Humor. Unsere Aussteller und Besucher waren begeistert.', istInstagram: false, reihenfolge: 5 },
    { _id: 'ref-text-andreas', _type: 'referenz', typ: 'text', name: 'Dr. Andreas K.', rolle: 'Referent, Landespolitisches Forum RLP', zitat: 'Für unsere politische Podiumsdiskussion brauchten wir jemanden, der mit Fingerspitzengefühl moderiert und alle Beteiligten fair zu Wort kommen lässt. Sarah hat das meisterhaft gemeistert.', istInstagram: false, reihenfolge: 6 },
    { _id: 'ref-text-instagram', _type: 'referenz', typ: 'text', name: 'Instagram-Feedback', rolle: 'SPD Rheinland-Pfalz Event', zitat: 'Liebe Sarah, du hast heute bei Alexander Schweitzer wirklich eine klasse Moderation gezeigt.', istInstagram: true, reihenfolge: 7 },
  ]

  await upsertList('referenz', referenzen)
}

// ─── MAIN ─────────────────────────────────────────────────────

async function main() {
  console.log('🌱  Starte Sanity-Seed ...\n')

  try {
    await seedEinstellungen()
    await seedStartseite()
    await seedImpressum()
    await seedLeistungen()
    await seedFaq()
    await seedReferenzen()

    console.log('\n✅  Seed abgeschlossen. Alle Dokumente sind in Sanity gespeichert.')
    console.log('   Studio: https://saraheid.sanity.studio/ (oder http://localhost:3000/studio)\n')
  } catch (err) {
    console.error('\n❌  Fehler beim Seed:', err.message || err)
    process.exit(1)
  }
}

main()
