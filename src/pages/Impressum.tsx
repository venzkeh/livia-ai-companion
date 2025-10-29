import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Impressum = () => {
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
        
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              [Firmenname]<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              [Land]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
            <p>[Name des Geschäftsführers/Vertretungsberechtigten]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: [Registergericht]<br />
              Registernummer: [Registernummer]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name]<br />
              [Adresse]
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
