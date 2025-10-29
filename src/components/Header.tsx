import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import liviaLogo from "@/assets/livia-logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Funktionen", href: "#funktionen" },
  { label: "Zielgruppe", href: "#zielgruppe" },
  { label: "App", href: "#app" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (hash: string) => {
    if (location.pathname === "/" && window.location.hash === hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    closeMenu();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-6">
            <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
              <img src={liviaLogo} alt="Livia AI Logo" className="h-20 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">Livia AI</span>
                <span className="text-sm text-muted-foreground">Digitale Begleitung</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-smooth"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                asChild
                className="px-6 py-5 text-sm font-semibold shadow-soft hover:shadow-glow"
                onClick={() => handleNavClick("#kontakt")}
              >
                <Link to="/#kontakt">Jetzt kennenlernen</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Navigation öffnen"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {isMenuOpen && (
          <div className="lg:hidden absolute inset-x-4 mt-2 rounded-3xl border border-border bg-background/95 shadow-glow backdrop-blur-sm">
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className="text-base font-semibold text-foreground/90 hover:text-primary transition-smooth"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 h-12 rounded-2xl text-base font-semibold shadow-soft hover:shadow-glow"
                onClick={() => handleNavClick("#kontakt")}
              >
                <Link to="/#kontakt">Jetzt kennenlernen</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
