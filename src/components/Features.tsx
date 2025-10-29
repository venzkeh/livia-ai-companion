import { Card } from "@/components/ui/card";
import liviaLogo from "@/assets/livia-logo.png";

const features = [
  {
    title: "Persönliche Begleitung",
    description: "Livia hört zu, erinnert und motiviert. Passt sich an Stimmung und Bedürfnisse an – natürliche Gespräche, die das Gedächtnis trainieren.",
    gradient: "from-primary to-primary-light",
  },
  {
    title: "Erinnerungen & Notizen",
    description: "Hilft, Termine und Gedanken festzuhalten. Nichts Wichtiges geht mehr verloren.",
    gradient: "from-primary-light to-secondary",
  },
  {
    title: "Seniorenfreundlichkeit",
    description: "Große Schrift, einfache Bedienung und klare Sprache. Entwickelt speziell für ältere Menschen – ohne komplizierte Technik.",
    gradient: "from-secondary to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 gradient-warm scroll-mt-32" id="funktionen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Was <span className="text-primary">Livia</span> kann
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Drei Hauptfunktionen, die deinen Alltag bereichern – mit Livia zu sprechen ist Gedächtnistraining und beugt Alzheimer vor
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-glow transition-smooth bg-card border-2 border-border hover:border-primary group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft`}
              >
                <img src={liviaLogo} alt="Livia AI Logo" className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
