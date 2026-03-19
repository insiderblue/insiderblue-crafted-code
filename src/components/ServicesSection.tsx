import { motion } from "framer-motion";
import { Code2, Layers, Workflow, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Custom",
    description: "Sistemas construídos do zero, projetados exclusivamente para resolver os desafios específicos do seu negócio.",
  },
  {
    icon: Layers,
    title: "Integrações & APIs",
    description: "Conectamos seus sistemas existentes com soluções novas, eliminando retrabalho e automatizando processos.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Identificamos gargalos operacionais e criamos ferramentas que otimizam o fluxo de trabalho da sua equipe.",
  },
  {
    icon: Shield,
    title: "Consultoria Técnica",
    description: "Análise profunda da sua infraestrutura atual com recomendações estratégicas de tecnologia.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções sob medida para cada necessidade
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Não vendemos produtos prontos. Cada linha de código é escrita pensando no seu contexto, nos seus processos e nos seus objetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
