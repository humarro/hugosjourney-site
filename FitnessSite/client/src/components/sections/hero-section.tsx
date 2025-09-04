import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center gradient-bg" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
              Transforma tu <span className="text-yellow-300">Cuerpo</span> y tu <span className="text-yellow-300">Vida</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="hero-description">
              Soy Pablo Sanro, entrenador personal certificado con más de 113k seguidores. Te ayudo a alcanzar tus objetivos fitness con planes personalizados y resultados garantizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("servicios")}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                data-testid="button-empezar-ahora"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Empezar Ahora
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center"
                data-testid="button-conocer-mas"
              >
                <Play className="w-5 h-5 mr-2" />
                Conocer Más
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://www.instagram.com/p/DAyuOfAIY5B/?img_index=2"
                alt="Pablo Sanro - Entrenador Personal"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover animate-float"
                data-testid="img-hero-photo"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-card rounded-2xl p-4 shadow-xl"
                data-testid="stat-followers"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">113K+</div>
                  <div className="text-sm text-muted-foreground">Seguidores</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
