import { portfolioData } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-[#FCF9EC] py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold font-serif text-[#30231D] italic">Elijah.</span>
        </div>
        
        <div className="flex space-x-6">
          <a href={`mailto:${portfolioData.contact.email}`} className="text-sm font-bold text-[#30231D] hover:text-[#30231D]/70 transition-colors">
            Email
          </a>
          <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#30231D] hover:text-[#30231D]/70 transition-colors">
            LinkedIn
          </a>
          <a href={`https://wa.me/${portfolioData.contact.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#30231D] hover:text-[#30231D]/70 transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
