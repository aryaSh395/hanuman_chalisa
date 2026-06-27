import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Devotion from "@/components/Devotion";
import Chalisa from "@/components/Chalisa";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <Devotion />
      <Chalisa />
      <Timeline />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
