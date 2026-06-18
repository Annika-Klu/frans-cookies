import Hero from "@/components/hero/Hero";
import CookieSection from "@/components/cookie/CookieSection";
import LocationSection from "@/components/locations/LocationSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CookieSection />
      <LocationSection />
      <Footer />
    </>
  );
}
