const techBadges = [
  { name: "React", bg: "bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800" },
  { name: "Next.js", bg: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700" },
  { name: "TypeScript", bg: "bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800" },
  { name: "Tailwind CSS", bg: "bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800" },
  { name: "Vibe Coding 🚀", bg: "bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        {/* 프로필 아바타 + 실시간 상태 뱃지 */}
        <div className="relative mx-auto mb-4 h-24 w-24">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-3xl font-bold text-white shadow-md">
            홍
          </div>
          {/* 활동 중 펄스 인디케이터 */}
          <span
            className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-xs"
            title="현재 활동 중"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
          </span>
        </div>

        {/* 상단 활동/구직 상태 뱃지 */}
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          커피챗 & 협업 환영
        </div>

        {/* 이름 + 공식 인증(Verified) 뱃지 */}
        <div className="flex items-center justify-center gap-1.5">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            홍길동
          </h1>
          <svg
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="인증된 프로필"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* 역할 / 태그 */}
        <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
          Frontend Developer · Vibe Coder
        </p>

        {/* 소개글 */}
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          코드와 기술로 가치 있는 사용자 경험을 만들어가는 개발자입니다. 복잡한 문제를 심플하게 해결하고, 새로운 기술을 탐구하며 지속적으로 성장하는 것을 즐깁니다.
        </p>

        {/* 기술 스택 뱃지 목록 */}
        <div className="mt-6 flex flex-wrap justify-center gap-1.5">
          {techBadges.map((badge) => (
            <span
              key={badge.name}
              className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${badge.bg}`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
