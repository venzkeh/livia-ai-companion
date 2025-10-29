import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Nutzung der Livia AI 
              Plattform zwischen [Firmenname] (nachfolgend "Anbieter") und den Nutzern (nachfolgend "Nutzer").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Vertragsgegenstand</h2>
            <p>
              Der Anbieter stellt dem Nutzer eine digitale Plattform zur Verfügung, die KI-gestützte Unterstützung 
              und Kommunikationsmöglichkeiten für Seniorenbetreuung bietet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Vertragsschluss</h2>
            <p>
              Der Vertrag kommt durch die Registrierung des Nutzers und die Annahme dieser AGB zustande. Mit der 
              Registrierung gibt der Nutzer ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Leistungsumfang</h2>
            <p>
              Der Anbieter verpflichtet sich, die Plattform in dem vertraglich vereinbarten Umfang bereitzustellen. 
              Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung und dem gewählten 
              Tarifmodell.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Nutzungsrechte</h2>
            <p>
              Der Nutzer erhält für die Vertragslaufzeit ein einfaches, nicht übertragbares Recht zur Nutzung der 
              Plattform im vertraglich vereinbarten Umfang.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Pflichten des Nutzers</h2>
            <p>
              Der Nutzer verpflichtet sich, die Plattform nur im Rahmen der gesetzlichen Bestimmungen und dieser 
              AGB zu nutzen. Insbesondere ist es untersagt, Inhalte zu veröffentlichen, die gegen geltendes Recht 
              verstoßen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Vergütung und Zahlung</h2>
            <p>
              Die Vergütung richtet sich nach dem gewählten Tarifmodell. Die Zahlung erfolgt im Voraus für den 
              jeweiligen Abrechnungszeitraum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Haftung</h2>
            <p>
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit 
              haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Laufzeit und Kündigung</h2>
            <p>
              Der Vertrag wird auf unbestimmte Zeit geschlossen. Beide Parteien können den Vertrag mit einer Frist 
              von [X] Wochen zum Monatsende kündigen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam 
              sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AGB;
