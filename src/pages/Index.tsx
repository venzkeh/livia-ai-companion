import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import AppShowcase from "@/components/AppShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <TargetAudience />
      <AppShowcase />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
