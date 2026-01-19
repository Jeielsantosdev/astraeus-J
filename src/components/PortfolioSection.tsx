import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Sistema Web",
    description: "Plataforma completa de e-commerce com painel administrativo, gestão de produtos e integração de pagamentos.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-primary to-orange-400",
  },
  {
    title: "Dashboard Analytics",
    category: "Dashboard",
    description: "Dashboard de análise de dados em tempo real com gráficos interativos e relatórios automatizados.",
    tags: ["Next.js", "Python", "Redis"],
    gradient: "from-secondary to-blue-400",
  },
  {
    title: "API de Integração",
    category: "API REST",
    description: "API robusta para integração entre sistemas legados e plataformas modernas de gestão.",
    tags: ["FastAPI", "PostgreSQL", "Docker"],
    gradient: "from-emerald-600 to-teal-400",
  },
  {
    title: "Automação RPA",
    category: "Automação",
    description: "Sistema de automação de processos internos com bots inteligentes e workflows personalizados.",
    tags: ["Python", "Node.js", "AWS"],
    gradient: "from-violet-600 to-purple-400",
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
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
            Portfólio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Projetos que{" "}
            <span className="gradient-text">entregamos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover-lift"
            >
              {/* Project image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white/50" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-xl mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
