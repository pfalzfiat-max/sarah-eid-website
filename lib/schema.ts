export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sarah Eid',
  jobTitle: 'Moderatorin und Sprecherin',
  description:
    'Sarah Eid ist eine professionelle Moderatorin und Sprecherin aus Rheinland-Pfalz. Sie moderiert Firmenevents, politische Veranstaltungen, Messen, Galas und Parteitage. Als ehemalige Weinprinzessin der Südlichen Weinstraße 2023/24 und IHK-zertifizierte Social-Media-Expertin ist sie bundesweit buchbar.',
  url: 'https://www.saraheid.de',
  telephone: '+49-176-32727160',
  email: 'mail@saraheid.de',
  image: 'https://www.saraheid.de/images/sarah-eid.jpg',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Rheinland-Pfalz',
    addressCountry: 'DE',
  },
  award: 'Weinprinzessin Südliche Weinstraße 2023/24',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'IHK-Zertifikat Social Media',
  },
  performerIn: [
    {
      '@type': 'Event',
      name: 'Landesparteitag Freie Wähler RLP',
      description: 'Moderation des Landesparteitages der Freien Wähler FWG Rheinland-Pfalz',
      location: { '@type': 'Place', addressRegion: 'Rheinland-Pfalz', addressCountry: 'DE' },
    },
    {
      '@type': 'Event',
      name: 'Schnieder hoch zwei',
      description:
        'Politische Gesprächsrunde mit Bundesverkehrsminister Patrick Schnieder und CDU-Spitzenkandidat Gordon Schnieder in Rülzheim',
      startDate: '2025-11-17',
      location: { '@type': 'Place', name: 'Dampfnudel', addressLocality: 'Rülzheim', addressCountry: 'DE' },
    },
    {
      '@type': 'Event',
      name: 'Alexander-Schweitzer-Tour',
      description: 'Moderation der politischen Gesprächsrunden zur Zukunft des Weinbaus in der Pfalz',
      location: { '@type': 'Place', addressLocality: 'Neustadt-Mußbach', addressCountry: 'DE' },
    },
    {
      '@type': 'Event',
      name: 'Frankenthaler Pfalzfest',
      description: '4 Tage Bühnenmoderation beim Frankenthaler Pfalzfest',
      location: { '@type': 'Place', addressLocality: 'Frankenthal', addressCountry: 'DE' },
    },
  ],
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
    'Landesparteitag',
    'Bundesminister Moderation',
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

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine professionelle Moderatorin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für eine professionelle Moderatorin variieren je nach Veranstaltungsformat, Dauer und Reiseaufwand. Sarah Eid erstellt auf Anfrage ein individuelles Angebot. Anfragen können über das Kontaktformular auf saraheid.de gestellt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Events moderiert Sarah Eid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sarah Eid moderiert Firmenevents, Jubiläen, Messen, Kongresse, Galas, politische Podiumsdiskussionen, Parteitage, Wahlkampfveranstaltungen, Charity-Events, Modenschauen und Sportevents. Sie ist bundesweit buchbar und hat u.a. politische Großveranstaltungen in Rheinland-Pfalz sowie Parteitage moderiert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie kann ich Sarah Eid als Moderatorin buchen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Buchungsanfrage kann über das Kontaktformular auf saraheid.de oder per E-Mail an mail@saraheid.de gestellt werden. Sarah Eid ist telefonisch unter +49-176-32727160 erreichbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welchen Bundesländern ist Sarah Eid als Moderatorin buchbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sarah Eid ist bundesweit buchbar. Ihr Schwerpunkt liegt in Rheinland-Pfalz, sie ist jedoch für Veranstaltungen in ganz Deutschland verfügbar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hat Sarah Eid Erfahrung mit politischen Veranstaltungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Sarah Eid hat nachweislich politische Großveranstaltungen moderiert, darunter einen Landesparteitag der Freien Wähler RLP, Gesprächsrunden mit Bundesverkehrsminister Patrick Schnieder sowie Veranstaltungen im Kontext der rheinland-pfälzischen Landtagswahl 2026. Politische Anfragen werden nach sorgfältiger Prüfung und persönlichem Vorgespräch angenommen.',
      },
    },
  ],
};
