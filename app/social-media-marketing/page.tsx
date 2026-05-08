import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social-Media-Marketing – Sarah Eid',
  description:
    'Sarah Eid – Social-Media-Marketing seit 2016. Strategie, Content-Creation, Coachings, Workshops & Social Recruiting. IHK-zertifiziert, bundesweit buchbar.',
  alternates: {
    canonical: 'https://www.saraheid.de/social-media-marketing',
  },
};

const leistungen = [
  {
    title: 'Social-Media-Strategie',
    description:
      'Modernes Social-Media-Marketing mit klarer Strategie – damit Ihr Unternehmen als Experte wahrgenommen wird und täglich mit Kunden und Interessenten interagiert.',
  },
  {
    title: 'Content-Creation',
    description:
      'Foto-, Video-, Reel- und Texterstellung für Ihre Social-Media-Kanäle – professionell, authentisch und auf Ihre Zielgruppe abgestimmt.',
  },
  {
    title: 'Coachings & Workshops',
    description:
      'Ich coache Unternehmen und Einzelpersonen im Umgang mit Social Media – in Workshops, Webinaren und Einzelcoachings, auch IHK-zertifiziert.',
  },
  {
    title: 'Social Recruiting',
    description:
      'Top-Talente für Ihr Unternehmen gewinnen: schnelle Bewerbung innerhalb von 2 Minuten, ohne Anschreiben und ohne Lebenslauf – über gezielte Recruiting-Kampagnen.',
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
            Seit 2016 · IHK-zertifiziert
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl leading-tight mb-4" style={{ color: '#0A0A0F' }}>
            Social-Media-Marketing
          </h1>
          <div className="w-14 h-px mx-auto mb-6" style={{ background: '#C9A84C' }} />
          <p className="font-inter font-light text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: 'rgba(10,10,15,0.6)' }}>
            Als Digital Native weiß ich genau, wie die sozialen Netzwerke ticken und welche Inhalte bei Ihren Interessenten ankommen.
          </p>
          <p className="font-inter font-light text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(10,10,15,0.6)' }}>
            Ich arbeite seit über 8 Jahren erfolgreich im Bereich Social Media für verschiedene Unternehmen – habe Kanäle aufgebaut, betreut und ausgebaut.
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
                  <p className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(10,10,15,0.6)' }}>
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Über mich */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Über mich
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-center" style={{ color: '#0A0A0F' }}>
              Gemeinsam auf Erfolgskurs
            </h2>
            <div className="w-12 h-px mx-auto mb-8" style={{ background: '#C9A84C' }} />
            <p className="font-inter font-light text-base leading-relaxed mb-6 text-center" style={{ color: 'rgba(10,10,15,0.6)' }}>
              Wenn Sie im Bereich Social Media Ihr Unternehmen als Experte etablieren und die Chance nutzen möchten, täglich mit Ihren Kunden und Interessenten zu interagieren – dann unterstütze ich Sie gerne auf diesem spannenden Weg.
            </p>
            <ul className="space-y-3 max-w-xl mx-auto">
              {[
                'Modernes Social-Media-Marketing mit Strategie',
                'Coachings | Workshops | Webinare',
                'Content-Creation: Foto, Video, Reels & Texte',
                'Social-Recruiting: Talente gewinnen ohne Lebenslauf',
              ].map((punkt) => (
                <li key={punkt} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 font-bold text-sm" style={{ color: '#C9A84C' }}>✓</span>
                  <span className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(10,10,15,0.7)' }}>
                    {punkt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center" style={{ background: '#EDE8DC' }}>
          <div className="max-w-xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0F' }}>
              Bereit für mehr Sichtbarkeit?
            </h2>
            <p className="font-inter font-light text-base leading-relaxed mb-8" style={{ color: 'rgba(10,10,15,0.6)' }}>
              Ich freue mich auf Ihre Anfrage – und darauf, Ihr Unternehmen in den sozialen Medien nach vorne zu bringen.
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
        <div className="flex justify-center gap-8 flex-wrap">
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
