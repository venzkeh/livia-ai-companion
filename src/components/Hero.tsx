import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import liviaLogo from "@/assets/livia-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-warm">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <img src={liviaLogo} alt="Livia AI Logo" className="w-10 h-10 animate-pulse-soft" />
              <span className="text-primary-dark font-semibold">Livia AI</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Dein digitaler Begleiter gegen{" "}
              <span className="text-primary">Einsamkeit</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Einfühlsame Gespräche, Erinnerungen und Unterstützung – für mehr Lebensfreude im Alter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 shadow-soft hover:shadow-glow transition-smooth">
                Mehr erfahren
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                App testen
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Seniorin nutzt Tablet mit Livia AI"
              className="relative rounded-3xl shadow-soft w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
