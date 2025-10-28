import appMockup1 from "@/assets/app-mockup-1.jpg";
import appMockup2 from "@/assets/app-mockup-2.jpg";
import { Card } from "@/components/ui/card";
import { MessageSquare, ClipboardList, Settings } from "lucide-react";

const screens = [
  {
    image: appMockup1,
    icon: MessageSquare,
    title: "Sprechen",
    description: "Natürliche Gespräche, die sich echt anfühlen",
  },
  {
    image: appMockup2,
    icon: ClipboardList,
    title: "Notizen",
    description: "Erinnerungen und Termine im Blick behalten",
  },
  {
    image: appMockup1,
    icon: Settings,
    title: "Einstellungen",
    description: "Individuell angepasst an deine Bedürfnisse",
  },
];

const AppShowcase = () => {
  return (
    <section className="py-24 gradient-warm" id="app">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Die <span className="text-primary">App</span> im Überblick
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Einfach, übersichtlich und schön gestaltet
          </p>
        </div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {screens.map((screen, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-2 border-border hover:border-primary transition-smooth hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[9/16] relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                <img 
                  src={screen.image} 
                  alt={screen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <screen.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {screen.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground">
                  {screen.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
