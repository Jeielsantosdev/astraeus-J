import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  LayoutDashboard, 
  Webhook, 
  Bot, 
  Wrench,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Criamos sites institucionais e landing pages de alta conversão com design moderno e responsivo.",
    features: ["Design responsivo", "SEO otimizado", "Alta performance"],
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas Web",
    description: "Desenvolvemos painéis administrativos, dashboards e ERPs personalizados para seu negócio.",
    features: ["Painéis admin", "Dashboards", "ERPs customizados"],
  },
  {
    icon: Webhook,
    title: "APIs e Integrações",
    description: "Construímos APIs REST robustas e integrações com sistemas terceiros e plataformas.",
    features: ["APIs REST", "Webhooks", "Integrações"],
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Automatizamos tarefas repetitivas e fluxos de trabalho para aumentar a produtividade.",
    features: ["RPA", "Workflows", "Bots"],
  },
  {
    icon: Wrench,
    title: "Manutenção e Evolução",
    description: "Oferecemos suporte contínuo, correção de bugs e evolução de sistemas existentes.",
    features: ["Suporte 24/7", "Correção de bugs", "Melhorias"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Soluções completas para seu{" "}
            <span className="gradient-text">projeto digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do planejamento à entrega, oferecemos todos os serviços necessários 
            para transformar sua visão em realidade.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-lg hover-lift border border-border relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 gradient-bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl gradient-bg-secondary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
