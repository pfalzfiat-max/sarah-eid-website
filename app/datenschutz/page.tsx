import Link from 'next/link';
import { Metadata } from 'next';
import { getDatenschutz, getImpressum } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sarah Eid – Moderatorin & Sprecherin',
  description: 'Datenschutzerklärung der Website von Sarah Eid, Moderatorin und Sprecherin.',
  robots: { index: false, follow: false },
};

export default async function DatenschutzPage() {
  const [datenschutz, impressum] = await Promise.all([getDatenschutz(), getImpressum()]);
  const email = impressum?.email || 'mail@saraheid.de';
  const telefon = impressum?.telefon || '+49 176 32727160';
  const adresse = impressum ? `${impressum.name}, ${impressum.strasse}, ${impressum.plzOrt}` : 'Sarah Eid, Guttenbergstr. 40, 76889 Oberotterbach';

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
          Datenschutzerklärung
        </h1>
        <div className="w-12 h-px mb-12" style={{ background: '#C9A84C' }} />

        <div className="space-y-10 font-inter font-light text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.6)' }}>

          {/* Wenn Sanity-Inhalt vorhanden → ausgeben */}
          {datenschutz?.inhalt ? (
            <PortableText
              value={datenschutz.inhalt}
              components={{
                block: {
                  normal: ({ children }) => <p className="mb-4">{children}</p>,
                  h2: ({ children }) => (
                    <h2 className="font-playfair text-lg mb-3 mt-8" style={{ color: '#F5F0E8' }}>{children}</h2>
                  ),
                },
                marks: {
                  strong: ({ children }) => <strong style={{ color: 'rgba(245,240,232,0.85)' }}>{children}</strong>,
                },
              }}
            />
          ) : (
            /* Fallback: vollständiger hardcodierter Text */
            <>
              <section>
                <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>1. Datenschutz auf einen Blick</h2>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </section>
              <section>
                <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>2. Verantwortliche Stelle (Art. 4 Nr. 7 DSGVO)</h2>
                <p>
                  {adresse}<br /><br />
                  Telefon: <a href={`tel:${telefon.replace(/\s/g, '')}`} style={{ color: '#C9A84C' }}>{telefon}</a><br />
                  E-Mail: <a href={`mailto:${email}`} style={{ color: '#C9A84C' }}>{email}</a>
                </p>
              </section>
              <section>
                <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>3. Datenerfassung auf dieser Website</h2>
                <h3 className="font-inter font-medium text-sm mb-2" style={{ color: 'rgba(245,240,232,0.85)' }}>Server-Log-Dateien</h3>
                <p className="mb-5">Der Provider dieser Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien. Dies sind: Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit und IP-Adresse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                <h3 className="font-inter font-medium text-sm mb-2" style={{ color: 'rgba(245,240,232,0.85)' }}>Cookies</h3>
                <p>Diese Website verwendet keine Tracking-Cookies oder Analyse-Dienste von Drittanbietern.</p>
              </section>
              <section>
                <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>4. Hosting (Vercel)</h2>
                <p>Diese Website wird bei Vercel Inc., San Francisco, CA, USA gehostet. Vercel ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
              </section>
              <section>
                <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>5. Ihre Rechte (Art. 15–22 DSGVO)</h2>
                <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zur Ausübung Ihrer Rechte wenden Sie sich an: <a href={`mailto:${email}`} style={{ color: '#C9A84C' }}>{email}</a>.</p>
              </section>
              <p className="text-xs italic" style={{ color: '#6B6B7A' }}>Stand: März 2026</p>
            </>
          )}
        </div>

        <div className="mt-16 pt-8 border-t flex gap-6" style={{ borderColor: '#252530' }}>
          <Link href="/" className="font-inter text-xs uppercase tracking-widest transition-colors" style={{ color: '#6B6B7A' }}>← Startseite</Link>
          <Link href="/impressum" className="font-inter text-xs uppercase tracking-widest transition-colors" style={{ color: '#6B6B7A' }}>Impressum →</Link>
        </div>
      </main>
    </div>
  );
}
