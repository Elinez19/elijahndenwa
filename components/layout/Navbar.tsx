"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/ui/CtaButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  const getIsActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && !activeHash;
    }
    if (href.startsWith('/#')) {
      return pathname === '/' && activeHash === href.replace('/', '');
    }
    return pathname === href;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work-gallery" },
    { name: "Hire Me", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div 
              className="bg-[#30231D] text-[#F1C865] px-6 py-2.5 font-serif font-bold text-lg md:text-xl relative z-10"
              style={{ clipPath: 'polygon(2% 4%, 15% 1%, 30% 6%, 45% 2%, 60% 7%, 80% 3%, 98% 6%, 96% 94%, 85% 92%, 70% 98%, 55% 93%, 40% 97%, 25% 91%, 10% 96%, 1% 94%)' }}
            >
              Elijah Ndenwa
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-12 text-[#30231D]">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (link.href.startsWith('/#')) {
                        setActiveHash(link.href.replace('/', ''));
                      } else {
                        setActiveHash('');
                      }
                    }}
                    className="hover:text-[#30231D]/70 transition-colors text-lg font-bold tracking-wide"
                  >
                    {link.name}
                  </Link>
                  {/* Yellow scribble underline for active link */}
                  {getIsActive(link.href) && (
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#F1C865]" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q30,10 50,4 T70,8 T100,4" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
             <CtaButton
                href="https://calendly.com/elijahndenwa/30min"
                target="_blank" 
                rel="noopener noreferrer"
                variant="dark"
                className="py-2.5 px-6 text-sm"
              >
                Book A Call
              </CtaButton>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  if (link.href.startsWith('/#')) {
                    setActiveHash(link.href.replace('/', ''));
                  } else {
                    setActiveHash('');
                  }
                }}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-bold transition-colors",
                  getIsActive(link.href) 
                    ? "text-[#F1C865] bg-black/5" 
                    : "hover:bg-black/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <CtaButton
              href="https://calendly.com/elijahndenwa/30min"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              variant="dark"
              className="w-full mt-4 py-3"
            >
              Book A Call
            </CtaButton>
          </div>
        </div>
      )}
    </nav>
  );
}
