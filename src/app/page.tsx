const interests = ["Lập trình web", "Khám phá công nghệ mới", "Nghe nhạc"];

const learningGoals = [
  "Nắm vững Next.js và App Router.",
  "Cải thiện kỹ năng xây dựng giao diện hiện đại.",
  "Áp dụng tốt kiến thức vào các dự án thực tế.",
];

const introductionItems = [
  {
    title: "Thông tin nhanh",
    description: "Sinh viên lớp CTK46PM, hiện tập trung học và thực hành các công nghệ phát triển web hiện đại.",
  },
  {
    title: "Định hướng",
    description: "Quan tâm đến việc xây dựng giao diện rõ ràng, dễ dùng và có thể áp dụng tốt trong các bài tập lẫn dự án thực tế.",
  },
  {
    title: "Cách học của tôi",
    description: "Ưu tiên học qua từng bài lab, tự hoàn thiện sản phẩm nhỏ và rút kinh nghiệm qua mỗi lần triển khai.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 text-slate-900 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#eef2ff_100%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/85 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur xl:p-10">
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Lab 01 - Next.js
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ngô Hồ Tấn Toàn
            </h1>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  MSSV
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">2212473</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Lớp
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">CTK46PM</p>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Tôi là sinh viên yêu thích phát triển web và muốn xây dựng những sản
              phẩm gọn, rõ ràng, dễ dùng.
            </p>
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-8 text-slate-50 shadow-[0_30px_80px_rgba(2,6,23,0.25)] xl:p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-sky-300">
              Hồ sơ cá nhân
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Giới thiệu thêm về bản thân</h2>
            <div className="mt-6 space-y-4">
              {introductionItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-sky-900/10 bg-gradient-to-br from-sky-950 via-cyan-950 to-slate-900 p-8 text-slate-50 shadow-[0_25px_70px_rgba(8,47,73,0.25)] xl:p-9">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">Sở thích</h2>
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                Cá nhân
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-base leading-7 text-sky-100">
              {interests.map((interest, index) => (
                <li
                  key={interest}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-300/20 text-sm font-semibold text-sky-100">
                    {index + 1}
                  </span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/85 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur xl:p-9">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Mục tiêu học tập
              </h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Học tập
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              {learningGoals.map((goal) => (
                <li
                  key={goal}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}