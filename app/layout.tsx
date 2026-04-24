import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { personSchema, localBusinessSchema, faqSchema, webSiteSchema, serviceSchema } from '@/lib/schema';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Moderatorin & Freie Traurednerin buchen – Sarah Eid, bundesweit',
  description:
    'Sarah Eid – Moderatorin & freie Traurednerin aus Rheinland-Pfalz. Firmenevents, politische Veranstaltungen, Messen & individuelle Hochzeitszeremonien. Bundesweit buchbar.',
  keywords: [
    'Moderatorin buchen',
    'Event Moderatorin Deutschland',
    'Messe Moderatorin',
    'Sprecherin Imagefilm',
    'Firmenevents moderieren',
    'Moderatorin Rheinland-Pfalz',
    'Moderatorin Südpfalz',
    'Politikmoderation',
    'Podiumsdiskussion Moderatorin',
    'Wahlkampfveranstaltung Moderatorin',
    'Parteitagsmoderation',
    'Freie Traurednerin',
    'Freie Traurednerin Rheinland-Pfalz',
    'Freie Trauung buchen',
    'Hochzeitsrednerin',
    'Sarah Eid',
  ],
  authors: [{ name: 'Sarah Eid' }],
  creator: 'Sarah Eid',
  publisher: 'Sarah Eid',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.saraheid.de',
    title: 'Moderatorin & Freie Traurednerin buchen – Sarah Eid, bundesweit',
    description:
      'Sarah Eid – Moderatorin & freie Traurednerin aus Rheinland-Pfalz. Firmenevents, politische Veranstaltungen & individuelle Hochzeitszeremonien. Bundesweit buchbar.',
    siteName: 'Sarah Eid – Moderatorin & Freie Traurednerin',
    images: [
      {
        url: 'https://www.saraheid.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarah Eid – Moderatorin & Sprecherin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Eid | Moderatorin & Sprecherin',
    description:
      'Professionelle Moderatorin für Firmenevents, Messen, Galas & politische Veranstaltungen. Bundesweit buchbar.',
    images: ['https://www.saraheid.de/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.saraheid.de',
  },
  verification: {
    google: 'TNA2XUmUtywlFhWO7vlqPM5jBDMdTsmBf5VYJWYkOzA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        {serviceSchema.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(s),
            }}
          />
        ))}
        <link rel="canonical" href="https://www.saraheid.de" />
      </head>
      <body>{children}</body>
    </html>
  );
}
