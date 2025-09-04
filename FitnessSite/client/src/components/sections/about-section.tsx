import { motion } from "framer-motion";

const stats = [
  { value: "5,000+", label: "Clientes Transformados" },
  { value: "8+", label: "Años de Experiencia" },
  { value: "113K+", label: "Suscriptores YouTube" },
  { value: "98%", label: "Satisfacción Cliente" }
];

const certifications = [
  "Certificado NSCA",
  "Nutrición Deportiva", 
  "Psicología Deportiva"
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-background dark:bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8" data-testid="about-title">
              Sobre Pablo Sanro
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
              Con más de 8 años de experiencia en el mundo del fitness, me he especializado en transformaciones corporales y desarrollo de hábitos saludables. Mi metodología combina ciencia, experiencia práctica y un enfoque humano.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description-2">
              He ayudado a más de 5,000 personas a alcanzar sus objetivos fitness, desde pérdida de peso hasta ganancia muscular. Mi canal de YouTube con 113k suscriptores es testimonio del impacto positivo que genera mi contenido.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-muted dark:bg-muted px-4 py-2 rounded-full text-sm font-medium"
                  data-testid={`certification-${index}`}
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <img
              src="https://yt3.googleusercontent.com/2zv8dW2MtRCOcfvCt0SPus-ErMCVolE09RDTWQTbiCWZHICzFafUPO7jMKc_oL9TwDdb7lqqTA=s900-c-k-c0x00ffffff-no-rj"
              alt="Pablo Sanro entrenando"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              data-testid="img-about-photo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
