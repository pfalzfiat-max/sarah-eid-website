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
  getLeistungen,
  getFaq,
  getReferenzen,
} from '@/sanity/lib/queries';

export default async function Home() {
  const [startseite, leistungen, faqItems, referenzen] = await Promise.all([
    getStartseite(),
    getLeistungen(),
    getFaq(),
    getReferenzen(),
  ]);

  const heroData = startseite ? {
    tagline: startseite.heroTagline,
    subtitle: startseite.heroSubtitel,
    beschreibung: startseite.heroBeschreibung,
    badgeRegion: startseite.heroBadgeRegion,
    stats: startseite.heroStats,
  } : undefined;

  const ueberMichData = startseite ? {
    headingLine1: startseite.ueberMichHeadingLine1,
    headingLine2: startseite.ueberMichHeadingLine2,
    bioParagraf1: startseite.ueberMichBio1,
    bioParagraf2: startseite.ueberMichBio2,
    zitat: startseite.ueberMichZitat,
    staerken: startseite.ueberMichStaerken,
  } : undefined;

  const politikData = startseite ? {
    heading: startseite.politikHeading,
    paragraf1: startseite.politikParagraf1,
    paragraf2: startseite.politikParagraf2,
    hinweis: startseite.politikHinweis,
  } : undefined;

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
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
