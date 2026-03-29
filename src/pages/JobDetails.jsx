import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logoImg from "../assets/logo.png";

const DEMO = {
  companyName: "VIETNAM CAMCOM CO., LTD.",
  agencyTag: "ヘッドハンター・人材紹介会社",
  categoriesJa: "機械設計／生産管理／建設技術（Mechanical · Production · Construction）",
  postedAt: "2026/03/28",
  highlightTags: [
    { en: "English skills welcome", jp: "英語を活かせる" },
    { en: "Vietnam residents welcome", jp: "ベトナム在住者歓迎" },
    { en: "Local hire in Vietnam", jp: "ベトナム現地採用" },
    { en: "Full weekends off", jp: "土日完全休み" },
  ],
  bodyParagraphs: [
    "配電盤・制御盤などの電気設備設計、仕様書作成、BOM管理を中心にご担当いただきます。プロジェクト単位での進行管理や、顧客との技術折衝にも関わる機会があります。",
    "베트남 하노이 거점에서 일본 본사와連携し、設計レビューや試験立会いをオンラインで実施するケースもあります。R&D部門との協業により、新規製品の試作段階から関わることも可能です。",
    "勤務時間は現地法定通り、残業は原則事前申請制。語学（日本語N2目安／英語ビジネスレベル）を活かし、グローバルチームと連携しながらキャリアを拡げられます。",
  ],
  specRows: [
    { label: "会社名", value: "VIETNAM CAMCOM CO., LTD." },
    {
      label: "職種",
      value:
        "機械設計エンジニア／生産管理／建設技術（Mechanical Engineers, Production Management, Construction Technology）",
    },
    { label: "業種", value: "製造・メーカー" },
    { label: "勤務地", value: "ハノイ・ベトナム北部（Hanoi, Northern Vietnam）" },
    { label: "勤務時間", value: "08:00 ～ 17:20（月曜～金曜）" },
    { label: "雇用・契約形態", value: "正社員（Full-time）" },
    {
      label: "給与についての説明",
      bilingualList: {
        kr: [
          "보너스: 회사 이익에 따른 13개월 급여 + 성과 인센티브",
          "여름 휴가 5일",
          "추석, 회사 기념일, 팀빌딩 휴가",
          "의료보험 (본인 및 배우자)",
          "24시간 상해보험",
          "연 1회 귀국 항공권 지원",
          "자녀 교육비 지원",
        ],
        ja: [
          "賞与（業績に応じた13ヶ月目給与 + インセンティブ）",
          "夏季休暇（5日）",
          "中秋節、会社記念日、チームビルディング休暇あり",
          "医療保険（本人および配偶者）",
          "24時間傷害保険",
          "年1回の帰国航空券支給",
          "子どもの教育手当あり",
        ],
      },
    },
    {
      label: "採用企業の説明",
      bilingualParagraphs: {
        kr: [
          "본 포지션은 전기 설비 및 에너지 관련 제품을 제조하는 기업에서의 설계 직무입니다. 해당 기업은 오랜 기간 현지 시장에서 사업을 운영해왔으며, 설계부터 제조, 애프터 서비스까지 통합된 시스템을 갖추고 있습니다.",
          "인프라 및 공장 설비 분야에서 안정적인 수요를 확보하고 있으며, 에너지 효율성과 지속 가능성을 고려한 제품 개발에 주력하고 있습니다.",
          "사내는 기술 중심의 조직으로, 설계 · 제조 · 서비스 부서 간 협업이 활발합니다. 다양한 경력의 인재들이 함께 일하며 실무 경험을 쌓을 수 있는 환경입니다.",
        ],
        ja: [
          "電気設備・エネルギー関連製品を取り扱うメーカーでの募集です。長年にわたり現地市場で事業を展開しており、製造からアフターサービスまで一貫した体制を構築しています。",
          "エネルギー効率や持続可能性を重視した製品開発に取り組んでおり、インフラや工場設備に関わる分野で安定した需要があります。",
          "社内は比較的フラットな組織で、技術者同士の連携を重視する文化があります。現場対応が多いため、実務ベースで経験を積みたい方や、海外で技術力を活かしたい方に適した環境です。",
        ],
      },
    },
  ],
};

function SpecCellContent({ row }) {
  if (row.value != null) {
    return row.value;
  }
  if (row.bilingualList) {
    const { kr, ja } = row.bilingualList;
    return (
      <div className="space-y-5">
        <ul className="m-0 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed sm:text-[14px]">
          {kr.map((line, i) => (
            <li key={`kr-${i}`} className="marker:text-[#333]">
              {line}
            </li>
          ))}
        </ul>
        <ul className="m-0 list-disc space-y-1.5 pl-5 text-[13px] leading-relaxed sm:text-[14px]">
          {ja.map((line, i) => (
            <li key={`ja-${i}`} className="marker:text-[#333]">
              {line}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (row.bilingualParagraphs) {
    const { kr, ja } = row.bilingualParagraphs;
    return (
      <div className="space-y-5">
        <div className="space-y-3">
          {kr.map((p, i) => (
            <p key={`kr-p-${i}`} className="m-0 text-[13px] leading-relaxed sm:text-[14px]">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-3">
          {ja.map((p, i) => (
            <p key={`ja-p-${i}`} className="m-0 text-[13px] leading-relaxed sm:text-[14px]">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

function SpecTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-[#e0e0e0]">
      <table className="w-full min-w-[280px] border-collapse text-left text-[14px] text-[#333]">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[#e0e0e0] last:border-b-0">
              <th
                scope="row"
                className="w-[min(25%,140px)] min-w-[96px] bg-[#f9f9f9] px-3 py-3 align-top text-[13px] font-bold sm:w-[min(22%,200px)] sm:px-4 sm:py-3.5 sm:text-[14px]"
              >
                {row.label}
              </th>
              <td className="bg-white px-3 py-3 align-top text-[13px] font-normal leading-relaxed sm:px-4 sm:py-3.5 sm:text-[14px]">
                <SpecCellContent row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function JobDetails() {
  const location = useLocation();
  const fromState = location.state?.job;

  const companyName = fromState?.company ?? DEMO.companyName;
  const titleHint = fromState?.title ?? "電気設備設計エンジニア（デモ）";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-[1120px] flex-1 px-4 py-8 sm:px-5 sm:py-10">
        <Link
          to="/jobs"
          className="mb-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#1848a0] no-underline hover:underline"
        >
          ← Quay lại danh sách việc làm
        </Link>

        <article className="mx-auto max-w-[900px]">
          <header className="border-b border-[#e8e8e8] pb-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start">
                <img src={logoImg} alt="" className="h-10 w-auto object-contain sm:h-12" />
                <div className="min-w-0">
                  <p className="m-0 text-[15px] font-bold leading-snug text-[#1e3a5f] sm:text-[17px]">{companyName}</p>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded bg-[#8f7f64] px-2.5 py-1 text-[12px] font-bold text-white sm:text-[13px]">
                  {DEMO.agencyTag}
                </span>
                <p className="mt-3 m-0 text-[14px] font-medium leading-relaxed text-[#333] sm:text-[15px]">
                  {DEMO.categoriesJa}
                </p>
                <p className="mt-2 m-0 text-[12px] text-[#6b7280] sm:text-[13px]">掲載開始日：{DEMO.postedAt}</p>
                <p className="mt-1 m-0 text-[13px] font-medium text-[#1848a0] sm:text-[14px]">{titleHint}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {DEMO.highlightTags.map((t) => (
                    <span
                      key={t.en}
                      className="inline-flex max-w-full flex-col rounded-full bg-[#ef5366] px-3 py-1.5 text-center text-[11px] font-semibold leading-tight text-white sm:text-[12px]"
                    >
                      <span>{t.en}</span>
                      <span className="mt-0.5 text-[10px] font-normal opacity-95">{t.jp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <div className="mt-8 space-y-4 text-[14px] leading-[1.75] text-[#333] sm:text-[15px]">
            {DEMO.bodyParagraphs.map((p, i) => (
              <p key={i} className="m-0">
                {p}
              </p>
            ))}
          </div>

          <h2 className="mb-4 mt-10 text-[1.125rem] font-bold text-[#1848a0] sm:text-[1.25rem]">募集内容</h2>
          <SpecTable rows={DEMO.specRows} />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default JobDetails;
