import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CtaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "dark" | "light";
  withArrow?: boolean;
}

export function CtaButton({ children, variant = "dark", withArrow = false, className, ...props }: CtaButtonProps) {
  const isDark = variant === "dark";
  
  return (
    <a
      className={cn(
        "relative inline-flex items-center justify-center font-serif text-xl px-10 py-3 rounded-full transition-transform duration-300 hover:scale-105 group border-none",
        isDark 
          ? "bg-[#30231D] text-[#F1C865]" 
          : "bg-[#F1C865] text-[#30231D]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <ArrowUpRight className="ml-2 w-5 h-5" />}
      </span>
      
      {/* Top Left Tape */}
      <div 
        className="absolute -top-1 -left-3 w-10 h-4 bg-[#EBD8A3] transform -rotate-[30deg] z-20 opacity-90 border-r border-b border-black/5" 
        style={{ clipPath: 'polygon(5% 0%, 98% 5%, 95% 100%, 0% 92%)' }} 
      />
      
      {/* Bottom Right Tape */}
      <div 
        className="absolute -bottom-1 -right-3 w-10 h-4 bg-[#EBD8A3] transform -rotate-[30deg] z-20 opacity-90 border-r border-b border-black/5" 
        style={{ clipPath: 'polygon(0% 5%, 100% 0%, 95% 95%, 2% 100%)' }} 
      />
    </a>
  );
}
