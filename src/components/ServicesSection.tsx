import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const methodSteps = [
  {
    icon: Search,
    number: "01",
    title: "Imersão no negócio",
    description: "Antes de escrever uma linha de código, mergulhamos na operação do seu negócio. Entendemos processos, identificamos gargalos e mapeamos oportunidades reais de melhoria.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Arquitetura sob medida",
    description: "Desenhamos a solução técnica ideal para o seu cenário — escolhendo tecnologias, integrações e uma arquitetura que cresce junto com a sua empresa.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Construção iterativa",
    description: "Desenvolvemos em ciclos curtos com entregas parciais para validação contínua. Você acompanha cada evolução e garante que o resultado está no caminho certo.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega e evolução",
    description: "Implantação assistida, treinamento da equipe e suporte técnico contínuo. Seu software não para no lançamento — ele evolui com o seu negócio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Nosso método
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como transformamos a sua ideia em software
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo estruturado que garante qualidade, alinhamento e resultado — do primeiro dia à entrega final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {methodSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative p-8 rounded-xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-accent/60 tracking-widest uppercase mb-1 block">
                    Etapa {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
