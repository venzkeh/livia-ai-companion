import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden scroll-mt-32" id="kontakt">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-accent">
            Bereit, Livia kennenzulernen?
          </h2>
          
          <p className="text-xl lg:text-2xl text-accent/90 max-w-2xl mx-auto">
            Wir begleiten dich gerne auf deinem Weg zu mehr Lebensfreude und Verbindung.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-accent text-primary-dark hover:bg-accent/90 shadow-glow transition-smooth border-2 border-accent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-primary-dark transition-smooth"
            >
              <Phone className="w-5 h-5 mr-2" />
              Demo anfordern
            </Button>
          </div>

          <p className="text-accent/80 pt-8">
            Kostenlose Beratung • Keine Verpflichtungen • Gemeinsam weniger allein
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
