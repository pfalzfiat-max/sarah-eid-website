import { events as content } from '@/lib/content';
import { client } from '@/sanity/lib/client';
import EventCard from './EventCard';
import EventsCta from './EventsCta';

interface SanityEvent {
  _id: string;
  name: string;
  beschreibung: string;
  kategorie: string;
  bildUrl: string | null;
  reihenfolge: number;
}

async function getEvents(): Promise<SanityEvent[]> {
  try {
    return await client.fetch(
      `*[_type == "event"] | order(reihenfolge asc) {
        _id,
        name,
        beschreibung,
        kategorie,
        "bildUrl": bild.asset->url,
        reihenfolge
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

export default async function Events() {
  const sanityEvents = await getEvents();

  const karten = sanityEvents.length > 0
    ? sanityEvents.map((e) => ({
        name: e.name,
        description: e.beschreibung,
        kategorie: e.kategorie,
        image: e.bildUrl,
      }))
    : content.karten.map((e) => ({
        name: e.name,
        description: e.description,
        kategorie: e.kategorie,
        image: e.image,
      }));

  return (
    <section
      id="events"
      className="section-padding"
      style={{ background: '#13131A' }}
      aria-label="Ausgewählte Events – Sarah Eid"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5">
            {content.label}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-4">
            {content.heading}
          </h2>
          <div className="gold-divider-center" />
          <p className="font-inter font-light text-muted max-w-xl mx-auto">
            {content.beschreibung}
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Event-Portfolio"
        >
          {karten.map((event, i) => (
            <EventCard
              key={event.name}
              name={event.name}
              description={event.description}
              kategorie={event.kategorie}
              image={event.image}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <EventsCta label={content.ctaButton} />
      </div>
    </section>
  );
}
