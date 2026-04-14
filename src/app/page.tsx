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
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Lab 01 - Next.js
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Ngô Hồ Tấn Toàn
          </h1>
          <div className="space-y-2 text-lg text-slate-700">
            <p>
              MSSV: <strong>2212473</strong>
            </p>
            <p>
              Lớp: <strong>CTK46PM</strong>
            </p>
            <p>
              Tôi là sinh viên yêu thích phát triển web và muốn xây dựng những sản
              phẩm gọn, rõ ràng, dễ dùng.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            Giới thiệu thêm về bản thân
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {introductionItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-sky-950 p-7 text-slate-50 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Sở thích</h2>
            <ul className="space-y-3 text-base leading-7 text-sky-100">
              {interests.map((interest) => (
                <li key={interest}>- {interest}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Mục tiêu học tập
            </h2>
            <ul className="space-y-3 text-base leading-7 text-slate-700">
              {learningGoals.map((goal) => (
                <li key={goal}>- {goal}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}