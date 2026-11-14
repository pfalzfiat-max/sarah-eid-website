const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Pfalz' },
  { '@type': 'AdministrativeArea', name: 'Südpfalz' },
  { '@type': 'AdministrativeArea', name: 'Südliche Weinstraße' },
  { '@type': 'City', name: 'Landau in der Pfalz' },
  { '@type': 'City', name: 'Neustadt an der Weinstraße' },
  { '@type': 'City', name: 'Speyer' },
  { '@type': 'City', name: 'Karlsruhe' },
  { '@type': 'AdministrativeArea', name: 'Rheinland-Pfalz' },
  { '@type': 'Country', name: 'Deutschland' },
];

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sarah Eid',
  jobTitle: ['Moderatorin', 'Freie Traurednerin', 'Sprecherin'],
  homeLocation: { '@type': 'Place', name: 'Südpfalz, Südliche Weinstraße' },
  description:
    'Sarah Eid ist eine professionelle Moderatorin, freie Traurednerin und Sprecherin aus der Südpfalz (Rheinland-Pfalz). Sie moderiert Firmenevents, politische Veranstaltungen, Messen, Galas und Parteitage. Als ehemalige Weinprinzessin der Südlichen Weinstraße 2023/24 und IHK-zertifizierte Social-Media-Expertin ist sie bundesweit buchbar.',
  url: 'https://www.saraheid.de',
  telephone: '+49-176-32727160',
  email: 'mail@saraheid.de',
  image: 'https://www.saraheid.de/images/sarah-portrait.jpg',
  address: {
    '@type': 'PostalAddress',
    postalCode: '76889',
    addressLocality: 'Oberotterbach',
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
    // Google verlangt startDate für Events – Einträge ohne Datum werden nicht ausgegeben
  ].filter((e) => 'startDate' in e),
  sameAs: [
    'https://www.instagram.com/_sarah_eid/',
    'https://www.facebook.com/coach.socialmedia/',
    'https://www.linkedin.com/in/sarah-eid-3763b21a4/',
  ],
  knowsAbout: [
    'Moderation',
    'Moderation in der Pfalz',
    'Freie Trauung',
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
  '@type': 'ProfessionalService',
  '@id': 'https://www.saraheid.de/#business',
  name: 'Sarah Eid – Moderatorin & Freie Traurednerin',
  description:
    'Moderatorin und freie Traurednerin aus der Südpfalz für Firmenevents, Messen, Galas, Weinfeste, politische Veranstaltungen und Hochzeiten in der Pfalz und bundesweit. Sprecherin für Imagefilme und Werbespots.',
  url: 'https://www.saraheid.de',
  image: 'https://www.saraheid.de/images/sarah-portrait.jpg',
  telephone: '+49-176-32727160',
  email: 'mail@saraheid.de',
  areaServed: areaServed,
  address: {
    '@type': 'PostalAddress',
    postalCode: '76889',
    addressLocality: 'Oberotterbach',
    addressRegion: 'Rheinland-Pfalz',
    addressCountry: 'DE',
  },
  priceRange: 'Auf Anfrage',
  sameAs: [
    'https://www.instagram.com/_sarah_eid/',
    'https://www.facebook.com/coach.socialmedia/',
    'https://www.linkedin.com/in/sarah-eid-3763b21a4/',
  ],
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sarah Eid – Moderatorin & Sprecherin',
  url: 'https://www.saraheid.de',
  description:
    'Offizielle Website von Sarah Eid – professionelle Moderatorin und freie Traurednerin aus Rheinland-Pfalz, bundesweit buchbar.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.saraheid.de/#kontakt',
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Moderation – Firmenevents & Live-Events',
    description:
      'Professionelle Event-Moderation für Firmenevents, Messen, Kongresse, Galas und Sportevents. Bundesweit buchbar.',
    provider: { '@type': 'Person', name: 'Sarah Eid', url: 'https://www.saraheid.de' },
    areaServed: areaServed,
    serviceType: 'Eventmoderation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Politikmoderation',
    description:
      'Moderation von Podiumsdiskussionen, Parteitagen und politischen Bürgerevents in Rheinland-Pfalz und bundesweit.',
    provider: { '@type': 'Person', name: 'Sarah Eid', url: 'https://www.saraheid.de' },
    areaServed: areaServed,
    serviceType: 'Politikmoderation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Freie Traurednerin',
    description:
      'Individuelle freie Trauzeremonie – konfessionslos, persönlich und von Herzen. Für den schönsten Tag im Leben. Bundesweit buchbar.',
    provider: { '@type': 'Person', name: 'Sarah Eid', url: 'https://www.saraheid.de' },
    areaServed: areaServed,
    serviceType: 'Freie Trauung',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sprecherin – Imagefilm & Werbung',
    description:
      'Professionelle Sprecherin für Imagefilme, Erklärvideos, Radio-Spots und TV-Werbung.',
    provider: { '@type': 'Person', name: 'Sarah Eid', url: 'https://www.saraheid.de' },
    areaServed: areaServed,
    serviceType: 'Voice-Over & Sprecherin',
  },
];

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
