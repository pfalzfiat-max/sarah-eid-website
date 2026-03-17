'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Events', href: '#events' },
  { label: 'Politik', href: '#politik' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Hauptnavigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-playfair text-xl font-semibold tracking-wide text-cream hover:text-gold transition-colors duration-300"
              aria-label="Sarah Eid – Startseite"
            >
              Sarah Eid
              <span className="block font-inter font-light text-gold tracking-[0.22em] uppercase"
                style={{ fontSize: '0.6rem' }}>
                Moderatorin & Sprecherin
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="font-inter text-xs font-medium tracking-[0.12em] uppercase text-cream/60 hover:text-gold transition-colors duration-300"
                    aria-label={`Zur Sektion ${item.label} springen`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#kontakt')}
                  className="font-inter text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: '#C9A84C',
                    color: '#0A0A0F',
                    boxShadow: '0 0 0 0 rgba(201,168,76,0)',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = '#E8C76A';
                    (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(201,168,76,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = '#C9A84C';
                    (e.target as HTMLElement).style.boxShadow = '0 0 0 0 rgba(201,168,76,0)';
                  }}
                  aria-label="Jetzt Anfrage stellen"
                >
                  Anfragen
                </button>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 text-cream"
              aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu – fullscreen overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(16px)' }}
            aria-modal="true"
            role="dialog"
            aria-label="Mobiles Navigationsmenü"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-playfair text-3xl text-cream/80 hover:text-gold transition-colors duration-300 py-3"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.07 }}
                onClick={() => handleNavClick('#kontakt')}
                className="mt-8 btn-primary rounded-full px-10"
              >
                Jetzt anfragen
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
