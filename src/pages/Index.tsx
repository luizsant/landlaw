import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Authority from "@/components/Authority";
import Benefits from "@/components/Benefits";
import Testimonial from "@/components/Testimonial";
import Offer from "@/components/Offer";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Authority />
      <Benefits />
      <Testimonial />
      <Offer />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
