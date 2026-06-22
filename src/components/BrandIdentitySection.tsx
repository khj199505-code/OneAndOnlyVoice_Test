import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Compass } from "lucide-react";

interface ScrollRevealBrandTextProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollRevealBrandText: React.FC<ScrollRevealBrandTextProps> = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 30%"],
  });

  const lines = [
    "Find your voice.",
    "Know your sound.",
    "Refine your art."
  ];

  let charCounter = 0;
  const totalChars = lines.reduce((acc, line) => acc + line.replace(/\s/g, "").length, 0);

  return (
    <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter antialiased flex flex-col gap-1 select-none">
      {lines.map((lineText, lineIdx) => {
        const words = lineText.split(" ");
        return (
          <div key={lineIdx} className="flex flex-wrap items-baseline">
            {words.map((word, wordIdx) => {
              const chars = word.split("");
              return (
                <span key={wordIdx} className="inline-block mr-[0.25em] whitespace-nowrap">
                  {chars.map((char, charIdx) => {
                    const currentAbsoluteIndex = charCounter;
                    charCounter++;
                    
                    const start = currentAbsoluteIndex / totalChars;
                    const end = (currentAbsoluteIndex + 1) / totalChars;
                    return (
                      <Character key={charIdx} progress={scrollYProgress} range={[start, end]}>
                        {char}
                      </Character>
                    );
                  })}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
};

interface CharacterProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  // High fidelity transition from soft metallic silver (#cbd5e1) to bold black (#1a1a1a)
  const color = useTransform(progress, range, ["#cbd5e1", "#1a1a1a"]);
  return (
    <motion.span 
      style={{ color }} 
      className="inline-block transition-colors duration-75"
    >
      {children}
    </motion.span>
  );
};

export const BrandIdentitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={sectionRef}
      id="brand-identity-spline"
      className="relative w-full h-[100vh] min-h-[650px] bg-[#fdfdfd] overflow-hidden border-t border-neutral-100"
    >
      {/* 3D Spline Interactive Environment Layer */}
      <div className="absolute inset-0 w-full h-full z-0 bg-neutral-50">
        <iframe 
          src="https://my.spline.design/dunes-aqyYf4Aqw3CMC470uA4Km62O/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="w-full h-full scale-[1.01]" 
          title="One&amp;OnlyVoice 3D Spline Dunes Scene"
          allow="autoplay; fullscreen"
        />
        {/* Soft overlay gradient to protect legibility of bottom layout if necessary */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
      </div>



      {/* Cinematic Overlaid Text Layout (Standard Pointer-Events-None wrapper for 3D navigation) */}
      <div className="absolute inset-0 z-10 p-8 sm:p-12 md:p-16 flex flex-col justify-end pointer-events-none">
        
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-[1400px] mx-auto">
          
          {/* BIG Bottom Left text block */}
          <div className="text-left select-text max-w-xl md:max-w-2xl pointer-events-auto">
            <ScrollRevealBrandText sectionRef={sectionRef} />
            <p className="font-score font-light text-xs sm:text-sm text-neutral-500/85 tracking-tight mt-5 max-w-md leading-relaxed break-keep">
              가장 나다운 목소리를 발견하고, 깊이 있게 이해하며, <br />
              마침내 예술로 완성될 수 있도록, 우리는 언제나 진심을 다합니다.
            </p>
          </div>

          {/* Elegant Bottom Right branding block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="md:text-right text-left pb-1 flex flex-col md:items-end pointer-events-auto gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f37022] animate-ping" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#1a1a1a] uppercase">
                BRAND SIGNATURE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-trendy font-bold italic text-neutral-900 tracking-tight leading-none antialiased">
              One&amp;OnlyVoice
            </h2>
            
            <div className="font-mono text-[9px] text-neutral-400 tracking-[0.1em] uppercase mt-1">
              EST. 2026 • HIGH-END VOCAL CURATION
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
