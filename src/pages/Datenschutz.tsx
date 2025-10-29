import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Datenschutz = () => {
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
        
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-3">Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
              Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
              und sicherer zu machen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor 
              allem mit sogenannten Analyseprogrammen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen 
              Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf 
              Berichtigung oder Löschung dieser Daten.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
