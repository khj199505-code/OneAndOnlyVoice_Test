import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Quote, Heart, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Interview {
  id: string;
  studentName: string;
  workName: string;
  bookTitle: string; 
  subtitle: string;
  authorName: string;
  spineColor: string; // Left spine tape color
  kraftBg: string;   // Kraft paper background color
  textColor: string;  // Main stamped text color
  tag: string;
  summary: string;
  fullInterview: { q: string; a: string }[];
  date: string;
}

const VintageSticker: React.FC<{ index: number }> = ({ index }) => {
  const shapeType = index % 3;
  const labelText = `Interview ${index + 1}`;

  return (
    <div className="absolute top-[12px] sm:top-[14px] left-[54%] translate-x-[-50%] w-[68px] sm:w-[82px] md:w-[94px] h-[38px] sm:h-[46px] md:h-[52px] z-20 select-none filter drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.12)]">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Fill */}
        {shapeType === 0 && (
          <path
            d="M 12 4 L 88 4 L 96 12 L 96 42 L 88 50 L 12 50 L 4 42 L 4 12 Z"
            fill="#FCFAFA"
          />
        )}
        {shapeType === 1 && (
          <ellipse cx="50" cy="27" rx="46" ry="23" fill="#FCFAFA" />
        )}
        {shapeType === 2 && (
          <path
            d="M 14 4 H 86 A 10 10 0 0 0 96 14 V 40 A 10 10 0 0 0 86 50 H 14 A 10 10 0 0 0 4 40 V 14 A 10 10 0 0 0 14 4 Z"
            fill="#FCFAFA"
          />
        )}

        {/* Nostalgic faint notebook-style parallel lines */}
        <line x1="20" y1="21" x2="80" y2="21" stroke="#F5D3D3" strokeWidth="0.75" />
        <line x1="20" y1="33" x2="80" y2="33" stroke="#F5D3D3" strokeWidth="0.75" />

        {/* Outer and Inner Borders */}
        {shapeType === 0 && (
          <>
            <path
              d="M 12 4 L 88 4 L 96 12 L 96 42 L 88 50 L 12 50 L 4 42 L 4 12 Z"
              stroke="#D33F49"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M 14 7 L 86 7 L 93 14 L 93 40 L 86 47 L 14 47 L 7 40 L 7 14 Z"
              stroke="#D33F49"
              strokeWidth="0.6"
              strokeLinejoin="round"
              strokeOpacity="0.85"
            />
          </>
        )}

        {shapeType === 1 && (
          <>
            <ellipse cx="50" cy="27" rx="46" ry="23" stroke="#D33F49" strokeWidth="1.5" />
            <ellipse cx="50" cy="27" rx="42" ry="19" stroke="#D33F49" strokeWidth="0.6" strokeOpacity="0.85" />
          </>
        )}

        {shapeType === 2 && (
          <>
            <path
              d="M 14 4 H 86 A 10 10 0 0 0 96 14 V 40 A 10 10 0 0 0 86 50 H 14 A 10 10 0 0 0 4 40 V 14 A 10 10 0 0 0 14 4 Z"
              stroke="#D33F49"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M 16 7 H 84 A 8 8 0 0 0 93 16 V 38 A 8 8 0 0 0 84 47 H 16 A 8 8 0 0 0 7 38 V 16 A 8 8 0 0 0 16 7 Z"
              stroke="#D33F49"
              strokeWidth="0.6"
              strokeLinejoin="round"
              strokeOpacity="0.85"
            />
          </>
        )}
      </svg>

      {/* Text overlaid inside the sticker */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
        <span className="text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-sans font-black tracking-wide text-[#111111] uppercase scale-90 sm:scale-95 md:scale-100">
          {labelText}
        </span>
      </div>
    </div>
  );
};

const WashiTape: React.FC<{ index: number }> = ({ index }) => {
  // Define realistic semi-transparent tape colors inspired by the images
  const colors = [
    "rgba(223, 209, 180, 0.72)", // Vintage Warm Beige (Image 1)
    "rgba(199, 212, 223, 0.72)", // Pale Blue-Gray (Image 2)
    "rgba(229, 215, 185, 0.75)", // Delicate Golden Cream
  ];
  const tapeColor = colors[index % colors.length];
  // Slightly rotate each sticker tape dynamically to feel organic and hand-pasted
  const rotation = index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1.5deg]";

  return (
    <div className={`absolute top-[-9px] left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3.5 z-20 pointer-events-none drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.06)] ${rotation}`}>
      <svg
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Jagged ripped edge masking tape path for realistic look */}
        <path
          d="M 2 2 
             L 5 3 L 8 1 L 11 3 L 14 2 L 17 3 L 20 1 L 23 3 L 26 2 L 29 3 L 32 1 L 35 3 L 38 2 L 41 3 L 44 1 L 47 3 L 50 2 C 60 2.2 80 2 95 2 
             L 98 3 L 97 1 L 96 4 Q 97 12 96 19
             L 98 21 L 95 22 L 92 20 L 89 22 L 86 21 L 83 22 L 80 20 L 77 22 L 74 21 L 71 22 L 68 20 L 65 22 L 62 21 L 59 22 L 56 20 L 53 22 L 50 21 C 40 20.8 20 21 5 21
             L 2 22 L 3 20 L 4 17 Q 3 12 4 5
             Z"
          fill={tapeColor}
        />
        {/* Subtle highlights for raw paper pulp gloss feel */}
        <path
          d="M 6 5 L 94 5"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
};

const renderFormattedText = (text: string) => {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    const content = parts.map((part, partIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={partIdx} className="font-sans font-black text-[#f37022]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <strong key={partIdx} className="font-sans font-black text-[#f37022]">
            {part.slice(1, -1)}
          </strong>
        );
      }
      return part;
    });

    return (
      <React.Fragment key={lineIdx}>
        {lineIdx > 0 && <br />}
        {content}
      </React.Fragment>
    );
  });
};

export const InteractiveReviewsSection: React.FC = () => {
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const mobileInterviewScrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mobileBookDot, setMobileBookDot] = useState(0);

  const handleMobileInterviewScroll = () => {
    if (mobileInterviewScrollRef.current) {
      const el = mobileInterviewScrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const denominator = scrollWidth - clientWidth;
      if (denominator > 0) {
        const progress = scrollLeft / denominator;
        const dotIndex = Math.min(5, Math.max(0, Math.round(progress * 5)));
        setMobileBookDot(dotIndex);
      }
    }
  };

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      checkScrollState();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    checkScrollState();
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Authentically styled voice coaching interview books resembling minimalist Kraft notebooks 
  const interviews: Interview[] = [
    {
      id: "book-1",
      studentName: "서XX",
      bookTitle: "On The Stage",
      subtitle: "VOCAL MEMOIR",
      authorName: "Vocalist Seo",
      spineColor: "bg-[#B4503E]", // Warm custom brick/terracotta spine tape
      kraftBg: "bg-[#D2BC9E]",   // Warm medium-tone Kraft paper (like a cozy cardboard texture)
      textColor: "text-[#3D2C1F]",
      workName: "[매 수업 무대 위처럼 온 마음을 쏟아내는] 직장인 밴드 보컬 / 취미보컬클래스",
      tag: "HOBBY VOCAL CLASS",
      summary: "예체능은 재능의 영역이라 생각했던 평범한 직장인이, 5년 동안 마주한 기적 같은 변화",
      date: "2026.04",
      fullInterview: [
        {
          q: "처음 레슨을 시작할 때 어떤 점이 가장 걱정되고 어려우셨나요?",
          a: "대부분 예체능은 재능의 영역이라 생각하잖아요. '내가 과연 진짜 달라질 수 있을까? 성장 한계가 낮지 않을까?'가 제일 걱정됐죠. 실제로 시작했을 때도 시각화되지 않는 발성 개념들을 이해하고 몸으로 표현하는 게 가장 막막했습니다.\n하지만 이곳의 첫 상담은 차분하면서도 칼날처럼 예리했습니다. 제 상태를 정확히 분석해 주신 덕분에 올바른 로드맵을 믿고 따라갈 수 있었어요. 성구, 성대 조절 등 배우기 전에는 이해조차 불가능했던 개념들을 명확하게 이미지화해서 몸에 체득시켜 주셨습니다. 막연하게 따라 하다가 어느 순간 \"아! 이거구나!\" 하고 소리가 뚫리는 즐거움은 매번 짜릿합니다."
        },
        {
          q: "5년 동안 레슨을 받으며 가장 크게 달라진 점은 무엇인가요?",
          a: "배우기 전의 저는 소리도 뒤로 먹었고, 성대를 조절할 수 있다는 개념 자체가 아예 없었습니다. 오직 비음밖에 쓸 줄 몰랐고, 공기를 활용하는 법이나 바이브레이션을 의도대로 넣는 건 상상도 못 했죠.\n지금은 이 모든 게 완전히 바뀌었습니다. 소리를 제대로 뱉어내기 시작하면서 소리의 출력(성량) 자체가 늘었습니다. 이제는 성대 컨트롤을 제 의도대로 하고 있고, 비음 조절은 물론 성구까지 자유롭게 바꿔가며 씁니다. 공기를 채워 깊은 감정선을 표현하는 법을 배웠고, 필요한 타이밍에 바이브레이션을 원하는 만큼 넣을 수 있게 되었습니다. 예전에는 엄두도 못 내던 어려운 곡들을 지금은 편안하게 불러내고 있습니다."
        },
        {
          q: "직장인 취미반인데, 왜 5년 동안이나 장기 수강을 하고 계시나요?",
          a: "제 음악적 꿈이 모든 장르를 소화하는 '올라운더'이기 때문입니다. 5년 동안 멈춰 있었던 게 아니라, 매년 새로운 장르에 맞는 발성과 창법을 탐색하다 보니 정말 시간이 이렇게 가는 줄도 몰랐어요.\n\n원래 저는 록 음악을 주로 해서 직선적인 소리만 쓸 줄 알았고 그루브한 리듬감은 아예 취약했거든요. 고질병을 고치고 나니 선생님이 매번 제 약점을 정확히 채워줄 새로운 성장 로드맵들을 끊임없이 꺼내주셨습니다. 이번에는 장르의 스펙트럼을 넓히기 위해 '그루브한 장르'라는 새로운 산을 스승님과 함께 넘는 중인데, 이 배움의 과정이 정말 중독적일 만큼 재미있습니다.\n\n누군가는 음원을 내거나 무대에서 노는 게 최종 목표일지 모르지만, 저는 그저 '노래 자체를 더 잘하는 사람'이 되고 싶습니다. 원앤온리보이스만의 레슨 덕분에 저에게 이곳은 학원이 아니라, 평생 공부하고 연습하는 음악 연구소입니다."
        },
        {
          q: "실력 외에 일상이나 주변에서 체감하는 변화가 있다면 알려주세요.",
          a: "밴드를 하고 있는만큼 공연을 할 때 주위 사람들에게 \"노래가 매번 성장한다\", \"너 너무 잘한다\"는 칭찬을 듣게되었던게 좋았던 것 같고, 가장 뿌듯했던 건 저희 어머님 반응이에요. 예전에는 제 노래를 듣고 \"되게 듣기 거북하다\"고 하셨는데, 요즘은 \"배운 보람이 있네, 지금은 듣기가 너무 편하다\"고 하십니다.\n직장인 밴드 활동을 하는데 주위 팀들로부터 보컬 도와달라는 요청이 많이 들어옵니다. 최근에는 실제로 소속사에서 음반을 냈던 가수 출신의 보컬이 있는 팀에서 직접 헬프 요청이 들어와 코러스로 함께 무대에 서게 되었습니다. 단순히 노래를 취미로 즐기는 수준을 넘어, 음악을 즐기는 삶의 질 자체가 확고하게 업그레이드되었습니다."
        },
        {
          q: "보컬 레슨을 고민하는 분들에게 꼭 해주고 싶은 말씀이 있다면?",
          a: "저에게 이 선생님은 '평생의 은인'입니다. 음악이라는 콘텐츠를 기반으로 제 삶의 모든 영역이 완전히 업그레이드되었고, 실력이 늘어가니 자연스럽게 멋진 음악인들이 제 주위에 모여듭니다. 무대 위에서 느낄 수 있는 카타르시스는 말로 다 표현하지 못해요. 노래를 좋아한다면 숨지 말고, 용기 내서 꼭 문을 두드리셨으면 좋겠습니다."
        }
      ]
    },
    {
      id: "book-2",
      studentName: "오XX",
      bookTitle: "My Melodies",
      subtitle: "SINGER-SONGWRITER",
      authorName: "Artist Oh",
      spineColor: "bg-[#2E5E82]", // Vintage deep blue spine tape
      kraftBg: "bg-[#CDAF8F]",   // Lighter, refined craft pulp background
      textColor: "text-[#2F2116]",
      workName: "입시 준비생 / [ 통통 튀는 그 재능을 온전히 펼쳐주고 싶은 ] 싱어송라이터",
      tag: "SINGER SONGWRITER",
      summary: "21살에 멈춰버린 음악, 23살에 원앤온리보이스를 다시 수소문해 찾아온 이유는 무엇일까?",
      date: "2026.02",
      fullInterview: [
        {
          q: "처음 음악을 시작하고 보컬 레슨을 받으면서 아쉬웠거나 갈증을 느낀 부분이 있었나요?",
          a: "18살 때 처음 음악의 길을 선택하고 오디션과 입시를 위해 여러 학원을 비교하며 다녔었어요. 그런데 대부분의 대형 학원들은 단체나 시스템 위주로 흘러가다 보니, 정작 '제 개인의 목소리'에 온전히 집중하고 케어받고 싶다는 갈증이 계속 채워지지 않더라고요."
        },
        {
          q: "중간에 레슨을 오래 쉬다가 다시 시작하셨는데, 수많은 선택지 중 왜 원앤온리보이스였나요?",
          a: "20살까지 쭉 배우다가 21살 때 건강이 많이 나빠져서 어쩔 수 없이 레슨을 오랫동안 쉬어야 했습니다. 23살이 되어 다시 본격적으로 음악을 시작하려고 하니, 무너진 기본기부터 확실하게 다지는 게 가장 급선무라는 생각이 들었어요. 그때 예전에 대형 학원에서 잠깐 스치듯 선생님께 배웠을 때, 다른 곳과 달리 기본적인 발성과 기초를 정말 지독하리만큼 정밀하게 잡아주시던 독보적인 커리큘럼이 뇌리에 강하게 스쳤습니다. 제 개인의 소리를 완벽하게 분석해 줄 곳은 여기밖에 없겠다는 확신이 들어서 선생님을 다시 수소문해 찾아오게 되었습니다."
        },
        {
          q: "오랜만의 복귀라 첫 수업 때 막막한 점도 많았을 것 같아요. 어려운 점들은 어떻게 극복하셨나요?",
          a: "너무 오래 기본기를 내려놓고 있던 상태라, 처음엔 다시 걸음마부터 시작하는 기분이 들어서 조금 막막했던 게 사실이에요. 특히 수업 때 선생님과 함께할 때는 잘되던 것들이, 집에 와서 혼자 소리 내려고 하면 제 몸으로 바로 표현되지 않을 때가 가장 힘들었습니다. 발성은 결국 스스로 감을 찾아가는 게 핵심인데, 처음엔 그 감을 잡는 게 쉽지 않으니까요.\n이를 극복하기 위해서 무조건 혼자 연습하는 양을 늘렸습니다. 그리고 혼자서 헛수고하며 헤매지 않으려고, 수업 중에 제가 느끼는 주관적인 감각과 선생님이 피드백해 주시는 객관적인 소리의 기준을 바로바로 질문하며 일치시키는 과정을 정말 많이 가졌어요. 그렇게 끊임없이 피드백을 주고받다 보면 선생님이 말씀하신 포인트를 제 몸이 척 알아차리고 캐치해 내는 순간이 오는데, 그때 '아, 내가 진짜 성장하고 있구나'라는 느낌을 받습니다."
        },
        {
          q: "레슨을 받으면서 실력 외에 스스로 가장 크게 달라졌다고 느끼는 부분은 무엇인가요?",
          a: "사실 그동안은 정해진 '입시'에만 치중되어 있어서 제 스스로 음악인으로서 성장하고 있다는 느낌을 크게 받지 못했어요. 가끔은 수업 가기가 귀찮은 날도 있었고요(웃음). 하지만 지금은 수업이 끝나고 나면 하루의 일과를 제대로 해냈다는 뿌듯함과 함께 마음이 항상 편안해집니다.\\n가장 큰 변화는 근래 들어 내가 진짜 음악을 하고 있다는 자각이 든다는 점이에요. 요즘은 보컬뿐만 아니라 가사를 쓰고 곡을 만드는 것에 깊이 빠져 있거든요. 혼자 작업할 때는 막막할 때가 많은데, 수업 시간에 선생님과 음악적인 대화를 나누며 가사 주제나 영감을 정말 많이 얻습니다. 제가 만든 노래를 들려드리고 프로의 시선에서 의견을 듣는 과정이 큰 도움이 돼요. 단순히 노래 연습을 하는 학생이 아니라 예술과 창작을 업으로 삼고 있다는 기분이 들어서, 꼭 제 음악을 세상에 널리 알리고 싶다는 확실한 목표가 생겼습니다."
        },
        {
          q: "나에게 선생님은 어떤 존재인가요? 그리고 레슨을 망설이는 분들께 조언 한마디 부탁드립니다.",
          a: "누구보다 저라는 학생을 진심으로 생각하고 고민해 주시는 분입니다. 음악과 수업에 대한 열정은 물론이고, 꾸준한 소통을 통해 제가 마음을 열 수 있도록 도와주셨어요. 덕분에 '사람 오XX으로서도 성장할 수 있었고, 기피하던 락(Rock) 장르까지 도전해 보고 싶을 만큼 음악의 폭이 넓어졌습니다.\\n보컬 레슨은 단순히 노래 기술을 조금 늘리는 과정이 아니라고 생각합니다. 생각했던 것보다 내 안에서 더 많은 것을 발견하고 배워가기 때문에, 나를 성장시키는 가장 가치 있는 투자입니다. 음악을 사랑하고 즐기는 마음이 있다면 용기 내서 시작하셨으면 좋겠습니다."
        }
      ]
    },
    {
      id: "book-3",
      studentName: "이XX",
      bookTitle: "Acoustic Promise",
      subtitle: "THE BELTING ERA",
      authorName: "By Seoyul",
      spineColor: "bg-[#426442]", // Moss/forest deep green tape
      kraftBg: "bg-[#C0A88D]",   // Slightly darker antique cardboard craft bg
      textColor: "text-[#342417]",
      workName: "취미 보컬 / [ 소리의 원리를 똑똑하게 파고들며 묵묵히 연습하는 ] 직장인 보컬",
      tag: "HOBBY VOCAL CLASS",
      summary: "녹음된 내 목소리조차 듣기 싫었던 나, 그 많던 걱정들은 다 잊은 채, 요즘은 오히려 레슨 시간이 부족해 아쉬워진 이유",
      date: "2026.03",
      fullInterview: [
        {
          q: "어릴 때부터 음악을 좋아했다고 하셨는데, 원앤온리보이스를 찾으신 계기가 궁금해요.",
          a: "초등학교 때부터 미션스쿨 다니면서 항상 예배 시간에 노래 부르고 밴드랑 성가대 활동도 했었어요. 중학교 때도 친구들이랑 놀면 무조건 노래방에 갈 정도로 노래를 좋아했습니다. 장르는 락이나 락발라드, 2000년대 옛날 K-pop을 주로 좋아해요.\n사실 어렸을 때 성악을 배우다가 끝까지 못 마치고 그만뒀던 게 늘 아쉬움으로 남아있었거든요. 그래서 이번엔 진짜 '나만의 확실한 보컬 스킬'을 만들고 싶어서 문을 두드렸습니다. 처음 시작할 때는 '내가 중간에 포기하지 않고 계속 이어서 할 수 있을까?'가 제일 큰 고민이었는데, 어느덧 여기 다닌 지 거의 3년이 되어가네요."
        },
        {
          q: "첫 수업의 기억과, 3년이라는 긴 시간 동안 배우면서 가장 어려웠던 점은 무엇이었나요?",
          a: "솔직히 첫 레슨 때는 좀 당황했어요. 제가 노래를 못 부른다는 거, 그리고 앞으로 배워야 할 게 진짜 한참 많다는 걸 첫날 바로 깨달았거든요.\n특히 배우면서 제일 어려웠던 건, 선생님 설명을 들으면 머리로는 분명히 이해가 되고 어떻게 해야 할지도 알겠는데 막상 목이 마음대로 안 따라와 줄 때였습니다. 그럴 때마다 수업 중에 소리가 한번 제대로 났다 싶으면 최대한 그 감각을 안 잃어버리려고 집중했어요. 한번 됐을 때 그 감을 머리와 몸에 잘 기억해 두고 있으면, 다음에 혼자 연습하거나 재현할 때 도움이 많이 되더라고요."
        },
        {
          q: "지난 3년간 가장 기억에 남는 순간을 꼽으신다면요?",
          a: "여기는 일단 분위기가 편해요. 레슨 외에도 대화나 소통을 정말 잘해주시고, 레슨도 이해 안 되는 부분을 잘 가르쳐주셔서 참 좋습니다.\n무엇보다 가장 좋았던 건 '녹음 수업'이에요. 보통 평소에 녹음해서 내 목소리 들으면 되게 어색하고 듣기 싫잖아요. 저도 그랬거든요. 그런데 여기서 레슨받고 제대로 녹음해서 딱 들었는데, 언제 한 번은 내 귀에 제 목소리가 진짜 듣기 좋게 느껴졌던 순간이 있었어요. 내 목소리가 마음에 들기 시작한 그때가 지난 3년 중에서 가장 기억에 남고 참 좋았습니다."
        },
        {
          q: "과거의 본인처럼 고민하며 등록을 망설이는 분들이나 같이 배우는 분들께 해주고 싶은 말이 있나요?",
          a: "일단 해보면 좋겠어요. 저도 하기 전까지는 '계속 이어서 할 수 있을까' 하고 고민이 정말 많았는데, 막상 하기 시작하니까 그때 했던 고민 중에서 안 좋게 생각했던 단점들이 지금은 생각도 안 나요. 그리고 선생님이 정말 편하고 좋습니다.\n같이 배우는 레슨생분들에게 추천하고 싶은 연습 팁이 있다면, 너무 한꺼번에 다 잘하려고 하지 않아도 된다는 거예요. 하나씩 시간 들여서 하다 보면 결국 된다? 정도네요."
        }
      ]
    },
    {
      id: "book-4",
      studentName: "한XX",
      bookTitle: "Lord Of Speech",
      subtitle: "CHICAGO STUDY",
      authorName: "Sumin Han",
      spineColor: "bg-[#8B2D46]", // Deep burgundy/wine tape 
      kraftBg: "bg-[#D9C4A9]",   // Light warm cream kraft cardboard
      textColor: "text-[#3E2916]",
      workName: "C-Level 프레젠테이션 가이드",
      tag: "Speech Design",
      summary: "마이크와 강단을 사로잡는 차분하고 신뢰성 높은 나만의 중저음을 만났습니다.",
      date: "2026.05",
      fullInterview: [
        {
          q: "스피치 트레이닝 프로그램에 자원하신 동기는?",
          a: "대기업 C-Level 임원으로서 중요한 프레젠테이션과 방송 연설 기회가 잦았습니다. 하지만 목소리 톤이 다소 뜨고 고음이 되거나, 말할 때 힘이 없어 보여 신뢰감을 주는 안정적인 시그니처 보이스를 정비하고자 하였습니다."
        },
        {
          q: "전통적인 스피치 학원 등과의 구체적 차별성은?",
          a: "전혀 다릅니다. 발성과 호흡의 기초 물리 법칙을 온전히 가르쳐 줍니다. 들숨의 압력을 횡격막으로 붙들어 두고 어깨의 힘을 뺀 상태에서 흉강 충격을 극대화 시키는 방식을 가르쳐 주셔서, 하루 2시간 강연을 해도 흐트러짐이 없게 되었습니다."
        },
        {
          q: "훈련을 마치며 소감을 전하신다면?",
          a: "듣는 사람들이 귀담아듣고 설득되는 목소리에는 그만한 에너지와 밸런스가 흐른다는 사실을 깨달았습니다. 가치 있는 커리어 투자를 원하신다면 망설이지 말고 선택하십시오."
        }
      ]
    },
    {
      id: "book-5",
      studentName: "이XX",
      bookTitle: "Study Of Breath",
      subtitle: "RESONANCE FLUID",
      authorName: "Dawon Lee",
      spineColor: "bg-[#D99A26]", // Mustard/ochre gold tape
      kraftBg: "bg-[#CBAE8F]",   // Natural earth golden pulp cardboard
      textColor: "text-[#362518]",
      workName: "보컬 공명 디바이스 코칭",
      tag: "Acoustic Therapy",
      summary: "목소리 분석에서 공명점을 찾자마자 고음이 너무 편하게 뚫렸어요. 평생의 소리 메이트를 만났습니다.",
      date: "2026.01",
      fullInterview: [
        {
          q: "수강 전 가장 해결하고 싶었던 소리 고민은 무엇이었나요?",
          a: "항상 목에 불필요한 압박감을 많이 주며 소리를 내던 터라, 한두 곡만 불러도 소리가 뒤로 빠지고 허스키해지는 성대 피로 현상이 심했습니다. 이를 극복하고 지속력 높은 자유로운 중고음을 갖고 싶었어요."
        },
        {
          q: "One and Only Voice만의 마이크로 코칭 방식은 어땠나요?",
          a: "단순히 '배에 힘을 주어 밀어라' 식의 상투적인 가법이 아니라, 실시간 배음 스케일 분석표와 구강구조 모의 단면을 보며 호흡 압력과 성대 접촉 면적의 미세 변화를 세세히 잡아주셔서 놀라울 만큼 직관적이었습니다."
        },
        {
          q: "마지막 수업 이후 삶과 노래의 변화를 체감하나요?",
          a: "더 이상 높은 피치에서 조바심을 내거나 긴장하지 않습니다. 공명 강도를 유연하게 조절하는 방법을 마스터한 덕분에 보컬의 장르적 가용 폭이 세 배 이상 확장되었습니다."
        }
      ]
    },
    {
      id: "book-6",
      studentName: "박XX",
      bookTitle: "Sound Therapy",
      subtitle: "HEALTHY HABITS",
      authorName: "Suji Park",
      spineColor: "bg-[#716040]", 
      kraftBg: "bg-[#C4B299]",   
      textColor: "text-[#2B2317]",
      workName: "교사 성대 결절 회복 솔루션",
      tag: "Vocal Health",
      summary: "성대 결절 직전의 쉰 목소리에서 아침 강연도 끄떡없는 맑은 성대 습관으로 완전히 회복되었습니다.",
      date: "2026.04",
      fullInterview: [
        {
          q: "트레이닝 참가 전, 목 상태는 어떠셨나요?",
          a: "매일 5시간 이상 수업을 하느라 목이 늘 잔뜩 구겨져 있고 늘 쉰 소리만 나왔습니다. 병원에선 성대 결절 초기 진단을 내렸고, 계속 일하려면 발성 방법을 바꾸는 길이 유일했습니다."
        },
        {
          q: "어떤 치료와 발성 훈련을 동시에 진행하였나요?",
          a: "불필요한 목 근육(흉쇄유돌근)의 과도한 힘을 제거하는 긴장 이완 테크닉을 최우선으로 받았습니다. 그 후 비강 공명과 호흡을 사용해 말하는 정위 성대 진동 습관을 체득했습니다."
        },
        {
          q: "비슷한 고민을 가진 교사나 강사분들께 하실 말씀이 있다면?",
          a: "소리를 지르지 않고도 교실 구석구석까지 제 목소리가 아주 또렷하고 건강하게 전달됩니다. 단순히 쉬는 것보다 올바른 습관을 심어주는 이곳 전문가들의 훈련이 제 소중한 성대를 살렸습니다."
        }
      ]
    }
  ];

  return (
    <section id="interviews" className="py-24 md:py-28 bg-[#fcfbf7] border-t border-black/5 relative overflow-hidden scroll-mt-24">
      
      {/* Soft abstract ambient glows */}
      <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] bg-[#f37022]/[0.012] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-[#f37022]/[0.015] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-[#f37022] font-semibold tracking-[0.2em] text-[10.5px] sm:text-xs uppercase font-mono">
            STUDENT INTERVIEW ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-sans font-bold tracking-tight text-neutral-900 leading-tight">
            내 노래가 시작된 첫 페이지
          </h2>
          <div className="h-0.5 w-10 bg-[#f37022]/45 my-1" />
          <p className="text-xs sm:text-sm md:text-base font-sans font-medium text-neutral-500 max-w-xl leading-relaxed break-keep">
            자신의 목소리를 마주하고, <br className="block sm:hidden" />
            나만의 노래를 시작한 사람들의 기록입니다.<br />
            고민에서 출발해 변화로 이어진 첫 순간들을 천천히 넘겨보세요.
          </p>
          <div className="flex justify-center items-center gap-1.5 text-[11px] font-medium text-stone-400 mt-1 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f37022]/60 animate-pulse" />
            <span>노트를 클릭하시면 상세 인터뷰가 열립니다.</span>
          </div>
        </div>
 
        {/* Dynamic Bookshelf Area - Two-row Page-by-Page Bookshelf with Horizontal Scrolling */}
        <div className="relative max-w-[1250px] mx-auto min-h-[420px] sm:min-h-[660px] flex flex-col items-center justify-center py-2 sm:py-4 w-full font-sans">
          
          <style>{`
            .scrollbar-none::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-none {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>

          {/* ==========================================================
              1. MOBILE VIEW: Clean, single-row swipable cards with single shelf (Visible only on Mobile)
              ========================================================== */}
          <div className="block sm:hidden w-full overflow-hidden">
            <div className="flex flex-col items-center w-full">
              {/* Wooden Shelf Bar for Mobile */}
              <div className="relative flex flex-col items-center w-full pt-4 pb-1">
                {/* Carousel container with relative scroll */}
                <div 
                  ref={mobileInterviewScrollRef}
                  onScroll={handleMobileInterviewScroll}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none w-full px-8 pb-3 pt-6"
                >
                  {interviews.map((book, idx) => {
                    return (
                      <motion.div
                        key={book.id + "-mobile"}
                        onClick={() => setSelectedInterview(book)}
                        className="shrink-0 snap-center w-[145px] relative"
                      >
                        {/* Elegant natural masking tape overlay */}
                        <WashiTape index={idx} />

                        {/* Kraft Book Cover */}
                        <motion.div
                          className={`relative cursor-pointer w-full h-[205px] rounded-l-[3px] rounded-r-lg shadow-md flex flex-col justify-between text-left overflow-hidden transition-all ${book.kraftBg}`}
                          whileTap={{ scale: 0.96 }}
                        >
                          {/* Left Spine Binding Tape */}
                          <div className={`absolute left-0 inset-y-0 w-[11px] ${book.spineColor} z-20 rounded-l-[3px]`} />
                          <div className="absolute left-[11px] inset-y-0 w-[1px] bg-black/15 z-20" />
                          <div className="absolute left-[12px] inset-y-0 w-[2px] bg-white/5 z-20" />

                          <VintageSticker index={idx} />

                          <div className={`relative z-10 flex flex-col h-full justify-end p-2 pb-2 pl-4 ${book.textColor}`}>
                            <div className="self-end bg-[#FAF7F0] border border-stone-300 rounded-[2px] p-1 w-[80px] text-[6px] text-[#333] shadow-[1px_1px_2px_rgba(0,0,0,0.04)] space-y-0.5">
                              <div className="border-b border-stone-200 pb-0.5 font-bold font-mono tracking-tighter text-stone-500 scale-90 origin-left flex justify-between items-center">
                                <span>{book.studentName}</span>
                                <span>A4-70G</span>
                              </div>
                              <p className="font-semibold text-[5.5px] leading-[1.1] text-neutral-800 tracking-tighter truncate">
                                {book.tag}
                              </p>
                              <div className="flex gap-[0.5px] items-stretch h-1 pt-0.5 opacity-90">
                                <span className="w-[1.5px] bg-black" />
                                <span className="w-[0.5px] bg-black" />
                                <span className="w-[1px] bg-black" />
                                <span className="w-[0.5px] bg-transparent" />
                                <span className="w-[1.5px] bg-black" />
                                <span className="w-[0.5px] bg-black" />
                              </div>
                              <div className="text-[4px] text-stone-400 text-right font-mono scale-90 origin-right font-bold">
                                200원
                              </div>
                            </div>
                          </div>

                          {/* Quick access quote indicator tag for Mobile */}
                          <div className="absolute bottom-2 left-3 z-20 bg-stone-900/10 text-stone-800 text-[8px] font-sans font-black px-1 py-0.5 rounded backdrop-blur-[1px] tracking-tight">
                            READ ↗
                          </div>

                          <div className="absolute right-0 inset-y-0 w-[4px] bg-black/5 z-20 pointer-events-none rounded-r-md" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Wooden Shelf Bar Design for Mobile */}
                <div 
                  className="w-[92%] h-2.5 bg-[#FCFBF9] rounded-sm border-t border-b border-stone-200 shadow-[0_4px_8px_rgba(0,0,0,0.03)] flex items-center justify-between px-6 relative mt-1"
                  style={{
                    boxShadow: "0 6px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)"
                  }}
                >
                  <div className="absolute left-6 top-full w-2.5 h-1.5 bg-neutral-200/55 rounded-b" />
                  <div className="absolute right-6 top-full w-2.5 h-1.5 bg-neutral-200/55 rounded-b" />
                </div>
              </div>

              {/* Swipe Tips & Interactive Pagination Dots for Mobile */}
              <div className="flex flex-col items-center gap-3 mt-5 mb-3">
                <div className="flex items-center gap-1.5 text-stone-400 text-[11px] font-sans font-semibold tracking-wider select-none animate-pulse">
                  <span>옆으로 밀어 다른 노트 보기</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#f37022]" />
                </div>
                
                <div className="flex items-center gap-1.5">
                  {interviews.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => {
                        if (mobileInterviewScrollRef.current) {
                          const el = mobileInterviewScrollRef.current;
                          const oneItemWidth = el.scrollWidth / interviews.length;
                          el.scrollTo({
                            left: dotIndex * oneItemWidth,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                        mobileBookDot === dotIndex 
                          ? "w-6 bg-[#f37022]" 
                          : "w-2.5 bg-stone-300"
                      }`}
                      aria-label={`${dotIndex + 1}번 인터뷰 보기`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              2. DESKTOP VIEW: Majestic Two-row Bookshelf Layout (Tablet/Desktop)
              ========================================================== */}
          <div className="hidden sm:block w-full">
 
          {/* Carousel Viewport Container with Absolute Navigation Buttons Overlay */}
          <div className="relative w-full overflow-hidden py-4">
            
            {/* Left and Right navigation buttons */}
            <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-30">
              <button
                onClick={() => scroll("left")}
                className={`w-10 h-10 rounded-full border border-stone-200 bg-white/95 backdrop-blur shadow-md flex items-center justify-center text-stone-700 active:scale-95 transition-all cursor-pointer ${
                  canScrollLeft ? "opacity-100 scale-100 hover:bg-neutral-50" : "opacity-0 scale-90 pointer-events-none"
                }`}
                aria-label="Previous interviews"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
 
            <div className="absolute inset-y-0 right-2 sm:left-auto sm:right-4 flex items-center z-30">
              <button
                onClick={() => scroll("right")}
                className={`w-10 h-10 rounded-full border border-stone-200 bg-white/95 backdrop-blur shadow-md flex items-center justify-center text-stone-700 active:scale-95 transition-all cursor-pointer ${
                  canScrollRight ? "opacity-100 scale-100 hover:bg-neutral-50" : "opacity-0 scale-90 pointer-events-none"
                }`}
                aria-label="Next interviews"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
 
            {/* Horizontal Scroll Area of Bookshelf Pages */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="scrollbar-none flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full"
            >
              {(() => {
                const booksPerPage = 6;
                const pages: Interview[][] = [];
                for (let i = 0; i < interviews.length; i += booksPerPage) {
                  pages.push(interviews.slice(i, i + booksPerPage));
                }
 
                return pages.map((page, pageIdx) => {
                  const row1 = page.slice(0, 3);
                  const row2 = page.slice(3, 6);
 
                  return (
                    <div
                      key={pageIdx}
                      className="w-full shrink-0 snap-center flex flex-col gap-12 sm:gap-14 px-12 sm:px-16 md:px-20 pb-10"
                    >
                      {/* Row 1 Shelving */}
                      <div className="relative flex flex-col items-center w-full group pt-8 pb-1 max-w-[760px] mx-auto">
                        <div className="flex justify-center items-end gap-5 sm:gap-10 md:gap-12 w-full px-6 mb-0">
                          {row1.map((book, bookIdx) => {
                            const absoluteIndex = pageIdx * booksPerPage + bookIdx;
                            const isHovered = hoveredBook === book.id;
                            return (
                              <motion.div
                                key={book.id}
                                onClick={() => setSelectedInterview(book)}
                                onMouseEnter={() => setHoveredBook(book.id)}
                                onMouseLeave={() => setHoveredBook(null)}
                                className={`relative cursor-pointer w-[95px] sm:w-[115px] md:w-[135px] h-[135px] sm:h-[165px] md:h-[195px] rounded-l-[3px] rounded-r-lg shadow-md hover:shadow-xl flex flex-col justify-between text-left overflow-hidden transition-all ${book.kraftBg}`}
                                style={{
                                  transformOrigin: "bottom center"
                                }}
                                animate={{
                                  y: isHovered ? -16 : 0,
                                  scale: isHovered ? 1.05 : 1,
                                  z: isHovered ? 40 : 0
                                }}
                                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                              >
                                {/* Left Spine Binding Tape */}
                                <div className={`absolute left-0 inset-y-0 w-[10px] sm:w-[12px] md:w-[14px] ${book.spineColor} z-20 rounded-l-[3px]`} />
                                <div className="absolute left-[10px] sm:left-[12px] md:left-[14px] inset-y-0 w-[1px] bg-black/15 z-20" />
                                <div className="absolute left-[11px] sm:left-[13px] md:left-[15px] inset-y-0 w-[2px] bg-white/5 z-20" />
 
                                <VintageSticker index={absoluteIndex} />
 
                                <div className={`relative z-10 flex flex-col h-full justify-end p-2.5 sm:p-3 pb-2 sm:pb-2.5 pl-4 sm:pl-5 md:pl-6 ${book.textColor}`}>
                                  <div className="self-end bg-[#FAF7F0] border border-stone-300 rounded-[2px] p-1 w-[65px] sm:w-[80px] md:w-[92px] text-[5px] sm:text-[6px] md:text-[7px] text-[#333] shadow-[1px_1px_2px_rgba(0,0,0,0.04)] space-y-0.5">
                                    <div className="border-b border-stone-200 pb-0.5 font-bold font-mono tracking-tighter text-stone-500 scale-90 origin-left flex justify-between items-center">
                                      <span>{book.studentName}</span>
                                      <span>A4-70G</span>
                                    </div>
                                    <p className="font-semibold text-[5px] sm:text-[6px] leading-[1.1] text-neutral-800 tracking-tighter truncate">
                                      {book.tag}
                                    </p>
                                    <div className="flex gap-[0.5px] items-stretch h-1.5 pt-0.5 opacity-90">
                                      <span className="w-[1.5px] bg-black" />
                                      <span className="w-[0.5px] bg-black" />
                                      <span className="w-[1px] bg-black" />
                                      <span className="w-[0.5px] bg-transparent" />
                                      <span className="w-[1.5px] bg-black" />
                                      <span className="w-[0.5px] bg-black" />
                                      <span className="w-[1px] bg-black" />
                                      <span className="w-[0.5px] bg-transparent" />
                                    </div>
                                    <div className="text-[4px] sm:text-[5px] text-stone-400 text-right font-mono scale-90 origin-right font-bold">
                                      200원
                                    </div>
                                  </div>
                                </div>
 
                                {/* Highly-designed Hover Overlay showing dynamic interaction prompt */}
                                <AnimatePresence>
                                  {isHovered && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="absolute inset-0 z-30 bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center p-2 text-center"
                                    >
                                      <Quote className="w-4 h-4 text-white p-0.5 mb-1" />
                                      <span className="text-[10px] sm:text-xs font-sans font-semibold text-white tracking-tight">인터뷰 읽기</span>
                                      <span className="text-[6.5px] sm:text-[7.5px] font-mono text-white/60 tracking-widest mt-0.5">CLICK</span>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
 
                                <div className="absolute right-0 inset-y-0 w-[4px] bg-black/5 z-20 pointer-events-none rounded-r-sm" />
                              </motion.div>
                            );
                          })}
                        </div>
 
                        {/* Wooden Shelf Bar for Row 1 */}
                        <div 
                          className="w-full h-2.5 sm:h-3 bg-[#FCFBF9] rounded-sm border-t border-b border-stone-200 shadow-[0_6px_10px_rgba(0,0,0,0.03)] flex items-center justify-between px-6 relative"
                          style={{
                            boxShadow: "0 8px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)"
                          }}
                        >
                          <div className="absolute left-8 lg:left-12 top-full w-3 sm:w-4 h-2 bg-neutral-200/55 rounded-b" />
                          <div className="absolute right-8 lg:right-12 top-full w-3 sm:w-4 h-2 bg-neutral-200/55 rounded-b" />
                        </div>
                      </div>
 
                      {/* Row 2 Shelving */}
                      {row2.length > 0 && (
                        <div className="relative flex flex-col items-center w-full group pt-8 pb-1 max-w-[760px] mx-auto">
                          <div className="flex justify-center items-end gap-5 sm:gap-10 md:gap-12 w-full px-6 mb-0">
                            {row2.map((book, bookIdx) => {
                              const absoluteIndex = pageIdx * booksPerPage + 3 + bookIdx;
                              const isHovered = hoveredBook === book.id;
                              return (
                                <motion.div
                                  key={book.id}
                                  onClick={() => setSelectedInterview(book)}
                                  onMouseEnter={() => setHoveredBook(book.id)}
                                  onMouseLeave={() => setHoveredBook(null)}
                                  className={`relative cursor-pointer w-[95px] sm:w-[115px] md:w-[135px] h-[135px] sm:h-[165px] md:h-[195px] rounded-l-[3px] rounded-r-lg shadow-md hover:shadow-xl flex flex-col justify-between text-left overflow-hidden transition-all ${book.kraftBg}`}
                                  style={{
                                    transformOrigin: "bottom center"
                                  }}
                                  animate={{
                                    y: isHovered ? -16 : 0,
                                    scale: isHovered ? 1.05 : 1,
                                    z: isHovered ? 40 : 0
                                  }}
                                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                                >
                                  {/* Left Spine Binding Tape */}
                                  <div className={`absolute left-0 inset-y-0 w-[10px] sm:w-[12px] md:w-[14px] ${book.spineColor} z-20 rounded-l-[3px]`} />
                                  <div className="absolute left-[10px] sm:left-[12px] md:left-[14px] inset-y-0 w-[1px] bg-black/15 z-20" />
                                  <div className="absolute left-[11px] sm:left-[13px] md:left-[15px] inset-y-0 w-[2px] bg-white/5 z-20" />
 
                                  <VintageSticker index={absoluteIndex} />
 
                                  <div className={`relative z-10 flex flex-col h-full justify-end p-2.5 sm:p-3 pb-2 sm:pb-2.5 pl-4 sm:pl-5 md:pl-6 ${book.textColor}`}>
                                    <div className="self-end bg-[#FAF7F0] border border-stone-300 rounded-[2px] p-1 w-[65px] sm:w-[80px] md:w-[92px] text-[5px] sm:text-[6px] md:text-[7px] text-[#333] shadow-[1px_1px_2px_rgba(0,0,0,0.04)] space-y-0.5">
                                      <div className="border-b border-stone-200 pb-0.5 font-bold font-mono tracking-tighter text-stone-500 scale-90 origin-left flex justify-between items-center">
                                        <span>{book.studentName}</span>
                                        <span>A4-70G</span>
                                      </div>
                                      <p className="font-semibold text-[5px] sm:text-[6px] leading-[1.1] text-neutral-800 tracking-tighter truncate">
                                        {book.tag}
                                      </p>
                                      <div className="flex gap-[0.5px] items-stretch h-1.5 pt-0.5 opacity-90">
                                        <span className="w-[1.5px] bg-black" />
                                        <span className="w-[0.5px] bg-black" />
                                        <span className="w-[1px] bg-black" />
                                        <span className="w-[0.5px] bg-transparent" />
                                        <span className="w-[1.5px] bg-black" />
                                        <span className="w-[0.5px] bg-black" />
                                        <span className="w-[1px] bg-black" />
                                        <span className="w-[0.5px] bg-transparent" />
                                      </div>
                                      <div className="text-[4px] sm:text-[5px] text-stone-400 text-right font-mono scale-90 origin-right font-bold">
                                        200원
                                      </div>
                                    </div>
                                  </div>
 
                                  {/* Highly-designed Hover Overlay showing dynamic interaction prompt */}
                                  <AnimatePresence>
                                    {isHovered && (
                                      <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute inset-0 z-30 bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center p-2 text-center"
                                      >
                                        <Quote className="w-4 h-4 text-white p-0.5 mb-1" />
                                        <span className="text-[10px] sm:text-xs font-sans font-semibold text-white tracking-tight">인터뷰 읽기</span>
                                        <span className="text-[6.5px] sm:text-[7.5px] font-mono text-white/60 tracking-widest mt-0.5">CLICK</span>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
 
                                  <div className="absolute right-0 inset-y-0 w-[4px] bg-black/5 z-20 pointer-events-none rounded-r-sm" />
                                </motion.div>
                              );
                            })}
                          </div>
 
                          {/* Wooden Shelf Bar for Row 2 */}
                          <div 
                            className="w-full h-2.5 sm:h-3 bg-[#FCFBF9] rounded-sm border-t border-b border-stone-200 shadow-[0_6px_10px_rgba(0,0,0,0.03)] flex items-center justify-between px-6 relative"
                            style={{
                              boxShadow: "0 8px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)"
                            }}
                          >
                            <div className="absolute left-8 lg:left-12 top-full w-3 sm:w-4 h-2 bg-neutral-200/55 rounded-b" />
                            <div className="absolute right-8 lg:right-12 top-full w-3 sm:w-4 h-2 bg-neutral-200/55 rounded-b" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          </div>

        </div>

      </div>

      {/* Deluxe Embedded Modal for displaying the pulled book interview contents */}
      <AnimatePresence>
        {selectedInterview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none bg-neutral-900/50 backdrop-blur-md">
            
            {/* Modal backdrop closer clicker */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setSelectedInterview(null)}
            />

            {/* Main Interactive Book Modal Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white border border-neutral-100 shadow-2xl rounded-[32px] overflow-hidden flex flex-col z-10 pointer-events-auto select-text max-h-[85vh] sm:max-h-[80vh] md:max-h-[75vh]"
            >
              
              {/* Top aesthetic book banner accent matching the cover styled decoration */}
              <div className={`h-2.5 ${selectedInterview.kraftBg} w-full`} />

              {/* Main Content Scroll container */}
              <div className="p-6 sm:p-10 md:p-12 overflow-y-auto flex-grow flex flex-col justify-between">
                
                {/* Header Information row */}
                <div className="border-b border-neutral-100 pb-6 mb-8">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#f37022] uppercase tracking-[0.2em] block">
                        STUDENT INTERVIEW // {selectedInterview.tag}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-sans font-black text-neutral-900 flex items-center gap-2">
                        <span>{selectedInterview.studentName}</span>
                        <span className="text-[#f37022] text-xl font-normal" style={{ fontFamily: '"Petit Formal Script", cursive' }}>voice book</span>
                      </h4>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedInterview(null)}
                      className="w-10 h-10 rounded-full border border-neutral-100 bg-neutral-50 hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="mt-2 text-left">
                    <div className="space-y-1 text-xs text-neutral-400 font-medium">
                      <span className="font-semibold text-[12px] sm:text-[13px] text-neutral-600 tracking-tight block">
                        {selectedInterview.workName}
                      </span>
                      {selectedInterview.workName.includes('[') && (
                        <span className="text-[10px] text-neutral-400 font-normal block">
                          * 괄호 안의 내용은 담당 선생님의 시선으로 담아낸 문장입니다.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Core Interview Content body */}
                <div className="space-y-8 flex-grow">
                  
                  {/* Highlight Quote box */}
                  <div className="bg-[#FAF9F5] border border-[#f37022]/10 rounded-2xl p-4.5 xs:p-5 flex items-start gap-3.5 relative overflow-hidden">
                    <Quote className="w-4.5 h-4.5 text-[#f37022]/35 shrink-0 mt-0.5" />
                    <p 
                      className="text-[12px] xs:text-[13px] sm:text-sm md:text-[15px] font-sans font-medium text-[#f37022] tracking-tight leading-relaxed break-keep flex-grow"
                    >
                      {selectedInterview.summary}
                    </p>
                  </div>

                  {/* Dialogue Q&A sequence with beautiful luxury formatting */}
                  <div className="space-y-6 pt-2">
                    {selectedInterview.fullInterview.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex gap-2.5 items-start">
                          <span className="text-xs font-mono font-black text-[#f37022] mt-0.5 shrink-0">Q.</span>
                          <span className="text-xs sm:text-sm font-sans font-black text-neutral-900 leading-relaxed break-keep">
                            {item.q}
                          </span>
                        </div>
                        <div className="flex gap-2.5 items-start pl-4 border-l-2 border-neutral-100">
                          <span className="text-xs sm:text-sm font-sans font-medium text-neutral-600 leading-relaxed text-justify break-keep">
                            {item.a}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Footer close button bar */}
                <div className="mt-10 border-t border-neutral-100 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-neutral-400 font-mono text-[10px]">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                    <span>ONE AND ONLY VOICE MASTER INTERVIEW</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedInterview(null)}
                    className="px-5 py-2.5 bg-neutral-900 hover:bg-[#f37022] hover:shadow-lg hover:shadow-[#f37022]/10 text-white text-[11px] uppercase tracking-widest font-bold rounded-lg transition-all active:scale-95 cursor-pointer"
                  >
                    닫기
                  </button>
                </div>

              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
