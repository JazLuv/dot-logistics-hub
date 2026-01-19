import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      {/* --- 1. NAVEGACIÓN CENTRAL FLOTANTE (Pill Menu) --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] hidden md:block">
        <div className="flex items-center gap-8 px-8 py-3 bg-white/45 backdrop-blur-md border border-white/10 shadow-xl rounded-full">
          <button
            onClick={scrollToTop}
            className="text-sm font-bold text-primary hover:opacity-70 transition-all"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-bold text-primary hover:opacity-70 transition-all whitespace-nowrap"
          >
            ¿Quiénes Somos?
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-bold text-primary hover:opacity-70 transition-all"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("alliances")}
            className="text-sm font-bold text-primary hover:opacity-70 transition-all"
          >
            Alianzas
          </button>
        </div>
      </nav>

      {/* --- 2. LOGO Y BOTÓN DE CONTACTO (Estáticos en Home) --- */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo a la izquierda */}
            <button onClick={scrollToTop} className="flex items-center outline-none">
              <img 
                src={logo} 
                alt="Dot Logistics & Transport" 
                className="h-16 w-auto object-contain transition-transform hover:scale-105" 
              />
            </button>

            {/* Botón de Contacto a la derecha */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-primary hover:bg-primary/90 px-8 py-6 text-base font-bold shadow-lg transition-transform hover:scale-105"
              >
                Contacto
                <ArrowUpRight className="ml-1 h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 bg-white/80 backdrop-blur-sm rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8 text-primary" />
              ) : (
                <Menu className="h-8 w-8 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- 3. MENÚ MÓVIL (Full Screen Overlay) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in zoom-in duration-300">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2"
          >
            <X className="h-10 w-10 text-primary" />
          </button>
          
          <button onClick={scrollToTop} className="text-3xl font-extrabold text-dot-dark">Home</button>
          <button onClick={() => scrollToSection("about")} className="text-3xl font-extrabold text-dot-dark">¿Quiénes Somos?</button>
          <button onClick={() => scrollToSection("services")} className="text-3xl font-extrabold text-dot-dark">Servicios</button>
          <button onClick={() => scrollToSection("alliances")} className="text-3xl font-extrabold text-dot-dark">Alianzas</button>
          
          <Button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-primary text-xl px-10 py-8 mt-4 font-bold"
          >
            Contacto
            <ArrowUpRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
};

export default Header;