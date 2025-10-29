import { Link } from "react-router-dom";
import liviaLogo from "@/assets/livia-logo.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <img src={liviaLogo} alt="Livia AI Logo" className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Verträge über die Nutzung der
                Plattform "Livia AI" zwischen der Livia AI GmbH (nachfolgend "Anbieter") und den Nutzerinnen und
                Nutzern der Plattform (nachfolgend "Nutzer"). Abweichende Bedingungen des Nutzers werden nicht anerkannt,
                es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Vertragsgegenstand</h2>
              <p>
                Gegenstand des Vertrages ist die Bereitstellung einer digitalen Plattform, die KI-basierte
                Kommunikations- und Unterstützungsangebote für Seniorinnen, Senioren sowie deren Angehörige und
                Betreuungspersonen umfasst. Der konkrete Funktionsumfang ergibt sich aus der jeweils aktuellen
                Leistungsbeschreibung auf unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Registrierung und Vertragsschluss</h2>
              <p>
                Der Vertrag kommt zustande, sobald sich der Nutzer registriert und diesen AGB zustimmt. Die Anmeldung
                darf nur von volljährigen und voll geschäftsfähigen Personen erfolgen oder mit Einwilligung der
                gesetzlichen Vertreter. Der Anbieter behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Leistungsumfang</h2>
              <p>
                Der Anbieter stellt die Plattform im jeweils vereinbarten Leistungsumfang zur Verfügung. Hierzu können
                unter anderem Kommunikationsfunktionen, Terminplanungen, Erinnerungen und Informationsangebote gehören.
                Der Anbieter ist berechtigt, Leistungen anzupassen oder zu erweitern, soweit dies dem Nutzer zumutbar ist
                und keine wesentlichen Vertragspflichten verletzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Nutzungsrechte</h2>
              <p>
                Der Nutzer erhält ein einfaches, nicht übertragbares Recht zur Nutzung der Plattform für die Dauer des
                Vertrages. Eine Weitergabe der Zugangsdaten an Dritte oder eine Nutzung zu kommerziellen Zwecken ohne
                vorherige Zustimmung des Anbieters ist unzulässig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Pflichten der Nutzer</h2>
              <p>
                Nutzer verpflichten sich, bei der Registrierung wahrheitsgemäße Angaben zu machen und Änderungen ihrer
                Daten unverzüglich zu aktualisieren. Es ist untersagt, Inhalte einzustellen, die Rechte Dritter
                verletzen, gegen geltendes Recht verstoßen oder den Betrieb der Plattform beeinträchtigen. Missbräuchliche
                Nutzung kann zur Sperrung oder Kündigung des Zugangs führen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Vergütung und Zahlungsbedingungen</h2>
              <p>
                Die Nutzung kostenpflichtiger Dienste erfolgt gegen Zahlung der jeweils ausgewiesenen Gebühren.
                Rechnungsbeträge sind sofort fällig und können per Lastschrift, Kreditkarte oder anderen angebotenen
                Zahlungsmitteln beglichen werden. Gerät der Nutzer mit der Zahlung in Verzug, ist der Anbieter berechtigt,
                den Zugang bis zum vollständigen Ausgleich zu sperren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Haftung</h2>
              <p>
                Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben,
                Körper oder Gesundheit. Bei leicht fahrlässigen Pflichtverletzungen haftet der Anbieter nur für Schäden,
                die vorhersehbar und vertragstypisch sind. Eine Haftung für Datenverlust besteht nur, wenn der Nutzer
                angemessene Datensicherungen durchgeführt hat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Laufzeit und Kündigung</h2>
              <p>
                Der Vertrag wird auf unbestimmte Zeit geschlossen. Nutzer können den Vertrag jederzeit mit einer Frist
                von 14 Tagen zum Monatsende kündigen. Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt
                unberührt. Kündigungen bedürfen der Textform (z. B. E-Mail).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Änderungen der AGB</h2>
              <p>
                Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft anzupassen. Über Änderungen werden
                Nutzer rechtzeitig informiert. Widerspricht der Nutzer den neuen Bedingungen nicht innerhalb von sechs
                Wochen nach Mitteilung, gelten die Änderungen als akzeptiert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sollte eine
                Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die
                Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
