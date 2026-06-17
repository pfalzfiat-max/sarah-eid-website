import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import Leistungen from '@/components/Leistungen';
import UeberMich from '@/components/UeberMich';
import Events from '@/components/Events';
import PolitikSection from '@/components/PolitikSection';
import Traurednerin from '@/components/Traurednerin';
import Referenzen from '@/components/Referenzen';
import VideoReel from '@/components/VideoReel';
import FAQ from '@/components/FAQ';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';
import {
  getStartseite,
  getEinstellungen,
  getLeistungen,
  getFaq,
  getReferenzen,
} from '@/sanity/lib/queries';

export async function generateMetadata(): Promise<Metadata> {
  const e = await getEinstellungen();
  return {
    title: e?.seoTitel || 'Sarah Eid – Moderatorin & Sprecherin | Rheinland-Pfalz & Bundesweit',
    description: e?.seoBeschreibung || 'Sarah Eid moderiert Live-Events, Messen, politische Veranstaltungen, TV & Radio – bundesweit. Freie Traurednerin & Sprecherin aus Rheinland-Pfalz.',
    openGraph: {
      title: e?.seoTitel || 'Sarah Eid – Moderatorin & Sprecherin',
      description: e?.seoBeschreibung || 'Moderatorin & Sprecherin aus Rheinland-Pfalz',
      locale: 'de_DE',
      type: 'website',
    },
  };
}

export default async function Home() {
  const [startseite, einstellungen, leistungen, faqItems, referenzen] = await Promise.all([
    getStartseite(),
    getEinstellungen(),
    getLeistungen(),
    getFaq(),
    getReferenzen(),
  ]);

  const heroData = {
    tagline: startseite?.heroTagline,
    subtitle: startseite?.heroSubtitle,
    beschreibung: startseite?.heroBeschreibung,
    badgeRegion: startseite?.heroBadgeRegion,
    stats: startseite?.heroStats,
    heroBildUrl: einstellungen?.heroBildUrl,
    heroBildAlt: einstellungen?.heroBildAlt,
    portraitUrl: einstellungen?.portraitBildUrl,
    portraitAlt: einstellungen?.portraitBildAlt,
  };

  const ueberMichData = {
    headingLine1: startseite?.ueberMichHeadingLine1,
    headingLine2: startseite?.ueberMichHeadingLine2,
    bioParagraf1: startseite?.ueberMichBio1,
    bioParagraf2: startseite?.ueberMichBio2,
    zitat: startseite?.ueberMichZitat,
    staerken: startseite?.ueberMichStaerken,
    bild1Url: einstellungen?.ueberMichBild1Url,
    bild1Alt: einstellungen?.ueberMichBild1Alt,
    bild2Url: einstellungen?.ueberMichBild2Url,
    bild2Alt: einstellungen?.ueberMichBild2Alt,
  };

  const politikData = startseite ? {
    heading: startseite.politikHeading,
    paragraf1: startseite.politikParagraf1,
    paragraf2: startseite.politikParagraf2,
    hinweis: startseite.politikHinweis,
  } : undefined;

  const telefonLink = einstellungen?.telefon
    ? `tel:${einstellungen.telefon.replace(/\s/g, '')}`
    : undefined;

  return (
    <>
      <Navbar />
      <main>
        <Hero data={heroData} />
        <SocialProofBar />
        <Leistungen items={leistungen} />
        <UeberMich data={ueberMichData} />
        <Events />
        <Traurednerin />
        <PolitikSection data={politikData} />
        <Referenzen items={referenzen} />
        <VideoReel />
        <FAQ items={faqItems} />
        <Kontakt
          email={einstellungen?.email}
          telefon={einstellungen?.telefon}
          telefonLink={telefonLink}
        />
      </main>
      <Footer
        name={einstellungen?.name}
        berufsbezeichnung={einstellungen?.berufsbezeichnung}
        email={einstellungen?.email}
        telefon={einstellungen?.telefon}
        telefonLink={telefonLink}
        region={einstellungen?.region}
        instagram={einstellungen?.instagram}
        facebook={einstellungen?.facebook}
        linkedin={einstellungen?.linkedin}
        beschreibung={einstellungen?.footerBeschreibung}
      />
    </>
  );
}
