export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sarah Eid',
  jobTitle: 'Moderatorin und Sprecherin',
  url: 'https://www.saraheid.de',
  telephone: '+49-176-32727160',
  email: 'mail@saraheid.de',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Rheinland-Pfalz',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://www.instagram.com/_sarah_eid/',
    'https://www.facebook.com/coach.socialmedia/',
    'https://www.linkedin.com/in/sarah-eid-3763b21a4/',
  ],
  knowsAbout: [
    'Moderation',
    'Event-Moderation',
    'Firmenevent',
    'Sprecher',
    'Imagefilm',
    'Messe-Moderation',
    'Politikmoderation',
    'Podiumsdiskussion',
    'Wahlkampfveranstaltung',
    'Parteitagsmoderation',
    'Galaveranstaltung',
    'Charity-Event',
    'Moderatorin buchen',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sarah Eid – Moderatorin & Sprecherin',
  description:
    'Professionelle Moderatorin für Firmenevents, Messen, Galas, politische Veranstaltungen und Modenschauen. Sprecherin für Imagefilme und Werbespots. Bundesweit buchbar.',
  url: 'https://www.saraheid.de',
  telephone: '+49-176-32727160',
  email: 'mail@saraheid.de',
  areaServed: 'DE',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Rheinland-Pfalz',
    addressCountry: 'DE',
  },
  priceRange: 'Auf Anfrage',
};
