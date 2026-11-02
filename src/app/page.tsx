"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
  color: string;
}

interface QuickLink {
  title: string;
  description: string;
  tag: string;
  url: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
}

const stats = [
  { label: "SHIPPED PROJECTS", value: "28+", bg: "bg-amber-300" },
  { label: "GITHUB COMMITS", value: "1.4K+", bg: "bg-emerald-300" },
  { label: "YEARS EXP", value: "3+ YRS", bg: "bg-sky-300" },
  { label: "COFFEE FUEL", value: "999+", bg: "bg-pink-300" },
];

const techArsenal = [
  { name: "Next.js 16", tag: "CORE", bg: "bg-black text-white" },
  { name: "React 19", tag: "UI", bg: "bg-cyan-300 text-black" },
  { name: "TypeScript", tag: "LANG", bg: "bg-blue-400 text-white" },
  { name: "Tailwind CSS", tag: "STYLE", bg: "bg-teal-300 text-black" },
  { name: "Node.js", tag: "BACKEND", bg: "bg-lime-400 text-black" },
  { name: "Supabase", tag: "DB", bg: "bg-emerald-300 text-black" },
  { name: "Vibe Coding ⚡", tag: "SUPERPOWER", bg: "bg-yellow-400 text-black font-black" },
  { name: "Claude & Gemini", tag: "AI PAIR", bg: "bg-violet-300 text-black" },
  { name: "Figma", tag: "DESIGN", bg: "bg-rose-300 text-black" },
  { name: "PostgreSQL", tag: "SQL", bg: "bg-sky-300 text-black" },
  { name: "Git & GitHub", tag: "DEV", bg: "bg-orange-300 text-black" },
  { name: "Cursor IDE", tag: "TOOL", bg: "bg-zinc-200 text-black" },
];

const links: QuickLink[] = [
  {
    title: "PORTFOLIO ARCHIVE",
    description: "인터랙티브 웹 프로젝트와 프로덕트 쇼케이스 전체보기",
    tag: "FEATURED ★",
    url: "https://github.com",
    icon: "🚀",
    bgColor: "bg-yellow-300",
    hoverColor: "hover:bg-yellow-200",
  },
  {
    title: "DEV LOG & INSIGHTS",
    description: "프론트엔드 최적화와 AI 바이브 코딩 실전 노하우 기록",
    tag: "NEW POSTS ✍️",
    url: "https://velog.io",
    icon: "📖",
    bgColor: "bg-emerald-300",
    hoverColor: "hover:bg-emerald-200",
  },
  {
    title: "GITHUB REPOSITORIES",
    description: "오픈소스 기여, 실험적인 토이 프로젝트 & 소스코드 저장소",
    tag: "1.4K+ COMMITS",
    url: "https://github.com",
    icon: "🐙",
    bgColor: "bg-sky-300",
    hoverColor: "hover:bg-sky-200",
  },
  {
    title: "BOOK A COFFEE CHAT",
    description: "가벼운 티타임, 협업 제안, 기술 수다는 언제든 환영합니다!",
    tag: "OPEN NOW ☕",
    url: "mailto:contact@example.com",
    icon: "💬",
    bgColor: "bg-pink-300",
    hoverColor: "hover:bg-pink-200",
  },
];

const projects: Project[] = [
  {
    title: "MYLINK PROTOCOL",
    tagline: "초고속 반응형 개인 브랜딩 & 인터랙티브 링크인바이오 허브",
    category: "WEB APP",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com",
    color: "bg-amber-300",
  },
  {
    title: "AI VIBE ASSISTANT",
    tagline: "실시간 음성과 텍스트로 아이디어를 기획서로 자동 완성하는 AI 도구",
    category: "AI PRODUCT",
    tags: ["React 19", "AI API", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com",
    color: "bg-purple-300",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [claps, setClaps] = useState(42);
  const [isClapping, setIsClapping] = useState(false);

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setIsClapping(true);
    setTimeout(() => setIsClapping(false), 300);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-black font-sans pb-16 selection:bg-black selection:text-yellow-300">
      
      {/* 1. 상단 무한 롤링 마퀴 (Marquee Bar) */}
      <div className="overflow-hidden border-b-4 border-black bg-yellow-300 py-2.5 font-mono text-xs sm:text-sm font-black tracking-wider uppercase">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="mx-4">✦ VIBE CODER</span>
          <span className="mx-4">✦ NEXT.JS & TYPESCRIPT SPECIALIST</span>
          <span className="mx-4">✦ AVAILABLE FOR FREELANCE & COLLAB</span>
          <span className="mx-4">✦ BUILDING HARD & FAST</span>
          <span className="mx-4">✦ NEOBRUTALISM EDITION 2026</span>
          <span className="mx-4">✦ OPEN FOR COFFEE CHAT ☕</span>
          <span className="mx-4">✦ VIBE CODER</span>
          <span className="mx-4">✦ NEXT.JS & TYPESCRIPT SPECIALIST</span>
          <span className="mx-4">✦ AVAILABLE FOR FREELANCE & COLLAB</span>
          <span className="mx-4">✦ BUILDING HARD & FAST</span>
          <span className="mx-4">✦ NEOBRUTALISM EDITION 2026</span>
          <span className="mx-4">✦ OPEN FOR COFFEE CHAT ☕</span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 sm:pt-12">

        {/* 2. 네오 브루탈리즘 OS 창 스타일 메인 프로필 박스 */}
        <section className="relative rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] overflow-hidden">
          
          {/* 레트로 창 타이틀 바 */}
          <div className="flex items-center justify-between border-b-4 border-black bg-cyan-300 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-black bg-rose-400 inline-block shadow-[1px_1px_0px_0px_#000]" />
              <span className="h-4 w-4 rounded-full border-2 border-black bg-amber-400 inline-block shadow-[1px_1px_0px_0px_#000]" />
              <span className="h-4 w-4 rounded-full border-2 border-black bg-emerald-400 inline-block shadow-[1px_1px_0px_0px_#000]" />
              <span className="ml-2 font-mono text-xs sm:text-sm font-black tracking-tight">
                USER_PROFILE://HONG_GILDONG.EXE
              </span>
            </div>

            {/* 링크 공유 버튼 */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-lg border-2 border-black bg-white px-3 py-1 font-mono text-xs font-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              {copied ? (
                <>
                  <span className="text-emerald-600">✓</span>
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <span>🔗</span>
                  <span>SHARE</span>
                </>
              )}
            </button>
          </div>

          {/* 배너 아트 영역 */}
          <div className="relative h-48 sm:h-60 w-full border-b-4 border-black overflow-hidden bg-emerald-300">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
              alt="Profile Cover Banner"
              fill
              priority
              className="object-cover mix-blend-multiply opacity-80"
            />
            {/* 배너 위 네오 브루탈리즘 스티커들 */}
            <div className="absolute top-4 left-4 rotate-[-3deg]">
              <span className="inline-block rounded-md border-3 border-black bg-yellow-300 px-3 py-1 font-mono text-xs sm:text-sm font-black shadow-[3px_3px_0px_0px_#000]">
                ⚡ VERIFIED VIBE CODER
              </span>
            </div>
            <div className="absolute top-4 right-4 rotate-[2deg] hidden sm:block">
              <span className="inline-block rounded-md border-3 border-black bg-pink-400 px-3 py-1 font-mono text-xs font-black text-white shadow-[3px_3px_0px_0px_#000]">
                ★ SEOUL, KR
              </span>
            </div>
          </div>

          {/* 프로필 정보 영역 */}
          <div className="p-5 sm:p-8">
            <div className="relative -mt-20 sm:-mt-24 flex flex-col sm:flex-row items-center sm:items-end gap-5">
              
              {/* 프로필 아바타 (두꺼운 테두리 + 하드 섀도우) */}
              <div className="relative group shrink-0">
                <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl border-4 border-black bg-yellow-300 p-1 shadow-[6px_6px_0px_0px_#000] overflow-hidden">
                  <div className="relative h-full w-full rounded-xl overflow-hidden border-2 border-black bg-white">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                      alt="홍길동"
                      fill
                      sizes="144px"
                      priority
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* 온라인 라이브 상태 스티커 */}
                <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-full border-2 border-black bg-lime-400 px-2.5 py-0.5 font-mono text-[11px] font-black shadow-[2px_2px_0px_0px_#000]">
                  <span className="h-2 w-2 rounded-full bg-black animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* 이름, 직함 & 응원 버튼 */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
                    홍길동
                  </h1>
                  <span className="rounded-md border-2 border-black bg-purple-300 px-2 py-0.5 font-mono text-xs font-black shadow-[2px_2px_0px_0px_#000]">
                    GILDONG HONG
                  </span>
                  <span className="rounded-md border-2 border-black bg-emerald-300 px-2.5 py-0.5 font-mono text-xs font-black shadow-[2px_2px_0px_0px_#000]">
                    COFFEECHAT: OK ☕
                  </span>
                </div>

                <div className="mt-2 inline-block rounded-lg border-2 border-black bg-yellow-300 px-3 py-1 font-mono text-sm font-black shadow-[3px_3px_0px_0px_#000]">
                  FRONTEND DEVELOPER & CREATIVE BUILDER
                </div>
              </div>

              {/* 박수/응원 인터랙티브 스탬프 버튼 */}
              <button
                onClick={handleClap}
                className={`group flex items-center gap-2 rounded-xl border-3 border-black bg-pink-400 px-4 py-2.5 font-mono text-xs font-black text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none ${
                  isClapping ? "scale-95 bg-pink-500" : ""
                }`}
                title="클릭해서 응원 보내기!"
              >
                <span className="text-lg transition-transform group-hover:rotate-12">👏</span>
                <span className="uppercase">VIBE BOOST</span>
                <span className="rounded-md border border-black bg-white px-2 py-0.5 font-mono text-xs font-black">
                  {claps}
                </span>
              </button>
            </div>

            {/* 포스트잇 메모장 스타일 자기소개 박스 */}
            <div className="mt-6 rounded-xl border-3 border-black bg-amber-100 p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center gap-2 font-mono text-xs font-black text-amber-900 uppercase">
                <span>📌</span>
                <span>MANIFESTO / ABOUT ME</span>
              </div>
              <p className="mt-2 font-medium leading-relaxed text-sm sm:text-base text-black">
                코드와 디자인의 경계를 허물며, <span className="bg-yellow-300 px-1 font-black border-b-2 border-black">아이디어를 직관적이고 강력한 현실 프로덕트</span>로 만듭니다. 복잡한 문제를 단순하게 정의하고, AI 도구와 모던 웹 스택을 융합한 <strong className="font-black underline decoration-pink-500 decoration-4">바이브 코딩(Vibe Coding)</strong>으로 세상에 없던 경험을 빠르게 배포합니다.
              </p>
            </div>

            {/* 3. 네오 브루탈리즘 핵심 수치 (Stats Grid) */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border-3 border-black p-3.5 text-center shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#000] ${stat.bg}`}
                >
                  <div className="text-2xl sm:text-3xl font-black tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] sm:text-xs font-black uppercase text-black/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. 메인 콘텐츠 2열 그리드: [바로가기 링크 컬렉션] vs [테크 아스널] */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* 왼쪽: 핵심 링크 목록 (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-pink-400 font-mono text-sm font-black shadow-[2px_2px_0px_0px_#000]">
                  ⚡
                </span>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  FEATURED LINKS
                </h2>
              </div>
              <span className="font-mono text-xs font-bold text-neutral-500">
                CLICK TO VISIT ↗
              </span>
            </div>

            <div className="space-y-3.5">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-xl border-3 border-black p-4 shadow-[5px_5px_0px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#000] ${link.bgColor} ${link.hoverColor}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-white text-xl shadow-[2px_2px_0px_0px_#000]">
                        {link.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-sm sm:text-base tracking-tight">
                            {link.title}
                          </h3>
                          <span className="rounded-md border border-black bg-black px-1.5 py-0.2 font-mono text-[10px] font-bold text-white">
                            {link.tag}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs font-semibold text-neutral-800 line-clamp-1">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] transition-transform group-hover:rotate-45">
                      <span className="font-mono text-base font-black">↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* 소셜 네트워크 빠른 링크 뱃지 */}
            <div className="rounded-xl border-3 border-black bg-white p-4 shadow-[4px_4px_0px_0px_#000]">
              <div className="font-mono text-xs font-black uppercase text-neutral-600 mb-3">
                🌐 CONNECT ON SOCIALS
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "GITHUB", icon: "🐙", url: "https://github.com", bg: "bg-slate-200" },
                  { name: "LINKEDIN", icon: "💼", url: "https://linkedin.com", bg: "bg-sky-200" },
                  { name: "X (TWITTER)", icon: "🐦", url: "https://x.com", bg: "bg-emerald-200" },
                  { name: "INSTAGRAM", icon: "📸", url: "https://instagram.com", bg: "bg-pink-200" },
                ].map((sns) => (
                  <a
                    key={sns.name}
                    href={sns.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg border-2 border-black px-3 py-1.5 font-mono text-xs font-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${sns.bg}`}
                  >
                    <span>{sns.icon}</span>
                    <span>{sns.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 기술 스택 & 문의 박스 (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 테크 아스널 블록 */}
            <div className="rounded-2xl border-4 border-black bg-white p-5 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-black bg-yellow-300 font-mono text-xs font-black shadow-[2px_2px_0px_0px_#000]">
                    🛠️
                  </span>
                  <h3 className="font-black text-base uppercase tracking-tight">
                    TECH ARSENAL
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5 rounded">
                  STACK 2026
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {techArsenal.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center gap-1.5 rounded-lg border-2 border-black px-2.5 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] ${tech.bg}`}
                  >
                    <span>{tech.name}</span>
                    <span className="opacity-70 text-[9px] uppercase font-mono">
                      #{tech.tag}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* 빠른 협업 문의 배너 (Hot Pink / Yellow 네오 브루탈 박스) */}
            <div className="rounded-2xl border-4 border-black bg-rose-300 p-5 shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-7xl opacity-30 select-none font-black pointer-events-none">
                ✉️
              </div>
              <div className="relative z-10">
                <span className="inline-block rounded-md border-2 border-black bg-white px-2 py-0.5 font-mono text-[11px] font-black shadow-[2px_2px_0px_0px_#000] mb-2">
                  GET IN TOUCH!
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  LET&apos;S BUILD SOMETHING AWESOME TOGETHER
                </h3>
                <p className="mt-1.5 font-medium text-xs leading-relaxed text-black/90">
                  사이드 프로젝트, 프리랜서 외주, 기술 협업, 가벼운 커피챗 무엇이든 편하게 보내주세요.
                </p>
                <a
                  href="mailto:contact@example.com"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border-3 border-black bg-yellow-300 px-4 py-2 font-mono text-xs font-black shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <span>SEND AN EMAIL</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 5. 대표 프로젝트 쇼케이스 (Neobrutalism Project Cards) */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-purple-400 font-mono text-sm font-black shadow-[2px_2px_0px_0px_#000]">
                📁
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                FEATURED BUILDS
              </h2>
            </div>
            <span className="font-mono text-xs font-bold bg-white border-2 border-black px-2.5 py-1 rounded-md shadow-[2px_2px_0px_0px_#000]">
              CASE STUDIES
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000]"
              >
                {/* 윈도우 창 헤더 */}
                <div className={`flex items-center justify-between border-b-3 border-black px-3.5 py-2 ${item.color}`}>
                  <span className="font-mono text-xs font-black">
                    {item.category}
                  </span>
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full border border-black bg-white" />
                    <span className="h-3 w-3 rounded-full border border-black bg-black" />
                  </div>
                </div>

                {/* 이미지 영역 */}
                <div className="relative h-48 w-full border-b-3 border-black bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 rounded-md border-2 border-black bg-yellow-300 px-2 py-0.5 font-mono text-[10px] font-black shadow-[2px_2px_0px_0px_#000]">
                    LIVE DEMO ↗
                  </div>
                </div>

                {/* 프로젝트 내용 본문 */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black tracking-tight uppercase group-hover:underline decoration-black decoration-2">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs font-medium leading-relaxed text-neutral-700">
                    {item.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t-2 border-black/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-black bg-neutral-100 px-2 py-0.5 font-mono text-[11px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 6. 레트로 네오 브루탈리즘 푸터 */}
        <footer className="mt-14 rounded-xl border-3 border-black bg-yellow-300 p-6 text-center shadow-[4px_4px_0px_0px_#000]">
          <div className="font-mono text-xs sm:text-sm font-black uppercase">
            ⚡ DESIGNED & BUILT WITH NEXT.JS, TAILWIND & VIBE CODING ⚡
          </div>
          <p className="mt-1 font-mono text-xs text-neutral-800">
            © 2026 HONG GILDONG. NO BORING DESIGNS ALLOWED.
          </p>
        </footer>

      </div>
    </div>
  );
}
