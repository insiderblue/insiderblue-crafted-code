import { motion } from "framer-motion";
import { Database, Cloud, Lock, Zap, Globe, Cpu, Layers, GitBranch } from "lucide-react";

const technologies = [
  { icon: Globe, label: "React & Next.js" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cloud, label: "AWS & Azure" },
  { icon: Lock, label: "Auth & Security" },
  { icon: Zap, label: "APIs REST & GraphQL" },
  { icon: Cpu, label: "Microserviços" },
  { icon: Layers, label: "Docker & K8s" },
  { icon: GitBranch, label: "CI/CD" },
];

const TechSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(210 80% 55%) 0px, hsl(210 80% 55%) 1px, transparent 1px, transparent 60px)`,
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=500&fit=crop&q=80"
                alt="Código de programação em tela"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-accent/10 blur-[60px]" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
              Tecnologias
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Stack moderna e escalável
            </h2>
            <p className="text-primary-foreground/50 mb-8 leading-relaxed">
              Trabalhamos com as tecnologias mais confiáveis do mercado para garantir performance, segurança e facilidade de manutenção em todos os projetos.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/5 hover:border-accent/20 transition-colors"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <tech.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-primary-foreground/70">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
