import { motion } from "framer-motion";
import { Target, Clock, Users, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, title: "100% Personalizado", description: "Nenhum template. Cada projeto é único como o seu negócio." },
  { icon: Clock, title: "Entregas Pontuais", description: "Compromisso com prazos e transparência em cada etapa." },
  { icon: Users, title: "Equipe Dedicada", description: "Profissionais seniores focados exclusivamente no seu projeto." },
  { icon: TrendingUp, title: "Resultado Mensurável", description: "Soluções orientadas a métricas e retorno sobre investimento." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Por que a Insiderblue
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compromisso com excelência
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-card transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
