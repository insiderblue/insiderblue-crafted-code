import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, FileCode2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa inicial",
    description: "Entendemos seu cenário, suas dores e seus objetivos em uma reunião sem compromisso.",
  },
  {
    icon: FileCode2,
    title: "Proposta técnica",
    description: "Apresentamos um plano detalhado com escopo, prazo e investimento claros.",
  },
  {
    icon: CheckCircle2,
    title: "Validação contínua",
    description: "A cada etapa você testa, aprova e direciona o desenvolvimento do seu sistema.",
  },
  {
    icon: Rocket,
    title: "Lançamento assistido",
    description: "Implantação em produção com acompanhamento técnico e treinamento da sua equipe.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[400px] rounded-full blur-[200px] opacity-20" style={{ background: 'radial-gradient(circle, hsl(210 80% 90%), transparent 70%)' }} />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Na prática
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Do primeiro contato ao software rodando
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um caminho simples e transparente para tirar sua ideia do papel.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-border" />
                )}

                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>

                <span className="text-[10px] font-bold tracking-widest uppercase text-accent/50 block mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
