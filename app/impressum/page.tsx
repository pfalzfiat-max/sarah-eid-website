import Link from 'next/link';
import { Metadata } from 'next';
import { getImpressum } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Impressum | Sarah Eid – Moderatorin & Sprecherin',
  description: 'Impressum der Website von Sarah Eid, Moderatorin und Sprecherin.',
  robots: { index: false, follow: false },
};

// Hardcoded Fallback – wird ersetzt sobald Sanity-Dokument befüllt ist
const fallback = {
  name: 'Sarah Eid',
  berufsbezeichnung: 'Moderatorin & Sprecherin',
  strasse: 'Guttenbergstr. 40',
  plzOrt: '76889 Oberotterbach',
  land: 'Deutschland',
  telefon: '+49 176 32727160',
  email: 'mail@saraheid.de',
  ustIdNr: 'DE423888887',
  steuernummer: '24/036/43114',
};

export default async function ImpressumPage() {
  const sanity = await getImpressum();
  const d = { ...fallback, ...(sanity || {}) };

  return (
    <div className="min-h-screen font-inter" style={{ background: '#0A0A0F', color: '#F5F0E8' }}>
      <header className="pt-8 pb-6 px-6 border-b" style={{ borderColor: '#252530' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl tracking-wide transition-colors" style={{ color: '#C9A84C' }}>
            Sarah Eid
          </Link>
          <Link href="/" className="font-inter text-xs uppercase tracking-widest transition-colors" style={{ color: '#6B6B7A' }}>
            ← Zurück
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: '#C9A84C' }}>
          Rechtliches
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl mb-4" style={{ color: '#F5F0E8' }}>
          Impressum
        </h1>
        <div className="w-12 h-px mb-12" style={{ background: '#C9A84C' }} />

        <div className="space-y-10 font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>
          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {d.name}<br />
              {d.berufsbezeichnung}<br />
              {d.strasse}<br />
              {d.plzOrt}<br />
              {d.land}
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              Kontakt
            </h2>
            <p>
              Telefon:{' '}
              <a href={`tel:${d.telefon?.replace(/\s/g, '')}`} className="transition-colors hover:opacity-100" style={{ color: '#C9A84C' }}>
                {d.telefon}
              </a>
              <br />
              E-Mail:{' '}
              <a href={`mailto:${d.email}`} className="transition-colors hover:opacity-100" style={{ color: '#C9A84C' }}>
                {d.email}
              </a>
            </p>
          </section>

          {(d.ustIdNr || d.steuernummer) && (
            <section>
              <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p>
                {d.ustIdNr && <>USt-IdNr.: {d.ustIdNr}<br /></>}
                {d.steuernummer && <>Steuernummer: {d.steuernummer}</>}
              </p>
            </section>
          )}

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              {d.name}<br />
              {d.strasse}<br />
              {d.plzOrt}
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p className="mt-3">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>Urheberrecht</h2>
            <p>Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t flex gap-6" style={{ borderColor: '#252530' }}>
          <Link href="/" className="font-inter text-xs uppercase tracking-widest transition-colors" style={{ color: '#6B6B7A' }}>
            ← Startseite
          </Link>
          <Link href="/datenschutz" className="font-inter text-xs uppercase tracking-widest transition-colors" style={{ color: '#6B6B7A' }}>
            Datenschutz →
          </Link>
        </div>
      </main>
    </div>
  );
}
