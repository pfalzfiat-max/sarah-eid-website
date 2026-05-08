import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social-Media-Marketing – Sarah Eid',
  description:
    'Sarah Eid – Social-Media-Marketing & Coaching. Strategie, Content und Umsetzung für Unternehmen und Persönlichkeiten. IHK-zertifiziert, seit 2016.',
  alternates: {
    canonical: 'https://www.saraheid.de/social-media-marketing',
  },
};

const leistungen = [
  {
    title: 'Social-Media-Strategie',
    description: 'Inhalte folgen.',
  },
  {
    title: 'Content Creation',
    description: 'Inhalte folgen.',
  },
  {
    title: 'Coaching & Workshops',
    description: 'Inhalte folgen.',
  },
  {
    title: 'Kamera-Coaching',
    description: 'Inhalte folgen.',
  },
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen font-inter" style={{ background: '#F5F0E8', color: '#0A0A0F' }}>

      {/* Header */}
      <header className="pt-8 pb-6 px-6 border-b" style={{ borderColor: '#D9D0C0' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl tracking-wide" style={{ color: '#C9A84C' }}>
            Sarah Eid
          </Link>
          <Link href="/" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            ← Zurück
          </Link>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: '#C9A84C' }}>
            Since 2016
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl leading-tight mb-4" style={{ color: '#0A0A0F' }}>
            Social-Media-Marketing
          </h1>
          <div className="w-14 h-px mx-auto mb-6" style={{ background: '#C9A84C' }} />
          <p className="font-inter font-light text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(10,10,15,0.6)' }}>
            Inhalte folgen.
          </p>
          <Link
            href="/#kontakt"
            className="inline-block font-inter text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all"
            style={{ background: '#C9A84C', color: '#0A0A0F' }}
          >
            Anfragen
          </Link>
        </section>

        {/* Leistungen */}
        <section className="py-20 px-6" style={{ background: '#EDE8DC' }}>
          <div className="max-w-5xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Leistungen
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#0A0A0F' }}>
              Was ich für Sie tue
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ background: '#C9A84C' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leistungen.map((l) => (
                <div
                  key={l.title}
                  className="p-7"
                  style={{ border: '1px solid rgba(201,168,76,0.3)', background: '#F5F0E8' }}
                >
                  <h3 className="font-playfair text-lg mb-3" style={{ color: '#C9A84C' }}>
                    {l.title}
                  </h3>
                  <p className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(10,10,15,0.5)' }}>
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Über */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: '#C9A84C' }}>
              Über mich
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0F' }}>
              Inhalte folgen.
            </h2>
            <div className="w-12 h-px mx-auto mb-8" style={{ background: '#C9A84C' }} />
            <p className="font-inter font-light text-base leading-relaxed" style={{ color: 'rgba(10,10,15,0.6)' }}>
              Inhalte folgen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ background: '#EDE8DC' }}>
          <div className="max-w-xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0F' }}>
              Bereit für mehr Sichtbarkeit?
            </h2>
            <p className="font-inter font-light text-base leading-relaxed mb-8" style={{ color: 'rgba(10,10,15,0.6)' }}>
              Inhalte folgen.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block font-inter text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all"
              style={{ background: '#C9A84C', color: '#0A0A0F' }}
            >
              Jetzt anfragen
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-6 text-center" style={{ borderColor: '#D9D0C0' }}>
        <div className="flex justify-center gap-8">
          <Link href="/" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Moderatorin
          </Link>
          <Link href="/freie-traurednerin" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Traurednerin
          </Link>
          <Link href="/impressum" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Impressum
          </Link>
          <Link href="/datenschutz" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Datenschutz
          </Link>
        </div>
      </footer>

    </div>
  );
}
