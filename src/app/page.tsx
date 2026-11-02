"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface QuickLink {
  title: string;
  subtitle: string;
  url: string;
  icon: string;
  highlight?: boolean;
}

const stats = [
  { label: "프로젝트", value: "24+" },
  { label: "코드 기여", value: "1.2k+" },
  { label: "경력", value: "3년+" },
  { label: "협업 만족도", value: "99%" },
];

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", color: "from-zinc-900 to-zinc-700 text-white dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900" },
      { name: "React", color: "from-cyan-500 to-blue-500 text-white" },
      { name: "TypeScript", color: "from-blue-600 to-indigo-600 text-white" },
      { name: "Tailwind CSS", color: "from-teal-400 to-emerald-500 text-white" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js", color: "from-emerald-600 to-green-600 text-white" },
      { name: "Supabase", color: "from-emerald-500 to-teal-600 text-white" },
      { name: "PostgreSQL", color: "from-sky-600 to-blue-700 text-white" },
    ],
  },
  {
    category: "AI & Tools",
    items: [
      { name: "Vibe Coding 🚀", color: "from-purple-500 to-pink-500 text-white" },
      { name: "Figma", color: "from-rose-500 to-amber-500 text-white" },
      { name: "Git & GitHub", color: "from-zinc-700 to-zinc-900 text-white" },
    ],
  },
];

const quickLinks: QuickLink[] = [
  {
    title: "✨ 포트폴리오 웹사이트",
    subtitle: "전체 프로젝트 및 인터랙티브 쇼케이스 둘러보기",
    url: "https://github.com",
    icon: "🌐",
    highlight: true,
  },
  {
    title: "📝 기술 블로그 (Tech Log)",
    subtitle: "개발 트러블슈팅과 바이브 코딩 인사이트 기록",
    url: "https://velog.io",
    icon: "✍️",
  },
  {
    title: "💻 GitHub 저장소",
    subtitle: "오픈소스 기여 및 개인 프로젝트 소스코드",
    url: "https://github.com",
    icon: "🐙",
  },
  {
    title: "☕ 30분 커피챗 신청하기",
    subtitle: "사이드 프로젝트 협업, 기술 교류 언제든 환영해요",
    url: "mailto:contact@example.com",
    icon: "💬",
  },
];

const featuredProjects: Project[] = [
  {
    title: "MyLink - 스마트 프로필 허브",
    description: "개인 브랜딩과 포트폴리오를 한 곳에 모은 반응형 링크 허브 서비스",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com",
  },
  {
    title: "AI 바이브 노트 (Vibe Notes)",
    description: "생각을 음성과 키워드로 기록하면 AI가 요약하고 정리해주는 생산성 앱",
    tags: ["React", "AI API", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white dark:bg-[#0c0f17] dark:text-slate-100">
      {/* 화려하고 은은한 오로라 배경 블러 효과 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-purple-500/20 blur-[120px] dark:from-indigo-600/15 dark:via-purple-600/15 dark:to-cyan-500/15" />
        <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-rose-400/10 blur-[100px] dark:bg-rose-600/10" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[100px] dark:bg-emerald-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* 메인 프로필 카드 컨테이너 */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl shadow-indigo-500/5 backdrop-blur-xl transition-all dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-black/40">
          
          {/* 커버 배너 이미지 & 오버레이 */}
          <div className="relative h-44 w-full sm:h-56 md:h-64 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
              alt="Profile Cover Banner"
              fill
              priority
              className="object-cover opacity-60 mix-blend-overlay transition-transform duration-700 hover:scale-105"
            />
            {/* 그라데이션 페이드 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* 상단 액션 버튼 (공유 / 링크 복사) */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleShare}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-slate-900 active:scale-95"
                title="프로필 링크 복사하기"
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4 text-emerald-400 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>복사 완료!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>공유하기</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 프로필 콘텐츠 본문 */}
          <div className="px-5 pb-8 pt-0 sm:px-8 sm:pb-12 md:px-12">
            
            {/* 상단 프로필 이미지 & 기본 정보 헤더 */}
            <div className="relative -mt-16 sm:-mt-20 flex flex-col items-center text-center sm:flex-row sm:items-end sm:text-left sm:gap-6">
              
              {/* 프로필 이미지 (아바타) */}
              <div className="group relative h-28 w-28 sm:h-36 sm:w-36 shrink-0 rounded-full p-1.5 ring-4 ring-white shadow-xl dark:ring-slate-900 bg-gradient-to-tr from-indigo-500 to-purple-500">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="홍길동 프로필 사진"
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
                {/* 실시간 활동 펄스 인디케이터 */}
                <span
                  className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-white dark:bg-slate-900 dark:ring-slate-900 shadow-md"
                  title="현재 활동 중 & 연락 환영"
                >
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
                  </span>
                </span>
              </div>

              {/* 이름, 직함, 배지 */}
              <div className="mt-4 sm:mt-0 flex-1">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                    홍길동
                  </h1>
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    / Gildong Hong
                  </span>
                  {/* 공식 인증 배지 */}
                  <span className="inline-flex items-center text-blue-500" title="인증된 크리에이터">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  {/* 협업 환영 상태 배지 */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    커피챗 & 협업 환영
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-indigo-600 sm:text-base dark:text-indigo-400">
                  Frontend Engineer · Creative Vibe Coder
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-slate-500 sm:justify-start dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Seoul, South Korea
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    경력 3년차
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@example.com
                  </span>
                </div>
              </div>
            </div>

            {/* 소개 문구 (About) */}
            <div className="mt-6 rounded-2xl bg-slate-50/70 p-4 sm:p-5 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                💡 <span className="font-semibold text-slate-900 dark:text-white">아이디어를 직관적이고 감각적인 사용자 경험</span>으로 바꾸는 프론트엔드 엔지니어입니다.
                복잡한 비즈니스 로직을 심플하게 풀어내며, AI 도구와 최신 웹 기술을 융합한 <span className="font-semibold text-indigo-600 dark:text-indigo-400">바이브 코딩(Vibe Coding)</span>으로 빠른 가치 검증과 높은 완성도를 지향합니다.
              </p>
            </div>

            {/* 핵심 통계 바 (Stats Grid) */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-slate-200/60 bg-white/50 p-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-800/30 dark:hover:border-indigo-500/50"
                >
                  <div className="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 메인 2단 반응형 레이아웃: [빠른 링크 허브] vs [기술 스택 & 대표 프로젝트] */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
              
              {/* 왼쪽 영역: 소셜 링크 & 핵심 바로가기 (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 text-xs font-black">
                      ⚡
                    </span>
                    바로가기 링크
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    원하시는 채널을 클릭하시면 바로 연결됩니다.
                  </p>
                </div>

                <div className="space-y-3">
                  {quickLinks.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center justify-between rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        item.highlight
                          ? "border-indigo-400/60 bg-gradient-to-r from-indigo-50/90 via-purple-50/50 to-white shadow-md shadow-indigo-500/10 dark:border-indigo-500/50 dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-slate-900"
                          : "border-slate-200/80 bg-white/70 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-xs border border-slate-200/60 dark:border-slate-700/60 dark:bg-slate-800">
                          {item.icon}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 dark:text-slate-400">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:translate-x-1 dark:bg-slate-800 dark:text-slate-500 dark:group-hover:bg-indigo-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>

                {/* 소셜 아이콘 바 */}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    소셜 네트워크
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { name: "GitHub", href: "https://github.com", icon: "🐙" },
                      { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
                      { name: "X (Twitter)", href: "https://x.com", icon: "🐦" },
                      { name: "Instagram", href: "https://instagram.com", icon: "📷" },
                    ].map((sns) => (
                      <a
                        key={sns.name}
                        href={sns.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/60 px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-indigo-500/50 dark:hover:bg-slate-800 dark:hover:text-white"
                      >
                        <span>{sns.icon}</span>
                        <span>{sns.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* 오른쪽 영역: 기술 스택 (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 text-xs font-black">
                      🛠️
                    </span>
                    기술 스택 & 도구
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    실무 및 프로젝트에서 적극 활용하는 스택입니다.
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-800 dark:bg-slate-900/40">
                  {techCategories.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {group.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((tech) => (
                          <span
                            key={tech.name}
                            className={`inline-flex items-center rounded-lg bg-gradient-to-r px-2.5 py-1 text-xs font-medium shadow-xs transition-transform duration-200 hover:scale-105 ${tech.color}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 커피챗 배너 / 빠른 문의 */}
                <div className="rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/70 to-purple-50/70 p-5 dark:border-indigo-900/50 dark:from-indigo-950/30 dark:to-purple-950/30">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">☕</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        언제든 편하게 연락주세요!
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        새로운 프로젝트 제안이나 기술 수다, 커피챗 요청은 언제든지 환영합니다.
                      </p>
                      <a
                        href="mailto:contact@example.com"
                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-95"
                      >
                        이메일 보내기
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 대표 프로젝트 쇼케이스 섹션 (하단 반응형 2열 카드 그리드) */}
            <div className="mt-12 border-t border-slate-200/70 pt-8 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 text-xs font-black">
                      🚀
                    </span>
                    대표 프로젝트
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    최근에 몰입하여 제작한 주요 작업물입니다.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {featuredProjects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-indigo-500/50"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-slate-900 shadow-md opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-slate-900 dark:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-700/60 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 하단 푸터 */}
            <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-600">
              <p>© 2026 Gildong Hong. All rights reserved.</p>
              <p className="mt-1">Designed with Next.js, Tailwind CSS & Vibe Coding ✨</p>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}
