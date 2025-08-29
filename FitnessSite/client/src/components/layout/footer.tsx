import { FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com/pablo_sanro", testId: "footer-instagram" },
    { icon: FaYoutube, url: "https://youtube.com/@pablo_sanro", testId: "footer-youtube" },
    { icon: FaWhatsapp, url: "https://wa.me/1234567890", testId: "footer-whatsapp" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/pablo-sanro", testId: "footer-linkedin" },
    { icon: Mail, url: "mailto:pablo@pablosanro.com", testId: "footer-email" }
  ];

  const quickLinks = [
    { text: "Inicio", sectionId: "inicio", testId: "footer-nav-inicio" },
    { text: "Servicios", sectionId: "servicios", testId: "footer-nav-servicios" },
    { text: "Sobre Mí", sectionId: "sobre-mi", testId: "footer-nav-sobre-mi" },
    { text: "Testimonios", sectionId: "testimonios", testId: "footer-nav-testimonios" },
    { text: "Contacto", sectionId: "contacto", testId: "footer-nav-contacto" }
  ];

  const legalLinks = [
    { text: "Política de Privacidad", testId: "footer-privacy" },
    { text: "Términos y Condiciones", testId: "footer-terms" },
    { text: "Política de Cookies", testId: "footer-cookies" },
    { text: "Aviso Legal", testId: "footer-legal" }
  ];

  return (
    <footer className="bg-secondary dark:bg-secondary text-secondary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-brand">Pablo Sanro</h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed" data-testid="footer-description">
              Entrenador personal certificado con más de 8 años de experiencia ayudando a personas a transformar sus vidas a través del fitness y la nutrición.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                    data-testid={social.testId}
                  >
                    <IconComponent className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid={link.testId}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-legal-title">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      // Placeholder for legal pages
                      console.log(`Navigate to ${link.text}`);
                    }}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    data-testid={link.testId}
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60" data-testid="footer-copyright">
            &copy; 2024 Pablo Sanro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
