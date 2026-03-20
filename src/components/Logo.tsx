const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
    {/* Icon mark */}
    <div className="relative w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden group-hover:border-accent/40 transition-colors">
      {/* Abstract "puzzle piece fitting" shape — software that fits */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Two interlocking shapes representing custom-fit */}
        <path
          d="M6 8C6 6.9 6.9 6 8 6h5c1.1 0 2 .9 2 2v3a2 2 0 104 0V8c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3a2 2 0 10-4 0v3c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8z"
          className="fill-accent"
          opacity="0.9"
        />
      </svg>
    </div>

    {/* Wordmark */}
    <span className="text-lg font-bold tracking-tight text-primary-foreground">
      insider<span className="text-accent">blue</span>
    </span>
  </a>
);

export default Logo;
