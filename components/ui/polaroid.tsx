import Image from "next/image";

export function Polaroid({ src, alt, className, rotation = 0, tapeTopRight = false, tapeTopLeft = false, tapeBottomRight = false, caption }: { src: string, alt: string, className?: string, rotation?: number, tapeTopRight?: boolean, tapeTopLeft?: boolean, tapeBottomRight?: boolean, caption?: string }) {
  return (
    <div 
      className={`relative bg-[#fcf9ec] p-3 pb-8 md:p-4 md:pb-12 shadow-md border border-black/10 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {tapeTopRight && (
        <div className="absolute -top-3 -right-3 w-12 h-5 bg-[#d8ceb3]/80 rotate-12 z-10 backdrop-blur-sm shadow-sm" />
      )}
      {tapeTopLeft && (
        <div className="absolute -top-3 -left-3 w-12 h-5 bg-[#d8ceb3]/80 -rotate-12 z-10 backdrop-blur-sm shadow-sm" />
      )}
      {tapeBottomRight && (
        <div className="absolute -bottom-3 -right-3 w-12 h-5 bg-[#d8ceb3]/80 -rotate-12 z-10 backdrop-blur-sm shadow-sm" />
      )}
      
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <div className="absolute bottom-2 md:bottom-4 left-0 w-full text-center font-sans text-xs md:text-sm text-foreground opacity-80" style={{ fontFamily: "var(--font-serif)" }}>
          {caption}
        </div>
      )}
    </div>
  );
}
