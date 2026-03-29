import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import newsImage from "../assets/news_1_image.png";

function NewsDetails() {
  const location = useLocation();
  const selectedNews = location.state?.news;

  const detail = selectedNews || {
    date: "2026/02/05",
    title: "SETA Engineering、 日本法人 設立のお知らせ",
    desc: "平素より格別のご高配を賜り、誠にありがとうございます。このたびSETA Engineering は、2026年2月5日付にて日本法人を設立いたしましたことを、ここにご報告申し上げます。",
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-5 py-10">
        <section className="max-w-[980px] mx-auto">
          <Link to="/news" className="inline-flex items-center text-[#1848a0] font-bold no-underline mb-4">
            ← Quay lại danh sách tin tức
          </Link>

          <article className="bg-white p-6 rounded-xl shadow-sm">
            <img src={newsImage} alt="News detail" className="w-full h-auto block object-cover rounded-md" />

            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-[28px] px-3 rounded-full bg-[#1848a0] text-white text-[12px] font-bold">
                お知らせ
              </span>
              <span className="text-[#4b5563] text-[16px] leading-none font-medium">{detail.date}</span>
            </div>

            <h1 className="m-0 mt-4 text-[#1f2937] text-[32px] leading-[1.3] font-semibold">
              {detail.title}
            </h1>

            <div className="mt-4 grid gap-3 text-[#374151] text-[18px] leading-[1.7]">
              <p className="m-0">{detail.desc}</p>
              <p className="m-0">
                本件により、当社は日本国内における採用支援体制をさらに強化し、企業様の人材確保と求職者様のキャリア形成の両面で、
                より高品質なサービス提供を目指してまいります。
              </p>
              <p className="m-0">
                今後ともSETA Engineeringを何卒よろしくお願い申し上げます。
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NewsDetails;
