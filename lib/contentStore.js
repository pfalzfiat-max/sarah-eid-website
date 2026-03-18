// Content Store - Speichert Website-Inhalte in localStorage (Demo) oder API
export const initialContent = {
  hero: {
    eyebrow: 'Professionelle Moderatorin · Bundesweit buchbar',
    title: 'Sarah Eid',
    subtitle: 'Moderatorin & Sprecherin',
    description: 'Ich moderiere Veranstaltungen, Konferenzen und Events mit Leidenschaft und Professionalität.',
    ctaButton: 'Jetzt anfragen',
    backgroundImage: '/images/sarah-f1.jpg'
  },
  leistungen: [
    {
      id: 1,
      title: 'Moderation',
      description: 'Professionelle Moderation für Events, Konferenzen und Gala-Abende'
    },
    {
      id: 2,
      title: 'Sprechen',
      description: 'Motivierende Reden und Keynotes für Ihr Publikum'
    },
    {
      id: 3,
      title: 'Beratung',
      description: 'Persönliche Beratung für Ihre Event-Planung'
    }
  ],
  ueber: {
    title: 'Über mich',
    text: 'Mit über 10 Jahren Erfahrung in der Moderations- und Sprechbranche...',
    image: '/images/portrait.jpg'
  },
  referenzen: [
    {
      id: 1,
      name: 'Max Müller',
      company: 'TechConf 2023',
      quote: 'Sarah hat unsere Konferenz zu einem großartigen Erfolg gemacht!'
    }
  ],
  kontakt: {
    email: 'mail@saraheid.de',
    phone: '+49 123 456789',
    address: 'Berlin, Deutschland'
  }
};

// Lese Content aus localStorage
export const getContent = () => {
  if (typeof window === 'undefined') return initialContent;
  
  const saved = localStorage.getItem('sarah-content');
  return saved ? JSON.parse(saved) : initialContent;
};

// Speichere Content in localStorage
export const saveContent = (content) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('sarah-content', JSON.stringify(content));
};

// Update einzelnes Feld
export const updateContent = (path, value) => {
  const content = getContent();
  const keys = path.split('.');
  let current = content;
  
  for (let i = 0; i < keys.length - 1; i++) {
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
  saveContent(content);
  
  return content;
};
