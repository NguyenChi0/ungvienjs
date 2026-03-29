import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import newsImage from "../assets/news_1_image.png";

const newsList = [
  {
    id: 1,
    date: "2026/02/05",
    title: "SETA Engineering、 日本法人 設立のお知らせ",
    desc: "平素より格別のご高配を賜り、誠にありがとうございます。このたびSETA Engineering は、2026年2月5日付にて日本法人を設立いたしましたことを、ここにご報告申し上げます。",
  },
  {
    id: 2,
    date: "2026/02/12",
    title: "新オフィス開設に関するご案内",
    desc: "事業拡大に伴い、関西エリアに新オフィスを開設いたしました。より迅速なサポート体制で、企業様と求職者様を支援してまいります。",
  },
  {
    id: 3,
    date: "2026/02/18",
    title: "採用支援サービス改善のお知らせ",
    desc: "マッチング精度向上のため、求人検索アルゴリズムと応募者分析機能をアップデートいたしました。より適切な候補者提案が可能になります。",
  },
  {
    id: 4,
    date: "2026/02/24",
    title: "技術職向けイベント開催のお知らせ",
    desc: "IT・機械・電気分野を対象にした合同キャリアイベントを開催いたします。企業説明会と個別相談を同時に実施予定です。",
  },
  {
    id: 5,
    date: "2026/03/02",
    title: "外国人エンジニア採用強化について",
    desc: "グローバル人材の採用ニーズに対応するため、外国人エンジニア向け支援プログラムを拡充し、応募導線を最適化いたしました。",
  },
  {
    id: 6,
    date: "2026/03/08",
    title: "サイトメンテナンス完了のお知らせ",
    desc: "サービス品質向上を目的としたメンテナンスが完了いたしました。今後も安定した運用と使いやすいUI改善を継続してまいります。",
  },
];

function News() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="mx-auto flex w-full max-w-[1120px] flex-1 px-4 py-8 sm:px-5 sm:py-10">
        <section className="grid w-full min-w-0 grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          {newsList.map((item) => (
            <article key={item.id} className="min-w-0 rounded-sm p-4 sm:p-5">
              <div className="w-full">
                <img
                  src={newsImage}
                  alt={`News ${item.id}`}
                  className="w-full h-auto block object-cover"
                />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-[28px] px-3 rounded-full bg-[#1848a0] text-white text-[12px] font-bold">
                  お知らせ
                </span>
                <span className="text-[#4b5563] text-[16px] leading-none font-medium">
                  {item.date}
                </span>
              </div>

              <h2 className="m-0 mt-3 text-[#1f2937] text-[clamp(1.125rem,4vw,1.4375rem)] font-medium leading-snug md:text-[23px] md:leading-[1.35]">
                {item.title}
              </h2>

              <p className="m-0 mt-2.5 text-[15px] leading-relaxed text-[#374151] sm:text-[17px] sm:leading-[1.55]">
                {item.desc}
              </p>

              <div className="mt-6 flex justify-center">
                <Link
                  to="/news-details"
                  state={{ news: item }}
                  className="group w-[210px] h-[44px] rounded-full border border-[#1848a0] text-[#1f2937] text-[17px] font-medium bg-white flex items-center justify-center gap-2 no-underline"
                >
                  Read More
                  <span className="w-6 h-6 rounded-full bg-[#dbe8ff] text-[#1848a0] inline-flex items-center justify-center text-[15px] leading-none">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default News;
