import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 w-80 rounded-2xl bg-card border border-border shadow-elevated overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-deep px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary-foreground">Insiderblue</p>
                <p className="text-xs text-primary-foreground/50">Normalmente responde em minutos</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat body */}
            <div className="p-5 bg-muted/50 min-h-[140px]">
              <div className="bg-card rounded-xl rounded-tl-sm px-4 py-3 shadow-sm border border-border max-w-[85%]">
                <p className="text-sm text-foreground leading-relaxed">
                  Olá! 👋 Como podemos ajudar o seu negócio hoje?
                </p>
                <span className="text-[10px] text-muted-foreground mt-1 block">Agora</span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 border-t border-border">
              <a
                href="https://wa.me/5535984365367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-all"
              >
                <Send className="w-4 h-4" />
                Falar com especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-elevated hover:bg-accent/90 active:scale-[0.95] transition-all flex items-center justify-center"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <WhatsAppIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingChat;
