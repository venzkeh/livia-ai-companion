import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import AppShowcase from "@/components/AppShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

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
