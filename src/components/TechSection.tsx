import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Rocket, RefreshCw, FileSearch, Settings } from "lucide-react";

const guarantees = [
  {
    icon: FileSearch,
    title: "Diagnóstico gratuito",
    description: "Analisamos sua operação e identificamos oportunidades de automação e ganho de eficiência antes de qualquer compromisso.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de qualidade",
    description: "Todo projeto passa por testes rigorosos e validação em cada etapa para garantir estabilidade e segurança.",
  },
  {
    icon: Headphones,
    title: "Suporte contínuo",
    description: "Após a entrega, sua empresa conta com suporte técnico dedicado para manter tudo funcionando perfeitamente.",
  },
  {
    icon: RefreshCw,
    title: "Evolução constante",
    description: "Seu software cresce junto com o seu negócio. Novas funcionalidades são adicionadas conforme sua operação exige.",
  },
  {
    icon: Rocket,
    title: "Entregas incrementais",
    description: "Você acompanha e valida cada funcionalidade antes de avançar. Sem surpresas no final do projeto.",
  },
  {
    icon: Settings,
    title: "Integração total",
    description: "Conectamos seu novo sistema aos softwares que você já usa, eliminando retrabalho e centralizando informações.",
  },
];

const TechSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, hsl(210 80% 55%) 0px, hsl(210 80% 55%) 1px, transparent 1px, transparent 60px)`,
      }} />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Compromisso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            O que você pode esperar
          </h2>
          <p className="text-primary-foreground/50 max-w-xl mx-auto">
            Mais do que código, entregamos tranquilidade. Cada etapa do projeto é pensada para proteger seu investimento e gerar resultado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/5 hover:border-accent/20 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
