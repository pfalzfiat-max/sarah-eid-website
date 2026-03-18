'use client';

import { useState, useEffect } from 'react';
import { getContent, updateContent, saveContent } from '@/lib/contentStore';

interface ContentType {
  hero: { eyebrow: string; title: string; subtitle: string; description: string; ctaButton: string; backgroundImage: string };
  leistungen: Array<{ id: number; title: string; description: string }>;
  ueber: { title: string; text: string; image: string };
  referenzen: Array<{ id: number; name: string; company: string; quote: string }>;
  kontakt: { email: string; phone: string; address: string };
}

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ContentType | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setContent(getContent() as ContentType);
  }, []);

  const handleLogin = () => {
    // Einfaches Password-Login (weitere Info über Umgebungsvariable)
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'sarah2026';
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Falsches Passwort!');
    }
  };

  const handleEdit = (field: string, value: string) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = () => {
    if (editingField) {
      updateContent(editingField, tempValue);
      setContent(getContent() as ContentType);
      setEditingField(null);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ 
            backgroundColor: '#C9A84C',
            color: '#000000',
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}
        >
          ⚙️ Bearbeiten
        </button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div 
        className="fixed bottom-6 right-6 w-80 bg-gray-900 border border-gold rounded-lg p-6 z-[9998] shadow-2xl"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '320px',
          backgroundColor: '#111827',
          border: '2px solid #C9A84C',
          borderRadius: '8px',
          padding: '24px',
          zIndex: 9998,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gold text-xl font-bold">Admin Panel</h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white text-2xl bg-none border-none cursor-pointer"
            style={{backgroundColor: 'transparent', border: 'none'}}
          >
            ✕
          </button>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm">Geben Sie Ihr Admin-Passwort ein:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          placeholder="Passwort..."
          className="w-full px-3 py-2 bg-gray-800 border border-gold rounded mb-3 text-white text-sm"
          autoFocus
        />
        <button
          onClick={handleLogin}
          className="w-full px-3 py-2 bg-gold text-black rounded font-bold hover:bg-opacity-90 text-sm"
          style={{
            width: '100%',
            padding: '8px 12px',
            backgroundColor: '#C9A84C',
            color: '#000000',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Anmelden
        </button>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="fixed bottom-6 right-6 px-4 py-2 bg-gold text-black rounded-lg text-sm font-bold z-50 shadow-lg">
        Lädt...
      </div>
    );
  }

  return (
    <div 
      className="fixed bottom-6 right-6 w-96 max-h-96 overflow-y-auto bg-gray-900 border border-gold rounded-lg p-6 z-[9998] shadow-2xl"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '384px',
        maxHeight: '384px',
        overflowY: 'auto',
        backgroundColor: '#111827',
        border: '2px solid #C9A84C',
        borderRadius: '8px',
        padding: '24px',
        zIndex: 9998,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gold text-xl font-bold">Admin Panel</h2>
        <button 
          onClick={() => { setIsOpen(false); setIsAuthenticated(false); }} 
          className="text-white text-2xl bg-none border-none cursor-pointer"
          style={{backgroundColor: 'transparent', border: 'none'}}
        >
          ✕
        </button>
      </div>

      <div className="space-y-4 text-sm">
        {/* Hero Section */}
        <div className="border-t border-gold pt-4">
          <h3 className="text-gold font-bold mb-2">🎬 Hero</h3>
          {editingField === 'hero.title' ? (
            <div>
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full px-2 py-1 bg-gray-800 border border-gold rounded text-white text-sm mb-2"
              />
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-gold text-black rounded font-bold text-xs hover:bg-opacity-90"
              >
                ✓ Speichern
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEdit('hero.title', content.hero.title)}
              className="text-gray-300 hover:text-gold text-xs block mb-2 cursor-pointer"
            >
              Titel: <span className="text-gold">{content.hero.title}</span>
            </button>
          )}
        </div>

        {/* Leistungen */}
        <div className="border-t border-gold pt-4">
          <h3 className="text-gold font-bold mb-2">💼 Leistungen</h3>
          {content.leistungen.map((item) => (
            <div key={item.id} className="mb-2 text-gray-300 text-xs">
              <button
                onClick={() => handleEdit(`leistungen.${item.id}.title`, item.title)}
                className="hover:text-gold cursor-pointer"
              >
                • {item.title}
              </button>
            </div>
          ))}
        </div>

        {/* Über mich */}
        <div className="border-t border-gold pt-4">
          <h3 className="text-gold font-bold mb-2">👤 Über mich</h3>
          {editingField === 'ueber.text' ? (
            <div>
              <textarea
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full px-2 py-1 bg-gray-800 border border-gold rounded text-white text-xs mb-2 h-20"
              />
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-gold text-black rounded font-bold text-xs hover:bg-opacity-90"
              >
                ✓ Speichern
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEdit('ueber.text', content.ueber.text)}
              className="text-gray-300 hover:text-gold text-xs block cursor-pointer"
            >
              Beschreibung bearbeiten
            </button>
          )}
        </div>

        {/* Kontakt */}
        <div className="border-t border-gold pt-4">
          <h3 className="text-gold font-bold mb-2">📞 Kontakt</h3>
          {editingField === 'kontakt.email' ? (
            <div>
              <input
                type="email"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="w-full px-2 py-1 bg-gray-800 border border-gold rounded text-white text-sm mb-2"
              />
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-gold text-black rounded font-bold text-xs hover:bg-opacity-90"
              >
                ✓ Speichern
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleEdit('kontakt.email', content.kontakt.email)}
              className="text-gray-300 hover:text-gold text-xs block cursor-pointer"
            >
              Email: {content.kontakt.email}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
