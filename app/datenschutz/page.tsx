import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sarah Eid – Moderatorin & Sprecherin',
  description: 'Datenschutzerklärung der Website von Sarah Eid, Moderatorin und Sprecherin.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen font-inter" style={{ background: '#0A0A0F', color: '#F5F0E8' }}>
      {/* Header */}
      <header className="pt-8 pb-6 px-6 border-b" style={{ borderColor: '#252530' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-playfair text-xl tracking-wide transition-colors"
            style={{ color: '#C9A84C' }}
          >
            Sarah Eid
          </Link>
          <Link
            href="/"
            className="font-inter text-xs uppercase tracking-widest transition-colors"
            style={{ color: '#6B6B7A' }}
          >
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
          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
              unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              2. Verantwortliche Stelle (Art. 4 Nr. 7 DSGVO)
            </h2>
            <p>
              Sarah Eid<br />
              Moderatorin &amp; Sprecherin<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort], Deutschland<br />
              <br />
              Telefon:{' '}
              <a href="tel:+4917632727160" style={{ color: '#C9A84C' }}>+49 176 32727160</a><br />
              E-Mail:{' '}
              <a href="mailto:mail@saraheid.de" style={{ color: '#C9A84C' }}>mail@saraheid.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-inter font-medium text-sm mb-2" style={{ color: 'rgba(245,240,232,0.85)' }}>
              Server-Log-Dateien
            </h3>
            <p className="mb-5">
              Der Provider dieser Seiten erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-inter font-medium text-sm mb-2" style={{ color: 'rgba(245,240,232,0.85)' }}>
              Kontaktformular
            </h3>
            <p className="mb-5">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
              Das Formular wird über den Dienst Formspree (Formspree, Inc., USA) verarbeitet.
              Formspree ist unter dem EU-U.S. Data Privacy Framework zertifiziert.
              Weitere Informationen: <span style={{ color: '#C9A84C' }}>formspree.io/legal/privacy-policy</span>.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
            </p>

            <h3 className="font-inter font-medium text-sm mb-2" style={{ color: 'rgba(245,240,232,0.85)' }}>
              Cookies
            </h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Dienste von Drittanbietern.
              Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb
              der Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              4. Hosting (Vercel)
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
              CA 94104, USA gehostet. Vercel ist unter dem EU-U.S. Data Privacy Framework
              zertifiziert. Beim Abruf der Website werden durch Vercel Server-Log-Dateien
              erfasst. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Es wurde ein
              Auftragsverarbeitungsvertrag (DPA) nach Art. 28 DSGVO geschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              5. Ihre Rechte (Art. 15–22 DSGVO)
            </h2>
            <p>
              Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen
              Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung
              Ihrer Daten (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung
              (Art. 21 DSGVO).
            </p>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:mail@saraheid.de" style={{ color: '#C9A84C' }}>mail@saraheid.de</a>.
              Außerdem haben Sie das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde
              in Rheinland-Pfalz (Der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Rheinland-Pfalz) zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-lg mb-3" style={{ color: '#F5F0E8' }}>
              6. Widerrufsrecht
            </h2>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberührt.
            </p>
          </section>

          <p className="text-xs italic" style={{ color: '#6B6B7A' }}>
            Stand: März 2026 – Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t flex gap-6" style={{ borderColor: '#252530' }}>
          <Link
            href="/"
            className="font-inter text-xs uppercase tracking-widest transition-colors"
            style={{ color: '#6B6B7A' }}
          >
            ← Startseite
          </Link>
          <Link
            href="/impressum"
            className="font-inter text-xs uppercase tracking-widest transition-colors"
            style={{ color: '#6B6B7A' }}
          >
            Impressum →
          </Link>
        </div>
      </main>
    </div>
  );
}
