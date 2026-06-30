import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <Catalog />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
