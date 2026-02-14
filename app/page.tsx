import Hero from "@/components/Hero";
import CategoryMenu from "@/components/CategoryMenu";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection";
import BestMenu from "@/components/BestMenu";
import ChefSection from "@/components/ChefSection";
import VideoSection from "@/components/VideoSection";
import WorkingHoursSection from "@/components/WorkingHoursSection";
import ReservationSection from "@/components/ReservationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <CategoryMenu />
        <AboutSection />
        <FeatureSection />
        <BestMenu />
        <ChefSection />
        <VideoSection />
        <WorkingHoursSection />
        <ReservationSection />
        <TestimonialsSection />
        <GallerySection />
        <Footer />
      </main>
    </>
  );
}
