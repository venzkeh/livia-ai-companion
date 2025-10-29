import missionImage from "@/assets/mission-image.jpg";

const Mission = () => {
  return (
    <section className="py-24 bg-background" id="mission">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-2xl rounded-full"></div>
              <img 
                src={missionImage} 
                alt="Seniorin mit Tablet"
                className="relative rounded-3xl shadow-soft w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Unsere <span className="text-primary">Mission</span>
            </h2>
            
            <div className="h-1 w-24 gradient-primary rounded-full"></div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Livia AI ist eine mobile App, die älteren Menschen hilft, Einsamkeit zu überwinden 
              und wieder Freude an Gesprächen zu finden.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entwickelt mit <span className="text-primary font-semibold">Psycholog:innen</span>, 
              {" "}<span className="text-primary font-semibold">Pflegekräften</span> und 
              {" "}<span className="text-primary font-semibold">KI-Expert:innen</span> – für mehr Nähe im Alltag.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-lg text-foreground">Einfach zu bedienen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-lg text-foreground">Immer für dich da</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
