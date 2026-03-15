import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import InstantQuote from "@/components/InstantQuote";
import BeforeAfter from "@/components/BeforeAfter";
import JoinRound from "@/components/JoinRound";
import Reviews from "@/components/Reviews";
import CleaningPlans from "@/components/CleaningPlans";
import CustomerExperience from "@/components/CustomerExperience";
import PhotoUpload from "@/components/PhotoUpload";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";
import StreetClean from "@/components/features/StreetClean";
import NearbyActivity from "@/components/features/NearbyActivity";
import SmartPropertyQuote from "@/components/features/SmartPropertyQuote";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <InstantQuote />
        <BeforeAfter />
        <JoinRound />
        <StreetClean />
        <NearbyActivity />
        <SmartPropertyQuote />
        <Reviews />
        <CleaningPlans />
        <CustomerExperience />
        <PhotoUpload />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
