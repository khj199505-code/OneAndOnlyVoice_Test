import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Calendar, MapPin, X, Volume2 } from "lucide-react";

interface Moment {
  id: string;
  category: "lesson" | "growth" | "study" | "field";
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  date: string;
  location: string;
  imagesCount: string;
  metadata: {
    lens: string;
    exposure: string;
    iso: string;
    acoustics: string;
  };
}

const MOMENTS_DATA: Moment[] = [
  {
    id: "M01",
    category: "lesson",
    title: "Vocal Brand Tracking",
    subtitle: "고해상도 1:1 레코딩 정밀 튜닝",
    desc: "성대의 아주 미세한 떨림 형태와 생체 배음 파동까지 고퀄리티 튜브 마이크와 하이엔드 전압 프리앰프로 완벽히 관찰하는 시그니처 1:1 레코딩 디렉팅 세션입니다. 자신의 음색 결을 가장 아름다운 아우라로 복각해 냅니다.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    date: "28 April 2026",
    location: "Vocal Master Suite A",
    imagesCount: "12 IMAGES",
    metadata: {
      lens: "Super-Achromatic 110mm f/1.8",
      exposure: "1/160s • f/1.8",
      iso: "ISO 320",
      acoustics: "Studio RT60 • 0.24s (Dead)"
    }
  },
  {
    id: "M02",
    category: "field",
    title: "Symphonic Harmonics Rehearsal",
    subtitle: "메인 콘서트 예행과 공간 필터링",
    desc: "공간의 물리적인 배음 구조를 완벽히 파악하여, 거대한 울림 홀에서도 찌그러짐 없이 청중 전체의 고막을 기품 있게 관통하는 프리미엄 스피치 & 라이브 가창 디자인 훈련의 실전 순간입니다.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    date: "14 May 2026",
    location: "Acoustic Grand Hall",
    imagesCount: "20 IMAGES",
    metadata: {
      lens: "Prismatic Cinema 50mm T1.3",
      exposure: "1/125s • T1.3",
      iso: "ISO 1600",
      acoustics: "Hall RT60 • 1.85s (Reverb)"
    }
  },
  {
    id: "M03",
    category: "study",
    title: "Masterclass Resonance Audit",
    subtitle: "주간 보컬 파트 연구 포럼",
    desc: "감이나 요령만으로 소리를 유도하지 않습니다. 한 사람 한 사람의 데이터를 가상의 음성 시뮬레이터에 태워, 어떤 성대 조합에서 진정한 찬란함이 나오는지를 학술적이고 정교하게 토론하는 강사진 리서치 소동기입니다.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    date: "03 May 2026",
    location: "Executive Seminar Lab",
    imagesCount: "09 IMAGES",
    metadata: {
      lens: "Signature Lux 35mm f/1.4",
      exposure: "1/80s • f/2.0",
      iso: "ISO 800",
      acoustics: "Meeting Rm RT60 • 0.38s"
    }
  },
  {
    id: "M04",
    category: "growth",
    title: "Signature Acoustic Tuning",
    subtitle: "명품 보이스 질감의 첫 연마",
    desc: "처음 문을 두드려 자신의 미적인 보이스 유형을 찾아낼 때 느껴지는 감격스러운 첫 호흡. 울림 본연의 성대 접촉 빈도를 실시간 파악하고, 목이나 턱 밑의 긴장을 원천 차단하여 가창의 숨은 아우라를 일깨웁니다.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=1200&auto=format&fit=crop",
    date: "22 May 2026",
    location: "Creative Curation Cabin",
    imagesCount: "15 IMAGES",
    metadata: {
      lens: "Classic Prime 85mm f/1.4",
      exposure: "1/200s • f/1.4",
      iso: "ISO 400",
      acoustics: "Cabin RT60 • 0.28s"
    }
  },
  {
    id: "M05",
    category: "field",
    title: "Sensory Stage Spotlight",
    subtitle: "고결한 보컬 캐릭터의 발현",
    desc: "서치라이트와 극적인 스모그 너머로 비로소 마스크를 벗고 홀로 선 순간. 가르쳐 드린 모든 무대 매너와 단어 마디마다 밀착된 고혹적인 지적 톤앤매너를 발휘하여 청중들의 오감을 완전히 사로잡는 마력의 데뷔입니다.",
    image: "https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?q=80&w=1200&auto=format&fit=crop",
    date: "19 May 2026",
    location: "Grand Reverb Arena Stage",
    imagesCount: "18 IMAGES",
    metadata: {
      lens: "Visionary Zoom 70-200mm f/2.8",
      exposure: "1/250s • f/2.8",
      iso: "ISO 3200",
      acoustics: "Arena RT60 • 2.45s"
    }
  },
  {
    id: "M06",
    category: "study",
    title: "Analog Core Soundscaping",
    subtitle: "아날로그 배음 강화 프로세싱",
    desc: "눈에 전혀 보이지 않는 섬세한 소리의 고요들을 하이엔드 진공관 이퀄라이저를 통해 고전적으로 변형하는 사운드스케이프 스튜디오 세팅입니다. 주파수 전 영역의 고화질 질감을 직접 귀로 확인하며 브랜드 가치를 구축합니다.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    date: "10 May 2026",
    location: "Mastering Control Deck",
    imagesCount: "14 IMAGES",
    metadata: {
      lens: "Fine-Detail Macro 60mm f/2.8",
      exposure: "1/60s • f/4.0",
      iso: "ISO 640",
      acoustics: "Control Rm RT60 • 0.18s"
    }
  }
];

export const MomentsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "lesson" | "growth" | "study" | "field">("all");
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredMoments = MOMENTS_DATA.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  useEffect(() => {
    setHoveredIndex(null);
  }, [activeCategory]);

  const getMarqueeItems = () => {
    if (filteredMoments.length === 0) return [];
    let items = [...filteredMoments];
    while (items.length < 15) {
      items = [...items, ...filteredMoments];
    }
    return [...items, ...items];
  };

  const marqueeItems = getMarqueeItems();

  return (
    <section id="moments" className="py-24 md:py-36 bg-[#060608] text-white overflow-hidden relative border-t border-b border-white/[0.02] scroll-mt-24">
      {/* Inline style for high-performance pure CSS infinite marquee scrolling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 70s linear infinite;
        }
        .animate-marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Ambience Accent Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[8%] left-[15%] w-[35vw] h-[35vw] rounded-full bg-[#f37022]/4 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[8%] w-[35vw] h-[35vw] rounded-full bg-purple-600/3 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col select-none">
              <h3 className="font-sans font-black tracking-tight text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] text-white flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span>Our</span>
                <span className="font-signature text-[#f37022] text-4.5xl sm:text-6.5xl md:text-[6rem] lg:text-[7rem] normal-case font-normal ml-2" style={{ fontFamily: '"Petit Formal Script", cursive' }}>Stories</span>
              </h3>
            </div>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5" id="moments-filters">
            {[
              { tag: "all", label: "All Moments", id: "01" },
              { tag: "lesson", label: "LESSON LOG", id: "02" },
              { tag: "growth", label: "GROWTH RECORD", id: "03" },
              { tag: "study", label: "STUDY & RESEARCH", id: "04" },
              { tag: "field", label: "FIELD & PROJECTS", id: "05" }
            ].map((cat, idx) => (
              <button
                key={cat.tag}
                onClick={() => setActiveCategory(cat.tag as any)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] sm:text-xs font-semibold tracking-wider transition-all select-none cursor-pointer border ${
                  activeCategory === cat.tag
                    ? "bg-[#f37022] text-white border-[#f37022] font-bold"
                    : "bg-transparent text-white/40 border-white/[0.05] hover:border-white/15 hover:text-white"
                }`}
              >
                [ {cat.id} ] {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- INFINITE SCROLLING GALLERY CARDS --- */}
        <div className="relative w-full overflow-hidden py-4 my-8" id="marquee-container">
          {filteredMoments.length === 0 ? (
            <div className="text-white/30 font-mono text-xs uppercase tracking-[0.2em] py-24 text-center">
              No record meets the requirements.
            </div>
          ) : (
            <div className={`animate-marquee-track ${hoveredIndex !== null ? "paused" : ""}`}>
              {marqueeItems.map((mom, idx) => {
                const isThisCardHovered = hoveredIndex === idx;
                const hasAnyHover = hoveredIndex !== null;

                // Grayscale/Color class transitions
                let cardClass = "";
                if (!hasAnyHover) {
                  // Default clean preview state: colored but with subtle artistic framing overlay
                  cardClass = "grayscale-[20%] opacity-90 brightness-[0.95] scale-100";
                } else if (isThisCardHovered) {
                  // Focused card: fully colored, popped, and bright
                  cardClass = "grayscale-0 opacity-100 brightness-[1.1] scale-[1.04] shadow-[0_20px_50px_rgba(243,112,34,0.18)] z-30 ring-1 ring-white/10";
                } else {
                  // Soft dark grayscale for other cards to force absolute focus (not too dark as requested)
                  cardClass = "grayscale opacity-75 brightness-[0.8] scale-[0.98] z-10";
                }

                return (
                  <div
                    key={`${mom.id}-${idx}`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedMoment(mom)}
                    className="flex flex-col items-center flex-shrink-0 cursor-pointer transition-all duration-500 ease-out px-4 py-6"
                    style={{ width: "290px" }}
                  >
                    {/* Portrait Card Image - Rectangular (Rectangle corners) */}
                    <div 
                      className={`relative w-full aspect-[3/4] rounded-none overflow-hidden border border-white/[0.03] bg-neutral-900 shadow-lg transition-all duration-500 ease-out ${cardClass}`}
                    >
                      <img
                        src={mom.image}
                        alt={mom.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>

                    {/* Captions directly underneath */}
                    <div className="w-full text-center mt-5 space-y-1">
                      <h4 className="font-sans font-black text-xs md:text-sm tracking-wider text-white select-none uppercase truncate leading-tight">
                        {mom.title}
                      </h4>
                      <span className="font-mono text-[9px] md:text-[10px] text-neutral-500 font-extrabold tracking-[0.2em] block select-none uppercase">
                        {mom.imagesCount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Gallery Watermark Section at the bottom */}
        <div className="flex justify-end w-full mt-10 md:mt-16 select-none pointer-events-none overflow-hidden pb-4">
          <div 
            className="font-dm-sans text-5xl sm:text-7xl md:text-[8.5rem] lg:text-[10.5rem] xl:text-[12rem] font-black text-white/10 leading-none uppercase select-none tracking-tighter flex items-baseline justify-end"
            style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: "-0.04em" }}
          >
            <span>M</span>
            <span className="text-white/10 lowercase inline-block px-1" style={{ fontFamily: '"Petit Formal Script", cursive', fontSize: '1.25em', transform: 'translateY(-0.04em)' }}>o</span>
            <span>M</span>
            <span>E</span>
            <span className="text-white/10 lowercase inline-block px-1" style={{ fontFamily: '"Petit Formal Script", cursive', fontSize: '1.2em', transform: 'translateY(-0.04em)' }}>n</span>
            <span>T</span>
            <span>S</span>
          </div>
        </div>
      </div>

      {/* --- HIGH FIDELITY MORPHING DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 125, damping: 22 }}
              className="bg-[#0c0c0e] w-full max-w-4xl rounded-[32px] overflow-hidden border border-white/10 shadow-3xl flex flex-col md:flex-row relative"
            >
              {/* Close Button Button */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-6 right-6 w-9 h-9 bg-black/60 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-[#f37022] hover:border-[#f37022] transition-all duration-300 z-50 cursor-pointer select-none"
                aria-label="Close detailed view"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Media Left Column */}
              <div className="md:w-[50%] relative h-[280px] sm:h-[350px] md:h-auto min-h-[350px]">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c0c0e] via-transparent to-transparent opacity-80" />
                
                {/* Vintage capture label */}
                <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/50 tracking-[0.4em] uppercase bg-black/40 border border-white/10 px-3.5 py-1.5 rounded-full">
                  /// PHYSICAL RECORDS
                </div>
              </div>

              {/* Data Right Column */}
              <div className="md:w-[50%] p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] font-black text-[#f37022] bg-[#f37022]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {selectedMoment.category === "lesson" ? "LESSON LOG" : 
                       selectedMoment.category === "growth" ? "GROWTH RECORD" : 
                       selectedMoment.category === "study" ? "STUDY & RESEARCH" : 
                       selectedMoment.category === "field" ? "FIELD & PROJECTS" : 
                       selectedMoment.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="font-mono text-[9px] text-white/40 tracking-widest font-bold uppercase">
                      {selectedMoment.id} RECORD
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-white leading-tight">
                      {selectedMoment.title}
                    </h2>
                    <p className="text-base text-[#f37022] font-signature leading-none">
                      {selectedMoment.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-white/70 leading-relaxed text-left break-keep">
                    {selectedMoment.desc}
                  </p>

                  {/* Physics & camera spec breakdown */}
                  <div className="space-y-3 pt-5 border-t border-white/5">
                    <h4 className="font-mono text-[9px] font-black tracking-[0.18em] text-[#f37022] uppercase">
                      CAPTURE METADATA
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8px] text-white/30 tracking-widest block">CAMERA & GLASS</span>
                        <span className="font-sans text-[11px] text-white/80 font-semibold flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                          <Camera className="w-3 h-3 text-white/40 flex-shrink-0" />
                          {selectedMoment.metadata.lens}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8px] text-white/30 tracking-widest block">SHUTTER & ISO</span>
                        <span className="font-mono text-[11px] text-white/80 font-bold">
                          {selectedMoment.metadata.exposure} • {selectedMoment.metadata.iso}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8px] text-white/30 tracking-widest block">ACOUSTIC SPECS</span>
                        <span className="font-sans text-[11px] text-white/80 font-semibold flex items-center gap-1.5">
                          <Volume2 className="w-3 h-3 text-[#f37022]" />
                          {selectedMoment.metadata.acoustics}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8px] text-white/30 tracking-widest block">LOCATION</span>
                        <span className="font-sans text-[11px] text-white/80 font-semibold flex items-center gap-1.5 whitespace-nowrap overflow-hidden text-ellipsis">
                          <MapPin className="w-3 h-3 text-white/40 flex-shrink-0" />
                          {selectedMoment.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-neutral-200 transition-all select-none cursor-pointer active:scale-95"
                  >
                    Close Log
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
