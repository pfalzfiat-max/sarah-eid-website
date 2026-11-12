import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moderatorin in der Pfalz buchen – Sarah Eid, Südpfalz',
  description:
    'Moderatorin aus der Südpfalz für Weinfeste, Firmenevents, Galas, Messen & politische Veranstaltungen in der Pfalz – von Landau bis Frankenthal. Jetzt anfragen.',
  keywords: [
    'Moderatorin Pfalz',
    'Moderator Pfalz',
    'Moderatorin Südpfalz',
    'Moderator Südpfalz',
    'Moderatorin Südliche Weinstraße',
    'Moderatorin Landau',
    'Moderatorin Neustadt an der Weinstraße',
    'Moderatorin Weinfest',
    'Eventmoderatorin Pfalz',
  ],
  alternates: {
    canonical: '/moderatorin-pfalz',
  },
  openGraph: {
    title: 'Moderatorin in der Pfalz buchen – Sarah Eid, Südpfalz',
    description:
      'Moderatorin aus der Südpfalz für Weinfeste, Firmenevents, Galas, Messen & politische Veranstaltungen in der Pfalz.',
    url: 'https://www.saraheid.de/moderatorin-pfalz',
    images: [{ url: 'https://www.saraheid.de/images/events/pfalzfest.jpeg', alt: 'Sarah Eid moderiert das Frankenthaler Pfalzfest' }],
  },
};

const formate = [
  {
    title: 'Weinfeste & Stadtfeste',
    description:
      'Als ehemalige Weinprinzessin der Südlichen Weinstraße kenne ich die Pfälzer Weinkultur von innen. Ich moderiere Weinfeste, Weinproben und Stadtfeste mit Wissen, Charme und Bühnenroutine.',
  },
  {
    title: 'Firmenevents & Jubiläen',
    description:
      'Für Unternehmen in der Pfalz und der Metropolregion Rhein-Neckar moderiere ich Jubiläen, Sommerfeste, Kundenevents und Preisverleihungen.',
  },
  {
    title: 'Politik & Podiumsdiskussionen',
    description:
      'Gesprächsrunden, Bürgerdialoge und Parteiveranstaltungen in Rheinland-Pfalz moderiere ich überparteilich, gut vorbereitet und mit klarer Gesprächsführung.',
  },
  {
    title: 'Galas, Messen & Charity',
    description:
      'Ob Benefizgala, Messeauftritt oder Kongress: Ich führe souverän durch Ihr Programm und sorge dafür, dass Ihre Gäste den Abend in Erinnerung behalten.',
  },
];

const referenzen = [
  {
    name: 'Frankenthaler Pfalzfest',
    ort: 'Frankenthal',
    text: '4 Tage Bühnenmoderation – von der Eröffnung mit dem Oberbürgermeister bis zu Interviews mit Künstlern und regionalen Persönlichkeiten.',
  },
  {
    name: 'Alexander-Schweitzer-Tour',
    ort: 'Neustadt-Mußbach',
    text: 'Politische Gesprächsrunden zur Zukunft des Weinbaus in der Pfalz.',
  },
  {
    name: 'Schnieder hoch zwei',
    ort: 'Rülzheim',
    text: 'Gesprächsrunde mit Bundesverkehrsminister Patrick Schnieder und Gordon Schnieder.',
  },
  {
    name: 'Landesparteitag Freie Wähler RLP',
    ort: 'Rheinland-Pfalz',
    text: 'Moderation des Landesparteitages der Freien Wähler FWG Rheinland-Pfalz.',
  },
];

const orte = [
  'Landau in der Pfalz',
  'Bad Bergzabern',
  'Neustadt an der Weinstraße',
  'Bad Dürkheim',
  'Speyer',
  'Germersheim',
  'Frankenthal',
  'Ludwigshafen',
  'Kaiserslautern',
  'Pirmasens',
  'Karlsruhe',
  'Mannheim',
];

const faqs = [
  {
    frage: 'Sie suchen einen Moderator oder eine Moderatorin in der Pfalz?',
    antwort:
      'Ich lebe in der Südpfalz an der Südlichen Weinstraße und moderiere Veranstaltungen in der ganzen Pfalz – von Landau und Bad Bergzabern über Neustadt und Speyer bis Frankenthal und Kaiserslautern. Auch in Karlsruhe, Mannheim und bundesweit bin ich für Sie da.',
  },
  {
    frage: 'Was kostet eine Moderatorin in der Pfalz?',
    antwort:
      'Das Honorar hängt von Format, Dauer und Vorbereitung ab. Durch meinen Wohnort in der Südpfalz fallen bei Veranstaltungen in der Region kaum Reisekosten an. Ich erstelle Ihnen gerne ein individuelles Angebot.',
  },
  {
    frage: 'Moderieren Sie auch Weinfeste und Weinevents?',
    antwort:
      'Ja. Als ehemalige Weinprinzessin der Südlichen Weinstraße und anerkannte Beraterin für Deutschen Wein bringe ich Fachwissen und Gespür für Weinevents mit – zum Beispiel beim Frankenthaler Pfalzfest, das ich vier Tage lang moderiert habe.',
  },
  {
    frage: 'Wie früh sollte ich anfragen?',
    antwort:
      'Für Wochenenden in der Weinfest- und Hochzeitssaison empfehle ich eine Anfrage mehrere Monate im Voraus. Kurzfristige Anfragen sind trotzdem willkommen – schreiben Sie mir einfach.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.frage,
    acceptedAnswer: { '@type': 'Answer', text: f.antwort },
  })),
};

export default function ModeratorinPfalzPage() {
  return (
    <div className="min-h-screen font-inter" style={{ background: '#0A0A0F', color: '#F5F0E8' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              Moderatorin · Pfalz & Südpfalz
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-4" style={{ color: '#F5F0E8' }}>
              Moderatorin in der Pfalz –<br />
              <span style={{ color: '#C9A84C' }}>Sarah Eid</span>
            </h1>
            <div className="w-12 h-px mb-6" style={{ background: '#C9A84C' }} />
            <p className="font-inter font-light text-base leading-relaxed mb-4" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Ich bin Moderatorin aus der Südpfalz und stehe auf den Bühnen der Region: beim Weinfest, beim Firmenjubiläum, bei der Podiumsdiskussion oder der Benefizgala. Ich kenne die Pfalz, ihre Menschen und ihre Art zu feiern.
            </p>
            <p className="font-inter font-light text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Als ehemalige Weinprinzessin der Südlichen Weinstraße und mit über 50 moderierten Events bringe ich Routine, Wärme und ein gutes Gespür für Ihr Publikum mit.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block font-inter text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all"
              style={{ background: '#C9A84C', color: '#0A0A0F' }}
            >
              Moderation anfragen
            </Link>
          </div>
          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
            <div
              className="absolute -top-4 -right-4 w-full h-full hidden lg:block"
              style={{ border: '1px solid rgba(201,168,76,0.4)' }}
              aria-hidden="true"
            />
            <Image
              src="/images/sarah-portrait.jpg"
              alt="Sarah Eid – Moderatorin aus der Pfalz"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 40vw"
              priority
            />
          </div>
        </section>

        {/* Formate */}
        <section className="py-20 px-6" style={{ background: '#13131A' }}>
          <div className="max-w-5xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Leistungen
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#F5F0E8' }}>
              Was ich in der Pfalz moderiere
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ background: '#C9A84C' }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formate.map((f) => (
                <div
                  key={f.title}
                  className="p-7"
                  style={{ border: '1px solid rgba(201,168,76,0.18)', background: '#0A0A0F' }}
                >
                  <h3 className="font-playfair text-lg mb-3" style={{ color: '#C9A84C' }}>
                    {f.title}
                  </h3>
                  <p className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
            Referenzen
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#F5F0E8' }}>
            Auf Pfälzer Bühnen
          </h2>
          <div className="w-12 h-px mx-auto mb-14" style={{ background: '#C9A84C' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {referenzen.map((r) => (
              <div key={r.name} className="p-7" style={{ border: '1px solid rgba(201,168,76,0.18)' }}>
                <p className="font-inter text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: '#6B6B7A' }}>
                  {r.ort}
                </p>
                <h3 className="font-playfair text-lg mb-3" style={{ color: '#C9A84C' }}>
                  {r.name}
                </h3>
                <p className="font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bild */}
        <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/events/pfalzfest.jpeg"
            alt="Sarah Eid moderiert das Frankenthaler Pfalzfest"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Region */}
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            Einsatzgebiet
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-3" style={{ color: '#F5F0E8' }}>
            Von der Südpfalz in die ganze Region
          </h2>
          <div className="w-12 h-px mx-auto mb-8" style={{ background: '#C9A84C' }} />
          <p className="font-inter font-light text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Mein Zuhause ist die Südliche Weinstraße. Von hier aus bin ich schnell bei Ihnen – in der Vorderpfalz, der Westpfalz und in den Nachbarstädten am Rhein. Für Veranstaltungen in ganz Deutschland reise ich gerne an.
          </p>
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Orte, an denen ich moderiere">
            {orte.map((o) => (
              <li
                key={o}
                className="font-inter text-xs px-4 py-2 rounded-full"
                style={{ border: '1px solid rgba(201,168,76,0.25)', color: 'rgba(245,240,232,0.7)' }}
              >
                {o}
              </li>
            ))}
          </ul>
          <p className="font-inter font-light text-sm leading-relaxed mt-10" style={{ color: 'rgba(245,240,232,0.6)' }}>
            Sie planen eine Hochzeit? Als{' '}
            <Link href="/freie-traurednerin" className="underline" style={{ color: '#C9A84C' }}>
              freie Traurednerin in der Pfalz
            </Link>{' '}
            gestalte ich auch Ihre Trauzeremonie.
          </p>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ background: '#13131A' }}>
          <div className="max-w-3xl mx-auto">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4 text-center" style={{ color: '#C9A84C' }}>
              Häufige Fragen
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-3" style={{ color: '#F5F0E8' }}>
              FAQ – Moderation in der Pfalz
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
              Ihr Event in der Pfalz verdient die richtige Stimme.
            </h2>
            <p className="font-inter font-light text-base leading-relaxed mb-8" style={{ color: 'rgba(245,240,232,0.6)' }}>
              Erzählen Sie mir von Ihrer Veranstaltung – ich melde mich mit einem individuellen Angebot.
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
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/" className="font-inter text-xs uppercase tracking-widest" style={{ color: '#6B6B7A' }}>
            Startseite
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
