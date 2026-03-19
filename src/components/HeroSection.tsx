import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase rounded-full border border-accent/20 text-accent bg-accent/5">
              Software sob medida
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Seu negócio é único.{" "}
            <span className="text-gradient">Seu software também deveria ser.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-primary-foreground/60 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Insiderblue desenvolve soluções de software personalizadas que se encaixam perfeitamente na operação do seu negócio — sem adaptações, sem limitações.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Solicitar proposta
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg border border-primary-foreground/15 text-primary-foreground/80 hover:border-primary-foreground/30 hover:text-primary-foreground transition-colors"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
