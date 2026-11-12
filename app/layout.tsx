import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { personSchema, localBusinessSchema, webSiteSchema } from '@/lib/schema';

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
  metadataBase: new URL('https://www.saraheid.de'),
  title: 'Moderatorin & freie Traurednerin – Pfalz & bundesweit | Sarah Eid',
  description:
    'Sarah Eid – Moderatorin & freie Traurednerin aus der Pfalz. Firmenevents, Messen, Galas, Politik & Hochzeiten – in der Pfalz und bundesweit buchbar.',
  keywords: [
    'Moderatorin Pfalz',
    'Moderator Pfalz',
    'Moderatorin Südpfalz',
    'Moderatorin Südliche Weinstraße',
    'Moderatorin Landau',
    'Moderatorin buchen',
    'Event Moderatorin Deutschland',
    'Messe Moderatorin',
    'Sprecherin Imagefilm',
    'Firmenevents moderieren',
    'Moderatorin Rheinland-Pfalz',
    'Politikmoderation',
    'Podiumsdiskussion Moderatorin',
    'Wahlkampfveranstaltung Moderatorin',
    'Parteitagsmoderation',
    'Freie Traurednerin',
    'Freie Traurednerin Rheinland-Pfalz',
    'Traurednerin Pfalz',
    'Trauredner Pfalz',
    'Trauredner Südpfalz',
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
    title: 'Moderatorin & freie Traurednerin – Pfalz & bundesweit | Sarah Eid',
    description:
      'Sarah Eid – Moderatorin & freie Traurednerin aus der Pfalz. Firmenevents, Messen, Galas, Politik & Hochzeiten – bundesweit buchbar.',
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
    title: 'Moderatorin & freie Traurednerin – Pfalz & bundesweit | Sarah Eid',
    description:
      'Moderatorin aus der Pfalz für Firmenevents, Messen, Galas & politische Veranstaltungen. Bundesweit buchbar.',
    images: ['https://www.saraheid.de/og-image.jpg'],
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E7VVRZQY27" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E7VVRZQY27');`,
          }}
        />
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
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
