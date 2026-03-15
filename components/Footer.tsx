'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Politik', href: '#politik' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Kontakt', href: '#kontakt' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_sarah_eid/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/coach.socialmedia/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarah-eid-3763b21a4/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-cream"
      style={{ background: '#050508' }}
      role="contentinfo"
      aria-label="Footer – Sarah Eid"
    >
      {/* Gold top border */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(232,199,106,0.7) 50%, rgba(201,168,76,0.5) 70%, transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-playfair text-xl font-semibold text-gold mb-1">
              Sarah Eid
            </h2>
            <p className="font-inter text-[9px] tracking-[0.25em] uppercase text-muted mb-6">
              Moderatorin & Sprecherin
            </p>
            <p className="font-inter font-light text-sm text-cream/40 leading-relaxed max-w-xs">
              Professionelle Event-Moderation und Sprecherin aus
              Rheinland-Pfalz – bundesweit buchbar.
            </p>
            <div className="flex gap-3 mt-6" aria-label="Social Media Profile">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} – Sarah Eid`}
                  className="w-8 h-8 flex items-center justify-center text-cream/40 hover:text-gold transition-colors duration-300"
                  style={{ border: '1px solid #252530' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#252530';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-muted mb-5">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-cream/40 hover:text-gold transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-muted mb-5">
              Kontakt
            </p>
            <address className="not-italic space-y-3">
              <p>
                <a
                  href="tel:+4917632727160"
                  className="font-inter text-sm text-cream/40 hover:text-gold transition-colors duration-200"
                  aria-label="Telefon: +49 176 32727160"
                >
                  +49 176 32727160
                </a>
              </p>
              <p>
                <a
                  href="mailto:mail@saraheid.de"
                  className="font-inter text-sm text-cream/40 hover:text-gold transition-colors duration-200"
                  aria-label="E-Mail: mail@saraheid.de"
                >
                  mail@saraheid.de
                </a>
              </p>
              <p className="font-inter text-sm text-cream/25 mt-4">
                Rheinland-Pfalz · Bundesweit
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/20">
            © {currentYear} Sarah Eid · Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="font-inter text-xs text-cream/20 hover:text-gold/60 transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-inter text-xs text-cream/20 hover:text-gold/60 transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
