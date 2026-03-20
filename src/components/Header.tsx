import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 border-border"
          : "bg-navy-deep/80 border-primary-foreground/5"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Método", "#metodo"],
            ["Diferenciais", "#diferenciais"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5535984365367"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Fale conosco
          </a>
        </nav>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className={`md:hidden border-t py-4 ${
          scrolled ? "bg-background border-border" : "bg-navy-deep border-primary-foreground/5"
        }`}>
          <div className="container flex flex-col gap-4">
            {[
              ["Método", "#metodo"],
              ["Diferenciais", "#diferenciais"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
