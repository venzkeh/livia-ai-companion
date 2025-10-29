import { Home, Building2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiences = [
  {
    icon: Home,
    title: "Senioren zu Hause",
    quote: "Endlich habe ich jemanden zum Reden, wann immer ich möchte.",
    author: "Maria, 78 Jahre",
  },
  {
    icon: Building2,
    title: "Pflegeheime",
    quote: "Livia unterstützt uns perfekt im Alltag und bereitet unseren Bewohnern Freude.",
    author: "Pflegeleitung Sonnenhof",
  },
  {
    icon: Users,
    title: "Angehörige",
    quote: "Ich weiß, dass meine Mutter gut versorgt ist, auch wenn ich nicht da sein kann.",
    author: "Thomas, Sohn",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-24 bg-background scroll-mt-32" id="zielgruppe">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Für <span className="text-primary">wen</span> ist Livia?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir begleiten Menschen in verschiedenen Lebenssituationen
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-2 border-border hover:border-primary transition-smooth hover:shadow-soft group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                  <audience.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {audience.title}
                </h3>
                
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-primary/20">"</div>
                  <p className="text-lg text-muted-foreground leading-relaxed italic pl-4">
                    {audience.quote}
                  </p>
                </div>
                
                <p className="text-sm font-semibold text-primary">
                  — {audience.author}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
