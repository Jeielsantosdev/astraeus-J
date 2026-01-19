import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Code, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Código de Qualidade",
    description: "Seguimos as melhores práticas de desenvolvimento com código limpo, documentado e testado.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Aplicações otimizadas para velocidade e eficiência, garantindo a melhor experiência.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Implementamos as melhores práticas de segurança em todas as etapas do desenvolvimento.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes, garantindo comunicação transparente.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Inovação e excelência em{" "}
              <span className="gradient-text">desenvolvimento de software</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A <strong className="text-foreground">ASTREUS DEV</strong> é uma softhouse especializada em 
              criar soluções digitais sob medida. Combinamos expertise técnica com visão estratégica 
              para transformar suas ideias em produtos digitais de alto impacto.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa equipe é formada por profissionais apaixonados por tecnologia, 
              comprometidos com a entrega de código de qualidade e resultados que 
              impulsionam o crescimento do seu negócio.
            </p>
          </motion.div>

          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg hover-lift border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
