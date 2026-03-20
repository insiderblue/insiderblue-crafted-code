import { motion } from "framer-motion";
import { Monitor, Smartphone, BarChart3, ShoppingCart, Building2, Stethoscope } from "lucide-react";

const showcaseItems = [
  {
    icon: Monitor,
    title: "Plataformas Web",
    description: "Sistemas robustos e escaláveis acessíveis de qualquer navegador, com interfaces intuitivas e performance otimizada.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma que colocam sua operação na palma da mão dos seus clientes e colaboradores.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Dashboards e BI",
    description: "Painéis de controle em tempo real que transformam dados complexos em decisões inteligentes para o seu negócio.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
];

const segments = [
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Building2, label: "Indústria" },
  { icon: Stethoscope, label: "Saúde" },
  { icon: BarChart3, label: "Finanças" },
];

const ShowcaseSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
            O que construímos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções para cada cenário
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada projeto é pensado do zero para resolver desafios reais. Conheça os tipos de solução que desenvolvemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Segments */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-muted-foreground mr-2 self-center">Atendemos:</span>
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground"
            >
              <seg.icon className="w-4 h-4 text-accent" />
              {seg.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
