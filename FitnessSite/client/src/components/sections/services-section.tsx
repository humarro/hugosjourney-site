import { motion } from "framer-motion";
import { Dumbbell, Book, Youtube, Check } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Asesoramiento Deportivo Online",
    description: "Planes de entrenamiento personalizados adaptados a tus objetivos y horarios. Seguimiento completo y asesoramiento nutricional incluido.",
    features: [
      "Plan de entrenamiento personalizado",
      "Seguimiento semanal",
      "Asesoramiento nutricional",
      "Soporte 24/7 vía WhatsApp"
    ],
    buttonText: "Comenzar Ahora",
    gradient: "gradient-bg",
    testId: "card-asesoramiento"
  },
  {
    icon: Book,
    title: "Ebook GRATIS: Transforma tu Cuerpo en 90 Días",
    description: "Descarga mi guía completa totalmente gratuita con todo lo que necesitas saber para transformar tu físico en solo 90 días.",
    features: [
      "Rutinas de entrenamiento efectivas",
      "Plan nutricional completo",
      "Tips de motivación",
      "Casos de éxito reales"
    ],
    buttonText: "Descargar GRATIS",
    gradient: "gradient-green",
    testId: "card-ebook"
  },
  {
    icon: Youtube,
    title: "Canal de YouTube",
    description: "Únete a mi comunidad de más de 113k suscriptores y accede a contenido exclusivo, rutinas y consejos fitness.",
    features: [
      "Videos semanales nuevos",
      "Rutinas paso a paso",
      "Consejos de experto",
      "Comunidad activa"
    ],
    buttonText: "Ver Canal (113k suscriptores)",
    gradient: "gradient-blue",
    testId: "card-youtube"
  }
];

export default function ServicesSection() {
  const handleServiceClick = (serviceIndex: number) => {
    const service = services[serviceIndex];
    if (service.testId === "card-youtube") {
      window.open("https://youtube.com/@pablo_sanro", "_blank");
    } else if (service.testId === "card-ebook") {
      // Trigger ebook download or lead capture
      const element = document.getElementById("contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to contact form
      const element = document.getElementById("contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-muted/30 dark:bg-muted/10" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            Mis Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Descubre todo lo que tengo para ofrecerte y comienza tu transformación hoy mismo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card dark:bg-card rounded-2xl p-8 shadow-lg card-hover border border-border"
                data-testid={service.testId}
              >
                <div className={`${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`title-${service.testId}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`description-${service.testId}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServiceClick(index)}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    service.testId === "card-asesoramiento"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : service.testId === "card-ebook"
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  }`}
                  data-testid={`button-${service.testId}`}
                >
                  {service.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
