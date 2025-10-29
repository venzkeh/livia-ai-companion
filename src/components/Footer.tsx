import { Link } from "react-router-dom";
import liviaLogo from "@/assets/livia-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-accent py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={liviaLogo} alt="Livia AI Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold">Livia AI</span>
            </div>
            <p className="text-accent/80 leading-relaxed">
              Dein digitaler Begleiter für mehr Lebensfreude im Alter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="text-accent/80 hover:text-accent transition-smooth">Über uns</a></li>
              <li><a href="#funktionen" className="text-accent/80 hover:text-accent transition-smooth">Funktionen</a></li>
              <li><a href="#zielgruppe" className="text-accent/80 hover:text-accent transition-smooth">Für wen</a></li>
              <li><a href="#app" className="text-accent/80 hover:text-accent transition-smooth">Die App</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-accent/80">
                <img src={liviaLogo} alt="Livia AI Logo" className="w-4 h-4" />
                <span>info@livia-ai.de</span>
              </li>
              <li className="flex items-center gap-2 text-accent/80">
                <img src={liviaLogo} alt="Livia AI Logo" className="w-4 h-4" />
                <span>+49 123 456789</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Folge uns</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth">
                <img src={liviaLogo} alt="Livia AI Logo" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth">
                <img src={liviaLogo} alt="Livia AI Logo" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-smooth">
                <img src={liviaLogo} alt="Livia AI Logo" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-accent/60 text-sm">
          <p>© 2025 Livia AI. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-accent transition-smooth">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-accent transition-smooth">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-accent transition-smooth">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
