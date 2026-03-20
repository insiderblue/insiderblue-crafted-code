import { motion } from "framer-motion";
import { Award, Handshake, Clock, TrendingUp, Shield, Eye } from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    description: "Não somos fornecedores, somos parceiros estratégicos. Acompanhamos seu negócio além da entrega do projeto.",
  },
  {
    icon: Award,
    title: "14 anos de mercado",
    description: "Mais de uma década entregando soluções que geram resultado real para empresas de diferentes portes e setores.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    description: "Você acompanha cada etapa do desenvolvimento com acessos, relatórios e entregas parciais validadas.",
  },
  {
    icon: Clock,
    title: "Agilidade na execução",
    description: "Equipe enxuta e processos bem definidos que garantem velocidade sem comprometer a qualidade.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    description: "Boas práticas de segurança aplicadas desde a primeira linha de código até a infraestrutura em produção.",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado",
    description: "Cada funcionalidade é pensada para gerar impacto. Não entregamos código, entregamos solução para o seu problema.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 50% at 30% 50%, hsl(210 80% 55% / 0.05), transparent)',
      }} />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Por que a Insiderblue
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Confiança construída com resultado
          </h2>
          <p className="text-primary-foreground/50 max-w-xl mx-auto">
            Escolher o parceiro certo faz toda a diferença. Conheça os motivos que fazem nossos clientes voltarem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
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

export default WhyUsSection;
