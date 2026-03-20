import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)`,
        backgroundSize: '160px 160px'
      }} />
      <motion.div
        className="absolute top-[15%] right-[20%] w-[600px] h-[600px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(circle, hsl(210 80% 55% / 0.08), transparent 70%)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, hsl(210 60% 45% / 0.06), transparent 70%)' }}
        animate={{ x: [0, -20, 25, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(200 70% 60% / 0.04), transparent 70%)' }}
        animate={{ x: [0, 15, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(135deg, hsl(210 80% 55%) 0px, hsl(210 80% 55%) 1px, transparent 1px, transparent 80px)`,
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, hsl(215 65% 8% / 0.6) 0%, transparent 40%, transparent 80%, hsl(215 65% 8% / 0.4) 100%)',
      }} />
      <div className="absolute inset-0 opacity-[0.35]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

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
            Seu negócio é único.
            <br />
            <span className="text-gradient">Seu software também deveria ser.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed text-primary-foreground/60 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Insiderblue desenvolve soluções de software personalizadas que se encaixam perfeitamente na operação do seu negócio. Sem adaptações, sem limitações.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5535984365367"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Falar com especialista
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-lg border border-primary-foreground/15 text-primary-foreground/80 hover:border-primary-foreground/30 hover:text-primary-foreground active:scale-[0.97] transition-all"
            >
              Conheça nosso método
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
