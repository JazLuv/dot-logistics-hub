import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex flex-col items-center">
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-primary">d</span>
              <span className="text-primary">o</span>
              <span className="text-primary">t</span>
            </span>
            <span className="text-xs font-medium text-dot-dark tracking-wider">
              Delivery on time
            </span>
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={scrollToTop}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              ¿Quiénes Somos?
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("alliances")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Alianzas
            </button>
          </nav>

          {/* CTA Button - Right side */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary hover:bg-primary/90 px-6"
            >
              Contacto
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-dot-dark" />
            ) : (
              <Menu className="h-6 w-6 text-dot-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 border-t border-border pt-4">
            <button
              onClick={scrollToTop}
              className="font-semibold text-primary hover:text-primary/80 transition-colors text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors text-left py-2"
            >
              ¿Quiénes Somos?
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors text-left py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("alliances")}
              className="font-semibold text-primary hover:text-primary/80 transition-colors text-left py-2"
            >
              Alianzas
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary hover:bg-primary/90 w-full mt-2"
            >
              Contacto
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
