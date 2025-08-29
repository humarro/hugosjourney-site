import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    content: "En 3 meses perdí 15kg y gané confianza. Pablo no solo me ayudó con el entrenamiento, sino que cambió mi mentalidad completamente.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  },
  {
    name: "Carlos Méndez", 
    content: "Profesional como pocos. Sus rutinas son efectivas y su seguimiento constante te motiva a seguir adelante cada día.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  },
  {
    name: "Ana Rodríguez",
    content: "Llevaba años intentando ponerme en forma. Con Pablo conseguí resultados en tiempo récord. ¡100% recomendado!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-muted/30 dark:bg-muted/10" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="testimonials-title">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            Resultados reales de personas reales que han transformado sus vidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card dark:bg-card rounded-2xl p-8 shadow-lg border border-border"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-card-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400" data-testid={`testimonial-rating-${index}`}>
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
