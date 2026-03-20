interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "", variant = "light" }: LogoProps) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  const iconBg = variant === "light" ? "bg-accent/10 border-accent/20 group-hover:border-accent/40" : "bg-accent/10 border-accent/20 group-hover:border-accent/30";

  return (
    <a href="#" className={`flex items-center gap-2.5 group ${className}`}>
      <div className={`relative w-8 h-8 rounded-lg border flex items-center justify-center overflow-hidden transition-colors ${iconBg}`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-[18px] h-[18px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Code brackets < /> stylized */}
          <path
            d="M12 8L5 16l7 8"
            className="stroke-accent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 8l7 8-7 8"
            className="stroke-accent"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 6l-4 20"
            className="stroke-accent"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <span className={`text-lg font-bold tracking-tight ${textColor}`}>
        insiderblue
      </span>
    </a>
  );
};

export default Logo;
