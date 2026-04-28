import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freie Traurednerin Rheinland-Pfalz buchen – Sarah Eid',
  description:
    'Sarah Eid – freie Traurednerin aus Rheinland-Pfalz. Individuelle, konfessionslose Trauzeremonien bundesweit. Persönlich, warmherzig und unvergesslich. Jetzt anfragen.',
  keywords: [
    'Freie Traurednerin Rheinland-Pfalz',
    'Freie Traurednerin buchen',
    'Hochzeitsrednerin RLP',
    'Freie Trauung Südpfalz',
    'Freie Trauung Pfalz',
    'Konfessionslose Trauung',
    'Freie Traurednerin bundesweit',
    'Trauredner buchen',
    'Sarah Eid Traurednerin',
  ],
  alternates: {
    canonical: 'https://www.saraheid.de/freie-traurednerin',
  },
  openGraph: {
    title: 'Freie Traurednerin Rheinland-Pfalz buchen – Sarah Eid',
    description:
      'Individuelle, konfessionslose Trauzeremonie – persönlich, warmherzig und unvergesslich. Bundesweit buchbar.',
    url: 'https://www.saraheid.de/freie-traurednerin',
    images: [{ url: 'https://www.saraheid.de/Traurednerin.png', alt: 'Sarah Eid – Freie Traurednerin' }],
  },
};

const leistungen = [
  {
    title: 'Persönliches Kennenlerngespräch',
    description:
      'In einem ausführlichen Vorgespräch lerne ich Sie und Ihre Liebesgeschichte kennen – die Basis für eine Rede, die wirklich zu Ihnen passt.',
  },
  {
    title: 'Individuelle Zeremonie',
    description:
      'Kein Standardtext, kein Schema – ich schreibe jede Trauung von Grund auf neu und stimme sie auf das Paar, den Ort und die Atmosphäre ab.',
  },
  {
    title: 'Konfessionslos & offen',
    description:
      'Ich traue alle – unabhängig von Religion, Herkunft oder Familienmodell. Standesamtlich ergänzend oder als alleinige Zeremonie.',
  },
  {
    title: 'Bundesweit buchbar',
    description:
      'Ob Weingut in der Pfalz, Schloss in Rheinland-Pfalz oder Destinationswedding – ich reise zu Ihnen.',
  },
];

const faqs = [
  {
    frage: 'Was kostet eine freie Trauung mit Sarah Eid?',
    antwort:
      'Die Kosten variieren je nach Aufwand, Anfahrt und Umfang der Zeremonie. Ich erstelle Ihnen gerne auf Anfrage ein individuelles Angebot.',
  },
  {
    frage: 'Wie weit im Voraus soll ich buchen?',
    antwort:
      'Ich empfehle eine Buchung mindestens 6–12 Monate vor dem Hochzeitsdatum, da beliebte Termine schnell vergeben sind.',
  },
  {
    frage: 'Wie läuft die Zusammenarbeit ab?',
    antwort:
      'Nach Ihrer Anfrage führen wir ein persönliches Kennenlerngespräch. Danach schreibe ich Ihre individuelle Rede, die Sie vor dem großen Tag zur Abstimmung erhalten.',
  },
  {
    frage: 'Ist die freie Trauung rechtsgültig?',
    antwort:
      'Die freie Trauung ist eine symbolische Zeremonie. Für die rechtliche Gültigkeit ist ein vorheriger Standesamtstermin notwendig – den freien, persönlichen Teil übernehme ich.',
  },
];

export default function FreieTraurednerinPage() {
  return (
    <div className="min-h-screen font-inter" style={{ background: '#0A0A0F', color: '#F5F0E8' }}>

      {/* Header */}
      <header className="pt-8 pb-6 px-6 border-b" style={{ borderColor: '#252530' }}>
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
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-5" style={{ color: '#C9A84C' }}>
              Freie Traurednerin · Rheinland-Pfalz & bundesweit
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-4" style={{ color: '#F5F0E8' }}>
              Freie Traurednerin in Rheinland-Pfalz –<br />
              <span style={{ color: '#C9A84C' }}>Sarah Eid</span>
            </h1>
            <div className="w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
            <p className="font-inter font-light text-base leading-relaxed mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Als freie Traurednerin gestalte ich Ihre Hochzeitszeremonie individuell, persönlich und von Herzen – unabhängig von Konfession, Ort und Stil. Jede Trauung ist so einzigartig wie das Paar, das sie feiert.
            </p>
            <p className="font-inter font-light text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Mit echtem Einfühlungsvermögen, natürlicher Wärme und dem Gespür für den richtigen Moment begleite ich Sie durch eine Zeremonie, die alle Anwesenden berührt.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block font-inter text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all"
              style={{ background: '#C9A84C', color: '#0A0A0F' }}
            >
              Trauung anfragen
            </Link>
          </div>
          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
            <div
              className="absolute -top-4 -right-4 w-full h-full hidden lg:block"
              style={{ border: '1px solid rgba(201,168,76,0.4)' }}
              aria-hidden="true"
            />
            <Image
              src="/Traurednerin.png"
              alt="Sarah Eid – Freie Traurednerin Rheinland-Pfalz"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 40vw"
              priority
            />
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-20 px-6" style={{ background: '#13131A' }}>
          <div className="max-w-5xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Leistungen
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#F5F0E8' }}>
              Was Sie erwartet
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ background: '#C9A84C' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leistungen.map((l) => (
                <div
                  key={l.title}
                  className="p-7"
                  style={{ border: '1px solid rgba(201,168,76,0.18)', background: '#0A0A0F' }}
                >
                  <h3 className="font-playfair text-lg mb-3" style={{ color: '#C9A84C' }}>
                    {l.title}
                  </h3>
                  <p className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {l.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zitat */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <blockquote>
              <p className="font-cormorant font-light text-2xl md:text-3xl italic leading-relaxed" style={{ color: 'rgba(245,240,232,0.85)' }}>
                &ldquo;Ihre Geschichte verdient eine Zeremonie, die so besonders ist wie Sie selbst.&rdquo;
              </p>
              <footer className="font-inter text-[10px] uppercase tracking-[0.3em] mt-6" style={{ color: '#C9A84C' }}>
                Sarah Eid – Freie Traurednerin
              </footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ background: '#13131A' }}>
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Häufige Fragen
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#F5F0E8' }}>
              FAQ – Freie Trauung
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ background: '#C9A84C' }} />
            <dl className="space-y-4">
              {faqs.map((f) => (
                <div key={f.frage} className="p-6" style={{ border: '1px solid rgba(201,168,76,0.18)', background: '#0A0A0F' }}>
                  <dt className="font-inter font-medium text-sm mb-3" style={{ color: '#F5F0E8' }}>
                    {f.frage}
                  </dt>
                  <dd className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {f.antwort}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4" style={{ color: '#F5F0E8' }}>
              Bereit für Ihren besonderen Moment?
            </h2>
            <p className="font-inter font-light text-base leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Schreiben Sie mir – und gemeinsam machen wir Ihre Hochzeit zu einem unvergesslichen Erlebnis.
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
      <footer className="border-t py-8 px-6 text-center" style={{ borderColor: '#252530' }}>
        <div className="flex justify-center gap-8">
          <Link href="/" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Startseite
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
