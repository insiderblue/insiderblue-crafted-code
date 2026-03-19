import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Imersão completa no seu negócio para entender processos, dores e oportunidades de melhoria.",
  },
  {
    number: "02",
    title: "Arquitetura",
    description: "Desenho técnico da solução com definição de tecnologias, integrações e cronograma de entregas.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construção iterativa com entregas parciais para validação contínua e ajustes em tempo real.",
  },
  {
    number: "04",
    title: "Entrega & Suporte",
    description: "Implantação assistida, treinamento da equipe e suporte técnico contínuo pós-entrega.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-deep">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Do diagnóstico à entrega
          </h2>
          <p className="text-primary-foreground/50 max-w-xl mx-auto">
            Um processo estruturado que garante qualidade e alinhamento com as expectativas do seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-5xl font-extrabold text-accent/10 mb-4 block">{step.number}</span>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-accent/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
