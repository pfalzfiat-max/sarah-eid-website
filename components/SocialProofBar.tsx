'use client';

const logos = [
  'Weinmesse RLP',
  'IHK Südpfalz',
  'SPD Rheinland-Pfalz',
  'Landesmesse Stuttgart',
  'Gala Event GmbH',
  'Fashion Week Mannheim',
  'Landtag RLP',
  'Benefizgala Pfalz',
];

// Duplicate for seamless marquee loop
const allLogos = [...logos, ...logos];

export default function SocialProofBar() {
  return (
    <section
      className="relative border-y overflow-hidden"
      style={{ background: '#13131A', borderColor: 'rgba(201,168,76,0.2)' }}
      aria-label="Vertraut von Kunden und Veranstaltungen"
    >
      {/* Gold top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Left label */}
          <div className="flex-shrink-0">
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-muted whitespace-nowrap">
              Vertraut von
            </p>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-8 bg-border flex-shrink-0 hidden lg:block" aria-hidden="true" />

          {/* Marquee */}
          <div className="flex-1 overflow-hidden relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
              style={{ background: 'linear-gradient(to right, #13131A, transparent)' }}
              aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
              style={{ background: 'linear-gradient(to left, #13131A, transparent)' }}
              aria-hidden="true" />

            <div className="flex items-center animate-marquee gap-6 whitespace-nowrap">
              {allLogos.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="flex items-center gap-6 select-none"
                  aria-hidden={i >= logos.length}
                >
                  <span
                    className="font-inter text-xs uppercase tracking-widest"
                    style={{ color: 'rgba(245,240,232,0.3)' }}
                  >
                    {name}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'rgba(201,168,76,0.4)' }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 flex-shrink-0">
            {[
              { value: '50+', label: 'Events' },
              { value: '10+', label: 'Jahre' },
              { value: 'DE', label: 'Bundesweit' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && (
                  <div className="w-px h-8 bg-border" aria-hidden="true" />
                )}
                <div className="text-center">
                  <p className="font-playfair font-bold text-gold text-lg leading-none">{s.value}</p>
                  <p className="font-inter text-[9px] text-muted uppercase tracking-[0.15em] mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  );
}
