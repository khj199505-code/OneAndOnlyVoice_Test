/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Instagram, Mail, Menu, Volume2, Mic2, Star, ChevronDown, MoveRight, X, Quote, Sparkles, Clock, Users, Activity, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Maximize2, Layers, Grid, User, Building2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { CoachesSection } from "./components/CoachesSection";
import { MomentsSection } from "./components/MomentsSection";
import { BrandIdentitySection } from "./components/BrandIdentitySection";
import { InteractiveReviewsSection } from "./components/InteractiveReviewsSection";

// --- Components ---

const IntroOverlay = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  const [isExiting, setIsExiting] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => {
        if (isExiting) {
          onComplete();
        }
      }}
      className="fixed inset-0 z-[9999] bg-black group"
    >
      {!isExiting && (
        <iframe 
          src='https://my.spline.design/hellodistortingintro-gEGx10LrOQ898UfjBzB8rPbG/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-auto"
        />
      )}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 10 : 0 }}
          transition={{ duration: 0.4, delay: isExiting ? 0 : 0.8 }}
          onClick={() => setIsExiting(true)}
          className="border border-white/20 text-white px-5 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all active:scale-90"
        >
          Enter Site
        </motion.button>
        <div className="w-[1px] h-8 bg-white/20" />
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      const sections = ["hero", "philosophy", "about", "program", "coaches", "moments", "archive", "interviews", "booking"];
      let activeSectionId = "hero";
      const navbarTriggerY = 50;
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarTriggerY && rect.bottom >= navbarTriggerY) {
            activeSectionId = id;
            break;
          }
        }
      }
      
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top <= navbarTriggerY && rect.bottom >= navbarTriggerY) {
          activeSectionId = "footer";
        }
      }
      
      const darkSections = ["program", "moments", "footer"];
      setIsThemeDark(darkSections.includes(activeSectionId));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? isThemeDark
            ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
            : "bg-white/80 backdrop-blur-xl py-4 border-b border-black/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-start">
          <div className="h-10 flex items-center gap-4">
            <span className={`font-logo font-bold text-[18px] md:text-[21px] tracking-tight uppercase leading-none transition-colors duration-500 ${
              isThemeDark ? "text-white" : "text-black"
            }`}>
              ONE AND ONLY VOICE
            </span>
          </div>
          
          <div className="hidden md:flex items-start gap-8 lg:gap-12">
            {/* ABOUT DROP-DOWN */}
            <div className="flex flex-col items-center group">
              <div className="h-10 flex items-center">
                <button 
                  className={`text-[13px] font-medium flex items-center gap-1 hover:text-[#f37022] hover:scale-102 transition-all duration-300 cursor-pointer ${
                    isThemeDark ? "text-white/70" : "text-black/60"
                  }`}
                >
                  About
                  <ChevronDown size={13} className="opacity-40 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </div>
              
              <div className="grid grid-rows-[0fr] opacity-0 pointer-events-none group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                <div className="overflow-hidden flex flex-col items-center gap-1.5 mt-2 min-h-0">
                  <a 
                    href="#philosophy"
                    className={`text-[11px] font-semibold tracking-wide transition-all duration-200 text-center ${
                      isThemeDark 
                        ? "text-white/40 hover:text-[#f37022]" 
                        : "text-black/40 hover:text-[#f37022]"
                    }`}
                  >
                    Philosophy
                  </a>
                  <a 
                    href="#about"
                    className={`text-[11px] font-semibold tracking-wide transition-all duration-200 text-center ${
                      isThemeDark 
                        ? "text-white/40 hover:text-[#f37022]" 
                        : "text-black/40 hover:text-[#f37022]"
                    }`}
                  >
                    Signature
                  </a>
                </div>
              </div>
            </div>

            {/* PROGRAM MAP */}
            <div className="h-10 flex items-center">
              <a 
                href="#program"
                className={`text-[13px] font-medium hover:text-[#f37022] hover:scale-105 active:scale-95 transition-all duration-300 ${
                  isThemeDark ? "text-white/70" : "text-black/60"
                }`}
              >
                Program
              </a>
            </div>

            {/* TEAM MAP */}
            <div className="h-10 flex items-center">
              <a 
                href="#coaches"
                className={`text-[13px] font-medium hover:text-[#f37022] hover:scale-105 active:scale-95 transition-all duration-300 ${
                  isThemeDark ? "text-white/70" : "text-black/60"
                }`}
              >
                Team
              </a>
            </div>

            {/* ARCHIVE DROP-DOWN */}
            <div className="flex flex-col items-center group">
              <div className="h-10 flex items-center">
                <button 
                  className={`text-[13px] font-medium flex items-center gap-1 hover:text-[#f37022] hover:scale-102 transition-all duration-300 cursor-pointer ${
                    isThemeDark ? "text-white/70" : "text-black/60"
                  }`}
                >
                  Archive
                  <ChevronDown size={13} className="opacity-40 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </div>
              
              <div className="grid grid-rows-[0fr] opacity-0 pointer-events-none group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                <div className="overflow-hidden flex flex-col items-center gap-1.5 mt-2 min-h-0">
                  <a 
                    href="#moments"
                    className={`text-[11px] font-semibold tracking-wide transition-all duration-200 text-center ${
                      isThemeDark 
                        ? "text-white/40 hover:text-[#f37022]" 
                        : "text-black/40 hover:text-[#f37022]"
                    }`}
                  >
                    Story
                  </a>
                  <a 
                    href="#archive"
                    className={`text-[11px] font-semibold tracking-wide transition-all duration-200 text-center ${
                      isThemeDark 
                        ? "text-white/40 hover:text-[#f37022]" 
                        : "text-black/40 hover:text-[#f37022]"
                    }`}
                  >
                    Review
                  </a>
                  <a 
                    href="#interviews"
                    className={`text-[11px] font-semibold tracking-wide transition-all duration-200 text-center ${
                      isThemeDark 
                        ? "text-white/40 hover:text-[#f37022]" 
                        : "text-black/40 hover:text-[#f37022]"
                    }`}
                  >
                    Interview
                  </a>
                </div>
              </div>
            </div>

            <div className="h-10 flex items-center">
              <a 
                href="#booking"
                className={`text-[13px] font-medium px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 select-none cursor-pointer ${
                  isThemeDark 
                    ? "bg-white text-black hover:bg-neutral-200" 
                    : "bg-black text-white hover:bg-hermes"
                }`}
              >
                Booking
              </a>
            </div>
          </div>

          <div className="h-10 flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden active:scale-90 transition-all p-1.5 hover:text-[#f37022] ${
                isThemeDark ? "text-white" : "text-black"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Modern, Translucent Semi-transparent Right Drawer for Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Soft Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/15 dark:bg-black/40 backdrop-blur-[2px] z-[80] md:hidden"
            />

            {/* Elegant Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className={`fixed top-0 right-0 h-full w-[280px] z-[90] md:hidden border-l shadow-2xl flex flex-col justify-between p-6 pt-24 ${
                isThemeDark 
                  ? "bg-black/85 border-white/[0.06] backdrop-blur-2xl" 
                  : "bg-[#fcfbf7]/90 border-black/[0.05] backdrop-blur-2xl"
              }`}
            >
              <div className="flex flex-col gap-6">
                
                {/* About Group */}
                <div className="space-y-2">
                  <span className={`text-[11px] font-semibold tracking-wider uppercase opacity-40 block ${
                    isThemeDark ? "text-white" : "text-black"
                  }`}>
                    About
                  </span>
                  <div className="pl-3.5 flex flex-col gap-2.5 border-l border-black/[0.05] dark:border-white/[0.05]">
                    <a 
                      href="#philosophy" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                        isThemeDark 
                          ? "text-white/60 hover:text-[#f37022]" 
                          : "text-black/60 hover:text-[#f37022]"
                      }`}
                    >
                      Philosophy
                    </a>
                    <a 
                      href="#about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                        isThemeDark 
                          ? "text-white/60 hover:text-[#f37022]" 
                          : "text-black/60 hover:text-[#f37022]"
                      }`}
                    >
                      Signature
                    </a>
                  </div>
                </div>

                {/* Program */}
                <div className="pt-1.5 pb-1 border-b border-black/[0.03] dark:border-white/[0.03]">
                  <a 
                    href="#program" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                      isThemeDark 
                        ? "text-white/70 hover:text-[#f37022]" 
                        : "text-black/65 hover:text-[#f37022]"
                    }`}
                  >
                    Program
                  </a>
                </div>

                {/* Team */}
                <div className="pt-1.5 pb-1 border-b border-black/[0.03] dark:border-white/[0.03]">
                  <a 
                    href="#coaches" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                      isThemeDark 
                        ? "text-white/70 hover:text-[#f37022]" 
                        : "text-black/65 hover:text-[#f37022]"
                    }`}
                  >
                    Team
                  </a>
                </div>

                {/* Archive Group */}
                <div className="space-y-2 pt-2">
                  <span className={`text-[11px] font-semibold tracking-wider uppercase opacity-40 block ${
                    isThemeDark ? "text-white" : "text-black"
                  }`}>
                    Archive
                  </span>
                  <div className="pl-3.5 flex flex-col gap-2.5 border-l border-black/[0.05] dark:border-white/[0.05]">
                    <a 
                      href="#moments" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                        isThemeDark 
                          ? "text-white/60 hover:text-[#f37022]" 
                          : "text-black/60 hover:text-[#f37022]"
                      }`}
                    >
                      Story
                    </a>
                    <a 
                      href="#archive" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                        isThemeDark 
                          ? "text-white/60 hover:text-[#f37022]" 
                          : "text-black/60 hover:text-[#f37022]"
                      }`}
                    >
                      Review
                    </a>
                    <a 
                      href="#interviews" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[13px] font-medium tracking-wide transition-colors duration-200 block ${
                        isThemeDark 
                          ? "text-white/60 hover:text-[#f37022]" 
                          : "text-black/60 hover:text-[#f37022]"
                      }`}
                    >
                      Interview
                    </a>
                  </div>
                </div>

              </div>

              <div className="flex flex-col gap-3.5 mt-8">
                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-center font-medium text-sm py-3 rounded-full hover:scale-103 active:scale-95 transition-all duration-300 shadow-md ${
                    isThemeDark
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-black text-white hover:bg-hermes"
                  }`}
                >
                  Booking
                </a>
                <div className={`text-center font-mono text-[9px] font-extrabold tracking-widest mt-1 opacity-25 ${
                  isThemeDark ? "text-white" : "text-black"
                }`}>
                  ONE AND ONLY EXPERIENCE
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 bg-white">
        {loadSpline && (
          <iframe 
            src='https://my.spline.design/animatedbackgroundgradientforweb-chMWxNpAWWfrg5mtXYQRrTzE/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full opacity-40 mix-blend-multiply"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
      </div>

      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-end pt-32 md:pt-48 pb-16 md:pb-24 lg:pb-28 pointer-events-none"
      >
        {/* ========================================================================= */}
        {/* DESKTOP HERO LAYOUT (Visible md and up) */}
        {/* ========================================================================= */}
        <div className="hidden md:grid grid-cols-[1fr_max-content] gap-x-12 lg:gap-x-16 gap-y-4 lg:gap-y-6 xl:gap-y-8 items-baseline pointer-events-auto select-none">
          {/* Row 1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:text-[90px] font-display font-medium tracking-tight text-black leading-none whitespace-nowrap">
            THE ONE.
          </h1>
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex-1 h-[1px] bg-black/60" />
            <p className="text-[12px] lg:text-[13px] xl:text-sm text-black font-sans font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] whitespace-nowrap">
              소리를 연구하고 울림을 가르칩니다
            </p>
          </div>

          {/* Row 2 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:text-[90px] font-display font-medium tracking-tight text-black leading-none whitespace-nowrap">
            THE ONLY.
          </h1>
          <div className="w-full flex flex-col items-start">
            <p className="text-[15.5px] min-[360px]:text-[17px] min-[375px]:text-[18.2px] lg:text-xl xl:text-2xl font-sans text-black/70 leading-none font-light whitespace-nowrap">
              세상에 단 하나뿐인 당신의 목소리를 찾아서.
            </p>
            <span className="text-[10px] lg:text-xs font-medium text-black/40 block uppercase tracking-widest leading-none mt-2 text-left">
              HIGH-END Vocal Coaching Team
            </span>
          </div>

          {/* Row 3 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:text-[90px] font-display font-medium tracking-tight text-black leading-none whitespace-nowrap">
            YOUR VOICE.
          </h1>
          <div className="w-full flex justify-start">
            <a href="#philosophy" className="inline-flex items-center gap-6 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.5em] text-black border-b-2 border-hermes/20 pb-1.5 leading-none group transition-all duration-300">
              Discover More <span className="group-hover:translate-x-3 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE HERO LAYOUT (Visible below md) */}
        {/* ========================================================================= */}
        <div className="md:hidden flex flex-col space-y-10 w-full pointer-events-auto">
          {/* 1. Big Title Block */}
          <div className="w-full">
            <h1 className="text-[clamp(1.8rem,10.5vw,3.6rem)] font-display font-medium tracking-tight text-black leading-[1.05] flex flex-col">
              <span className="whitespace-nowrap">THE ONE.</span>
              <span className="whitespace-nowrap">THE ONLY.</span>
              <span className="whitespace-nowrap">YOUR VOICE.</span>
            </h1>
          </div>

          {/* 2. Brand Block combining the Line & Sentence to match their widths precisely */}
          <div className="w-fit max-w-full flex flex-col items-start space-y-4">
            {/* TOP row: 가로선 + 소리를 연구하고 울림을 가르칩니다 */}
            <div className="w-full flex items-center justify-between gap-3">
              <div className="flex-1 h-[1px] bg-black/60 min-w-[20px]" />
              <p className="text-[clamp(10px,3.1vw,13px)] text-black font-sans font-bold uppercase tracking-[0.25em] whitespace-nowrap leading-none">
                소리를 연구하고 울림을 가르칩니다
              </p>
            </div>

            {/* BOTTOM row: 세상에 단 하나뿐인 당신의 목소리를 찾아서 */}
            <div className="w-full">
              <p className="text-[clamp(13.5px,4.3vw,18.5px)] font-sans text-black/70 leading-none font-light whitespace-nowrap">
                세상에 단 하나뿐인 당신의 목소리를 찾아서.
              </p>
            </div>
          </div>

          {/* 3. Sub title & Action Link */}
          <div className="flex flex-col items-start space-y-8 pl-1">
            <span className="text-[10px] font-medium text-black/40 block uppercase tracking-widest leading-none">
              HIGH-END Vocal Coaching Team
            </span>
            <a href="#philosophy" className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-black border-b-2 border-hermes/20 pb-2 w-fit group">
              Discover More <span className="group-hover:translate-x-3 transition-transform">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface ScrollRevealParagraphProps {
  paragraphs: (string | React.ReactNode)[];
}

const ScrollRevealParagraph: React.FC<ScrollRevealParagraphProps> = ({ paragraphs }) => {
  return (
    <div className="space-y-6 max-w-lg">
      {paragraphs.map((para, pIdx) => (
        <motion.p
          key={pIdx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: pIdx * 0.15 }}
          className="text-[14px] md:text-[15px] font-sans font-medium text-black/60 leading-relaxed tracking-tighter text-justify break-keep"
        >
          {para}
        </motion.p>
      ))}
    </div>
  );
};

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const principles = [
    { 
      id: "01",
      title: "Originality", 
      subtitle: "고유성의 발견",
      desc: "100명의 사람이 있다면, 100개의 다른 목소리가 있습니다. 우리는 획일화된 창법을 주입하지 않습니다. 100인에게는 100개의 다른 정답이 있기에, 당신 본연의 톤과 질감을 찾아내 가장 매력적인 무기로 확장하는 데 집중합니다."
    },
    { 
      id: "02",
      title: "Science", 
      subtitle: "과학적 접근",
      desc: "추상적인 감각이 아닌, 데이터와 신체 원리로 증명합니다. 감각과 경험에만 의존하는 수업은 지양합니다. 목소리가 만들어지는 해부학적 구조와 음성 과학을 바탕으로, 당신의 성대를 안전하고 오랫동안 지킬 수 있는 올바른 훈련을 설계합니다."
    },
    { 
      id: "03",
      title: "Trend", 
      subtitle: "트렌드와 예술성의 균형",
      desc: "유행을 읽되, 휩쓸리지 않는 보컬 캐릭터를 구축합니다. 빠르게 변하는 K-POP과 현대 대중음악 시장의 흐름을 영리하게 반영합니다. 하지만 단순히 유행을 좇는 것을 넘어, 시대가 원하면서도 쉽게 대체되지 않을 당신만의 스타일을 함께 고민합니다."
    },
    { 
      id: "04",
      title: "Research", 
      subtitle: "지속적인 연구",
      desc: "좋은 수업은 한 시간의 세션으로 끝나지 않습니다. 우리의 교육은 강의실 문을 나서는 순간에도 계속됩니다. 학생의 사소한 변화까지 세밀하게 기록하고, 강사진이 함께 모여 보컬 분석과 리뷰를 진행하며 더 나은 교육 방향을 끊임없이 연구합니다."
    },
    { 
      id: "05",
      title: "Independence", 
      subtitle: "자립적인 보컬리스트",
      desc: "선생님이 있을 때만 잘 부르는 노래는 의미가 없습니다. 무대 위나 녹음 부스 안에서도 발성과 스타일을 스스로 조절할 수 있도록 보컬리스트로서의 완전한 자립을 돕습니다.\n\n막연한 위로나 단순한 케어를 넘어, 우리는 당신이 홀로 설 수 있을 때까지 뒤에서 흔들림 없이 받쳐주는 가장 단단한 버팀목이 되려 합니다. 스스로 소리의 길을 찾아 완벽히 자립하게 만드는 것, 그것이 원앤온리보이스가 믿는 교육의 본질입니다."
    },
  ];

  return (
    <section ref={sectionRef} id="philosophy" className="py-32 md:py-64 bg-white scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-12"
          >
             <div className="space-y-4">
                <span className="section-label">About Us</span>
                <div className="flex flex-col gap-0 select-none text-left tracking-tight">
                  <div className="font-dm-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black">What</div>
                  <div className="font-signature text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-black mt-0 sm:mt-1 md:mt-2">We Believe</div>
                </div>
             </div>
             <ScrollRevealParagraph 
               paragraphs={[
                 "보컬 트레이닝은 단순히 고음을 내거나 발성을 바꾸는 과정만은 아닙니다. 중요한 것은 이 사람이 어떤 목소리를 가지고 있고, 어떤 음악에서 가장 설득력 있게 들리는지를 이해하는 것입니다.",
                 <span>
                   <strong className="font-dm-sans font-extrabold text-black tracking-tight mr-1">ONE AND ONLY VOICE</strong>는 개인의 목소리, 성향, 목표, 음악적 취향을 함께 분석하여 기술적인 훈련을 넘어 나에게 맞는 보컬 아이덴티티를 찾아갑니다.
                 </span>
               ]}
             />
          </motion.div>

          <div className="lg:col-span-7">
             <div className="flex flex-col">
               {principles.map((item, i) => (
                 <motion.div 
                   key={item.id}
                   initial={{ opacity: 0, y: 30, scale: 0.94 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.08 }}
                   viewport={{ once: true, margin: "-100px" }}
                   className="group border-b border-black/5 py-8 flex flex-col gap-4 hover:bg-gray-50/50 transition-all px-6 -mx-6 rounded-xl"
                 >
                   <div className="space-y-1">
                     <span className="text-[10px] font-mono font-bold text-hermes/40 tracking-[0.4em] uppercase">{item.id}</span>
                     <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-hermes transition-colors uppercase tracking-tight">{item.title}</h3>
                     <p className="text-[11px] text-black/40 font-bold uppercase tracking-widest leading-none">{item.subtitle}</p>
                   </div>
                   <p className="text-[14px] md:text-[15px] font-sans text-black/80 leading-relaxed font-medium break-keep">
                     {item.desc}
                   </p>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TiltAccordionCard = ({ sig, i, isActive, onMouseEnter, onMouseLeave, onClick, imageErrors, setImageErrors, fallbackImages }: any) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate percentage (-1 to 1) with respect to center
    const xPct = mouseX / (width / 2);
    const yPct = mouseY / (height / 2);

    // Dynamic rotation: maximum 10-12 degrees tilt
    const tiltX = -yPct * 12; // Inverted to follow standard desktop mouse mechanics
    const tiltY = xPct * 12;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    onMouseLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? "15px" : "0px"})`,
        transition: isHovered 
          ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), flex 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, shadow 0.4s ease"
          : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), flex 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, shadow 0.4s ease",
      }}
      className={`relative rounded-[36px] overflow-hidden cursor-pointer select-none flex flex-col justify-between p-8 md:p-10 border group ${
        isActive 
          ? "flex-[3] border-white/20 shadow-[0_45px_90px_-20px_rgba(0,0,0,0.5),0_15px_40px_-15px_rgba(243,112,34,0.15)]" 
          : "flex-[1] border-white/[0.05] hover:border-white/15 shadow-md"
      }`}
    >
      {/* Background Image Container with parallax offset */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ transform: "translateZ(-25px) scale(1.12)", transformStyle: "preserve-3d" }}
      >
        <img 
          src={imageErrors[sig.image] ? fallbackImages[sig.image] : sig.image} 
          onError={() => setImageErrors((prev: any) => ({ ...prev, [sig.image]: true }))}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActive 
              ? "scale-105 filter grayscale-[10%] brightness-[0.65] contrast-[1.05]" 
              : "scale-100 filter grayscale-[40%] brightness-[0.4] group-hover:brightness-[0.45] group-hover:grayscale-[20%]"
          }`}
          alt=""
        />
        <div className={`absolute inset-0 transition-opacity duration-500 bg-black/45 ${
          isActive ? "opacity-20" : "opacity-55"
        }`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      </div>

      {/* Large Background Watermark Number deep inside card */}
      <div 
        className={`absolute -right-8 -bottom-10 font-sans font-black text-[180px] leading-none pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none z-10 ${
          isActive ? "text-white/[0.04] scale-110" : "text-white/[0.012] scale-100"
        }`}
        style={{ transform: "translateZ(-10px)" }}
      >
        {sig.id}
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}>
        {/* Row: Badge + Motif */}
        <div className="flex items-center justify-between">
          {/* Badge circle */}
          <div 
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono font-black text-xs sm:text-sm transition-all duration-500 ${
              isActive 
                ? "bg-[#f37022] text-white shadow-[0_4px_16px_rgba(243,112,34,0.3)] scale-105" 
                : "bg-white/10 border border-white/10 text-white/50"
            }`}
          >
            {sig.id}
          </div>

          {/* Symmetrical line accent or icon */}
          <div className="flex items-center gap-2">
            <span className={`font-mono text-xs sm:text-sm font-black tracking-widest transition-colors duration-500 ${isActive ? 'text-[#f37022]/60' : 'text-white/20'}`}>
              ////
            </span>
            {/* Interactive Visual Icon */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'text-[#f37022] bg-[#f37022]/20 scale-110' : 'text-white/35'}`}>
              {i === 0 && <Sparkles className="w-4 h-4" />}
              {i === 1 && <Mic2 className="w-4 h-4" />}
              {i === 2 && <Users className="w-4 h-4" />}
              {i === 3 && <Activity className="w-4 h-4" />}
            </div>
          </div>
        </div>

        {/* Topic Tag */}
        <div className="mt-8">
          <span className={`font-mono text-[10px] sm:text-[11px] font-black tracking-[0.16em] uppercase block transition-colors duration-500 ${isActive ? 'text-white/95' : 'text-white/45'}`}>
            {sig.topic}
          </span>
        </div>
      </div>

      {/* Subheadings and body - Animates inside the flex container */}
      <div className="space-y-4 relative z-10" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        <div 
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActive 
              ? "opacity-100 transform translate-y-0 max-h-[300px]" 
              : "opacity-0 transform translate-y-4 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          <h3 className="font-sans font-black text-[17px] md:text-[19px] text-white leading-snug tracking-tight break-keep text-left whitespace-pre-line">
            {sig.subheading}
          </h3>
          <p className="font-sans font-medium text-[12px] md:text-[13px] text-white/70 leading-relaxed text-left tracking-normal break-keep mt-3">
            {sig.body}
          </p>
        </div>

        {/* Visual clue for collapsed panels */}
        {!isActive && (
          <div className="text-[10px] text-white/30 font-black tracking-[0.1em] font-mono flex items-center gap-2 pt-2 transition-opacity duration-300">
            <span>HOVER OR CLICK TO EXPAND</span>
            <span className="animate-pulse">→</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const signatures = [
    { 
      id: "01",
      topic: "석·박사 코치진의\n집요한 수업 연구",
      englishTopic: "DEEP DIVE INTO SOUND",
      subheading: `지식의 깊이에 안주하지 않고,\n매 순간 연구하는 태도가 수업을 바꿉니다.`,
      body: "전원 석·박사 출신의 코치진이 최신 보컬 트렌드와 음성 과학의 연구 흐름을 끊임없이 들여다보고 고민합니다. 저희는 화려한 학위에 안주하기보다, 소리를 대하는 진지한 태도와 집요한 연구 과정을 통해 지금 당신의 목소리에 가장 필요한 실질적인 해법을 매 순간 수업에 담아냅니다.",
      image: "https://postfiles.pstatic.net/MjAyNjA1MjNfMTIg/MDAxNzc5NDkzMDM0ODA5.-6C-vAm8HezlCaMldHE9S8FdwWJ-2M0bOyFBpIRjBggg.o98wPqIyzjbIe9T2qvrxara8WOJtfEQRnIZbbRlt_Psg.PNG/about_01.png?type=w773",
      metadata: {
        tool: "Voice Spectrogram Lab",
        core: "Subharmonic Synergy Engine",
        method: "Acoustic Diagnostics",
        frequency: "Resonant Peak Detection"
      }
    },
    { 
      id: "02",
      topic: "논리적인 수업과\n다정한 소통",
      englishTopic: "EVIDENCE-BASED TRAINING",
      subheading: `이론은 철저하게 과학적으로,\n피드백은 가장 가깝고 세밀하게.`,
      body: "모호한 느낌이나 추상적인 감에만 의존해 수강생을 혼란스럽게 하지 않습니다. '왜 소리가 뜻대로 안 되는지', '무엇을 어떻게 바꾸면 좋아지는지' 스스로 완벽히 이해하고 고개를 끄덕일 수 있을 때까지 차근차근 정리해 드립니다. 수업이 끝난 후 혼자 연습하는 시간에도 방향을 잃지 않도록 체계적인 훈련 루틴을 설계해 드리며, 일상에서도 지속적인 피드백과 소통을 통해 목소리의 변화를 함께 점검해 나갑니다.",
      image: "https://postfiles.pstatic.net/MjAyNjA1MjNfMjAz/MDAxNzc5NDkzMDM1MTU5.oksKR8291UF84Rq4IKJ-bcjNSqriU7MQh0GtbsjyMvog.xGt4Q01L5lcS_8yrhGAZOUHxdrr4C-G1dfzpLg8HKfUg.PNG/about_02.png?type=w773",
      metadata: {
        tool: "Physiological Biofeedback Device",
        core: "Glottic Closure Target Mode",
        method: "Laryngeal Mechanics Analysis",
        frequency: "Acoustic Overtones Balancer"
      }
    },
    { 
      id: "03",
      topic: "한 사람을 위한\n팀 보컬 리뷰 시스템",
      englishTopic: "ONE STUDENT, ALL DIRECTORS",
      subheading: `한 사람의 수업이 아닌,\n전문가 팀이 함께 책임지는 견고한 교육 설계.`,
      body: "원앤온리보이스의 모든 코치진은 주 1회 정기 피드백 회의를 통해 학생 한 명 한 명의 수업 내용과 보컬의 변화 과정을 소중하게 공유하고 분석합니다. 한 명의 주관적인 시선에 갇히지 않고, 여러 보컬 전문가의 다각도 관점과 정성을 모아 매주 더 깊이 있고 사려 깊은 교육 방향을 만들어갑니다.",
      image: "https://postfiles.pstatic.net/MjAyNjA1MjNfMjAz/MDAxNzc5NDkzMDM1MzQ1.sH3grRNXj5zdXrr3cIhv3r9hSWS1sBcGDr14VC3i9tkg.DFoKoMpcVQ8xx5ETGabGKEy92HpVyaQQ6y0yZ_ROmCog.PNG/about_03.png?type=w773",
      metadata: {
        tool: "Weekly Forum Audit System",
        core: "Cross-disciplinary Tuning Panel",
        method: "Co-direction Consensus Method",
        frequency: "Consolidated Vocal Goal Matrix"
      }
    },
    { 
      id: "04",
      topic: "원앤온리보이스 자체 개발\n퍼스널 보컬 분석 시스템",
      englishTopic: "PERSONAL VOCAL ANALYSIS",
      subheading: `눈에 보이지 않는 소리를 시각화하여,\n당신만의 고유한 보컬 유형을 찾아냅니다.`,
      body: "원앤온리보이스만의 체계적인 다차원 진단 시스템을 통해, 그동안 추상적으로만 표현되던 당신의 목소리를 정밀하게 분석합니다. 소리의 질감, 무게감, 긴장도 등 세밀하게 들여다보며 세상에 단 하나뿐인 당신만의 보컬 유형을 진단해 드립니다. 나의 소리 상태를 눈으로 확인하고 완벽히 이해하는 것부터, 가장 빠르고 안전한 나만의 커스텀 보컬 로드맵을 제안합니다.",
      image: "https://postfiles.pstatic.net/MjAyNjA1MjNfMTky/MDAxNzc5NDkzMDM1MTEw.zwxXrC8RLh29ItkUrQlCN44c4mNC0tpl5e1D1lJfCAgg.r8DatUKrmcHeN4Gh9WrqYa_9oAm0sfCcuZDrT7olwUMg.PNG/about_04.png?type=w773",
      metadata: {
        tool: "Multi-dimensional Scanner Suite",
        core: "Timbre Signature Index Profile",
        method: "Resonance Curve Mapping Module",
        frequency: "Bio-vocal Identity Predictor"
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isLg, setIsLg] = useState<boolean>(false);

  useEffect(() => {
    const checkLg = () => setIsLg(window.innerWidth >= 1024);
    checkLg();
    window.addEventListener("resize", checkLg);
    return () => window.removeEventListener("resize", checkLg);
  }, []);

  const fallbackImages: Record<string, string> = {
    "https://postfiles.pstatic.net/MjAyNjA1MjNfMTIg/MDAxNzc5NDkzMDM0ODA5.-6C-vAm8HezlCaMldHE9S8FdwWJ-2M0bOyFBpIRjBggg.o98wPqIyzjbIe9T2qvrxara8WOJtfEQRnIZbbRlt_Psg.PNG/about_01.png?type=w773": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    "https://postfiles.pstatic.net/MjAyNjA1MjNfMjAz/MDAxNzc5NDkzMDM1MTU5.oksKR8291UF84Rq4IKJ-bcjNSqriU7MQh0GtbsjyMvog.xGt4Q01L5lcS_8yrhGAZOUHxdrr4C-G1dfzpLg8HKfUg.PNG/about_02.png?type=w773": "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    "https://postfiles.pstatic.net/MjAyNjA1MjNfMjAz/MDAxNzc5NDkzMDM1MzQ1.sH3grRNXj5zdXrr3cIhv3r9hSWS1sBcGDr14VC3i9tkg.DFoKoMpcVQ8xx5ETGabGKEy92HpVyaQQ6y0yZ_ROmCog.PNG/about_03.png?type=w773": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    "https://postfiles.pstatic.net/MjAyNjA1MjNfMTky/MDAxNzc5NDkzMDM1MTEw.zwxXrC8RLh29ItkUrQlCN44c4mNC0tpl5e1D1lJfCAgg.r8DatUKrmcHeN4Gh9WrqYa_9oAm0sfCcuZDrT7olwUMg.PNG/about_04.png?type=w773": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-[#fcfbf7] overflow-hidden relative scroll-mt-24">
      {/* Background Ambience Accent Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[15%] w-[35vw] h-[35vw] rounded-full bg-[#f37022]/4 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-500/3 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f37022] animate-pulse" />
              <span className="text-[#f37022] font-mono text-xs font-black tracking-[0.3em]">/// ABOUT US</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dm-sans font-bold tracking-tight text-black leading-none select-none">
              Our<span className="font-signature text-black ml-0.5 sm:ml-1 font-normal">Signature</span>
            </h2>
            
            <p className="text-sm font-medium text-black/50 mt-4 max-w-xl leading-relaxed break-keep whitespace-pre-line">
              원앤온리보이스는 조금 더 깊이 듣고, 조금 더 정교하게 설계합니다.
              오직 이곳에서만 가능한 교육의 진심과 차이를 매일의 수업에 담아냅니다.
            </p>
          </motion.div>
        </div>

        {/* Unified Interactive Accordion Stage */}
        <div className="w-full mt-4 flex flex-col lg:flex-row items-stretch gap-6 h-auto lg:h-[600px]">
          {signatures.map((sig, index) => {
            const isHovered = hoveredIndex === index;
            const isSelected = activeIndex === index;
            // The card expands if it is hovered, or if nothing is hovered and it is the selected active Index
            const isCurrentExpanded = hoveredIndex !== null ? isHovered : isSelected;

            return (
              <motion.div
                key={sig.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
                layout
                animate={isLg ? {
                  flex: isCurrentExpanded ? 4.5 : 1,
                  height: "100%"
                } : {
                  height: isCurrentExpanded ? "480px" : "84px",
                  flex: "none"
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`relative rounded-[32px] overflow-hidden border transition-all duration-300 group ${
                  isCurrentExpanded 
                    ? "border-neutral-800 bg-[#0e0e10] shadow-[0_30px_60px_rgba(0,0,0,0.5),0_12px_36px_rgba(243,112,34,0.04)]" 
                    : "border-neutral-200/30 bg-neutral-50/50 hover:bg-neutral-100/50 hover:border-neutral-300 hover:shadow-md cursor-pointer"
                } flex flex-col`}
                style={{ contentVisibility: "auto" }}
              >
                {isCurrentExpanded ? (
                  /* --- EXPANDED EDITORIAL SPOTLIGHT (Huge Portrait Panel + Ultra-Clean Typography) --- */
                  <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
                    {/* Big Bold Picture Stage - Left columns */}
                    <div className="w-full md:w-[48%] h-[180px] sm:h-[220px] md:h-full relative overflow-hidden bg-[#0e0e10] border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                      <img
                        src={imageErrors[sig.image] ? fallbackImages[sig.image] : sig.image}
                        onError={() => setImageErrors((prev) => ({ ...prev, [sig.image]: true }))}
                        alt={sig.topic.replace("\n", " ")}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.08] saturate-[0.9] transition-transform duration-[1.2s] ease-out scale-105 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                      
                      {/* Premium elegant tag on picture */}
                      <div className="absolute top-4 left-4 bg-[#0e0e10]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[8px] font-mono text-[#f37022] font-black tracking-widest z-10 select-none uppercase">
                        PORTRAIT {sig.id}
                      </div>
                    </div>

                    {/* Editorial Description Column - Right columns */}
                    <div className="w-full md:w-[52%] flex-1 min-h-0 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between bg-[#0e0e10] text-white relative overflow-y-auto scrollbar-none">
                      {/* Soft ambient gradient decoration */}
                      <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#f37022]/5 blur-[60px] pointer-events-none" />

                      <div className="space-y-4 md:space-y-6 my-auto z-10">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-[23px] font-sans font-black tracking-tight text-white leading-tight break-keep whitespace-pre-line">
                              {sig.topic}
                            </h3>
                            <span className="font-mono text-[9px] sm:text-[10px] font-semibold text-neutral-400 tracking-[0.12em] block uppercase">
                              {sig.englishTopic}
                            </span>
                          </div>

                          <div className="w-12 h-[2px] bg-gradient-to-r from-[#f37022] to-transparent rounded-full animate-pulse" />
                          
                          <div className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-neutral-100 font-sans font-extrabold leading-snug break-keep border-l-[3px] border-[#f37022] pl-3 my-2 md:my-3.5 whitespace-pre-line">
                            {sig.subheading}
                          </div>
                        </div>

                        <p className="text-[11px] sm:text-xs md:text-xs lg:text-[13.5px] font-medium text-neutral-400 leading-relaxed text-left break-keep">
                          {sig.body}
                        </p>
                      </div>

                      {/* Tidy human-friendly elegant footer */}
                      <div className="border-t border-neutral-800/80 pt-3 mt-4 flex items-center justify-between text-[8px] sm:text-[10px] font-mono text-neutral-500 font-bold tracking-wider z-10 shrink-0">
                        <span>ONE & ONLY VOCAL SYSTEM</span>
                        <span className="text-[#f37022]">REACTIVE VIEW</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* --- SLIM COLLAPSED COLUMN LOOK (Elegant tall portrait backdrop with vertical typography) --- */
                  <div className="relative w-full h-full flex flex-row lg:flex-col lg:justify-between items-center lg:items-stretch p-5 lg:p-6 overflow-hidden bg-[#0e0e10] lg:bg-neutral-950">
                    {/* Background Full Photo */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={imageErrors[sig.image] ? fallbackImages[sig.image] : sig.image}
                        onError={() => setImageErrors((prev) => ({ ...prev, [sig.image]: true }))}
                        alt={sig.topic.replace("\n", " ")}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-[0.42] contrast-[1.1] saturate-[0.8] transition-all duration-700 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 inset-y-0 bg-neutral-950/45 group-hover:bg-neutral-950/25 transition-all duration-500" />
                    </div>

                    {/* Left Top Card ID */}
                    <div className="z-10 relative shrink-0">
                      <span className="font-mono text-xs font-black text-[#f37022] bg-white/10 backdrop-blur-md border border-white/10 w-9 h-9 rounded-full flex items-center justify-center">
                        {sig.id}
                      </span>
                    </div>

                    {/* Vertical Title rotated on desktop for extreme high-end editorial feel */}
                    <div className="z-10 relative flex-1 lg:flex-initial min-w-0 flex items-center lg:items-stretch lg:flex-col lg:justify-end lg:h-full ml-4 lg:ml-0">
                      {/* Desktop beautiful rotation */}
                      <div className="hidden lg:block lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 lg:whitespace-nowrap z-10 transition-all duration-500 text-center">
                        <span className="font-sans font-black text-xs md:text-sm tracking-widest text-white/90 block select-none group-hover:text-white group-hover:tracking-[0.14em] transition-all leading-none mb-1.5 break-keep">
                          {sig.topic.replace("\n", " ")}
                        </span>
                        <span className="font-mono text-[9px] tracking-widest text-[#f37022]/80 block uppercase select-none font-bold">
                          {sig.englishTopic}
                        </span>
                      </div>

                      {/* Mobile horizontal clean label */}
                      <div className="lg:hidden text-left min-w-0 pr-4">
                        <h4 className="font-sans font-extrabold text-sm text-white tracking-tight uppercase leading-none truncate mb-1">
                          {sig.topic.replace("\n", " ")}
                        </h4>
                        <span className="font-mono text-[9px] text-[#f37022]/90 tracking-widest uppercase block font-bold truncate">
                          {sig.englishTopic}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Arrow trigger */}
                    <div className="lg:hidden z-10 shrink-0 text-[#f37022]/80">
                      <ChevronRight size={18} className="animate-pulse" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM MINIMALIST RAIL */}
        <div className="flex items-center justify-between mt-12 border-t border-neutral-200/50 pt-8 select-none">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-neutral-400 font-extrabold tracking-widest uppercase">SIGNATURE LAB INTERACTIVE ACCORDION</span>
            <div className="flex items-center gap-1">
              {signatures.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? "w-6 bg-[#f37022]" : "w-1.5 bg-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <span className="font-mono text-[9px] text-neutral-400 font-extrabold tracking-[0.25em] uppercase">
            EST. 2026 ONE & ONLY SIGNATURE BLUEPRINTS
          </span>
        </div>
      </div>
    </section>
  );
};

interface ProgramDetailCardProps {
  activeTab: 'individual' | 'corporate';
  currentProgram: {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    recommend: string[];
    curriculum: string[];
    duration: string;
  };
}

const ProgramDetailCard: React.FC<ProgramDetailCardProps> = ({ activeTab, currentProgram }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Convert to maximum angle of +/- 12 degrees
    const rX = -(mouseY / height) * 24;
    const rY = (mouseX / width) * 24;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      key={activeTab + currentProgram.id + currentProgram.title}
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-neutral-900/95 border border-white/[0.09] p-8 md:p-10 lg:p-12 rounded-[28px] flex flex-col relative overflow-hidden select-none w-full justify-between flex-grow min-h-[500px] lg:min-h-[580px] transition-all duration-300 backdrop-blur-md"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        boxShadow: isHovered 
          ? "0 40px 100px rgba(0, 0, 0, 0.95), 0 0 60px rgba(243, 112, 34, 0.15)" 
          : "0 25px 70px rgba(0, 0, 0, 0.8)"
      }}
    >
      {/* Interactive cursor spotlight lighting layer with intensified colors and custom opacity control */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: `radial-gradient(450px circle at var(--x, 50%) var(--y, 50%), rgba(243, 112, 34, 0.15), rgba(243, 112, 34, 0.03) 45%, transparent 80%)`,
        }}
        ref={(el) => {
          if (!el) return;
          const handler = (e: MouseEvent) => {
            const rect = el.parentElement?.getBoundingClientRect();
            if (rect) {
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              el.style.setProperty("--x", `${x}px`);
              el.style.setProperty("--y", `${y}px`);
              el.style.opacity = "1";
            }
          };
          const leaveHandler = () => {
            el.style.opacity = "0";
          };
          el.parentElement?.addEventListener("mousemove", handler);
          el.parentElement?.addEventListener("mouseleave", leaveHandler);
        }}
      />
      
      {/* Ambient static visual light corner glow - slightly fortified */}
      <div className="absolute -top-12 -right-12 w-[350px] h-[350px] bg-[#f37022]/[0.05] rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "8s" }} />
      
      <div className="flex flex-col justify-between h-full w-full space-y-8 flex-grow relative z-10" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Row 1: Top Accent Bar & Booking CTA */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]" style={{ transform: "translateZ(30px)" }}>
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-md shadow-black/40">
            <Sparkles className="w-4 h-4 text-[#f37022] animate-pulse" />
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 group/btn font-sans text-xs font-black uppercase tracking-[0.14em] text-[#f37022] hover:text-white pb-1 border-b border-[#f37022]/20 hover:border-white transition-all duration-300"
          >
            <span>세션 상담 문의하기</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Row 2: Header Metadata, Main Title, Descriptive Body */}
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
          <span className="text-[10px] font-mono font-bold text-[#f37022]/90 tracking-[0.25em] uppercase block mb-1.5">
            {activeTab.toUpperCase()} CLASS — {currentProgram.id}
          </span>
          <h3 className="text-2xl sm:text-[28px] lg:text-[34px] font-sans font-black text-white tracking-tight leading-tight mb-4 break-keep">
            {currentProgram.title}
          </h3>
          <p className="text-sm sm:text-[15px] text-zinc-400 font-sans font-medium break-keep text-justify whitespace-pre-line leading-relaxed">
            {currentProgram.desc}
          </p>
        </div>

        {/* Row 3: Core Curriculum Section */}
        <div className="space-y-4 pt-6 border-t border-white/[0.06]" style={{ transform: "translateZ(40px)" }}>
          <span className="text-[10px] font-mono font-black text-[#f37022] uppercase tracking-[0.15em] block">
            Core Curriculum
          </span>
          <div className="grid grid-cols-1 gap-3.5">
            {currentProgram.curriculum.map((curItem, cIdx) => (
              <div key={cIdx} className="flex gap-3 items-start group/item">
                <span className="font-mono text-xs text-[#f37022] font-black tracking-wider transition-transform duration-300 group-hover/item:scale-110 shrink-0 mt-0.5">
                  0{cIdx + 1}
                </span>
                <span className="text-xs sm:text-[13px] text-white/90 font-sans font-semibold leading-relaxed break-keep text-left">
                  {curItem}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Recommended Target Audience */}
        <div className="space-y-4 pt-6 border-t border-white/[0.06]" style={{ transform: "translateZ(30px)" }}>
          <span className="text-[10px] font-mono font-black text-white/35 uppercase tracking-[0.15em] block">
            Recommended for
          </span>
          <ul className="grid grid-cols-1 gap-3">
            {currentProgram.recommend.map((rec, rIdx) => (
              <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-400 font-sans font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 bg-[#f37022] rounded-full mt-2 shrink-0 animate-pulse" />
                <span className="break-keep text-left">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 5: Dynamic clock and Session Badge footer */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-sans pt-6 border-t border-white/[0.06] mt-auto" style={{ transform: "translateZ(35px)" }}>
          <div className="px-3.5 py-2 rounded-xl bg-[#f37022]/10 border border-[#f37022]/20 flex items-center gap-2.5 backdrop-blur-sm shadow-inner shrink-0 self-start sm:self-auto font-mono text-[#f37022]">
            <Clock className="w-4 h-4 text-[#f37022] animate-pulse" />
            <span className="font-extrabold uppercase tracking-widest text-[10px] sm:text-xs text-[#f37022]">{currentProgram.duration}</span>
          </div>
          {activeTab === 'individual' && (
            <span className="text-[11.5px] text-zinc-400 font-semibold font-sans tracking-tight leading-relaxed break-keep">
              ※ 수업 진도로 인해 다소 초과될 수 있으니 약 1시간 내외로 생각해주시면 감사하겠습니다.
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const [activeTab, setActiveTab ] = useState<'individual' | 'corporate'>('individual');
  const [individualType, setIndividualType] = useState<'offline' | 'online'>('offline');
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const panelsSectionRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: 'individual' | 'corporate') => {
    setActiveTab(tab);
    setIndividualType('offline');
    setActiveCardIndex(0);
  };

  const handleIndividualTypeChange = (type: 'offline' | 'online') => {
    setIndividualType(type);
    setActiveCardIndex(0);
  };

  const individualPrograms = [
    {
      id: "01",
      title: "1:1 프라이빗 보컬 코칭",
      subtitle: "Private Vocal Coaching",
      desc: "개인의 목소리, 목표, 음악적 취향에 맞춘 맞춤형 수업입니다. 발성, 톤, 음역, 곡 해석, 표현력까지 노래에 필요한 모든 음악적 요소를 정밀하게 조율합니다.",
      recommend: [
        "음치 탈출부터 고음 정복까지 오직 본인에게만 맞춘 밀착 케어로 확실한 변화를 원하는 분",
        "대중적인 카피 보컬을 넘어 나만의 개성 있고 세련된 보컬 스타일을 정립하고 싶은 분",
        "다양한 밴드 악기 선율 사이에서 나만의 독보적인 음색 밸런스와 분위기를 찾고 싶은 밴드 보컬",
        "잘못된 발성 습관으로 목이 자주 쉬거나 정밀한 음성 과학적 교정을 원하는 개인 수강생"
      ],
      curriculum: [
        "퍼스널 보컬 분석을 기반으로 최적의 톤을 찾아주는 1:1 맞춤형 음색 브랜딩",
        "원앤온리보이스만의 독창적인 시스템으로 성향을 분석하는 보컬 MBTI 진단",
        "안정적인 호흡과 압력 조절을 위해 피지컬을 깨우는 몸의 감각 인지 훈련",
        "정밀한 보컬 레코딩 분석을 통해 성장을 시각화하는 먼슬리 리포트 발행"
      ],
      duration: "1:1 집중 정규 세션 / 50분"
    },
    {
      id: "02",
      title: "오디션 & 아티스트 코칭",
      subtitle: "Artist Audition",
      desc: "오디션에서 중요한 것은 단순히 노래를 잘 부르는 것만이 아닙니다. 짧은 시간 안에 나라는 보컬의 독보적인 존재감과 강렬한 인상을 완벽히 남길 수 있어야 합니다. One & Only Voice는 실제 대형 기획사에 출강하는 현직 보컬 트레이너의 시선으로, 곡 선택부터 보컬 이미지, 표현 방식, 무대 태도와 전달력까지 모든 요소를 정교하게 가이드합니다.",
      recommend: [
        "주요 기획사 오디션을 목표로 체계적이고 빠른 데뷔를 준비하는 지망생",
        "가창력은 충분하지만 자신만의 유니크한 시그니처 톤이 부족해 고민인 분",
        "곡 분위기와 개인 비주얼 콘셉트에 어울리는 오디션 필살기 전략이 필요한 분",
        "프로 무대 급의 트렌디한 창법과 세련된 감정 표현 능력을 키우고 싶으신 분"
      ],
      curriculum: [
        "고유의 보컬 캐릭터 확립 및 맞춤형 오디션 레퍼토리 빌딩",
        "무대 장악력을 높이는 입체적인 가창 표현력과 풍부한 무대 매너 코칭",
        "심사위원의 이목을 즉각적으로 사로잡는 강력한 원포인트 퍼포먼스",
        "모의 카메라 레코딩 테스트 및 모션 앵글 적응 정밀 피드백"
      ],
      duration: "프로페셔널 집중 세션 / 50분"
    },
    {
      id: "03",
      title: "실용음악 입시 & 편입 코칭",
      subtitle: "College Prep",
      desc: "실용음악 입시는 단순한 가창력 경쟁을 넘어, 지원자의 숨은 잠재력과 탄탄한 기본기를 날카롭게 증명해야 하는 무대입니다. One & Only Voice는 실제 대학 강단에서 심사하고 가르치는 교수진의 채점관적 시선을 바탕으로, 교수진이 원하는 가창의 안정성과 독창적인 표현력을 집요하게 파고들어 단 한 번의 실기 무대에서 합격을 받아내는 영리한 전략을 제시합니다.",
      recommend: [
        "주요 대학 실용음악과 보컬 입시 합격을 준비하는 수험생",
        "대학 편입 또는 재입시를 통해 한 단계 높은 음악적 도약을 찾는 분",
        "늘 불리는 식상한 입시곡 대신 나만을 돋보이게 만들고 싶은 분",
        "실기 고사장의 긴장감을 제어하고 영리하게 가창하고 싶은 입시생"
      ],
      curriculum: [
        "최신 입시 경향 입체적 분석 및 대학별 최적의 지원 전략 선곡 컨설팅",
        "입시 당일 극초반 1분 이내에 청중을 매료시키는 보컬 하이라이트 설계",
        "실제 실기 시험장 분위기를 100% 모사한 하드코어 실전 시뮬레이션 테스트",
        "교수진의 예상치 못한 연주 세션 요구와 돌발 질문 면접 서포트 대응"
      ],
      duration: "실기 고득점 맞춤 합격 세션 / 50분"
    },
    {
      id: "04",
      title: "외국인 유학생 & 글로벌 보컬 코칭",
      subtitle: "Global K-POP",
      desc: "음악적 성장을 꿈꾸는 글로벌 수강생들을 위한 전문 프로그램입니다. 트렌디한 K-Pop 특유의 섬세한 창법은 물론, 개개인의 모국어 발성 습관과 언어적 특징까지 고려한 1:1 맞춤형 코칭을 제공합니다. 특히 원활한 소통과 깊이 있는 피드백 전수를 위해 전문 보컬 통역가 어시스트 옵션을 운영하며, 언어의 장벽 없이 가장 매력적으로 빛나는 보컬 스타일을 완벽하게 완성합니다.",
      recommend: [
        "K-POP 특유의 세련된 창법과 트렌디한 스타일링을 배우고 싶으신 분",
        "국내 실용음악과 유학 및 대형 기획사 오디션을 확실하게 대비하고 싶으신 분",
        "서툰 한국어 발음 때문에 노래할 때 섬세한 감정 전달이 힘든 유학생",
        "재학중인 학교에서 가창 실기 수업에서 어려움을 겪고 계신 분"
      ],
      curriculum: [
        "외국인 특유의 어색한 발음을 교정하여 곡의 감정 전달을 극대화하는 네이티브 딕션 코칭",
        "K-POP 아티스트의 쪼개지는 리듬 및 트렌디한 창법을 마스터하는 실전 훈련",
        "국내 대학 가창 실기 학점 관리부터 기획사 오디션 합격까지 이뤄내는 유학 맞춤형 전략 디렉팅",
        "[선택 옵션] 전담 보컬 통역 서포트를 통해 언어 장벽을 허무는 1:1 몰입 밀착형 하이브리드 코칭"
      ],
      duration: "글로벌 유학생 전용 코스 / 50분"
    },
    {
      id: "05",
      title: "축가 & 스페셜 무대 코칭",
      subtitle: "Special Stage",
      desc: "“단 한 번뿐인 순간, 내 목소리로 마음을 전해야 할 때.”\n\n소중한 무대에 어울리는 목소리와 깊이 있는 감정 표현을 정밀하게 가다듬습니다. 단순히 과하게 꾸미는 노래가 아닌, 내 안에 있는 진심이 마이크 너머로 자연스럽게 전달되도록 단기간에 가장 완벽한 한 곡의 퍼포먼스를 완성해 드립니다.",
      recommend: [
        "세상에 단 하나뿐인 공간에서 감동적인 축가를 꿈꾸는 결혼 예정자",
        "중요한 비즈니스 사내 행사, 동호회 라이브 같은 무대 속성 과외가 필요한 분",
        "평소 음치 · 박치 탈출을 목표로 나만의 평생 애창곡 한 곡을 채우고 싶은 분",
        "급작스럽게 무대를 선사해야 하거나 무대 공포증을 정면 돌파하려는 분"
      ],
      curriculum: [
        "개인 음역 밸런스에 매칭되는 인생 최고의 감성 결혼 축가 및 스페셜곡 세팅",
        "핵심 발성 비법만 추려 단기에 가창 볼륨을 세 배로 압축 전수하는 특훈",
        "마이크 거리 제어, 무대 위 시선 노하우와 자연스러운 제스처 빌딩",
        "리허설 스테이지를 통한 심리적 불안 요인 통제 및 라이브 시뮬레이션"
      ],
      duration: "단기 효율 마스터 코스 / 50분"
    }
  ];

  const onlinePrograms = [
    {
      id: "01",
      title: "1:1 실시간 온라인 보컬 코칭",
      subtitle: "Live Online",
      desc: "거리와 공간의 제약을 넘어 원앤온리보이스의 프리미엄 트레이닝을 그대로 경험하는 실시간 비대면 클래스입니다. 실시간 화상 코칭과 녹음·영상 피드백을 활용해, 세계 어디서든 현재 목소리의 상태를 함께 살피고 구체적인 연습 방향을 제시합니다. 대면 수업의 집중감을 온라인 환경에 맞게 설계하여, 수업 이후의 연습까지 흔들림 없이 이어갈 수 있도록 돕습니다.",
      recommend: [
        "지방 혹은 해외 거주로 대면 아카데미 방문이 물리적으로 어려우신 분",
        "빡빡한 업무와 학업 속에서 불필요한 왕복 소요 시간과 동선을 아끼고픈 분",
        "비대면 수업은 음질이 떨어지거나 디테일한 피드백을 받기 어려울까 봐 망설여지셨던 분",
        "레슨이 끝난 후에도 지속적인 피드백을 받으며 언제든 스스로 복습할 수 있는 환경을 원하시는 분"
      ],
      curriculum: [
        "실시간 라이브 코칭을 통한 보컬 상태 점검과 방향 설정",
        "녹음·영상 자료 기반의 디테일한 모니터링",
        "수업 후 과제 피드백을 통한 연습 방향 지속 관리",
        "거리와 이동 시간을 줄이는 유연한 온라인 스케줄링"
      ],
      duration: "실시간 온라인 전용 코스 / 50분"
    }
  ];

  const corporatePrograms = [
    {
      id: "01",
      title: "기업 및 단체 보컬 세미나",
      subtitle: "Enterprise Voice Solution",
      desc: "“목소리라는 가장 강력한 소통의 도구를 통해, 팀의 결속력과 에너지를 높입니다.”\n\n사내 동호회, 기업 워크숍, 팀 빌딩을 위해 기획된 관객 참여형 맞춤 프로그램입니다. 단순한 노래 교육을 넘어, 일상과 업무에서 신뢰감을 주는 목소리를 표현하는 원리를 배우고, 음악을 통해 구성원들이 자연스럽게 화합하고 소통할 수 있는 특별한 연대감의 경험을 제공합니다.",
      recommend: [
        "뻔한 음주 회식 대신 임직원들에게 트렌디한 문화 예술 복지를 제공하고 싶은 기업",
        "프레젠테이션과 미팅이 잦아 상시 성대 피로를 느끼는 영업직 및 강사직 단체",
        "사내 행사나 워크숍을 앞두고 결속력을 다질 독창적인 팀 빌딩이 필요한 태스크포스",
        "경직된 부서 간 장벽을 허물고 자유로운 소통으로 활기찬 조직 문화를 원하는 그룹"
      ],
      curriculum: [
        "사내 미팅과 외부 발표에서 신뢰감을 주는 비즈니스 스피치 딜리버리 메커니즘",
        "지루한 음주 회식을 대체하여 부서 간 결속력을 극대화하는 팀 빌딩 팝 하모니",
        "청중 앞 무대 울렁증을 깨부수고 나만의 존재감을 각인시키는 실전 애티튜드",
        "임직원의 음성 피로도를 최소화하는 과학적 분석 기반의 데일리 성대 케어"
      ],
      duration: "B2B 제휴 출강 세션 / 상호 일정 조율"
    },
    {
      id: "02",
      title: "엔터테인먼트 위탁 출강",
      subtitle: "Entertainment Outsourcing",
      desc: "“소속 아티스트 본연의 가치를 발견하고, 시대가 원하는 독보적인 캐릭터를 입힙니다.”\n\n기획사 소속 연습생 및 아티스트를 위한 전문 위탁 트레이닝 서비스입니다. 획일화된 창법을 지양하고, 아티스트 고유의 음색과 매력을 극대화하는 정교한 보컬 스타일링을 제안합니다. 해부학적 구조에 기반한 안전한 발성 훈련과 현 대중음악 시장 of 트렌드 분석을 결합하여, 무대 위에서 가장 힙하고 안정적인 퍼포먼스를 완성하도록 돕습니다.",
      recommend: [
        "기존의 뻔한 보컬 레슨을 넘어 트렌디하고 세련된 아이돌 창법 전수가 필요한 엔터사",
        "콘셉트에 맞는 완벽한 음색 메이킹으로 데뷔조의 최종 음악적 완성도를 높이고 싶은 기획사",
        "격렬한 안무와 완벽한 라이브를 동시에 소화하는 신인 데뷔를 기획 중인 엔터테인먼트",
        "체계적인 음성 과학 진단을 통해 소속 아티스트의 목 관리와 발성 교정을 원하는 매니지먼트"
      ],
      curriculum: [
        "글로벌 음악 시장 트렌드에 맞춘 독보적인 아티스트 음색 및 보컬 톤 메이킹",
        "격한 퍼포먼스 중에도 흔들림 없는 라이브를 완성하는 피지컬 발성 밸런싱",
        "콘서트 및 라이브 현장에 동행하여 최상의 성대 컨디션을 유지하는 백스테이지 케어",
        "데뷔조 및 연습생 개개인의 개성을 커스텀 분석하는 보컬 MBTI 진단 시스템"
      ],
      duration: "소속 위탁 정규 파트너십 / 전담 협의제"
    },
    {
      id: "03",
      title: "문화재단 & 공공기관 특강",
      subtitle: "Public Arts Program",
      desc: "음성 과학(Vocology)을 통해 일상 속 목소리에서 나만의 고유한 빛을 찾습니다. 지역 문화재단, 문화원, 지자체 시민 아카데미를 위한 프리미엄 문화 예술 워크숍입니다.\n\n일회성 노래 교실을 넘어 인류 고유의 악기인 목소리의 원리를 과학적으로 이해하고, 현대 대중음악 트렌드를 융합하여 시민 개개인의 예술적 매력을 발굴하고 음성 건강을 지키는 차별화된 웰니스(Wellness) 세미나를 제안합니다.",
      recommend: [
        "시민들에게 뻔하지 않고 트렌디한 고품격 문화 복지 혜택을 제공하고 싶은 문화재단",
        "지역 구민들의 자발적인 문화 예술 동호회 활성화 및 커뮤니티 지원이 필요한 지자체",
        "문화 향유 기회가 적은 소외 계층을 위한 전문적이고 따뜻한 예술 교육이 필요한 기관",
        "기관 내부 직원들의 직무 스트레스를 해소하고 활기찬 조직 문화를 원하는 공공기관"
      ],
      curriculum: [
        "01 지역 주민의 일상에 활력을 더하는 친근하고 체계적인 생활 문화 예술 교육",
        "02 세대 간 장벽을 허물고 지역 공동체를 하나로 묶어주는 구민 합창 빌드업",
        "03 문화 소외 계층의 예술 향유 기회를 확대하는 배려 중심의 맞춤형 보컬 케어",
        "04 지역 축제 및 사내 문화 행사와 연계한 고품격 무대 퍼포먼스 완성 솔루션"
      ],
      duration: "공공 문화 협의 특강 / 조율제"
    }
  ];

  const activePrograms = activeTab === 'corporate'
    ? corporatePrograms
    : (individualType === 'offline' ? individualPrograms : onlinePrograms);
  const currentProgram = activePrograms[activeCardIndex] || activePrograms[0];

  return (
    <section 
      id="program" 
      className="bg-[#0a0a0a] py-20 md:py-32 border-t border-white/5 scroll-mt-24 text-white font-sans overflow-hidden" 
      ref={panelsSectionRef}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* --- DESKTOP VIEW (Large screens only) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        >
          {/* Left Column: Vertical Index Selection Panel */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Header label in White-Orange style with real animation sparkle */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#f37022] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-white/50 font-bold block">
                  What we craft
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[52px] font-sans font-extrabold leading-[1.15] tracking-tight select-none normal-case">
                <span className="whitespace-nowrap">Vocal Coaching</span> <br />
                For <span className="font-signature font-normal text-[#f37022] normal-case capitalize">Every</span> <br />
                Stage
              </h2>
              <p className="text-xs md:text-sm text-white/40 font-sans font-medium tracking-wide">
                나를 표현해야 하는 모든 순간, 가장 당신다운 노래를 완성합니다.
              </p>
            </div>

            {/* Offline vs Online sub-toggle switcher representing Offline list vs Online card clearly */}
            {activeTab === 'individual' && (
              <div className="bg-[#121212]/90 border border-white/[0.08] backdrop-blur-md rounded-2xl p-1.5 flex gap-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)] w-full relative z-20">
                <button
                  type="button"
                  onClick={() => handleIndividualTypeChange('offline')}
                  className="flex-1 py-3 px-4 rounded-xl text-center flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden group focus:outline-none focus:ring-0 select-none transition-all duration-300"
                >
                  {individualType === 'offline' && (
                    <motion.div
                      layoutId="individual-type-capsule"
                      className="absolute inset-0 bg-gradient-to-r from-[#f37022] to-[#fd8033] rounded-xl shadow-[0_4px_20px_rgba(243,112,34,0.3)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`text-[12.5px] sm:text-[13.5px] font-sans font-black tracking-tight leading-normal transition-colors duration-300 ${
                    individualType === 'offline' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    OFFLINE CLASS
                  </span>
                  <span className={`text-[9.5px]/[13px] font-sans font-medium mt-0.5 leading-none transition-colors duration-300 ${
                    individualType === 'offline' ? 'text-white/80' : 'text-zinc-500'
                  }`}>
                    오프라인 대면 수업
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleIndividualTypeChange('online')}
                  className="flex-1 py-3 px-4 rounded-xl text-center flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden group focus:outline-none focus:ring-0 select-none transition-all duration-300"
                >
                  {individualType === 'online' && (
                    <motion.div
                      layoutId="individual-type-capsule"
                      className="absolute inset-0 bg-gradient-to-r from-[#f37022] to-[#fd8033] rounded-xl shadow-[0_4px_20px_rgba(243,112,34,0.3)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className={`text-[12.5px] sm:text-[13.5px] font-sans font-black tracking-tight leading-normal transition-colors duration-300 ${
                    individualType === 'online' ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    ONLINE CLASS
                  </span>
                  <span className={`text-[9.5px]/[13px] font-sans font-medium mt-0.5 leading-none transition-colors duration-300 ${
                    individualType === 'online' ? 'text-white/80' : 'text-zinc-500'
                  }`}>
                    온라인 비대면 수업
                  </span>
                </button>
              </div>
            )}

            {/* Program Selection rows with highly polished, ultra-clean sliding transitions */}
            <div className="border-t border-white/10 flex flex-col divide-y divide-white/10 pt-2 relative">
              {activePrograms.map((item, index) => {
                const isActive = index === activeCardIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveCardIndex(index)}
                    className="relative px-4 py-4 md:py-5 cursor-pointer select-none group focus:outline-none overflow-hidden transition-all duration-300"
                  >
                    {/* Gorgeous sliding background highlight element for butter-smooth physical feel */}
                    {isActive && (
                      <motion.div
                        layoutId="active-program-indicator"
                        className="absolute inset-0 bg-white/[0.03] border-l-2 border-[#f37022]"
                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                        style={{ originX: 0 }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-grow">
                        {/* Number Indicator */}
                        <span className={`font-mono text-xs md:text-sm font-bold tracking-wider transition-colors duration-300 shrink-0 ${isActive ? 'text-[#f37022]' : 'text-white/20 group-hover:text-white/40'}`}>
                          {item.id}
                        </span>
                        
                        {/* Static sized title-stack prevents sudden jumping heights */}
                        <div className="flex flex-col items-start justify-center transition-transform duration-300 group-hover:translate-x-1">
                          {/* English Subtitle */}
                          <div className="flex items-center gap-3">
                            <span className={`text-base md:text-lg lg:text-[19px] xl:text-[21px] font-sans font-black uppercase tracking-tight transition-all duration-300 leading-none ${
                              isActive ? 'text-white' : 'text-white/25 group-hover:text-white/50'
                            }`}>
                              {item.subtitle}
                            </span>
                          </div>
                          
                          {/* Korean Main Title */}
                          <span className={`text-[11px] md:text-xs font-sans font-bold tracking-tight mt-1.5 transition-all duration-300 ${
                            isActive ? 'text-[#f37022]' : 'text-white/10 group-hover:text-white/25'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                      </div>

                      {/* Smooth Arrow Up Right Accent */}
                      <div className="shrink-0 ml-4 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#f37022] text-white rotate-0 shadow-[0_4px_12px_rgba(243,112,34,0.3)] scale-100' 
                            : 'bg-white/0 text-white/20 group-hover:text-white/60 group-hover:bg-white/5 -rotate-45'
                        }`}>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Floating Category Toggler + Premium Detailed Content Card */}
          <div className="lg:col-span-7 space-y-8 flex flex-col h-full">
            
            {/* Luxurious, Tactile Segmented Toggle Capsule representing Private/Corporate tracks clearly */}
            <div className="flex flex-col select-none w-full">

              {/* Styled Pill-capsule Toggle Box */}
              <div className="relative flex bg-[#121212] border border-white/[0.08] p-1.5 rounded-full w-full select-none shadow-[0_15px_40px_rgba(0,0,0,0.8)] leading-none items-center overflow-hidden">
                {/* Sliding highlight background using framer motion layout component */}
                <motion.div 
                  className="absolute top-1.5 bottom-1.5 bg-[#f37022] rounded-full"
                  layoutId="program-track-active-indicator"
                  animate={{
                    left: activeTab === "individual" ? "6px" : "calc(50% + 3px)",
                    right: activeTab === "individual" ? "calc(50% + 3px)" : "6px"
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  style={{ boxShadow: "0 0 25px rgba(243, 112, 34, 0.4)" }}
                />

                {/* Tab 1: Private Sessions (Individual) */}
                <button
                  type="button"
                  onClick={() => handleTabChange('individual')}
                  className="flex-1 py-3 px-3 sm:px-6 rounded-full transition-all duration-300 relative z-10 flex items-center justify-center gap-2 md:gap-3 focus:outline-none focus:ring-0 cursor-pointer group/tab text-left"
                >
                  <User 
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      activeTab === 'individual' 
                        ? 'text-white scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]' 
                        : 'text-zinc-500 group-hover/tab:text-zinc-300 group-hover/tab:scale-105'
                    }`} 
                  />
                  <div className="flex flex-col">
                    <span className={`text-[12px] sm:text-xs md:text-[14px] font-black tracking-wide leading-tight transition-colors duration-300 ${
                      activeTab === 'individual' ? 'text-white' : 'text-zinc-400 group-hover/tab:text-zinc-200'
                    }`}>
                      개인 레슨
                    </span>
                    <span className={`text-[8px] sm:text-[9px] font-mono tracking-widest uppercase mt-0.5 leading-none transition-colors duration-300 ${
                      activeTab === 'individual' ? 'text-white/85' : 'text-zinc-500'
                    }`}>
                      For Students
                    </span>
                  </div>
                </button>

                {/* Tab 2: Corporate Sessions (Partners) */}
                <button
                  type="button"
                  onClick={() => handleTabChange('corporate')}
                  className="flex-1 py-3 px-3 sm:px-6 rounded-full transition-all duration-300 relative z-10 flex items-center justify-center gap-2 md:gap-3 focus:outline-none focus:ring-0 cursor-pointer group/tab text-left"
                >
                  <Building2 
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      activeTab === 'corporate' 
                        ? 'text-white scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]' 
                        : 'text-zinc-500 group-hover/tab:text-zinc-300 group-hover/tab:scale-105'
                    }`} 
                  />
                  <div className="flex flex-col">
                    <span className={`text-[12px] sm:text-xs md:text-[14px] font-black tracking-wide leading-tight transition-colors duration-300 ${
                      activeTab === 'corporate' ? 'text-white' : 'text-zinc-400 group-hover/tab:text-zinc-200'
                    }`}>
                      B2B 제휴 · 협업
                    </span>
                    <span className={`text-[8px] sm:text-[9px] font-mono tracking-widest uppercase mt-0.5 leading-none transition-colors duration-300 ${
                      activeTab === 'corporate' ? 'text-white/85' : 'text-zinc-500'
                    }`}>
                      For Partners
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Modern Detailed Info Deck Card with Balanced Minimum Height and Flex Growth */}
            <AnimatePresence mode="wait">
              <ProgramDetailCard activeTab={activeTab} currentProgram={currentProgram} />
            </AnimatePresence>

          </div>

        </motion.div>

        {/* --- MOBILE VIEW (Optimized sequential flow & Expandable Accordion) --- */}
        <div className="lg:hidden block space-y-8">
          
          {/* Mobile Header label */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#f37022] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/50 font-bold block">
                What we craft
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold leading-tight tracking-tight select-none">
              Vocal Coaching <br />
              For <span className="font-signature font-normal text-[#f37022] normal-case capitalize">Every</span> Stage
            </h2>
            <p className="text-xs text-white/40 font-sans tracking-wide leading-relaxed">
              나를 표현해야 하는 모든 순간, 가장 당신다운 노래를 완성합니다.
            </p>
          </div>

          {/* MAIN CATEGORY TOGGER at the absolute top of layout flow (Always easily visible) */}
          <div className="flex flex-col select-none w-full">
            <div className="relative flex bg-[#121212] border border-white/[0.08] p-1 rounded-full w-full select-none shadow-md leading-none items-center overflow-hidden">
              <motion.div 
                className="absolute top-1 bottom-1 bg-[#f37022] rounded-full"
                animate={{
                  left: activeTab === "individual" ? "4px" : "calc(50% + 2px)",
                  right: activeTab === "individual" ? "calc(50% + 2px)" : "4px"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                style={{ boxShadow: "0 0 15px rgba(243, 112, 34, 0.35)" }}
              />

              {/* Tab 1: Private Sessions (Individual) */}
              <button
                type="button"
                onClick={() => handleTabChange('individual')}
                className="flex-1 py-3 px-3 rounded-full relative z-10 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                <User className={`w-3.5 h-3.5 ${activeTab === 'individual' ? 'text-white' : 'text-zinc-500'}`} />
                <span className={`text-xs font-black ${activeTab === 'individual' ? 'text-white' : 'text-zinc-400'}`}>
                  개인 레슨
                </span>
              </button>

              {/* Tab 2: Corporate Sessions (Partners) */}
              <button
                type="button"
                onClick={() => handleTabChange('corporate')}
                className="flex-1 py-3 px-3 rounded-full relative z-10 flex items-center justify-center gap-2 focus:outline-none cursor-pointer"
              >
                <Building2 className={`w-3.5 h-3.5 ${activeTab === 'corporate' ? 'text-white' : 'text-zinc-500'}`} />
                <span className={`text-xs font-black ${activeTab === 'corporate' ? 'text-white' : 'text-zinc-400'}`}>
                  B2B 제휴 · 협업
                </span>
              </button>
            </div>
          </div>

          {/* SUB-CATEGORY SWITCHER (Sits right underneath Main Toggler, only for individual lessons) */}
          {activeTab === 'individual' && (
            <div className="bg-[#121212]/90 border border-white/[0.08] backdrop-blur-md rounded-xl p-1 flex gap-1 shadow-md w-full relative z-20">
              <button
                type="button"
                onClick={() => handleIndividualTypeChange('offline')}
                className="flex-1 py-2 px-1.5 rounded-lg text-center flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden transition-all duration-300 focus:outline-none"
              >
                {individualType === 'offline' && (
                  <motion.div
                    layoutId="mobile-sub-class-indicator"
                    className="absolute inset-0 bg-[#f37022]/15 border border-[#f37022]/30 rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className={`text-[11px] font-sans font-black tracking-tight leading-none ${
                  individualType === 'offline' ? 'text-[#f37022]' : 'text-zinc-400'
                }`}>
                  OFFLINE CLASS
                </span>
                <span className="text-[9px] mt-1 font-semibold text-zinc-500 leading-none">
                  오프라인 대면 수업
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleIndividualTypeChange('online')}
                className="flex-1 py-2 px-1.5 rounded-lg text-center flex flex-col items-center justify-center relative z-10 cursor-pointer overflow-hidden transition-all duration-300 focus:outline-none"
              >
                {individualType === 'online' && (
                  <motion.div
                    layoutId="mobile-sub-class-indicator"
                    className="absolute inset-0 bg-[#f37022]/15 border border-[#f37022]/30 rounded-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className={`text-[11px] font-sans font-black tracking-tight leading-none ${
                  individualType === 'online' ? 'text-[#f37022]' : 'text-zinc-400'
                }`}>
                  ONLINE CLASS
                </span>
                <span className="text-[9px] mt-1 font-semibold text-zinc-500 leading-none">
                  온라인 비대면 수업
                </span>
              </button>
            </div>
          )}

          {/* DYNAMIC, IMMERSIVE ACCORDION CARDS - Clean Reading Comfort on Mobile */}
          <div className="space-y-4">
            {activePrograms.map((item, index) => {
              const isExpanded = index === activeCardIndex;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${
                    isExpanded 
                      ? "bg-[#121212] border-[#f37022]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)]" 
                      : "bg-[#121212]/35 border-white/[0.05] hover:bg-[#121212]/50"
                  }`}
                >
                  {/* Title Toggle bar */}
                  <button
                    type="button"
                    onClick={() => setActiveCardIndex(index)}
                    className="w-full text-left p-4 pr-5 flex items-center justify-between focus:outline-none focus:ring-0 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3.5 pr-2">
                      <span className={`font-mono text-xs font-bold leading-none ${isExpanded ? 'text-[#f37022]' : 'text-white/20'}`}>
                        {item.id}
                      </span>
                      <div className="flex flex-col">
                        <span className={`text-xs sm:text-sm font-black uppercase tracking-tight leading-none ${isExpanded ? 'text-white' : 'text-white/60'}`}>
                          {item.subtitle}
                        </span>
                        <span className={`text-[10px] font-bold mt-1.5 leading-none transition-colors duration-200 ${isExpanded ? 'text-[#f37022]' : 'text-white/25'}`}>
                          {item.title}
                        </span>
                      </div>
                    </div>

                    {/* Compact layout indicator icon */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded ? 'bg-[#f37022] text-white rotate-180 shadow-md shadow-[#f37022]/20' : 'bg-white/5 text-white/30'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded info section via butter smooth animation */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-white/[0.05] w-full"
                    >
                      <div className="p-5 sm:p-6 space-y-6">
                        
                        {/* Description block */}
                        <div>
                          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed break-keep whitespace-pre-line text-justify">
                            {item.desc}
                          </p>
                        </div>

                        {/* Core Curriculum block */}
                        <div className="space-y-3 pt-5 border-t border-white/[0.05]">
                          <span className="text-[10px] font-mono font-black text-[#f37022] uppercase tracking-[0.15em] block">
                            Core Curriculum
                          </span>
                          <div className="grid grid-cols-1 gap-2.5">
                            {item.curriculum.map((curItem, cIdx) => (
                              <div key={cIdx} className="flex gap-2.5 items-start">
                                <span className="font-mono text-[10px] text-[#f37022] font-black shrink-0 mt-0.5">
                                  0{cIdx + 1}
                                </span>
                                <span className="text-xs text-white/90 font-sans font-semibold leading-relaxed break-keep text-left">
                                  {curItem}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Target Audience block */}
                        <div className="space-y-3 pt-5 border-t border-white/[0.05]">
                          <span className="text-[10px] font-mono font-black text-white/35 uppercase tracking-[0.15em] block">
                            Recommended for
                          </span>
                          <ul className="grid grid-cols-1 gap-2">
                            {item.recommend.map((rec, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-zinc-400 font-medium">
                                <span className="w-1.5 h-1.5 bg-[#f37022] rounded-full mt-1.5 shrink-0" />
                                <span className="break-keep text-left leading-relaxed">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Session details status & Consulting Button */}
                        <div className="pt-5 border-t border-white/[0.05] space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                            {/* Duration Indicator code */}
                            <div className="inline-flex py-1.5 px-3 rounded-lg bg-[#f37022]/10 border border-[#f37022]/20 items-center gap-2 text-[#f37022] self-start">
                              <Clock className="w-3.5 h-3.5" />
                              <span className="font-mono font-extrabold text-[10px] tracking-wider uppercase leading-none">{item.duration}</span>
                            </div>
                          </div>

                          <a
                            href="#booking"
                            className="w-full py-3 bg-neutral-900 hover:bg-[#f37022] active:scale-[0.99] text-white rounded-xl font-bold tracking-wider text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/5 active:bg-[#f37022]"
                          >
                            <span>세션 상담 문의하기</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#f37022]" />
                          </a>

                          {activeTab === 'individual' && (
                            <p className="text-[10px] text-zinc-500 font-semibold tracking-tight break-keep text-center leading-normal">
                              ※ 수업 진도로 인해 다소 초과될 수 있으니 약 1시간 내외로 생각해주시면 감사하겠습니다.
                            </p>
                          )}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

const VoiceDisplaySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate coordinates and rotations over scroll range [0.15, 0.65]
  const xOne = useTransform(scrollYProgress, [0.15, 0.65], ["-30vw", "-8vw"]);
  const rotateYOne = useTransform(scrollYProgress, [0.15, 0.65], [15, -8]);
  const rotateXOne = useTransform(scrollYProgress, [0.15, 0.65], [6, -6]);
  const zOne = useTransform(scrollYProgress, [0.15, 0.65], [-50, 50]);

  const xOnlyVoice = useTransform(scrollYProgress, [0.15, 0.65], ["30vw", "8vw"]);
  const rotateYOnlyVoice = useTransform(scrollYProgress, [0.15, 0.65], [-15, 8]);
  const rotateXOnlyVoice = useTransform(scrollYProgress, [0.15, 0.65], [-6, 6]);
  const zOnlyVoice = useTransform(scrollYProgress, [0.15, 0.65], [-50, 50]);

  const scaleAmp = useTransform(scrollYProgress, [0.15, 0.65], [0.8, 1.35]);
  const rotateAmp = useTransform(scrollYProgress, [0.15, 0.65], [-18, 12]);
  const opacityAmp = useTransform(scrollYProgress, [0.1, 0.25, 0.55, 0.75], [0.1, 0.7, 0.7, 0.1]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.6, 0.75], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      id="voice-display" 
      className="relative min-h-[75vh] bg-[#fcfbf7] overflow-hidden flex flex-col justify-between py-12 select-none"
    >
      {/* Top Bar Details */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-center z-10 pointer-events-none">
        <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1a1a1a]/30">
          @1andonly_voice
        </div>
        <div className="flex items-center gap-1.5 text-xs font-sans font-bold tracking-tight text-[#1a1a1a]">
          <span>✦</span>
          <span>Our core philosophy</span>
        </div>
      </div>

      {/* Main Massive 3D Letters Row */}
      <div className="flex-grow flex items-center justify-center relative w-full overflow-visible py-6 md:py-10">
        <div className="relative flex flex-col items-center justify-center w-full max-w-[1400px] px-6 md:px-12" style={{ perspective: 1500 }}>
          
          {/* Main big block layout representing the visual text */}
          <div className="relative flex flex-col items-center justify-center tracking-tighter leading-none w-full select-none min-h-[340px] sm:min-h-[380px] md:min-h-[440px]" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Absolute Centered Magnificent Serif Ampersand floating depth-wise in the background */}
            <motion.div 
              style={{ 
                scale: scaleAmp, 
                rotate: rotateAmp, 
                opacity: opacityAmp,
                z: -15,
                transformStyle: "preserve-3d"
              }}
              className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-[45vw] sm:text-[40vw] md:text-[36vw] lg:text-[32vw] font-serif-trendy font-extralight italic text-[#1a1a1a]/12 leading-none pointer-events-none select-none shrink-0 z-0"
            >
              &
            </motion.div>

            {/* Top Row: "One" shifted left by xOne */}
            <div className="relative flex items-center justify-center w-full mb-6 z-10" style={{ transformStyle: "preserve-3d" }}>
              <motion.div 
                style={{ 
                  x: xOne, 
                  rotateY: rotateYOne, 
                  rotateX: rotateXOne, 
                  z: zOne, 
                  opacity: textOpacity,
                  transformStyle: "preserve-3d" 
                }}
                className="text-[17vw] sm:text-[16vw] md:text-[14vw] lg:text-[12.5vw] font-serif-trendy font-medium italic tracking-tight leading-none text-[#1a1a1a] select-none text-right shrink-0"
              >
                One
              </motion.div>
            </div>

            {/* Bottom Row: "Only Voice" with beautiful Cormorant Garamond styling */}
            <div className="relative flex items-center justify-center w-full mt-6 z-10" style={{ transformStyle: "preserve-3d" }}>
              <motion.div 
                style={{ 
                  x: xOnlyVoice, 
                  rotateY: rotateYOnlyVoice, 
                  rotateX: rotateXOnlyVoice, 
                  z: zOnlyVoice, 
                  opacity: textOpacity,
                  transformStyle: "preserve-3d" 
                }}
                className="text-[17vw] sm:text-[16vw] md:text-[14vw] lg:text-[12.5vw] leading-none text-[#1a1a1a] select-none text-left shrink-0 flex items-center justify-center gap-[4vw]"
              >
                <span className="font-serif-trendy font-medium italic tracking-tight">
                  Only
                </span>
                <span className="font-serif-trendy font-medium italic tracking-tight text-[#1a1a1a]">
                  Voice
                </span>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Layout Details from image template */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end z-10">
        <div className="md:col-span-4 text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#1a1a1a]/40">
          ONE AND ONLY VOICE / EST. 2026
        </div>
        <div className="md:col-span-8 flex flex-col items-start md:items-end justify-end">
          <p className="max-w-md text-xs sm:text-[13px] md:text-[14px] text-[#1a1a1a]/70 leading-relaxed tracking-tight text-left md:text-right font-medium">
            Unlocking the hidden potential of your natural voice,<br />
            we refine your unique identity with physical precision.<br />
            Experience the ultimate shift in your voice.
          </p>
        </div>
      </div>
    </section>
  );
};



const ArchiveSection = () => {
  const reviews: any[] = [
    { 
      q: "성인 되고 보컬 학원이랑 개인 과외 진짜 여러 군데 전전했었는데, 아무리 배워도 실력이 제자리걸음이라 '난 안 되나 보다' 하는 불신만 쌓여있던 유목민이었습니다.. 호흡이랑 발성 고질병이 다른 데선 전혀 해결이 안 됐거든요. 그러다 경력 장난 아니신 선생님을 만나고 진짜 광명 찾았습니다. 확실히 기존 학원들이랑 가르치는 느낌이 달라요. 제가 노래하다 막히면 왜 막히는지 정확하게 짚어주시는 건 기본이고, 그 방법이 제 몸에 안 통하면 곧바로 적용할 수 있는 다른 대안들을 끊임없이 제시해 주세요. 이 부분이 진짜 감동.. 덕분에 제 간절한 목표였던 '성대가 제대로 붙은 힘 있는 소리'를 내는 법을 귀랑 몸으로 직접 체감하게 됐습니다. 사정상 꾸준히 못 배워서 흐름이 끊겼던 게 한인데, 이거 해결되면 무조건 다시 쌤한테 정착해서 오래오래 길게 배울 생각입니다!", 
      name: "최ㅇㅇ", 
      role: "남 · 취미",
      initials: "최",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjkw/MDAxNzgwNTk4Nzc5Mjk3.x3WkrNW2bPGSoIzUtraSFOmBqGeqy1saRNEvlfYcreEg.e-j4HVwUD7l-bfM4VhNsPz7ZsdHMfnIpVyDKAzDn9ncg.PNG/5e1af5fa-5b16-4231-8773-8a507bb1f4d9.png?type=w773"
    },
    { 
      q: "혼자 연습할 때는 도대체 뭐부터 어떻게 연습해야 할지 몰라서 매번 막막하고 답답했거든요ㅠㅠ 근데 쌤이랑 수업 딱 하고 나면, 내가 오늘 개인 연습실 가서 어떤 부분을 집중적으로 연습해야 하는지 로드맵이 완벽하게 그려져서 연습실도 더 자주 가게 돼요! 노래를 아예 처음 배워보는 거라 뚝딱거렸는데, 기초적인 발성이랑 호흡 하나하나 체크해 주시면서 제 몸에 맞는 맞춤형 방법들로 쏙쏙 귀에 박히게 가르쳐 주시니까 이해도 잘 가고 독학할 때보다 훨씬 수월해요! 덕분에 주변에서 요즘 노래 배냐고, 소리 진짜 좋아졌다는 소리 엄청 많이 들어요ㅠㅠㅠ 쉽게 좌절하고 실망하는 성격이라 혼자 낙담할 때가 많았는데, 그때마다 할 수 있다고 나만 믿고 따라오라고 멘탈 꽉 잡아주셔서 믿음이 생겼어요. 노래에 대한 자신감이랑 즐거움 찾아주셔서 감사합니다 쌤!!", 
      name: "최ㅇㅇ", 
      role: "여 · 입시 준비",
      initials: "최",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMTEx/MDAxNzgwNTk4ODYzNDU2.3lWekZWcNrRnwgJDvShQn_QMI4JjysAVO0zMBMm6X18g.lLCq2eRThxwlPmFayYUffG7LpkYdjxy6LFfX7uBwBP0g.PNG/a27afcc3-c763-4275-89a9-865fb43b096b.png?type=w773"
    },
    { 
      q: "쌤, 저 회사 들어가서 들었던 말 중에 듣는 귀가 제일 좋다는 말을 들었어요. 그게 다 쌤이랑 레슨 하면서 새로운 곡 나갈 때마다 호흡이나 끝음 처리 같은 보컬 카피 연습을 진짜 많이 해봐서 좋아진 것 같아요. 그리고 노래를 부를 때 정리 정돈된 느낌으로 차분하게 부르고 싶다는 생각을 항상 했었거든요. 최근 들어 예전에 레슨 받았던 곡들을 쭉 복습해 보는데, 예전이랑 다르게 제가 확실히 정돈되게 부르는 느낌이 딱 듭니다. 1년 5개월에 추가로 2개월째 수업 들으면서 진짜 많이 배웠다고 느껴요. 회사에서 귀 좋다는 칭찬 들으니까 쌤 생각이 제일 먼저 났어요. 감사합니다 진짜로.", 
      name: "정ㅇㅇ", 
      role: "여 · 오디션 준비(쏘ㅇㅇㅇ 합격)",
      initials: "정",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjUz/MDAxNzgwNTk4ODYzMjIx.uAzcYRg9JmVtGwDa5Bw9P2KQliop993yzPhAiDF13ygg.rcOceEqYfB0l2ZdaDboXCYvtOIsMMULXGdVKx3KcqTkg.PNG/7c82aa99-df1f-4e75-9af3-8e4300b02000.png?type=w773"
    },
    { 
      q: "다른 곳에서 2년 넘게 레슨을 받았어서 음치나 박치는 아니었는데, 스스로 목소리에 힘이 너무 없고 어떻게 소리를 내야 할지 확신이 없었어요. 그러다 선생님을 만나게 됐습니다. 처음에는 지도를 약간 엄하게 하셔서 수업 중에 식은땀도 흘리고 어렵게 느끼기도 했는데, 점점 친근하게 다가와 주시면서 세세한 부분까지 다 체크해 주시는 열정에 신뢰가 생겼어요. 립트릴, 숨쉬기부터 카피하는 법 등 다양한 부분들을 배우면서 감정 싣는 법을 제대로 알게 됐습니다. 연습 시간이 많이 부족해서 더디게 늘 줄 알았는데, 어느 순간부터 예전에 안 되던 부분들이 되고 안 나오던 음이 나오는 저를 보면서 신기했어요. 선생님이 들으시는 귀가 너무 좋으셔서 포인트를 금방 정확하게 지적해 주시니까 레슨 방식이 다른 곳보다 훨씬 담백하고 군더더기 없게 느껴집니다. 요즘은 노래방 가거나 흥얼거리다 보면 주변에서 취미로 하는 거 맞냐고, 그 정도만 하면 됐다고 말할 정도로 실력이 많이 늘었어요. 곧 40대를 바라보는 나이인데 무언가를 꾸준히 배우는 데 나이는 상관없는 것 같습니다. 이 정도 실력까지 만들어 주셔서 정말 감사합니다.", 
      name: "황ㅇㅇ", 
      role: "남 · 취미",
      initials: "황",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjcw/MDAxNzgwNTk4Nzc5NTI4.D975BBgUY2p2dDNGCo1Vva0quME6f0YvM6Jz9aCa5O0g.J1EU0oVDeV8i7aRQFQl4Hy93-He7NdDAICrUroWE-LAg.PNG/4dc82ab4-7a59-4e70-ad22-a5d773d772bd.png?type=w773"
    },
    { 
      q: "마법 같은 보컬 선생님입니다. 개인 레슨 지도받고 온 제 아이가 맞나 싶을 정도로 실력이 신기하게 쑥 늘었어요. 이번에 K-pop 노래를 부를 기회가 생겨서 선생님께 특별히 지도를 부탁드렸는데, 무대를 보고 아이도 아빠도 저도 정말 입을 다물지 못했습니다. 학원 연습실 퀄리티도 높고 관리도 항상 철장하셔서 아주 깔끔하고 안심이 되었어요. 정말 최고입니다. 주변에 무조건 강추예요. 감사합니다 선생님♡♡♡", 
      name: "김ㅇㅇ", 
      role: "남 · 오디션 대비",
      initials: "김",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfODUg/MDAxNzgwNTk4Nzc5NDk4.UAoYyGD3ysBraTUmT8ZJPE9cA5ZpBuz3tWZzVDEpMvUg.nJyDpcsyUm81x68C6zjrdOhZHXH_8rc_rObKQpKTZV0g.PNG/6ad5a2a0-28e0-4c60-b801-d752afb798cc.png?type=w773"
    },
    { 
      q: "결혼식이 한 달도 남지 않은 상황에서 직접 축가를 불러보겠다는 무모한 생각으로 급하게 레슨을 잡았습니다. 사실 노래 실력도 너무 없었고 개인적으로 연습할 시간도 거의 없어서 걱정이 많았는데 기대 이상으로 실력이 늘어서 저 스스로도 놀랐어요. 선생님이 짚어주시는 포인트마다 비포 애프터 녹음을 들어보면서 진행하니까 왜 그렇게 디렉팅을 해주셨는지 단번에 체감이 되더라고요. 조금 더 일찍 레슨을 시작했으면 발성이나 세세한 부분까지 다 바꿀 수 있었을 텐데 아쉬울 정도입니다. 그래도 충분히 축가를 부를 수 있게 되어서 대만족입니다!!", 
      name: "김ㅇㅇ", 
      role: "남 · 축가",
      initials: "김",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfOTgg/MDAxNzgwNTk4NzgwMjY0.H97BwkR7F9VM081_-szJAkDjSi0q1lHzz7ajhdxwhRkg.sg_1cQfYhfoU_Aim8hfDpwJ-KdyzENz33IrFZjIeo54g.PNG/3083e125-b8b9-42e7-b61d-b09dc9603e18.png?type=w773"
    },
    { 
      q: "취미반으로 배우는 거라 솔직히 가벼운 마음으로 시작했는데, 생각보다 너무 디테일하게 봐주셔서 놀랐어요. 꼼꼼하게 짚어주시는 피드백 덕분에 단기간에 실력이 진짜 많이 향상된 게 느껴집니다. 이번 가요제 나가서 다 휩쓸어버리고 오겠습니다. 최고의 선생님이에요.", 
      name: "이ㅇㅇ", 
      role: "남 · 사내 가요제 준비 (1등 수상)",
      initials: "이",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMTk4/MDAxNzgwNTk4Nzc5MzE5.fw3hsmHlzSnbX4evsLf7I90dvFRdpUUefaXU12zDbv0g.4aXmbtTVFWpZZH-FaKxRqw1YdTRwasRRXc9Jl-PamEUg.PNG/1.png?type=w773"
    },
    { 
      q: "한 달 수업 들었는데, 처음에는 고음 낼 때마다 삑사리만 나고 아예 안 올라갔던 음들이 이제는 편하게 잘 올라가는 느낌을 받아요. 무엇보다 제일 좋은 건 이제 친구들이랑 노래방 가서 노래 부를 때 아무리 오래 불러도 목이 안 아프다는 사실입니다. 수업 중간중간 배운 내용을 차분히 필기할 시간도 주시고, 학생이 지금 어떤 상태인지 최대한 들어보고 같이 문제점을 해결해 주시는 스타일이에요. 전문 장비로 매 수업마다 레코딩해서 실력이 느는 모습을 직접 확인할 수 있는 것도 너무 좋았습니다.", 
      name: "김ㅇㅇ", 
      role: "여 · 취미",
      initials: "김",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfNDgg/MDAxNzgwNTk4ODYzNzMx.xxufQ7Mw0uoqU9rUd4PJPEGJzDGybFrea1jw-r9ST_Ig.phXoypATPEk2O3RCmClDQjG6SV7W7PKK-DYhaTER1u4g.PNG/66eff4ca-15a4-431c-9269-7f237207f059.png?type=w773"
    },
    { 
      q: "5월 결혼식에서 신부에게 직접 노래를 불러주고 싶어서 1월부터 4월 말까지 레슨을 받았습니다. 결론부터 말하면 정말 만족스러운 수업이었어요. 단순히 가수를 흉내 내며 따라 부르는 게 아니라 기본 창법이나 호흡 등 제 목소리와 평소 습관을 전부 캐치해서 지도해 주신 덕분에 짧은 기간 동안 많은 변화가 있었습니다. 다시 한번 감사드립니다.", 
      name: "김ㅇㅇ", 
      role: "남 · 축가 준비",
      initials: "김",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMTQ1/MDAxNzgwNTk4Nzc5NTAw.QGxcU0WHHjdKqlCkzFxd67Kb2poKjK12jAT4x1ru_Okg.0TIQBdW_tFdBCnXx0naIwqUWokIqNPtwd6sGsR1IWJEg.PNG/810f3267-6bab-4d6b-8586-d874ffdbed9b.png?type=w773"
    },
    { 
      q: "취미로 4개월째 배우고 있는데 처음보다 확실히 소리가 좋아지고 성대를 조절하는 능력이 생기고 있는 것 같습니다. 취미로 배우는 것임에도 입시를 준비하는 학생을 봐주시는 것처럼 정말 꼼꼼하게 잘 봐주세요. 수업에 대한 만족도는 시간이 갈수록 더 높아지고 있습니다.", 
      name: "박ㅇㅇ", 
      role: "남 · 취미",
      initials: "박",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjA3/MDAxNzgwNTk4Nzc5NTAx.DrbE7vl3ndIVTHXgYU2uHzWXT9zUCcVL7Rv4_injT0sg.3KmNWTiNyUXAt3A8f3-bB8nDGeBoCSxZeH8wicZvJ6sg.PNG/3.png?type=w773"
    },
    { 
      q: "실음과 입시 준비하면서 내 목소리에 한계를 많이 느끼던 고3 학생입니다. 원래 메트로놈을 켜도 4비트 박자를 못 맞출 정도로 심각한 박치였고, 발라드는 아예 부르지도 못했어요. 호흡이 너무 쉽게 빠지는 나쁜 습관 때문에 부를 수 있는 장르도 엄청 제한적이었습니다. 근데 쌤 수업 들으면서 진짜 많이 늘었어요! 누기되는 바람을 알기 쉽게 꽉 채워주는 소리 공간 훈련을 받았는데, 그 덕분에 팝 음악을 부르는 게 훨씬 쉬워졌고 신기하게 지금은 발라드가 제 주 장르가 됐습니다ㅎㅎ 장르를 떠나서 곡 전체를 이해하고 감정을 컨트롤하는 법을 배운 게 정말 컸던 것 같아요. 제가 원래 엄청 낙담도 잘하고 멘탈이 약해서 '난 할 수 있는 장르가 없나 봐' 하고 자책했었는데, 쌤이 멘탈도 항상 쌤 믿고 노래할 수 있게 꽉 잡아주셨어요. 차근차근 이끌어주신 덕분에 자신감도 많이 생겼고, 앞으로 더 다양한 장르에 도전해보고 싶다는 욕심이 생겼습니다!", 
      name: "계ㅇㅇ", 
      role: "여 · 입시 준비",
      initials: "계",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjAw/MDAxNzgwNTk4ODYzMjMy.Z_XUiMOGXjrWv6LMGVpzjgBrjc8NLFe0kIy4wdVUrtQg.M5sDWyrG_UsJbMExBbIhInHbDbTbnNXwhc3Qdbd57O8g.PNG/ebcd6aec-cacb-4a16-a8ce-18492487417a.png?type=w773"
    },
    { 
      q: "노래 수업을 들으며 발성과 호흡의 중요성을 새롭게 깨달았습니다. 기초부터 차근차근 지도해 주셔서 노래 부를 때 더 안정적인 소리를 낼 수 있게 되었어요. 특히 호흡을 조절하는 법을 배우면서 노래가 한층 자연스러워졌습니다. 그리고 제 목소리 특성을 고려해 피드백을 주셔서 자신감이 많이 생겼어요. 수업 분위기도 편안하고 즐거워서 부담 없이 배울 수 있었습니다. 노래 실력을 제대로 키우고 싶은 분들께 추천합니다.", 
      name: "윤ㅇㅇ", 
      role: "남 · 취미",
      initials: "윤",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMjg3/MDAxNzgwNjAzODE3Mjgy.BSgi6wcCv4Qvho6MFewiRqfkfUUacZlzMMveCmtIqOYg.O7Br2_oO0VDhugcLj5IFjO3EleCmzH_EH0aix9BgFHEg.PNG/%E3%84%B1.png?type=w773"
    },
    { 
      q: "살면서 처음으로 받아본 보컬 레슨입니다. 그동안 몰랐던 부분들과 잘못 알고 있던 부분들에 대해서 여러 가지 방법으로 쉽게 설명해 주셔서 정말 많은 도움이 되었습니다. 레슨생 개개인에게 딱 맞는 방법으로 가르쳐 주시니까 배움을 고민하시는 분들은 그냥 믿고 받으셔도 좋을 것 같아요.", 
      name: "이ㅇㅇ", 
      role: "남 · 취미",
      initials: "이",
      image: "https://postfiles.pstatic.net/MjAyNjA2MDVfMTYz/MDAxNzgwNjAzODE3MzE2.mR7yFPrVbuuHdH-7s1_wcyFlDV702YZ1YKNo5VN1U5wg.BUwpV00LB14D_6j8J0ZycbPGm4fMA0dZeJY1R_dZyqEg.PNG/%E3%84%B7.png?type=w773"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedReview, setSelectedReview] = useState<any | null>(null);

  const DOT_COUNT = 5;

  const checkScrollState = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const denominator = scrollWidth - clientWidth;
      if (denominator > 0) {
        const progress = scrollLeft / denominator;
        const currentDot = Math.min(DOT_COUNT - 1, Math.max(0, Math.round(progress * (DOT_COUNT - 1))));
        setActiveDot(currentDot);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollState);
      // Run once initially
      checkScrollState();
      
      // Resize listener for responsive accuracy
      const observer = new ResizeObserver(() => checkScrollState());
      observer.observe(el);
      
      return () => {
        el.removeEventListener('scroll', checkScrollState);
        observer.disconnect();
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardWidth = el.clientWidth * 0.75;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      el.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="archive" className="py-24 md:py-36 bg-[#fcfbf7] overflow-hidden scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14 md:mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="section-label justify-start">What People Say</span>
          </div>

          <div className="space-y-2 md:space-y-3 text-right ml-auto flex flex-col items-end select-none shrink-0 mt-4 md:mt-10">
            <h2 className="text-neutral-900 text-right flex items-baseline gap-2 md:gap-3 justify-end leading-none">
              <span className="font-dm-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight">Real</span>
              <span className="font-signature font-normal text-4xl sm:text-6xl lg:text-7xl pb-1">Voice,</span>
            </h2>
            <h3 className="text-neutral-900 text-right flex items-baseline gap-2 md:gap-3 justify-end leading-none">
              <span className="font-dm-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight">Real</span>
              <span className="font-signature font-normal text-4xl sm:text-6xl lg:text-7xl">Growth</span>
            </h3>
          </div>
        </div>

        {/* Relative container wrapping the carousel and absolute floating navigation buttons */}
        <div className="relative group/carousel w-full">
          {/* Unified Horizontal Scrolling Carousel for Ultimate Mobile & Desktop Consistency */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 w-full px-6 -mx-6 sm:px-0 sm:mx-0 cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {reviews.map((item, i) => {
              const isLong = item.q.length > 340;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  onClick={() => setSelectedReview(item)}
                  className="relative shrink-0 w-[82vw] sm:w-[45vw] lg:w-[28vw] snap-align-start bg-white p-7 sm:p-8 rounded-[24px] border border-black/[0.04] shadow-sm flex flex-col justify-between min-h-[380px] sm:min-h-[440px] hover:shadow-md transition-all duration-300 transform-gpu cursor-pointer select-none"
                  style={{ zIndex: 10 }}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <Quote className="w-8 h-8 text-[#f37022]/10" />
                      {isLong && (
                        <span className="text-[10px] font-sans font-bold text-[#f37022] bg-[#f37022]/8 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Full Story
                        </span>
                      )}
                    </div>
                    {item.headline && (
                      <h4 className="text-xs sm:text-[13px] md:text-sm font-sans font-bold text-[#f37022] tracking-tight leading-relaxed break-keep">
                        {item.headline.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && <br className="block xl:hidden" />}
                            {idx > 0 && <span className="hidden xl:inline">&nbsp;</span>}
                            {line}
                          </React.Fragment>
                        ))}
                      </h4>
                    )}
                    <div className="relative">
                      <p className="text-[12px] sm:text-[13px] font-sans font-medium leading-relaxed text-black/70 text-justify break-keep">
                        {isLong ? (
                          <>
                            <span>{item.q.substring(0, 320)}... </span>
                            <span className="inline-block font-bold text-[#f37022] hover:underline whitespace-nowrap ml-1 text-xs">
                              더보기
                            </span>
                          </>
                        ) : (
                          item.q
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-black/[0.05] mt-6">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover shrink-0 border border-black/5"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-xs text-neutral-600 font-sans tracking-tight shrink-0">
                        {item.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-black truncate">{item.name}</h5>
                      <p className="text-[10px] sm:text-[11px] text-black/40 font-sans tracking-wide font-medium mt-0.5 truncate">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Floating Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              scroll('left');
            }}
            disabled={!canScrollLeft}
            className={`absolute top-[45%] -translate-y-1/2 left-4 xl:-left-8 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-black/[0.06] items-center justify-center transition-all duration-300 hidden md:flex ${
              canScrollLeft 
                ? "opacity-100 scale-100 hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95 text-neutral-900 cursor-pointer" 
                : "opacity-0 scale-90 pointer-events-none text-neutral-300"
            }`}
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Premium Floating Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              scroll('right');
            }}
            disabled={!canScrollRight}
            className={`absolute top-[45%] -translate-y-1/2 right-4 xl:-right-8 z-30 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-black/[0.06] items-center justify-center transition-all duration-300 hidden md:flex ${
              canScrollRight 
                ? "opacity-100 scale-100 hover:bg-white hover:scale-110 hover:shadow-lg active:scale-95 text-neutral-900 cursor-pointer" 
                : "opacity-0 scale-90 pointer-events-none text-neutral-300"
            }`}
            aria-label="다음 후기"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Elegant Swipe Indicator & Synchronized Pagination Dots */}
        <div className="flex flex-col items-center gap-3 mt-6">
          {/* Subtle Mobile/Tablet Swipe Guide */}
          <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-sans font-medium tracking-wider select-none animate-pulse md:hidden">
            <span>옆으로 밀어 더보기</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#f37022]" />
          </div>
          
          {/* Active Navigation Circle Rails */}
          <div className="flex items-center gap-1.5 select-none touch-auto z-20">
            {Array.from({ length: DOT_COUNT }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  if (scrollRef.current) {
                    const el = scrollRef.current;
                    const cardPercent = dotIndex / (DOT_COUNT - 1);
                    const maxScroll = el.scrollWidth - el.clientWidth;
                    el.scrollTo({
                      left: maxScroll * cardPercent,
                      behavior: "smooth"
                    });
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                  activeDot === dotIndex 
                    ? "w-6 bg-[#f37022]" 
                    : "w-2.5 bg-neutral-200 hover:bg-neutral-300"
                }`}
                aria-label={`${dotIndex + 1}번 후기 보기`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Elegant, Editorial Light Canvas Review Modal Overlay */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#fcfbf9] rounded-[28px] overflow-hidden shadow-2xl p-7 sm:p-10 border border-black/5"
            >
              {/* Subtle design accents */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#f37022]/5 to-transparent pointer-events-none" />
              
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-400 hover:text-neutral-900 group"
                aria-label="닫기"
              >
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>

              <Quote className="w-12 h-12 text-[#f37022]/20 mb-5" />

              <div className="max-h-[50vh] overflow-y-auto scrollbar-thin pr-2">
                {selectedReview.headline && (
                  <h4 className="text-base sm:text-lg font-sans font-bold text-[#f37022] tracking-tight leading-relaxed break-keep mb-4">
                    {selectedReview.headline.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <br className="block md:hidden" />}
                        {idx > 0 && <span className="hidden md:inline">&nbsp;</span>}
                        {line}
                      </React.Fragment>
                    ))}
                  </h4>
                )}
                <p className="text-sm sm:text-base font-sans font-medium leading-relaxed text-neutral-850 break-keep text-justify whitespace-pre-line select-text">
                  "{selectedReview.q}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-black/5 mt-8">
                {selectedReview.image ? (
                  <img 
                    src={selectedReview.image} 
                    alt={selectedReview.name} 
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover shrink-0 border border-black/5"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#f37022]/10 text-[#f37022] flex items-center justify-center font-bold text-sm font-sans shrink-0">
                    {selectedReview.initials}
                  </div>
                )}
                <div>
                  <h5 className="font-sans font-bold text-sm sm:text-base text-black">{selectedReview.name}</h5>
                  <p className="text-xs text-black/40 font-sans tracking-wide font-medium mt-0.5">{selectedReview.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState<"students" | "partners">("students");
  const [studentsForm, setStudentsForm] = useState({
    name: "",
    contact: "",
    interest: "vocal",
    message: ""
  });
  const [partnersForm, setPartnersForm] = useState({
    company: "",
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleStudentsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentsForm.name || !studentsForm.contact) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handlePartnersSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnersForm.company || !partnersForm.name || !partnersForm.email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setStudentsForm({ name: "", contact: "", interest: "vocal", message: "" });
    setPartnersForm({ company: "", name: "", email: "", message: "" });
  };

  return (
    <section id="booking" className="py-28 md:py-40 bg-white border-t border-black/5 overflow-hidden scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16"
        >
          <span className="section-label">CONTACT US</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-stretch">
          
          {/* Left Column: Traditional branding & channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between py-2"
          >
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-neutral-900 leading-[1.15]">
                Let’s Find <br />
                <span className="font-signature text-[#f37022] normal-case font-normal inline-block" style={{ fontFamily: '"Petit Formal Script", cursive' }}>Your True Voice</span>
              </h2>
              
              <p className="text-[13px] text-neutral-500 leading-relaxed max-w-md">
                누군가의 가능성을 깨우는 수업도,<br />
                하나의 팀을 빛내는 프로젝트도.<br />
                목소리가 필요한 모든 순간에 원앤온리보이스가 함께합니다.
              </p>

              {/* Direct channels with microinteractions */}
              <div className="space-y-6 pt-2 max-w-md">
                <div className="group flex justify-between border-b border-neutral-100 pb-5 items-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-neutral-400">Email</span>
                  <a href="mailto:1andonlyvoice@naver.com" className="text-sm font-semibold text-neutral-800 hover:text-[#f37022] transition-colors underline underline-offset-4 decoration-neutral-200 hover:decoration-[#f37022]/40">
                    1andonlyvoice@naver.com
                  </a>
                </div>
                <div className="group flex justify-between border-b border-neutral-100 pb-5 items-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-neutral-400">Instagram</span>
                  <a href="https://www.instagram.com/1andonly.voice" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-800 hover:text-[#f37022] transition-colors underline underline-offset-4 decoration-neutral-200 hover:decoration-[#f37022]/40">
                    @1andonly.voice
                  </a>
                </div>
                <div className="group flex justify-between border-b border-neutral-100 pb-5 items-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-black text-neutral-400">KakaoTalk</span>
                  <a href="http://pf.kakao.com/_MKwAX/chat" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-800 hover:text-[#f37022] transition-colors underline underline-offset-4 decoration-neutral-200 hover:decoration-[#f37022]/40">
                    원앤온리보이스
                  </a>
                </div>
              </div>
            </div>

            {/* Aesthetic card for counseling notice */}
            <div className="hidden lg:block bg-neutral-50 border border-neutral-100 rounded-2xl p-6 mt-12">
              <span className="text-[9px] font-mono font-black tracking-[0.2em] text-[#f37022] uppercase block mb-2">
                /// OPERATING GUIDELINE
              </span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                모든 제안 및 상담 신청은 내용 조율을 거쳐 본사 마스터 코치 팀이 직접 맞춤형 프로세스로 설계 후 연락해 드립니다.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Custom Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="h-full bg-[#fbfbfa] border border-neutral-200/60 rounded-[28px] p-6 sm:p-10 md:p-12 shadow-sm flex flex-col justify-between">
              
              {!isSubmitted ? (
                <div>
                  {/* Luxury Option Segment Switcher */}
                  <div className="flex bg-neutral-200/50 p-1 rounded-full mb-10 relative">
                    <button
                      type="button"
                      onClick={() => setActiveTab("students")}
                      className={`flex-1 py-3 text-center rounded-full transition-all duration-300 relative z-10 flex flex-col items-center justify-center`}
                    >
                      <span className={`text-[13px] sm:text-[14px] font-bold ${activeTab === "students" ? "text-white" : "text-neutral-500 hover:text-neutral-800"}`}>
                        개인 레슨 문의
                      </span>
                      <span className={`text-[9px] font-mono tracking-widest ${activeTab === "students" ? "text-white/70" : "text-neutral-400"}`}>
                        For Students
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("partners")}
                      className={`flex-1 py-3 text-center rounded-full transition-all duration-300 relative z-10 flex flex-col items-center justify-center`}
                    >
                      <span className={`text-[13px] sm:text-[14px] font-bold ${activeTab === "partners" ? "text-white" : "text-neutral-500 hover:text-neutral-800"}`}>
                        B2B 제휴 · 협업 문의
                      </span>
                      <span className={`text-[9px] font-mono tracking-widest ${activeTab === "partners" ? "text-white/70" : "text-neutral-400"}`}>
                        For Partners
                      </span>
                    </button>

                    {/* Sliding highlight background */}
                    <motion.div 
                      layoutId="activeTabBackground"
                      className="absolute inset-y-1 bg-neutral-900 rounded-full"
                      animate={{
                        left: activeTab === "students" ? "4px" : "calc(50% + 2px)",
                        right: activeTab === "students" ? "calc(50% + 2px)" : "4px"
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  </div>

                  {/* Form Switch Area */}
                  <AnimatePresence mode="wait">
                    {activeTab === "students" ? (
                      <motion.form 
                        key="students-form"
                        onSubmit={handleStudentsSubmit}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">이름 <span className="text-[#f37022]">*</span></label>
                          <input 
                            type="text" 
                            required
                            placeholder="성함을 입력해 주세요"
                            value={studentsForm.name}
                            onChange={(e) => setStudentsForm({ ...studentsForm, name: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">연락처 <span className="text-[#f37022]">*</span></label>
                          <input 
                            type="tel" 
                            required
                            placeholder="연락처를 입력해 주세요 (예: 010-1234-5678)"
                            value={studentsForm.contact}
                            onChange={(e) => setStudentsForm({ ...studentsForm, contact: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">상담 희망 분야</label>
                          <select 
                            value={studentsForm.interest}
                            onChange={(e) => setStudentsForm({ ...studentsForm, interest: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium appearance-none"
                            style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", backgroundSize: "16px" }}
                          >
                            <option value="vocal">1:1 프라이빗 보컬 코칭</option>
                            <option value="audition">기획사 오디션 & 프로 준비</option>
                            <option value="entrance_exam">실용음악 입시 & 편입 준비</option>
                            <option value="global_vocal">외국인 유학생 & 글로벌 보컬</option>
                            <option value="special_coaching">축가 & 스페셜 무대 코칭</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">희망하시는 변화 및 전하실 말씀</label>
                          <textarea 
                            rows={4}
                            placeholder="본인의 목소리 고민이나 이루고 싶은 변화를 편히 나누어 주세요."
                            value={studentsForm.message}
                            onChange={(e) => setStudentsForm({ ...studentsForm, message: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={submitting}
                          className="w-full py-4.5 bg-neutral-900 hover:bg-[#f37022] active:scale-[0.99] hover:shadow-lg hover:shadow-[#f37022]/10 text-white rounded-xl font-bold tracking-widest text-xs uppercase transition-all duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {submitting ? "전송하는 중..." : "개인 레슨 문의하기"}
                          {!submitting && <ArrowUpRight className="w-4 h-4" />}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.form 
                        key="partners-form"
                        onSubmit={handlePartnersSubmit}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">회사 / 기관명 <span className="text-[#f37022]">*</span></label>
                          <input 
                            type="text" 
                            required
                            placeholder="회사명 또는 소속 기관명을 입력해 주세요"
                            value={partnersForm.company}
                            onChange={(e) => setPartnersForm({ ...partnersForm, company: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">담당자 이름 <span className="text-[#f37022]">*</span></label>
                          <input 
                            type="text" 
                            required
                            placeholder="직함 및 성함을 입력해 주세요"
                            value={partnersForm.name}
                            onChange={(e) => setPartnersForm({ ...partnersForm, name: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">이메일 주소 <span className="text-[#f37022]">*</span></label>
                          <input 
                            type="email" 
                            required
                            placeholder="office@brand.com"
                            value={partnersForm.email}
                            onChange={(e) => setPartnersForm({ ...partnersForm, email: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase font-black tracking-widest text-neutral-500 block">제안 및 협업 제안 내용</label>
                          <textarea 
                            rows={4}
                            placeholder="프로젝트 제안 내용, 제휴 파트너십, 기관 단체 특강 등 대략적인 목적을 기재해 주시기 바랍니다."
                            value={partnersForm.message}
                            onChange={(e) => setPartnersForm({ ...partnersForm, message: e.target.value })}
                            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#f37022] focus:ring-1 focus:ring-[#f37022]/10 transition-all font-medium resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={submitting}
                          className="w-full py-4.5 bg-neutral-900 hover:bg-[#f37022] active:scale-[0.99] hover:shadow-lg hover:shadow-[#f37022]/10 text-white rounded-xl font-bold tracking-widest text-xs uppercase transition-all duration-300 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {submitting ? "전송하는 중..." : "제휴 문의 완료하기"}
                          {!submitting && <ArrowUpRight className="w-4 h-4" />}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Beautiful design success feedback animation state */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-4"
                >
                  <div className="w-16 h-16 bg-neutral-900 text-[#f37022] rounded-full flex items-center justify-center mb-8 shadow-md">
                     <Sparkles className="w-7 h-7" />
                  </div>
                  
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#f37022] mb-3 block font-bold">/// TRANSMISSION COMPLETED</span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-black text-neutral-900 mb-4">소중한 제안이 접수되었습니다</h3>
                  
                  <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mb-10">
                    보내주신 상담 신청 및 문의 사항은 마스터 코딩 담당팀이 꼼꼼히 검토 후 기재해 주신 연락처로 24시간 내에 따뜻히 연락드리겠습니다.
                  </p>

                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="px-6 py-3 border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 text-[11px] font-bold tracking-widest uppercase transition-all active:scale-95 rounded-xl cursor-pointer"
                  >
                    새로운 문의 접수하기
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="bg-black py-20 text-white">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
         <h3 className="text-6xl md:text-[8vw] font-sans font-bold leading-none tracking-tighter text-off-white uppercase">
           Stay connected
         </h3>
         <a href="mailto:1andonlyvoice@naver.com" className="flex items-center gap-4 text-xl font-sans font-medium hover:text-[#f37022] transition-colors group">
           Get in touch <MoveRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
         </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 border-t border-white/10">
        <div className="footer-col md:col-span-1">
          <span className="font-logo font-bold text-lg mb-4 uppercase tracking-tighter text-white">ONE AND ONLY VOICE</span>
          <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
             SEOUL, SOUTH KOREA
          </p>
        </div>
        <div className="footer-col">
          <a href="#program" className="footer-link">Our Work</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#archive" className="footer-link">Reviews</a>
        </div>
        <div className="footer-col">
          <a href="https://www.instagram.com/1andonly.voice" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="http://pf.kakao.com/_MKwAX/chat" target="_blank" rel="noopener noreferrer" className="footer-link">KakaoTalk</a>
          <a href="mailto:1andonlyvoice@naver.com" className="footer-link">Email</a>
        </div>
        <div className="footer-col flex items-end justify-end md:col-span-1">
          <p className="text-[10px] text-white/20 uppercase tracking-widest text-right">
             Created by Voice Master Team <br />
             © 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    if (!showContent) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [showContent]);

  return (
    <div className="bg-white min-h-screen">
      <AnimatePresence>
        {!showContent && (
          <IntroOverlay key="intro" onComplete={() => setShowContent(true)} />
        )}
      </AnimatePresence>
      
      {showContent && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <Navbar />
          <main>
            <HeroSection />
            <PhilosophySection />
            <AboutSection />
            <WorkSection />
            <VoiceDisplaySection />
            <CoachesSection />
            <MomentsSection />
            <BrandIdentitySection />
            <ArchiveSection />
            <InteractiveReviewsSection />
            <BookingSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
