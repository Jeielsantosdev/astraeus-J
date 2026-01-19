import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, MessageSquare, Target, Sparkles } from "lucide-react";

const differentials = [
  {
    icon: CheckCircle,
    title: "Código Limpo e Escalável",
    description: "Desenvolvemos com as melhores práticas, garantindo que seu software cresça junto com seu negócio.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Clara",
    description: "Mantemos você informado em cada etapa do projeto, com reuniões regulares e relatórios de progresso.",
  },
  {
    icon: Sparkles,
    title: "Soluções Personalizadas",
    description: "Cada projeto é único. Criamos soluções sob medida que atendem às necessidades específicas do seu negócio.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Nosso objetivo é entregar valor real. Medimos o sucesso pelos resultados que geramos para nossos clientes.",
  },
];

export function DifferentialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="py-24">
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
              Por que nos escolher
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Diferenciais que fazem a{" "}
              <span className="gradient-text">diferença</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Não somos apenas desenvolvedores. Somos parceiros estratégicos 
              comprometidos com o sucesso do seu projeto e do seu negócio.
            </p>
          </motion.div>

          {/* Right content - Differentials list */}
          <div className="space-y-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-2xl shadow-md border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
