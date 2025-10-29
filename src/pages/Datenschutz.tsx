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
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist die Livia AI GmbH, Musterstraße 12,
              10115 Berlin. Weitere Kontaktdaten entnehmen Sie bitte unserem Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Anfrage oder Registrierung
              freiwillig mitteilen. Dazu zählen insbesondere Name, E-Mail-Adresse, Telefonnummer und Angaben zur
              gewünschten Betreuungssituation.
            </p>
            <p>
              Beim Besuch unserer Website werden automatisch technische Daten (IP-Adresse, Browsertyp, Datum und
              Uhrzeit des Zugriffs) erfasst. Diese Daten sind technisch erforderlich, um Ihnen die Website korrekt
              anzuzeigen und die Stabilität und Sicherheit zu gewährleisten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Zweck der Datenverarbeitung</h2>
            <p>
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zur Bereitstellung unseres digitalen
              Begleitservices, zur Beantwortung Ihrer Anfragen, zur Abwicklung vertraglicher Beziehungen sowie zur
              Verbesserung unseres Angebots und zur Gewährleistung eines sicheren Betriebs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Rechtsgrundlagen</h2>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse, Optimierung und dem wirtschaftlichen Betrieb
              unseres Online-Angebots). Sofern Sie uns eine Einwilligung erteilt haben, stützt sich die Verarbeitung
              auf Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Einsatz von Cookies und Analyse-Tools</h2>
            <p>
              Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern.
              Sie können das Speichern von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
              verhindern. Bereits gespeicherte Cookies können jederzeit gelöscht werden.
            </p>
            <p>
              Sofern wir Analyse-Tools einsetzen (z. B. zur Reichweitenmessung), informieren wir Sie gesondert und
              holen, sofern erforderlich, Ihre Einwilligung ein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies gesetzlich erlaubt
              ist, Sie eingewilligt haben oder dies zur Vertragserfüllung erforderlich ist. Eine Übermittlung in
              Drittstaaten findet nur statt, wenn dort ein angemessenes Datenschutzniveau gewährleistet ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist
              oder gesetzliche Aufbewahrungsfristen bestehen. Entfallen die Zwecke bzw. laufen die Fristen ab,
              löschen wir die Daten gemäß den gesetzlichen Vorschriften.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten, auf Berichtigung, Löschung oder
              Einschränkung der Verarbeitung sowie das Recht auf Datenübertragbarkeit. Darüber hinaus können Sie
              erteilte Einwilligungen jederzeit widerrufen und der Verarbeitung widersprechen. Hierzu genügt eine
              formlose Mitteilung an uns, zum Beispiel per E-Mail an hallo@livia-ai.de.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Beschwerderecht</h2>
            <p>
              Ihnen steht das Recht zu, sich bei einer Aufsichtsbehörde zu beschweren, insbesondere in dem
              Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn
              Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
