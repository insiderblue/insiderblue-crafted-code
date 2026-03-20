import { motion } from "framer-motion";
import { Briefcase, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "30+", label: "Projetos realizados" },
  { icon: Clock, value: "14 anos", label: "De experiência" },
  { icon: Star, value: "5", label: "Setores atendidos" },
];

const NumbersSection = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            Em números
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Resultados que falam por si
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-primary-foreground block mb-1 tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm text-primary-foreground/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
