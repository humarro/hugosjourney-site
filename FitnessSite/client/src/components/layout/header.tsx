import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-card/90 backdrop-blur-md z-50 border-b border-border" data-testid="header-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary" data-testid="logo-text">Pablo Sanro</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-inicio"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-servicios"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-sobre-mi"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="nav-testimonios"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                data-testid="nav-contacto"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card border-t border-border"
            data-testid="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-nav-inicio"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-nav-servicios"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-nav-sobre-mi"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                data-testid="mobile-nav-testimonios"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-3 py-2 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
                data-testid="mobile-nav-contacto"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
