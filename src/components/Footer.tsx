const Footer = () => {
  return (
    <footer className="py-12 bg-navy-deep border-t border-primary-foreground/5">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold text-primary-foreground tracking-tight">
          insider<span className="text-accent">blue</span>
        </span>
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Insiderblue. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
