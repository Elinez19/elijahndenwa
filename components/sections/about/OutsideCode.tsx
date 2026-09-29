import Image from "next/image";

export function OutsideCode() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-20 py-24">
      <div className="space-y-6 mb-16">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Outside The Code</h2>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#F1C865] rounded-full opacity-80 -z-10 transform -rotate-1" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-4/3 w-full max-w-lg mx-auto rounded-2xl overflow-hidden border-12 border-[#30231D] shadow-2xl bg-[#30231D] p-2 flex justify-center items-center">
          {/* Vintage TV mockup */}
          <div className="relative w-full h-full border-4 border-[#4A3A31] rounded-xl overflow-hidden bg-black flex flex-col justify-center gap-1 p-1">
            <div className="grid grid-cols-2 gap-1 h-full relative">
               <div className="relative w-full h-full bg-slate-900 rounded-sm">
                 <Image src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=500&h=300&fit=crop" alt="TV Show" fill className="object-cover opacity-90" />
               </div>
               <div className="relative w-full h-full bg-slate-900 rounded-sm">
                 <Image src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=300&fit=crop" alt="TV Show" fill className="object-cover opacity-90" />
               </div>
               <div className="relative w-full h-full bg-slate-900 rounded-sm col-span-2">
                 <Image src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=300&fit=crop" alt="TV Show" fill className="object-cover opacity-90" />
               </div>
               
               {/* CRT Scanline Overlay */}
               <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay"></div>
            </div>
            
            {/* TV dials */}
            <div className="absolute right-2 top-2 bottom-2 w-10 bg-[#30231D] rounded flex flex-col items-center py-4 gap-4 border-l border-[#4A3A31] shadow-inner">
               <div className="w-6 h-6 rounded-full bg-[#1A130F] border-2 border-[#4A3A31] shadow-inner cursor-pointer" />
               <div className="w-6 h-6 rounded-full bg-[#1A130F] border-2 border-[#4A3A31] shadow-inner cursor-pointer" />
               <div className="mt-auto w-full px-2 flex flex-col gap-1">
                 <div className="w-full h-1 bg-[#1A130F] rounded" />
                 <div className="w-full h-1 bg-[#1A130F] rounded" />
                 <div className="w-full h-1 bg-[#1A130F] rounded" />
                 <div className="w-full h-1 bg-[#1A130F] rounded" />
               </div>
            </div>
          </div>
          
          <div className="absolute -top-3 left-4 bg-[#F1C865] px-4 py-1 text-sm font-bold rotate-[-5deg] shadow-md border border-[#30231D]/20 z-10 text-[#30231D]">
            Let's watch a movie!
          </div>
        </div>
        
        <div className="space-y-6 text-foreground/80 font-medium text-lg max-w-xl">
          <p>
            When I'm not writing code, you can usually find me buried in a good book, getting lost in a movie, or speaking to inspire others.
          </p>
          <p>
            I love stories—whether they're unfolding on a screen, captured on the pages of a book, or shared on a stage to motivate an audience.
          </p>
          <p>
            Basically, if it involves learning something new, sparking creativity, or encouraging people to reach their potential, I'm all in.
          </p>
          <div className="pt-4 flex gap-4 text-5xl">
            <span>📚</span>
            <span>🍿</span>
            <span>🎙️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
