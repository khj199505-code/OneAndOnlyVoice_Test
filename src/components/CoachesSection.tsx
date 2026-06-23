import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Instagram, ChevronLeft, ChevronRight, CornerDownRight, ArrowLeft, Send, Sparkles, Check, FileAudio, ArrowUpRight, Star, GraduationCap } from "lucide-react";

interface Coach {
  id: string;
  nameKr: string;
  nameEn: string;
  role: string;
  subRole: string;
  birthDate: string;
  instagram: string;
  image: string;
  introTextColumn1: string;
  introTextColumn2: string;
  specialties: string[];
}

const COACHES_DATA: Coach[] = [
  {
    id: "hyunji",
    nameKr: "김현지",
    nameEn: "HYUNJI KIM",
    role: "Founder & Creative Director",
    subRole: "ONE & ONLY VOICE REPRESENTATIVE",
    birthDate: "23 May",
    instagram: "hyunji_oneonly",
    image: "https://postfiles.pstatic.net/MjAyNjA1MjNfMTIy/MDAxNzc5NTQwNTc5Mjg5.4lTpj_edYKROynPlgrfUI1Nl1Uu-3T2NrADeq0IqMAAg.4nJisKP3-RPS3tvFXXplI6CpxsqDLOoT-CCZIfc3xYMg.JPEG/SE-43fa0f0b-c9de-46a3-a1d9-6abd367a729c.jpg?type=w773",
    introTextColumn1: "김현지 디렉터는 원앤온리 보이스 마스터 스튜디오를 지탱하는 설계자이자, 보이스 리브랜딩 시장의 새로운 패러다임을 연 비전 리더입니다. 그녀는 소리를 단순히 소리통에서 나오는 메커니즘을 넘어, 한 인간의 고결한 본질과 내면에 축적된 영혼적 아우라를 전달하는 예술의 극치로 정의합니다.\n\n국내외 정재계 명사들과 최정상 아티스트들의 시그니처 보이스 브랜드를 조율하며 최고 권위 of 사운드 큐레이터로 자리매김하였습니다.",
    introTextColumn2: "모든 이의 목소리에는 각자만의 아름다움이 있다.\n누구처럼이 아니라, ‘나’를 찾아드립니다.",
    specialties: ["무대 애티튜드 마스터", "퍼스널 보컬 분석", "섬세한 보이스 리스너", "자존감 메이커"]
  },
  {
    id: "gunwoo",
    nameKr: "박건우",
    nameEn: "GUNWOO PARK",
    role: "HEAD VOCAL COACH",
    subRole: "VOCAL MECHANISM MASTER",
    birthDate: "17 November 1989",
    instagram: "gunwoo_sound",
    image: "https://postfiles.pstatic.net/MjAyNjA1MjRfOTEg/MDAxNzc5NTQ5MTkyNTQ3.vqXpCO4-sKamks9sE8gljAwFAhtmnJFYFKfS_uZbpIEg.szC05kSSUC2mZjGG-mScnx-eL9EhpPrPlf-z_tMBeFwg.PNG/SE-48324de7-f59a-4482-9f6c-7b0e2242f1bc.png?type=w773",
    introTextColumn1: "박건우 수석 코치는 경희대학교 대학원에서 변성기 청소년 가창 교육 프로그램 및 버추얼 가수를 연구하고 다수의 해외 소속 및 대학 강의를 통해 입증된 정통파 보컬 메커니즘 마스터입니다.\n\n개인의 성대 구조와 물리적 울림 원리를 이해하게 함으로써 고음을 해결하고 신뢰를 주는 주파수를 즉각 확장시킵니다.",
    introTextColumn2: "Singing Better : 더 나은 노래는 보컬의 원리를 이해함에서 시작된다!",
    specialties: ["고음 고민 해결사", "발성 마스터", "확실한 피드백", "유쾌한 에너지"]
  },
  {
    id: "jihyun",
    nameKr: "이지현",
    nameEn: "JIHYUN LEE",
    role: "HEAD VOCAL DIRECTOR",
    subRole: "STYLE MAKER",
    birthDate: "09 April 1991",
    instagram: "jihyun_voice",
    image: "https://postfiles.pstatic.net/MjAyNjA1MjRfNTQg/MDAxNzc5NTQ5OTk0OTg1.xVdKtAQct1AVS2STEWMhTNnE3jNop1HVa4JivF6lX7wg.RLtv9bdBNFx28aIrUk5iitHrcH1b_QoVpQkjFo8Axmcg.JPEG/SE-af19986b-cf68-496b-994d-956e85184ef9.jpg?type=w773",
    introTextColumn1: "이지현 수석 코치는 성대의 미세 기하학적 울림 구조와 고해상도 공명 분석을 설계하는 국내 최정상급 보이스 튜너입니다. 지난 10여 년간 1,200명이 넘는 라이브 보컬리스트들과 명사들의 시그니처 배음을 연마해왔습니다.\n\n개인의 신체적 울림 본연의 호흡 흐름을 파동학적으로 계산하여 감각적이고 압도적인 성문 조음을 이끌어내며 최고의 보이스 아우라를 일깨웁니다.",
    introTextColumn2: "그녀의 시그니처 세션은 성대 무리를 원천 차단하고 가장 밀도 높고 아름다운 하이엔드 톤을 구현하는 것에 목적을 둡니다.\n\n오로지 당신만의 고유한 진동과 음성 브랜드를 위해 준비된 완전히 차별화된 디렉팅을 통해 내면에 숨겨진 단 하나의 찬란한 보이스 아우라를 일깨워 보십시오.",
    specialties: ["보컬 스타일 메이커", "초정밀 디렉팅", "단호함과 다정함", "예민한 청각"]
  }
];

interface ResumeItem {
  title: string;
  type: string;
}

const CoachResume: React.FC<{ coachId: string }> = ({ coachId }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>("academic");
  
  // States to manage nested sub tabs for each main section
  const [academicSub, setAcademicSub] = useState<string>("degree");
  const [coachingSub, setCoachingSub] = useState<string>("edu");
  const [performanceSub, setPerformanceSub] = useState<string>("album");
  const [passSub, setPassSub] = useState<string>("ent");
  const [showAllEntPasses, setShowAllEntPasses] = useState<boolean>(false);
  const [showAllUniPasses, setShowAllUniPasses] = useState<boolean>(false);

  useEffect(() => {
    setActiveSubTab("academic");
    setAcademicSub("degree");
    setCoachingSub("edu");
    setPerformanceSub("album");
    setPassSub("ent");
    setShowAllEntPasses(false);
    setShowAllUniPasses(false);
  }, [coachId]);

  const categories = coachId === "gunwoo" ? [
    { id: "academic", label: "학력 & 논문/자격", eng: "ED & CREDENTIALS" },
    { id: "coaching", label: "교육 & 심사/기획", eng: "TEACHING & AUDIT" },
    { id: "performance", label: "공연 & 음반", eng: "STAGE & ALBUM" },
    { id: "pass", label: "합격생 배출", eng: "PLACEMENTS" },
  ] : coachId === "jihyun" ? [
    { id: "academic", label: "학력 & 학술", eng: "ED & RESEARCH" },
    { id: "coaching", label: "출강 & 방송", eng: "TEACHING & TV" },
    { id: "performance", label: "주요 경력", eng: "CAREER" },
  ] : [
    { id: "academic", label: "학력 & 학술", eng: "ED & RESEARCH" },
    { id: "coaching", label: "교육 & 코칭", eng: "TEACHING" },
    { id: "performance", label: "방송 & 공연", eng: "STAGE & TV" },
    { id: "pass", label: "합격자 배출", eng: "PLACEMENTS" },
  ];

  // 1. 학력 & 학술
  const getDegreeItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "경희대학교 일반대학원 응용예술학과 박사 수료", type: "경희대 일반대학원" },
        { title: "경희대학교 아트퓨전대학원 실용음악전공 석사 졸업", type: "경희대 아트퓨전대학원" },
        { title: "한서대학교 실용음악과 보컬전공 수석졸업", type: "한서대학교" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "경희대학교 일반대학원 응용예술학과 박사 과정중", type: "학위 과정" },
        { title: "경희대학교 일반대학원 포스트모던음악학과 석사 졸업", type: "석사 학위" },
        { title: "경희대학교 포스트모던음악과 보컬 전공 학사 졸업", type: "학사 학위" },
        { title: "한림연예예술고등학교 보컬 전공 졸업", type: "고교 학력" }
      ];
    }
    return [
      { title: "경희대학교 일반대학원 응용예술학과 박사 수료", type: "경희대 대학원" },
      { title: "경희대학교 아트퓨전디자인대학원 석사 졸업 (실용음악 전공)", type: "경희대 대학원" },
      { title: "경희대학교 Post-modern음악과 학부 졸업 (보컬 전공)", type: "경희대 학부" }
    ];
  };

  const getResearchItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "「변성기 청소년을 위한 대중가요 가창 교육 프로그램 개발 연구」\n(경희대학교 아트퓨전대학원 석사 논문 – 박건우)", type: "석사 논문" },
        { title: "「메타버스를 이용한 버추얼 가수의 유형 제시 및 현황 연구」\n(한국엔터테인먼트산업학회논문지 - 2022 Vol.16 No.6 박건우, 김현지, 이연경 공동집필)", type: "학회지 논문" },
        { title: "한국실용예술개발원(KIPAD) 국제예술분야 : 보컬코치(Vocal Coach)발성 자격증", type: "자격증" },
        { title: "<U-Star 30 한.중 수교 30주년 대학생 가요제> 우수상 수상 (주한중국대사관, 한국대학국제교류협의회 주최)", type: "수상 이력" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "(KCI등재)1950년대 샹소니에 작품에 내재된 민중시적 특징 고찰 - 주저자", type: "KCI 논문" }
      ];
    }
    return [
      { title: "이탈리아 A.M.I 국제 마스터클래스 수료", type: "ITALY 마스터클래스" },
      { title: "이탈리아 A.M.I Diploma 과정 이수", type: "ITALY DIPLOMA" },
      { title: "메디컬보이스 이비인후과 Vocal Pedagogy 과정 수료", type: "보컬 의학" },
      { title: "National Association of Teachers of Singing (NATS) 보컬코치 협회 정회원", type: "정회원" },
      { title: "한국엔터테인먼트산업학회 정회원", type: "학술 연구회" },
      { title: "판소리와 실용음악 가창시 음성음향학적 분석 연구 - Praat 음성분석 프로그램을 활용하여 여성중심으로 - 주저자", type: "석사논문" },
      { title: "(KCI등재) 메타버스를 이용한 버추얼 가수의 유형 제시 및 현황 연구, 한국엔터테인먼트산업학회 - 교신저자 및 공동저자", type: "KCI 논문" }
    ];
  };

  // 2. 교육 & 코칭
  const getEduItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "전주대학교 공연예술학과 실용음악전공 강의", type: "대학 강의" },
        { title: "한국 K-pop 고등학교 보컬 강의", type: "고교 강의" },
        { title: "1급 정교사 연수 가창교육 파트 전담 강의", type: "연수 강의" },
        { title: "사단법인 린덴바움 2022 방과 후 힙합스쿨 특강", type: "기관 특강" },
        { title: "EL엔터테인먼트 보컬트레이너", type: "엔터 트레이너" },
        { title: "인천 건설기술교육원 보컬 특강", type: "기관 특강" },
        { title: "보컬제이 스튜디오 발성담당 및 보컬테크닉 자문위원", type: "자문 위원" },
        { title: "메이저 보컬&댄스 트레이닝센터 강의", type: "트레이닝센터" },
        { title: "前) 감성실용음악학원 보컬 출강", type: "학원 출강" },
        { title: "前) 아이비실용음악학원 보컬 출강", type: "학원 출강" },
        { title: "前) 피아노리브레 사당센터 보컬 출강", type: "센터 출강" },
        { title: "前) 대천 실용음악학원 보컬 출강", type: "학원 출강" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "하이브 엔터테인먼트 출강", type: "하이브" },
        { title: "한림연예예술고등학교 출강", type: "한림예고" },
        { title: "한국 K-POP고등학교 출강", type: "한국 K-POP고" },
        { title: "(전)Avec 뮤직 아카데미 출강", type: "Avec" }
      ];
    }
    return [
      { title: "경희대학교 포스트모던음악과 출강", type: "대학 출강" },
      { title: "서울호서예술전문학교 K-POP학과 출강", type: "대학 출강" },
      { title: "한국K-POP고등학교 출강", type: "고교 출강" },
      { title: "전) 모던K 실용음악학원 출강", type: "출강 이력" },
      { title: "전) 드림보컬 실용음악학원 출강", type: "출강 이력" }
    ];
  };

  const getCoachingItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "전주 대동가요제 심사위원", type: "심사 경력" },
        { title: "경희대학교 미디어엔터테인먼트학과 면접 심사 참여", type: "심사 경력" },
        { title: "한/중 유학생 대학원 실용음악과 면접심사", type: "심사 경력" },
        { title: "메이저트레이닝센터 엔터테인먼트 오디션 심사", type: "심사 경력" },
        { title: "감성 아카데미 마스터클래스 입시면접 심사", type: "심사 경력" },
        { title: "마리아 칼라스 홀 제1회 K.A.B. Concert 연출, 기획 및 진행", type: "공연 기획" },
        { title: "강남아트홀 제3회 K.A.B. Concert 연출 및 기획, 감독", type: "공연 기획" },
        { title: "롤링홀 제5회 K.A.B. Concert 기획 및 진행", type: "공연 기획" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "Mbc 뮤직 '뮤직스토리지' 출연", type: "MBC 뮤직" },
        { title: "Mbc 전주 'jump 창작가요제' 입상", type: "MBC" },
        { title: "Tbc 고택음악회 출연", type: "TBC" }
      ];
    }
    return [
      { title: "배우 박시현 보컬트레이닝", type: "ACTOR" },
      { title: "유튜버 소피젤리 보컬트레이닝", type: "CREATOR" },
      { title: "SBS “LOUD” 강기묵 보컬트레이닝", type: "방송 오디션" },
      { title: "COSMO 전체 멤버 보컬트레이닝", type: "IDOL GROUP" },
      { title: "변정현 - 뜬금없이 니 생각이 나 보컬트레이닝 및 디렉팅", type: "디렉팅 & 트레이닝" },
      { title: "Ooa(우아) - 빛이나 보컬트레이닝 및 디렉팅", type: "디렉팅 & 트레이닝" }
    ];
  };

  const getCareerItems = (): ResumeItem[] => {
    return [
      { title: "가수 신형원 코러스", type: "코러스 세션" },
      { title: "Yb밴드 박태희 개인 공연 메인 및 코러스", type: "라이브 세션" },
      { title: "가수 남궁옥분, 채은옥 코러스", type: "코러스 세션" },
      { title: "가수 소향, 이수영, 휘인 가이드 보컬", type: "가이드 보컬" }
    ];
  };

  // 3. 방송 & 공연
  const getAlbumItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "‘[For you : Only your light] 너를 위한 단 하나의 빛이 되어줄게’ 디지털 싱글발매", type: "디지털 싱글" },
        { title: "‘생각나니’ 디지털 싱글 발매", type: "디지털 싱글" },
        { title: "‘[Only you : Our Time] 찬란한 하루를 담아’ 디지털싱글 발매예정", type: "발매 예정" },
        { title: "‘언제나 저 별은 – 노현승’ 앨범 코러스 및 보컬디렉팅 참여", type: "앨범 참여" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "웹툰 '소녀의 세계' 수록 삽입곡 가창 음반 참여 및 발매", type: "웹툰 OST" },
        { title: "다수의 광고 및 상업 브랜드 CM송 메인 레코딩 보컬", type: "CF 보컬" }
      ];
    }
    return [
      { title: "Hon_D - 눈부셨던 우리를 잊지말아요 (레벨업 닥터 최기석 OST) 발매", type: "웹툰 OST" },
      { title: "Hon_D - 다시 돌아온 계절 (이 결혼은 어차피 망하게 되어있다 OST) 발매", type: "웹툰 OST" },
      { title: "한찬현 - 그래도 크리스마스 (Still, it's Christmas) 보컬 참여", type: "Vocal" },
      { title: "Ooa(우아) - Time to love 코러스 참여", type: "수록음반 코러스" }
    ];
  };

  const getChorusItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "KBS '열린음악회' 메인무대 라이브 코러스 세션 다수", type: "기획 코러스" },
        { title: "가수 '임정희' 단독 전국투어 콘서트 및 무대 라이브 코러스 참여", type: "가수 코러스" },
        { title: "가수 '지세희' 신곡 및 콘서트 라인업 라이브 코러스 참여", type: "가수 코러스" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "KBS '불후의 명곡' 신년 특집 코러스 세션 보컬 마스터 참여", type: "방송 코러스" },
        { title: "MBC '나는 가수다' 하우스 보컬 코디네이터 및 코러스 합창", type: "생방송 코러스" }
      ];
    }
    return [
      { title: "가수 김나영 어땠을까 콘서트 코러스세션", type: "콘서트 코러스" },
      { title: "가수 소향 희망나눔 열린음악회 코러스세션", type: "열린음악회" },
      { title: "가수 디셈버 DK 팬콘서트 코러스 세션", type: "팬콘서트" },
      { title: "가수 조영남, 김도향, 윤형주, 최백호, 추가열, 신형원, 장은아, 남궁옥분 코러스세션", type: "합동 콘서트" },
      { title: "OBS주최 대한민국 포크 50주년 기념 콘서트 (수원,인천) 코러스세션", type: "기념 콘서트" },
      { title: "OBS 여고동창회 콘서트 가수 신형원, 채은옥, 남궁옥분 코러스세션", type: "기획 콘서트" }
    ];
  };

  const getBroadcastItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "KBS '열린음악회' 공식 메인 무대 라이브 코러스 세션 출연", type: "방송 레코딩" },
        { title: "SBS 라디오 '러브FM' 보컬 과학 스페셜 게스트 초청 인터뷰 출연", type: "라디오 고정" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "KBS '열린음악회' 코러스 세션 정기 출연", type: "정기 방송출연" },
        { title: "MBC 뮤직 'K-POP 루키쇼' 스페셜 보컬 디렉터 패널 초청", type: "방송 패널" }
      ];
    }
    return [
      { title: "SBS 보컬전쟁 : 신의목소리 윤도현편 우승", type: "방송 우승" },
      { title: "경기방송 라디오 ‘매일 그대와’ 재능기부 출연", type: "라디오 출연" },
      { title: "EBS 스페이스 공감 가수 신형원편 공연 참여", type: "방송 공연" }
    ];
  };

  const getConcertItems = (): ResumeItem[] => {
    if (coachId === "gunwoo") {
      return [
        { title: "베트남 해외초청공연 – Global K-pop friendship concert 공연", type: "해외 초청공연" },
        { title: "몽골 해외초청공연 – Mongol K-popn Education Concert 공연", type: "해외 초청공연" },
        { title: "KBS '열린음악회' 메인무대 코러스", type: "방송 코러스" },
        { title: "가수 '임정희' 코러스", type: "가수 코러스" },
        { title: "가수 '지세희' 코러스", type: "가수 코러스" },
        { title: "국내 국가특허 'Live Machine' 공연팀 리드보컬", type: "특허팀 리드보컬" },
        { title: "대구 국제 컴퓨터 음악 컨퍼런스(ICMC) 초청공연", type: "국제학술전" },
        { title: "용인 포은 아트 홀 '미디어 아트전' 초청공연", type: "아트홀 초청" },
        { title: "서산 해미 공군 비행장 군부대 위문공연", type: "위문공연" },
        { title: "강남아트홀 제3회 K.A.B Concert 공연", type: "기획공연" },
        { title: "마리아칼라스홀 제1회 K.A.B Concert 공연", type: "기획공연" },
        { title: "롤링홀 ‘멜로딕 드라이브 콘서트’ 초청공연", type: "클럽공연" },
        { title: "대한민국 온천대축제 “내포문화숲길걷기축제” 개막식 초청공연", type: "축제 초청" },
        { title: "제2회 예산 국화축제 축하공연", type: "축제 초청" },
        { title: "상상마당, 롤링홀 등 다수 클럽공연", type: "라이브 클럽" }
      ];
    }
    if (coachId === "jihyun") {
      return [
        { title: "용인 야외 숲속 음악회 가창 공연 특별 게스트 무대", type: "게스트 무대" },
        { title: "K-Vocal 한여름 밤의 음악회 단독 가창 축하 무대", type: "음악회 공연" }
      ];
    }
    return [
      { title: "이탈리아 'Young Artists Talents concerto' 공연", type: "해외 초청" },
      { title: "청와대 독립유공자 및 유족 초청 오찬 공연", type: "초청 공연" },
      { title: "목포, 서울 현충원 故김대중 전 대통령 서거 5주기 추모공연", type: "추모 공연" },
      { title: "제33회 UN 세계평화의 날 기념 PeaceBAR Festival 공연", type: "기념 공연" },
      { title: "제 8회 밀양 초청 열린음악회 공연", type: "초청 공연" },
      { title: "경기방송 라디오 ‘매일 그대와’ 재능기부", type: "라디오 출연" },
      { title: "KB국민은행 힐링캠프 공연", type: "기업 초청" },
      { title: "유니세프 ‘환경평화콘서트’ 공연", type: "공익 공연" },
      { title: "노보텔 대한항공 前임직원 정기총회 공연", type: "초청 공연" },
      { title: "서울 소년원 힐링콘서트 공연", type: "재능 기부" },
      { title: "가을에 빠진 해운대 문화 콘서트 공연", type: "문화 콘서트" },
      { title: "충북대 예비대학 '음악으로 소통하라' 공연", type: "대학 강연" },
      { title: "서울 시청 광장 행복 나눔 다문화 축제 공연", type: "시민 축제" },
      { title: "울산 오딧세이 ‘억새와 바람의 노래’ 공연", type: "오딧세이" },
      { title: "제주 사려니숲 에코 힐링 음악회 공연", type: "에코 힐링" },
      { title: "대구 북구 생활문화예술제 공연", type: "지역 축제" },
      { title: "부산 평화콘서트 공연", type: "평화 콘서트" },
      { title: "경주 봉황대 뮤직스퀘어 공연", type: "야외 콘서트" },
      { title: "수원 청명단오제 공연", type: "전통 축제" },
      { title: "홍성 한국K-POP 페스티벌 초청 공연", type: "K-POP 축제" },
      { title: "남양주 예술제 초청 공연", type: "예술제 초청" },
      { title: "2014년도 대동가요제 대상", type: "가요제 대상" },
      { title: "서울예대, 경희대, 호원대 연합공연 ‘통일’ 디딤홀 공연", type: "연합 공연" },
      { title: "Wanna fly4 : begin again 뮤지스땅스 공연", type: "Wanna fly" },
      { title: "Wanna fly5 : 내 이야기를 들어줘 인디팍 공연", type: "Wanna fly" },
      { title: "Wanna fly6 : Happy music concert 스테이라운지 공연", type: "Wanna fly" },
      { title: "Wanna fly7 : 별이 빛나는 밤 스테이라운지 공연", type: "Wanna fly" },
      { title: "김로컬밴드 웨스트 브릿지 Live hall 공연", type: "기획 라이브" },
      { title: "The nerds 'Beginning' DGT Art center 공연", type: "단독 공연" }
    ];
  };

  const getEntLabels = () => {
    if (coachId === "hyunji") {
      return [
        { name: "SM 엔터테인먼트", result: "1차 합격 (다수) / 2차 합격" },
        { name: "JYP 엔터테인먼트", result: "2차 합격 (다수)" },
        { name: "YG 엔터테인먼트", result: "1차 합격" },
        { name: "스타쉽 엔터테인먼트", result: "1차 합격 (다수)" },
        { name: "쏘스뮤직", result: "최종 합격 / 1차 합격 (다수)" },
        { name: "플레디스", result: "2차 합격" },
        { name: "큐브 엔터테인먼트", result: "최종 합격 / 1,2차 합격" },
        { name: "FNC 엔터테인먼트", result: "1,2차 합격" },
        { name: "CJ E&M Ent", result: "2차 합격 (다수)" },
        { name: "울림 엔터테인먼트", result: "2차 합격" },
        { name: "판타지오 엔터테인먼트", result: "2차 합격" },
        { name: "젤리피쉬 엔터테인먼트", result: "1차 합격" },
        { name: "RBW", result: "1차 합격 (다수) / 3차 합격" },
        { name: "카카오M", result: "2차 합격" },
        { name: "WM 엔터테인먼트", result: "1차 합격 (다수)" },
        { name: "S2 엔터테인먼트", result: "1차 합격 (다수)" },
        { name: "올라트 엔터테인먼트", result: "최종 합격 / 1,2,3차 합격" },
        { name: "JJ홀릭미디어", result: "최종 합격 / 3차 합격" },
        { name: "IME KOREA", result: "최종 합격 / 1차 합격" },
        { name: "그레이트엠 엔터테인먼트", result: "1차 합격" },
        { name: "키위미디어", result: "2차 합격 (다수)" },
        { name: "폴라리스", result: "2차 합격" },
        { name: "해피페이스", result: "1차 합격" },
        { name: "유엠아이 엔터테인먼트", result: "1차 합격" },
        { name: "더블브이 엔터테인먼트", result: "1차 합격" },
        { name: "그랜드라인 엔터테인먼트", result: "1차 합격" },
        { name: "넥스타 엔터테인먼트", result: "1차 합격" },
        { name: "엔터로뱅 엔터테인먼트", result: "1차 합격" },
        { name: "제이플래닛 엔터테인먼트", result: "1차 합격" },
        { name: "뮤직K 엔터테인먼트", result: "3차 합격" },
        { name: "SRP 엔터테인먼트", result: "1차 합격" }
      ];
    }
    return [
      { name: "SM 엔터테인먼트", result: "최종 합격" },
      { name: "JYP 엔터테인먼트", result: "최종 합격" },
      { name: "YG 엔터테인먼트", result: "수강생 배출" },
      { name: "FNC 엔터테인먼트", result: "최종 합격" },
      { name: "더블랙레이블", result: "연습생 합격" },
      { name: "스타쉽 엔터테인먼트", result: "최종 합격" },
      { name: "하이브 (HYBE)", result: "1차 합격" },
      { name: "큐브 엔터테인먼트", result: "최종 합격" }
    ];
  };

  const getUniLabels = () => {
    if (coachId === "hyunji") {
      return [
        { name: "서경대학교", dept: "최종 합격 (다수) / 1차 합격" },
        { name: "한양대학교", dept: "1차 합격" },
        { name: "동아방송예술대학교", dept: "최종 합격 (다수) / 1차 합격" },
        { name: "호원대학교", dept: "최종 합격" },
        { name: "용인대학교", dept: "최종 합격 (다수)" },
        { name: "정화예술대학교", dept: "최종 합격 (다수)" },
        { name: "국제예술대학교", dept: "최종 합격" },
        { name: "성결대학교", dept: "최종 합격" },
        { name: "숭의여자대학교", dept: "최종 합격" },
        { name: "강서대학교", dept: "최종 합격" },
        { name: "용인예술과학대학교", dept: "최종 합격" },
        { name: "동원대학교", dept: "최종 합격" },
        { name: "장안대학교", dept: "최종 합격" },
        { name: "협성대학교", dept: "수석입학 최종 합격" },
        { name: "국제대학교", dept: "최종 합격 (다수)" },
        { name: "경인여자대학교", dept: "최종 합격" },
        { name: "백제예술대학교", dept: "최종 합격" },
        { name: "서서울 생활과학고등학교", dept: "최종 합격" },
        { name: "서울예술실용전문학교", dept: "최종 합격" },
        { name: "평택대학교", dept: "최종 합격" },
        { name: "신한대학교", dept: "예비 1번" },
        { name: "경기대학교", dept: "1차 합격 / 예비 1번" }
      ];
    }
    return [
      { name: "동아방송예술대학교", dept: "다수 합격생 배출" },
      { name: "여주대학교", dept: "다수 합격생 배출" },
      { name: "백석예술대학교", dept: "다수 합격생 배출" },
      { name: "백제예술대학교", dept: "다수 합격생 배출" }
    ];
  };

  return (
    <div className="space-y-4 text-left">
      {/* Tab bar select between the categories */}
      <div className="flex border-b border-neutral-200 gap-1 overflow-x-auto whitespace-nowrap pb-1 select-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveSubTab(cat.id)}
            className={`px-3 py-2 text-xs font-score rounded-sm transition-all cursor-pointer ${
              activeSubTab === cat.id
                ? "bg-[#f37022]/10 text-[#f37022] font-semibold border-b-2 border-[#f37022]"
                : "text-zinc-500 hover:text-zinc-800 hover:bg-neutral-50"
            }`}
          >
            <div className="text-[11px] font-sans font-bold leading-none">{cat.label}</div>
            <div className="text-[8px] font-mono opacity-60 mt-1 leading-none">{cat.eng}</div>
          </button>
        ))}
      </div>

      {/* Rendering sub-tabs and content for the active Tab */}
      {/* 1. Academic & Credentials */}
      {activeSubTab === "academic" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex bg-neutral-50 p-0.5 rounded-sm border border-neutral-100 gap-1">
            <button
              onClick={() => setAcademicSub("degree")}
              className={`flex-1 py-1.5 text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                academicSub === "degree" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              학위 및 학력
            </button>
            <button
              onClick={() => setAcademicSub("research")}
              className={`flex-1 py-1.5 text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                academicSub === "research" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {coachId === "gunwoo" ? "논문 및 자격" : "학술 및 연구"}
            </button>
          </div>

          <div className="max-h-[280px] overflow-y-auto pr-2 divide-y divide-neutral-100 text-left">
            {(academicSub === "degree" ? getDegreeItems() : getResearchItems()).map((item, idx) => (
              <div key={idx} className="py-2.5 flex items-start gap-3 group animate-fadeIn">
                <span className="text-[9.5px] font-mono text-zinc-300 group-hover:text-[#f37022] transition-colors mt-[3px] shrink-0 font-bold">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <div className="space-y-0.5 text-left">
                  <p className="text-[13px] text-zinc-800 font-sans font-semibold leading-relaxed break-keep text-left whitespace-pre-line">
                    {item.title}
                  </p>
                  <span className="inline-block text-[9px] font-mono text-neutral-400 font-medium tracking-tight uppercase">
                    [{item.type}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Education & Coaching */}
      {activeSubTab === "coaching" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex bg-neutral-50 p-0.5 rounded-sm border border-neutral-100 gap-1 select-none">
            <button
              onClick={() => setCoachingSub("edu")}
              className={`flex-1 py-1.5 text-center text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                coachingSub === "edu" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {coachId === "jihyun" ? "출강" : "출강 및 강의"}
            </button>
            <button
              onClick={() => setCoachingSub("coaching")}
              className={`flex-1 py-1.5 text-center text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                coachingSub === "coaching" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {coachId === "gunwoo" ? "심사 및 기획" : coachId === "jihyun" ? "방송 출연" : "교육 및 심사"}
            </button>
          </div>

          <div className="max-h-[280px] overflow-y-auto pr-2 divide-y divide-neutral-100 text-left">
            {(coachingSub === "edu" ? getEduItems() : getCoachingItems()).map((item, idx) => (
              <div key={idx} className="py-2.5 flex items-start gap-3 group animate-fadeIn">
                <span className="text-[9.5px] font-mono text-zinc-300 group-hover:text-[#f37022] transition-colors mt-[3px] shrink-0 font-bold">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <div className="space-y-0.5 text-left">
                  <p className="text-[13px] text-zinc-800 font-sans font-semibold leading-relaxed break-keep text-left whitespace-pre-line">
                    {item.title}
                  </p>
                  <span className="inline-block text-[9px] font-mono text-neutral-400 font-medium tracking-tight uppercase">
                    [{item.type}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Performance & TV Inner View (Album/Chorus/Broad/Concert) */}
      {activeSubTab === "performance" && (
        <div className="space-y-4 animate-fadeIn">
          {coachId !== "jihyun" && (
            <div className="flex flex-wrap bg-neutral-50 p-0.5 rounded-sm border border-neutral-100 gap-1 select-none">
              {coachId === "gunwoo" ? (
                <>
                  <button
                    onClick={() => setPerformanceSub("concert")}
                    className={`flex-1 py-1.5 text-center text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "concert" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    공연 이력
                  </button>
                  <button
                    onClick={() => setPerformanceSub("album")}
                    className={`flex-1 py-1.5 text-center text-xs font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "album" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    음반 이력
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setPerformanceSub("album")}
                    className={`flex-1 min-w-[65px] py-1 text-[11px] font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "album" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    음반
                  </button>
                  <button
                    onClick={() => setPerformanceSub("chorus")}
                    className={`flex-1 min-w-[65px] py-1 text-[11px] font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "chorus" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    코러스
                  </button>
                  <button
                    onClick={() => setPerformanceSub("broadcast")}
                    className={`flex-1 min-w-[65px] py-1 text-[11px] font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "broadcast" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    방송
                  </button>
                  <button
                    onClick={() => setPerformanceSub("concert")}
                    className={`flex-1 min-w-[65px] py-1 text-[11px] font-score rounded-xs tracking-tight transition-all cursor-pointer ${
                      performanceSub === "concert" ? "bg-white text-[#f37022] font-semibold shadow-xs" : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    공연
                  </button>
                </>
              )}
            </div>
          )}

          <div className="max-h-[280px] overflow-y-auto pr-2 divide-y divide-neutral-100 text-left">
            {(() => {
              let currentItems = getAlbumItems();
              if (coachId === "gunwoo") {
                if (performanceSub === "concert") currentItems = getConcertItems();
              } else if (coachId === "jihyun") {
                currentItems = getCareerItems();
              } else {
                if (performanceSub === "chorus") currentItems = getChorusItems();
                else if (performanceSub === "broadcast") currentItems = getBroadcastItems();
                else if (performanceSub === "concert") currentItems = getConcertItems();
              }

              return currentItems.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-start gap-3 group animate-fadeIn">
                  <span className="text-[9.5px] font-mono text-zinc-300 group-hover:text-[#f37022] transition-colors mt-[3px] shrink-0 font-bold font-sans">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <div className="space-y-0.5 text-left">
                    <p className="text-[13px] text-zinc-800 font-sans font-semibold leading-relaxed break-keep text-left">
                      {item.title}
                    </p>
                    <span className="inline-block text-[9px] font-mono text-neutral-400 font-medium tracking-tight uppercase">
                      [{item.type}]
                    </span>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {/* 4. Placement Summary */}
      {activeSubTab === "pass" && (
        <div className="space-y-4 animate-fadeIn text-left">
          {/* Subtitle Card */}
          <div className="relative py-3.5 px-4 bg-gradient-to-r from-[#f37022]/8 to-transparent border-l-2 border-[#f37022] rounded-r-xs select-none">
            <p className="text-[13px] text-zinc-800 font-sans font-semibold tracking-tight break-keep flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
              <span>막연했던 데뷔와 합격의 꿈을</span> 
              <span className="text-[#f37022] font-bold inline-flex items-center gap-1">
                원앤온리보이스가 현실로 증명해냅니다.
                <Sparkles className="w-3.5 h-3.5 text-[#f37022] animate-pulse shrink-0" />
              </span>
            </p>
          </div>

          {/* Dual Column Layout */}
          {coachId === "gunwoo" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Card: Auditions & Special Placements */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xs border border-neutral-100 bg-neutral-50/20 hover:bg-white hover:border-[#f37022]/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-2 select-none">
                    <span className="inline-block text-[9.5px] font-score bg-[#f37022]/10 text-[#f37022]/90 group-hover:bg-[#f37022] group-hover:text-white px-2 py-0.5 rounded-sm font-semibold tracking-tight uppercase transition-colors duration-300">
                      오디션 & 데뷔
                    </span>
                  </div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-score tracking-tight text-zinc-800 mb-3 select-none">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#f37022] font-black text-[16.5px] tracking-tighter">프리미엄</span>
                      <span className="font-bold text-zinc-800 group-hover:text-[#f37022] transition-colors duration-300">합격 및 데뷔조 배출</span>
                    </div>
                  </h4>
                  
                  <div className="space-y-2 my-4">
                    {[
                      { text: "버추얼 아이돌 데뷔조 배출", type: "VIRTUAL IDOL" },
                      { text: "EMK뮤지컬 컴퍼니 아역 합격생 배출", type: "MUSICAL" },
                      { text: "YG엔터테인먼트 1차 합격생 배출", type: "YG ENT" },
                      { text: "FNC엔터테인먼트 최종 합격생 배출", type: "FNC ENT" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2.5 bg-white border border-neutral-100 rounded-xs hover:border-[#f37022]/20 transition-all duration-200">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f37022] shrink-0" />
                          <p className="text-[12px] font-sans font-semibold text-zinc-800 tracking-tight">
                            {item.text}
                          </p>
                        </div>
                        <span className="text-[8.5px] font-mono text-zinc-400 font-bold tracking-tight uppercase shrink-0">
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-100/60 select-none">
                  <span className="text-[11px] text-zinc-400 font-sans font-medium group-hover:text-zinc-500 transition-colors duration-300">
                    전담 트레이닝을 통한 최종 및 1차 합격 성과
                  </span>
                </div>
              </motion.div>

              {/* Right Card: College Admissions */}
              <motion.div 
                whileHover={{ y: -3, scale: 1.005 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-4 rounded-xs border border-neutral-100 bg-neutral-50/20 hover:bg-white hover:border-[#f37022]/20 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-2 select-none">
                    <span className="inline-block text-[9.5px] font-score bg-zinc-100 text-zinc-650 group-hover:bg-zinc-800 group-hover:text-white px-2 py-0.5 rounded-sm font-semibold tracking-tight uppercase transition-colors duration-300">
                      대학 입시
                    </span>
                  </div>
                  <h4 className="text-[14px] sm:text-[14.5px] font-score tracking-tight text-zinc-800 mb-3 select-none">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[#f37022] font-black text-[16.5px] tracking-tighter">다수 명문대</span>
                      <span className="font-bold text-zinc-800 group-hover:text-[#f37022]/90 transition-colors duration-300">합격생 배출</span>
                    </div>
                  </h4>
                  
                  <div className="flex flex-wrap gap-2.5 my-4">
                    {["동아방송대", "여주대", "백석예대", "백제예대"].map((uni, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-[11px] font-sans font-semibold text-zinc-700 bg-white border border-neutral-100/80 px-3 py-1.5 rounded-xs hover:text-[#f37022] hover:border-[#f37022]/30 hover:scale-[1.04] hover:shadow-2xs active:scale-95 transition-all duration-200"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>

                  <p className="text-[12px] text-zinc-500 font-sans font-medium bg-white/40 p-3 border border-dashed border-neutral-200/50 rounded-xs leading-relaxed break-keep mt-2">
                    🔊 동아방송대, 여주대, 백석예대, 백제예대 등 주요 실용음악 대학 가창 전공 합격 신화
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100/60 select-none">
                  <span className="text-[11px] text-zinc-400 font-sans font-medium group-hover:text-zinc-500 transition-colors duration-300">
                    등 다수의 대학 실용음악 & K-POP과 합격생 배출
                  </span>
                </div>
              </motion.div>
            </div>
          ) : (
            (() => {
              const entLabels = getEntLabels();
              const uniLabels = getUniLabels();

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Card: Entertainment Companies (Auditions) */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    className="p-5 rounded-md border border-neutral-100/90 bg-neutral-50/15 hover:bg-white hover:border-[#f37022]/15 hover:shadow-2xs transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block text-[9.5px] font-score bg-[#f37022]/10 text-[#f37022]/90 group-hover:bg-[#f37022] group-hover:text-white px-2.5 py-0.5 rounded-sm font-semibold tracking-tight uppercase transition-colors duration-300 select-none">
                          오디션
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 font-medium">AUDITIONS</span>
                      </div>
                      <h4 className="text-[14px] sm:text-[14.5px] font-score tracking-tight text-zinc-800 mb-3 select-none">
                        <div className="flex items-baseline gap-1">
                          <span>국내 및 글로벌</span>
                          <span className="text-[#f37022] font-black text-[16.5px] tracking-tighter">{coachId === "hyunji" ? "24개+" : "다수"}</span>
                          <span className="font-bold text-zinc-800 group-hover:text-[#f37022] transition-colors duration-300">엔터테인먼트 합격</span>
                        </div>
                      </h4>
                      
                      {/* Premium Horizontal Rows Container */}
                      <div className={`space-y-1.5 my-3.5 overflow-y-auto pr-1 transition-all duration-300 scrollbar-thin ${
                        showAllEntPasses ? "max-h-[380px]" : "max-h-[330px]"
                      }`}>
                        {(showAllEntPasses ? entLabels : entLabels.slice(0, 8)).map((ent, idx) => {
                          const isFinal = ent.result.includes("최종");
                          return (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2.5 bg-white hover:bg-neutral-50/40 border border-neutral-100 rounded-xs select-none transition-all duration-200 gap-3 hover:border-neutral-200 hover:shadow-2xs"
                            >
                              <div className="flex items-center gap-2 max-w-[60%] shrink-0">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isFinal ? "bg-[#f37022]/60" : "bg-neutral-250"}`} />
                                <span className="text-[12px] font-sans font-semibold text-zinc-700 tracking-tight truncate">
                                  {ent.name}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1 justify-end items-center">
                                {ent.result.split("/").map((resItem) => resItem.trim()).map((res, rIdx) => {
                                  const isResHighlight = res.includes("최종") || res.includes("수석");
                                  return (
                                    <span 
                                      key={rIdx} 
                                      className={`text-[9px] font-sans px-1.5 py-0.5 rounded-xs font-semibold tracking-tight shrink-0 transition-colors border ${
                                        isResHighlight
                                          ? "bg-[#f37022]/4 border-[#f37022]/10 text-[#f37022]/95" 
                                          : "bg-neutral-50/85 border-neutral-150 text-zinc-500/90"
                                      }`}
                                    >
                                      {res}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {entLabels.length > 8 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllEntPasses(!showAllEntPasses);
                          }}
                          className="w-full mt-2.5 py-1.5 text-center text-[10.5px] font-score font-semibold text-[#f37022] border border-[#f37022]/15 hover:border-[#f37022]/30 bg-[#f37022]/5 hover:bg-[#f37022]/10 active:scale-95 rounded-xs transition-colors duration-200 cursor-pointer"
                        >
                          {showAllEntPasses ? "합격 리스트 접기 ▲" : "합격 리스트 더 보기 ▼"}
                        </button>
                      )}
                    </div>
                    <div className="pt-2 mt-3.5 border-t border-neutral-100/60 select-none">
                      <span className="text-[11.5px] text-zinc-500 font-sans font-medium transition-colors duration-300">
                        전담 트레이닝을 통한 1,2,3차 및 최종합격 성과
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Card: College Admissions */}
                  <motion.div 
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 450, damping: 25 }}
                    className="p-5 rounded-md border border-neutral-100/90 bg-neutral-50/15 hover:bg-white hover:border-[#f37022]/15 hover:shadow-2xs transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block text-[9.5px] font-score bg-zinc-100 text-zinc-650 group-hover:bg-zinc-850 group-hover:text-white px-2 py-0.5 rounded-sm font-semibold tracking-tight uppercase transition-colors duration-300 select-none">
                          대학 입시
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 font-medium">ADMISSIONS</span>
                      </div>
                      <h4 className="text-[14px] sm:text-[14.5px] font-score tracking-tight text-zinc-800 mb-3 select-none">
                        <div className="flex items-baseline gap-1">
                          <span>주요 대학교</span>
                          <span className="text-[#f37022] font-black text-[16.5px] tracking-tighter">{coachId === "hyunji" ? "21개+" : "다수"}</span>
                          <span className="font-bold text-zinc-800 group-hover:text-[#f37022]/90 transition-colors duration-300">실용음악 합격</span>
                        </div>
                      </h4>

                      {/* Premium Horizontal Rows Container */}
                      <div className={`space-y-1.5 my-3.5 overflow-y-auto pr-1 transition-all duration-300 scrollbar-thin ${
                        showAllUniPasses ? "max-h-[380px]" : "max-h-[330px]"
                      }`}>
                        {(showAllUniPasses ? uniLabels : uniLabels.slice(0, 8)).map((uni, idx) => {
                          const isFinal = uni.dept.includes("최종") || uni.dept.includes("수석");
                          return (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2.5 bg-white hover:bg-neutral-50/40 border border-neutral-100 rounded-xs select-none transition-all duration-200 gap-3 hover:border-neutral-200 hover:shadow-2xs"
                            >
                              <div className="flex items-center gap-2 max-w-[60%] shrink-0">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isFinal ? "bg-[#f37022]/60" : "bg-neutral-250"}`} />
                                <span className="text-[12px] font-sans font-semibold text-zinc-700 tracking-tight truncate">
                                  {uni.name}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1 justify-end items-center">
                                {uni.dept.split("/").map((deptItem) => deptItem.trim()).map((res, rIdx) => {
                                  const isResHighlight = res.includes("최종") || res.includes("수석");
                                  return (
                                    <span 
                                      key={rIdx} 
                                      className={`text-[9px] font-sans px-1.5 py-0.5 rounded-xs font-semibold tracking-tight shrink-0 transition-colors border ${
                                        isResHighlight
                                          ? "bg-[#f37022]/4 border-[#f37022]/10 text-[#f37022]/95" 
                                          : "bg-neutral-50/85 border-neutral-150 text-zinc-500/90"
                                      }`}
                                    >
                                      {res}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {uniLabels.length > 8 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllUniPasses(!showAllUniPasses);
                          }}
                          className="w-full mt-2.5 py-1.5 text-center text-[10.5px] font-score font-semibold text-[#f37022] border border-[#f37022]/15 hover:border-[#f37022]/30 bg-[#f37022]/5 hover:bg-[#f37022]/10 active:scale-95 rounded-xs transition-colors duration-200 cursor-pointer"
                        >
                          {showAllUniPasses ? "합격 리스트 접기 ▲" : "합격 리스트 더 보기 ▼"}
                        </button>
                      )}
                    </div>
                    <div className="pt-2 mt-3.5 border-t border-neutral-100/60 select-none">
                      <span className="text-[11.5px] text-zinc-500 font-sans font-medium transition-colors duration-300">
                        다수의 대학 실용음악 & K-POP학과 합격생 배출
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })()
          )}
        </div>
      )}
    </div>
  );
};
export const CoachesSection = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  // Application Form States
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantTrack, setApplicantTrack] = useState("vocal"); // vocal, speech, director
  const [applicantBio, setApplicantBio] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCoach || showApplyModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCoach, showApplyModal]);

  const checkButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      
      // Calculate taking into account the extra "Who's Next" item
      setCanScrollRight(scrollLeft < (scrollWidth - clientWidth - 15));
      
      const denominator = scrollWidth - clientWidth;
      const progress = denominator > 0 ? (scrollLeft / denominator) * 100 : 0;
      setScrollProgress(progress);

      // Synchronize active dot pagination index (4 columns total in the carousel)
      const oneItemWidth = scrollWidth / 4;
      const currentDot = Math.min(3, Math.max(0, Math.round(scrollLeft / oneItemWidth)));
      setActiveDot(currentDot);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkButtons);
      // Let content load first
      const timer = setTimeout(checkButtons, 300);
      return () => {
        el.removeEventListener("scroll", checkButtons);
        clearTimeout(timer);
      };
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollOffset = clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth"
      });
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone || !applicantEmail) {
      alert("필수 입력 항목을 작성해주세요.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetApplyForm = () => {
    setApplicantName("");
    setApplicantPhone("");
    setApplicantEmail("");
    setApplicantTrack("vocal");
    setApplicantBio("");
    setAudioUrl("");
    setIsSubmitted(false);
    setShowApplyModal(false);
  };

  return (
    <section ref={sectionRef} id="coaches" className="py-24 md:py-36 bg-white border-t border-black/5 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-neutral-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Left Description & Right Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4 max-w-xl">
            <span className="section-label text-xs tracking-[0.2em] font-bold text-[#f37022] uppercase">Coaching Staff</span>
            <div className="flex flex-col gap-1.5 sm:gap-2.5 select-none text-left tracking-tight">
              <div className="flex flex-wrap items-baseline leading-[1.05]">
                <span className="font-dm-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-[0.25em] inline-block text-[#121212]">Meet</span>
                <span className="font-dm-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block text-[#121212]">Our</span>
              </div>
              <div className="flex flex-wrap items-baseline leading-[1.05]">
                <span className="font-signature text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-[0.22em] inline-block font-normal text-[#121212]">Expert</span>
                <span className="font-dm-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block text-[#121212]">Coaches</span>
              </div>
            </div>
            <p className="font-sans text-neutral-500 text-sm sm:text-[14.5px] leading-relaxed tracking-normal font-medium mt-5 whitespace-pre-line break-keep">
              지식의 깊이에 안주하지 않고, 한 사람의 목소리를 섬세하게 듣고 분석합니다.{"\n"}
              가장 당신다운 보컬의 방향을 함께 설계하는 곳, 원앤온리보이스입니다.
            </p>
          </div>

          {/* Luxury Slider Navigation Controls & Current Count */}
          <div className="flex items-center gap-6 self-end md:self-auto">
            {/* Minimalist Progress Meter */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#1a1a1a]">01</span>
              <div className="w-16 h-[2px] bg-neutral-100 rounded-full relative overflow-hidden">
                <div 
                  className="absolute h-full bg-[#f37022] left-0 top-0 transition-all duration-300 ease-out"
                  style={{ width: `${Math.max(12, scrollProgress)}%` }}
                />
              </div>
              <span className="font-mono text-xs text-neutral-400">
                {String(COACHES_DATA.length + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Premium minimalist arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft 
                    ? "hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white cursor-pointer text-neutral-800 shadow-sm" 
                    : "opacity-35 cursor-default text-neutral-300"
                }`}
                aria-label="이전 코치"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center transition-all duration-300 ${
                  canScrollRight 
                    ? "hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white cursor-pointer text-neutral-800 shadow-sm" 
                    : "opacity-35 cursor-default text-neutral-300"
                }`}
                aria-label="다음 코치"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Row (Coaches + Who's Next) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-10 select-none scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
          onScroll={checkButtons}
        >
          {/* Coach Cards */}
          {COACHES_DATA.map((coach, index) => (
            <div
              key={coach.id}
              onClick={() => setSelectedCoach(coach)}
              className="group cursor-pointer flex flex-col justify-between w-[72vw] sm:w-[45vw] md:w-[30vw] shrink-0 snap-align-start relative"
              id={`coach-card-${coach.id}`}
            >
              {/* Premium Card Frame */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md border border-neutral-100 group-hover:border-black/5 group-hover:shadow-2xl transition-all duration-300 ease-out bg-neutral-900">
                {/* Arrow Icon Indicator overlay on hover */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-white/40 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-[#f37022] group-hover:-rotate-45 group-hover:text-white transition-all duration-300 ease-out shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Ultra High Fashion Portrait (Default Grayscale, Color on Hover + Premium dynamic zoom) */}
                <img
                  src={coach.image}
                  alt={coach.nameEn}
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.98] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.04] transition-all duration-300 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Luxury Interactive Light Vignette Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Spacing & Typography Details */}
              <div className="mt-5 space-y-1 pl-1">
                {/* 1. Small Mono Role */}
                <p className="text-[12px] sm:text-[13px] font-sans font-medium text-[#f37022] uppercase tracking-tight transition-all duration-300">
                  {coach.role}
                </p>
                {/* 2. Large modern bold Name with bilingual arrangement */}
                <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[#1a1a1a] leading-none group-hover:text-[#f37022] transition-colors duration-300 flex items-baseline justify-between">
                  <span>{coach.nameKr}</span>
                  <span className="text-[11px] md:text-xs font-mono font-light tracking-[0.16em] text-neutral-400 uppercase">
                    {coach.nameEn.split(" ")[0]}
                  </span>
                </h3>
                <p className="text-[12px] text-neutral-400 font-light font-score line-clamp-1 border-t border-neutral-100 pt-1.5 mt-1.5">
                  {coach.subRole}
                </p>

              </div>
            </div>
          ))}

          {/* Dedicated "Who's Next?" Audition Card */}
          <div
            onClick={() => setShowApplyModal(true)}
            className="group cursor-pointer flex flex-col justify-between w-[72vw] sm:w-[45vw] md:w-[30vw] shrink-0 snap-align-start"
            id="coach-card-whosnext"
          >
            {/* Elegant luxury visual layout for Join Staff */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg shadow-md border border-neutral-800 group-hover:border-[#f37022]/50 transition-all duration-500 ease-out p-8 flex flex-col justify-between">
              
              {/* Dynamic Aura Ring Blur back in background */}
              <div className="absolute w-56 h-56 rounded-full bg-[#f37022]/15 blur-[55px] -bottom-12 -right-12 group-hover:bg-[#f37022]/25 group-hover:scale-110 transition-all duration-1000 pointer-events-none" />
              <div className="absolute w-32 h-32 rounded-full bg-white/5 blur-[40px] -top-10 -left-10 pointer-events-none" />

              {/* Upper Section */}
              <div className="flex items-center justify-between w-full relative z-10">
                <span className="font-mono text-[10px] text-neutral-400 tracking-[0.2em] uppercase">
                  BE ONE & ONLY
                </span>
                <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:border-[#f37022] group-hover:bg-[#f37022] group-hover:text-white transition-all duration-500">
                  <span className="font-sans text-sm font-bold">+</span>
                </div>
              </div>

              {/* Middle Section with interactive wave icon */}
              <div className="space-y-4 my-auto relative z-10 py-6">
                <div className="w-14 h-14 rounded-full border border-neutral-700/60 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-[#f37022] transition-transform duration-500 shadow-lg">
                  <Sparkles className="w-5 h-5 text-neutral-400 group-hover:text-[#f37022] transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white group-hover:text-[#f37022] transition-colors duration-300">
                    WHO'S NEXT?
                  </h3>
                  <p className="font-score font-light text-[12px] sm:text-xs text-neutral-400 leading-relaxed max-w-[210px] break-keep">
                    원앤온리의 혁신적인 보이스 브랜딩 솔루션을 함께 이끌어갈 차세대 수석 코치진을 찾습니다.
                  </p>
                </div>
              </div>

              {/* Bottom section with Apply Badge */}
              <div className="relative z-10 w-fit">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.18rem] text-[#f37022] font-semibold border-b border-[#f37022]/35 pb-[3px] group-hover:border-[#f37022] transition-all">
                  APPLY TO STAFF
                </span>
              </div>
            </div>

            {/* Typography footer */}
            <div className="mt-5 space-y-1 pl-1">
              <p className="text-[12px] sm:text-[13px] font-sans font-medium text-neutral-400 uppercase tracking-tight">
                Staff Recruiting
              </p>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[#1a1a1a] leading-none group-hover:text-[#f37022] transition-colors duration-300 flex items-baseline justify-between">
                <span>지원하기</span>
                <span className="text-[11px] font-mono font-medium tracking-[0.16em] text-[#f37022] uppercase">
                  Recruit
                </span>
              </h3>
              <p className="text-[12px] text-neutral-400 font-light font-score line-clamp-1 border-t border-neutral-100 pt-1.5 mt-1.5">
                당신의 유니크한 음성 공학 철학으로 가치를 펼치세요
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Indicators & Pagination Dots (Only visible on mobile) */}
        <div className="flex flex-col items-center gap-3 mt-6 md:hidden">
          {/* Subtle Swipe Guide */}
          <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-sans font-medium tracking-wider select-none animate-pulse">
            <span>옆으로 밀어 더보기</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#f37022]" />
          </div>
          
          {/* Elegant active line/dots design */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const el = scrollContainerRef.current;
                    const oneItemWidth = el.scrollWidth / 4;
                    el.scrollTo({
                      left: dotIndex * oneItemWidth,
                      behavior: "smooth"
                    });
                  }
                }}
                className={`h-1 py-0 px-0 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                  activeDot === dotIndex 
                    ? "w-6 bg-[#f37022]" 
                    : "w-2 bg-neutral-200"
                }`}
                aria-label={`${dotIndex + 1}번 코치 보기`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Elegant, Editorial Light Canvas Modal Overview (Coach Detail Profile) */}
      <AnimatePresence>
        {selectedCoach && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 overflow-y-scroll bg-white/99 backdrop-blur-md"
            onClick={() => setSelectedCoach(null)}
          >
            {/* Top Fixed Control Bar */}
            <div className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex justify-between items-center w-full">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em] text-[#f37022] font-semibold">
                ONEONLY PROFILE CURATION
              </span>
              <button
                onClick={() => setSelectedCoach(null)}
                className="p-2 text-stone-500 hover:text-[#f37022] hover:bg-stone-50 rounded-full transition-all duration-300 group shadow-sm border border-neutral-200/50 bg-white cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Main Scrollable Content Wrapper */}
            <div 
              className="w-full max-w-[1100px] mx-auto px-6 sm:px-12 pt-12 sm:pt-16 pb-32"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* 1. UPPER SECTION: English Name and Portrait */}
              <div className="relative w-full flex flex-col items-center pt-10 sm:pt-14 mb-14 sm:mb-20">
                
                {/* English Name - Placed directly above the photo, always in a single line, never goes behind the picture */}
                <div className="w-full text-center -mb-1 sm:-mb-2 md:-mb-3 select-none pointer-events-none z-10">
                  <span className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] font-sans font-black text-neutral-950 leading-none select-none uppercase tracking-tighter antialiased block whitespace-nowrap">
                    {selectedCoach.nameEn.toUpperCase()}
                  </span>
                </div>

                {/* Portrait Picture Container */}
                <div className="relative z-10 w-[260px] sm:w-[310px] md:w-[360px] aspect-[4/5] overflow-hidden rounded-md shadow-2xl border border-neutral-200/10 bg-neutral-100">
                  <img
                    src={selectedCoach.image}
                    alt={selectedCoach.nameKr}
                    className="w-full h-full object-cover filter grayscale contrast-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft bottom shading to merge dynamically */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 2. SUB-HERO INFO ROW: Korean Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end pb-8 border-b border-neutral-200 mb-12">
                
                {/* Left side: Role & SubRole */}
                <div className="text-left space-y-1.5 order-2 md:order-1">
                  <span className="inline-block text-[10px] sm:text-[11px] font-mono tracking-widest text-[#f37022] uppercase bg-[#f37022]/10 px-2.5 py-0.5 rounded-sm">
                    {selectedCoach.role}
                  </span>
                  <p className="font-score font-light text-neutral-400 text-sm sm:text-base uppercase tracking-tight">
                    {selectedCoach.subRole}
                  </p>
                </div>

                {/* Right side: Korean Name */}
                <div className="text-left md:text-right order-1 md:order-2">
                  <h4 className="font-score text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] font-bold leading-none tracking-tight">
                    {selectedCoach.nameKr}
                  </h4>
                  <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-2">
                    ID: {selectedCoach.id.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* 3. DUAL-COLUMN EDITORIAL COPY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 mb-16">
                
                {/* Column 1 */}
                <div className="space-y-6">
                  <CoachResume coachId={selectedCoach.id} />
                </div>

                {/* Column 2 */}
                <div className="flex flex-col justify-between space-y-10">
                  <div className="space-y-6 text-left">
                    <div className="relative pl-5 py-5 border-l-[3px] border-[#f37022] bg-[#f37022]/4 rounded-r-md">
                      <p 
                        className="font-sans text-[15px] sm:text-[17px] text-zinc-800 font-medium leading-relaxed tracking-tight text-left break-keep antialiased whitespace-pre-line animate-fadeIn"
                      >
                        {selectedCoach.id === "hyunji" ? (
                          `“모든 이의 목소리에는 각자만의 아름다움이 있다.
                          누구처럼이 아니라, ‘나’를 찾아드립니다.”`
                        ) : selectedCoach.id === "gunwoo" ? (
                          `“Singing Better : 더 나은 노래는 보컬의 원리를 이해함에서 시작된다!”`
                        ) : (
                          `“한 소절에도 이유가 있는 디렉팅, 트렌디한 스타일링을 완성합니다.”`
                        )}
                      </p>
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#f37022] mt-4 block text-left font-extrabold font-semibold">
                        {selectedCoach.id === "hyunji" ? (
                          "— FOUNDER & CREATIVE DIRECTOR HYUNJI"
                        ) : selectedCoach.id === "gunwoo" ? (
                          "— HEAD VOCAL COACH GUNWOO"
                        ) : (
                          "— HEAD VOCAL DIRECTOR JIHYUN"
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Clean Specialty Tag Grid */}
                  <div className="pt-8 border-t border-neutral-100">
                    <p className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#f37022] fill-[#f37022]/10 animate-pulse" /> SPECIALIST KEY SKILLS (핵심 강점 & 스킬)
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedCoach.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[12px] font-sans font-semibold px-4 py-1.5 rounded-full bg-orange-50/80 border border-[#f37022]/20 text-[#f37022] tracking-wide shadow-xs hover:bg-[#f37022] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
                        >
                          ✦ {spec}
                        </span>
                      ))}
                    </div>

                    {/* Smooth Instagram Link Embedding */}
                    <div className="mt-8 flex items-center gap-3">
                      <a
                        href={`https://instagram.com/${selectedCoach.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-sans tracking-widest font-semibold text-[#1a1a1a] hover:text-[#f37022] transition-colors uppercase border border-neutral-200 rounded-full px-5 py-2 hover:bg-neutral-50"
                      >
                        <Instagram className="w-4 h-4 text-[#f37022]" />
                        <span>@{selectedCoach.instagram}</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* 4. BOTTOM ACTION CONTROL */}
              <div className="pt-16 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-mono text-neutral-400 font-medium">
                    DESIGNED BY ONEONLY VOCAL BRANDING LAB
                  </p>
                  <p className="text-[11px] font-sans text-neutral-300 mt-1">All editorial portraits and materials are copyrighted. Private & Personal property.</p>
                </div>
                <button
                  onClick={() => setSelectedCoach(null)}
                  className="group px-8 py-3.5 rounded-sm bg-[#1a1a1a] text-white hover:bg-[#f37022] font-score font-medium text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md flex items-center gap-2.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>Return to Coaches Overview</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grand Private Audition Modal ("Who's Next?") */}
      <AnimatePresence>
        {showApplyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={resetApplyForm}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-lg shadow-2xl border border-neutral-100 w-full max-w-2xl overflow-hidden text-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header banner */}
              <div className="bg-neutral-950 px-6 py-8 text-white relative overflow-hidden">
                {/* Aura glowing spot */}
                <div className="absolute w-44 h-44 rounded-full bg-[#f37022]/20 blur-[45px] -bottom-10 right-10 pointer-events-none" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#f37022] uppercase font-bold">Recruiting Opportunity</span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight">ONEONLY STAFF AUDITION</h3>
                    <p className="font-score text-[12px] sm:text-xs text-neutral-400 font-light max-w-md break-keep">
                      최고의 가치와 브랜드를 창출하는 원앤온리와 함께 세상에 새로운 목소리를 설계해보십시오.
                    </p>
                  </div>
                  <button
                    onClick={resetApplyForm}
                    className="p-1.5 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Form Content / Submission Display */}
              <div className="p-6 sm:p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleApplySubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-neutral-700 tracking-tight">
                          성명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="실명을 입력해주세요"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight transition-colors"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-neutral-700 tracking-tight">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010-0000-0000"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-neutral-700 tracking-tight">
                          이메일 주소 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="example@email.com"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight transition-colors"
                        />
                      </div>

                      {/* Coaching Tracks */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-neutral-700 tracking-tight">
                          희망 지원 분야 <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={applicantTrack}
                          onChange={(e) => setApplicantTrack(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight transition-colors cursor-pointer"
                        >
                          <option value="vocal">보컬 스펙 스페셜리스트 코치</option>
                          <option value="speech">어쿠스틱 스피치 마스터 코치</option>
                          <option value="director">비주얼 브랜드 오라 디렉터</option>
                          <option value="collab">기타 비즈니스 및 지부 제휴</option>
                        </select>
                      </div>
                    </div>

                    {/* Audio link (Optional) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-700 tracking-tight flex items-center justify-between">
                        <span>프로필 또는 목소리 업로드 링크 (선택)</span>
                        <span className="font-mono text-[10px] text-neutral-400">Drive / YouTube / SoundCloud 등</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
                          <FileAudio className="w-4 h-4" />
                        </span>
                        <input
                          type="url"
                          placeholder="https://drive.google.com/..."
                          value={audioUrl}
                          onChange={(e) => setAudioUrl(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight transition-colors"
                        />
                      </div>
                    </div>

                    {/* Biography / Pitch */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-700 tracking-tight">
                        간단한 소개 및 포부 (선택)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="자신의 가치관과 목소리 설계 능력을 설명해주세요."
                        value={applicantBio}
                        onChange={(e) => setApplicantBio(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-sm border border-neutral-200 focus:outline-none focus:border-[#f37022] text-sm tracking-tight resize-none transition-colors"
                      />
                    </div>

                    {/* Audition guidelines agreement */}
                    <div className="bg-neutral-50 p-3.5 rounded border border-neutral-100 text-[11px] text-neutral-500 leading-relaxed font-score">
                      원앤온리 보이스 마스터 스튜디오는 최상위 브랜딩 서비스 질 향상을 위해 철저한 서류 검토 및 1:1 오프라인 심사 음성 진단을 거쳐 소수의 엘리트 파트너십 스태프를 수시 초빙합니다. 입력 정보는 오디션 전형으로만 활용되고 법적으로 보호됩니다.
                    </div>

                    {/* Form submissions button */}
                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={resetApplyForm}
                        className="px-5 py-2.5 rounded border border-neutral-200 text-neutral-500 text-xs tracking-wider uppercase hover:bg-neutral-50 transition-colors font-medium cursor-pointer"
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 bg-neutral-950 font-score font-semibold text-xs tracking-wider text-white uppercase rounded hover:bg-[#f37022] transition-colors flex items-center gap-2 hover:scale-[1.01] active:scale-95 disabled:bg-neutral-300 disabled:cursor-not-allowed cursor-pointer shadow-md"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>제출 프로세싱...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>지원서 공식 제출</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f37022]/10 flex items-center justify-center text-[#f37022] shadow-sm animate-pulse">
                      <Check className="w-7 h-7 stroke-[3px]" />
                    </div>
                    
                    <div className="space-y-2.5">
                      <h4 className="font-sans text-xl font-bold tracking-tight text-neutral-900">
                        AUDITION APPLICATION SUBMITTED
                      </h4>
                      <p className="font-score text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto font-light">
                        <strong className="text-neutral-900 font-semibold">{applicantName}</strong>님의 소중한 파트너십 지원서가 등록되었습니다. 기품 있는 첫 단추처럼, 사운드 랩 담당자가 직접 검토하여 7일 이내에 프라이빗 연락처로 안내전화를 제공하겠습니다.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={resetApplyForm}
                        className="px-8 py-3.5 bg-neutral-900 hover:bg-[#f37022] font-score font-semibold text-xs text-white tracking-widest uppercase rounded shadow-md hover:scale-[1.01] transition-transform cursor-pointer"
                      >
                        확인 및 돌아가기
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
