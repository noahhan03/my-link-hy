export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-sm border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        {/* 프로필 아바타 */}
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-3xl font-bold text-white shadow-md">
          홍
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          홍길동
        </h1>

        {/* 역할 / 태그 */}
        <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
          대학생 · Vibe Coder
        </p>

        {/* 소개글 */}
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다!
        </p>
      </div>
    </main>
  );
}
