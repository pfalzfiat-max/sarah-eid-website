import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import Leistungen from '@/components/Leistungen';
import UeberMich from '@/components/UeberMich';
import PolitikSection from '@/components/PolitikSection';
import Referenzen from '@/components/Referenzen';
import VideoReel from '@/components/VideoReel';
import Kontakt from '@/components/Kontakt';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Leistungen />
        <UeberMich />
        <PolitikSection />
        <Referenzen />
        <VideoReel />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
