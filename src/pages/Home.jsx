import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";
import bannerImg from "../assets/banner.png";
import cvAiImg from "../assets/cv_ai.png";
import bannerItem1 from "../assets/banner_item1.png";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import partner3 from "../assets/partner-3.png";
import partner4 from "../assets/partner-4.png";
import partner5 from "../assets/partner-5.png";
import partner6 from "../assets/partner-6.png";
import partner7 from "../assets/partner-7.png";
import partner8 from "../assets/partner-8.png";
import partner9 from "../assets/partner-9.png";
import partner10 from "../assets/partner-10.png";
import partner11 from "../assets/partner-11.png";
import partner12 from "../assets/partner-12.png";
import partner13 from "../assets/partner-13.png";
import partner14 from "../assets/partner-14.png";
import partner15 from "../assets/partner-15.png";
import partner16 from "../assets/partner-16.png";
import partner17 from "../assets/partner-17.png";
import partner18 from "../assets/partner-18.png";
import stepImg1 from "../assets/step1.png";
import stepImg2 from "../assets/step2.png";
import stepImg3 from "../assets/step3.png";

const processStepImages = [stepImg1, stepImg2, stepImg3];

const partnerHighlightLogos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
];
const jobs = [
  { icon: "building", title: "STAFF SERVICE - Kỹ sư thiết kế cơ khí", company: "Staff Service Engineering", desc: "Top 3 công ty phái cử lớn tại Nhật tuyển kỹ sư thiết kế cơ khí...", location: "Tokyo, Japan", type: "Full-time", level: "N3+", salary: "250,000" },
  { icon: "laptop", title: "OUTSOURCING - Kỹ sư IT", company: "Outsourcing Technology", desc: "Outsourcing Technology tuyển kỹ sư IT từ Việt Nam trình độ tương đương N3...", location: "Osaka, Japan", type: "Full-time", level: "N3+", salary: "280,000" },
  { icon: "bolt", title: "BENEXT - Kỹ sư cơ khí / Điện - Điện tử", company: "BeNEXT Corporation", desc: "Đợt tuyển thứ 18 của BeNEXT hợp tác với Workstation sắp diễn ra...", location: "Nagoya, Japan", type: "Full-time", level: "N4+", salary: "220,000" },
  { icon: "briefcase", title: "LINKTRUST - Kỹ sư quản lý thi công", company: "Linktrust Co., Ltd", desc: "Linktrust tuyển kỹ sư quản lý thi công trình độ N3+...", location: "Tokyo, Japan", type: "Full-time", level: "N3+", salary: "260,000" },
  { icon: "plug", title: "Kỹ sư quản lý thi công cơ điện", company: "Denki Engineering", desc: "Công ty cơ điện hơn 50 năm tuổi tuyển kỹ sư cơ điện...", location: "Yokohama, Japan", type: "Full-time", level: "N3+", salary: "240,000" },
  { icon: "home", title: "TECHNOPRO - Kỹ sư thiết kế xây dựng", company: "TechnoPro Construction", desc: "Tuyển kỹ sư thiết kế xây dựng / thiết kế kiến trúc 2 đầu Việt Nhật...", location: "Việt Nam - Nhật Bản", type: "Full-time", level: "N3+", salary: "230,000" },
];
const newsItems = [
  { date: "10/03/2026", tag: "Tin nổi bật", title: "Đời sống tại Nhật", desc: "Cập nhật thông tin sinh hoạt, chi phí và môi trường làm việc thực tế cho kỹ sư tại Nhật." },
  { date: "08/03/2026", tag: "Pháp lý", title: "Thay đổi visa", desc: "Tổng hợp các thay đổi quan trọng về visa lao động và lưu trú để bạn chủ động chuẩn bị hồ sơ." },
  { date: "05/03/2026", tag: "Kỹ năng", title: "Kinh nghiệm phỏng vấn kỹ sư.", desc: "Mẹo chuẩn bị hồ sơ, cách trả lời câu hỏi thường gặp và lưu ý để tăng tỉ lệ đậu phỏng vấn." },
];
const testimonials = [
  { content: "Mình đã được giới thiệu thành công 1 việc làm tại Nhật Bản", name: "Anh Minh", role: "Kỹ sư cầu đường - Hà Nội", avatar: "👨🏻" },
  { content: "Giao diện dễ sử dụng, việc làm đa dạng và chất lượng. Team support rất nhiệt tình.", name: "Chị Hương", role: "Nhân viên kế toán - TP.HCM", avatar: "👩🏻" },
  { content: "JobShare là cầu nối tuyệt vời giữa nhân tài Việt Nam và doanh nghiệp Nhật Bản.", name: "Anh Dũng", role: "Kỹ sư IT - Đà Nẵng", avatar: "👨🏻‍💼" },
];

/** Màu chủ đạo quy trình (ribbon / icon / tiêu đề) — theo mockup */
const PROCESS_BLUE = "#1a475f";
const PROCESS_BORDER = "#d1d1d1";

const processSteps = [
  {
    step: 1,
    desc: "Tìm kiếm việc làm phù hợp ngay trên trang chủ của chúng tôi.",
    icon: "register",
  },
  {
    step: 2,
    desc: "Tạo hồ sơ nhanh chóng và ứng tuyển.",
    icon: "apply",
  },
  {
    step: 3,
    desc: "Hệ thống sẽ đánh giá hồ sơ và liên hệ lại với ứng viên trong thời gian sớm nhất để tiếp tục quá trình tiến cử, sắp xếp phỏng vấn (nếu có).",
    icon: "interview",
  },
];

function StepRibbon({ step }) {
  const num = String(step).padStart(2, "0");
  return (
    <div
      className="relative z-20 flex w-[56px] shrink-0 flex-col items-center justify-start pt-3 pb-6 text-white sm:w-[64px] sm:pt-3.5 sm:pb-7"
      style={{
        background: PROCESS_BLUE,
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 14px), 50% 100%, 0 calc(100% - 14px))",
      }}
    >
      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase sm:text-[12px]">STEP</span>
      <span className="mt-1.5 text-[28px] font-semibold leading-none sm:text-[32px]">{num}</span>
    </div>
  );
}

/** Thẻ bước — phần trên + ảnh minh họa cố định; phần chữ flex-1 để Grid kéo đều theo cột cao nhất */
function ProcessStepCard({ item }) {
  return (
    <article
      aria-label={`Bước ${item.step}`}
      className="relative z-0 flex h-full min-h-0 w-full flex-col overflow-visible rounded-sm border bg-white"
      style={{ borderColor: PROCESS_BORDER }}
    >
      {/* Ribbon đẩy lên, tràn lên viền ngoài */}
      <div className="flex h-[112px] shrink-0 items-start pl-3 pr-3 pt-2">
        <div className="-mt-4 ml-0.5 sm:-mt-5">
          <StepRibbon step={item.step} />
        </div>
      </div>
      <div className="flex h-[120px] shrink-0 items-center justify-center px-4 pb-7 pt-2">
        <img
          src={processStepImages[item.step - 1]}
          alt={`Minh họa bước ${item.step}`}
          className="h-[100px] w-auto max-w-[min(100%,160px)] object-contain"
          decoding="async"
        />
      </div>
      <div
        className="flex min-h-0 flex-1 flex-col justify-start border-t px-4 pb-4 pt-3.5"
        style={{ borderColor: PROCESS_BORDER }}
      >
        <p className="m-0 text-[13px] font-normal leading-[1.65] text-slate-600 sm:text-[14px]">{item.desc}</p>
      </div>
    </article>
  );
}

function JobLineIcon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1848a0",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    building: (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
      </svg>
    ),
    laptop: (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="11" rx="1.8" />
        <path d="M2.5 19h19" />
      </svg>
    ),
    bolt: (
      <svg {...common}>
        <path d="M13 2L6 13h5l-1 9 8-12h-5l0-8z" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 15 5v2M3 13h18" />
      </svg>
    ),
    plug: (
      <svg {...common}>
        <path d="M9 8v4M15 8v4M8 12h8M12 12v7M9.5 19h5" />
      </svg>
    ),
    home: (
      <svg {...common}>
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M6 10.5V20h12v-9.5" />
      </svg>
    ),
  };

  return icons[name] ?? icons.building;
}

export default function HomeTailwind() {
  /** Cùng lề với main (px-4 sm:px-5) — không thêm px riêng từng section */
  const sectionTitleClass =
    "m-0 text-center text-slate-800 text-[1.375rem] leading-snug font-semibold sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] lg:leading-[1.15]";
  const sectionSpacing = "mt-6 py-8 sm:py-10";

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-4 sm:px-5">
        <section
          className="relative mb-6 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen overflow-hidden bg-slate-900 bg-cover bg-center lg:min-h-[560px]"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div
            className="absolute inset-0 max-lg:bg-[linear-gradient(180deg,rgba(5,17,33,0.55)_0%,rgba(7,25,47,0.82)_45%,rgba(9,24,40,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,17,33,0.78)_0%,rgba(7,25,47,0.6)_50%,rgba(9,24,40,0.35)_100%)]"
          />
          <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-stretch gap-6 px-4 pt-6 pb-8 sm:px-5 sm:pt-8 sm:pb-10 lg:min-h-[560px] lg:grid-cols-2 lg:items-end lg:gap-5 lg:px-5 lg:pt-11 lg:pb-16">
            {/* Mobile: ảnh trước — Desktop: cột phải */}
            <div className="order-1 flex h-[min(52vw,260px)] items-end justify-center sm:h-[320px] lg:order-2 lg:h-[560px] lg:justify-end">
              <img
                src={bannerItem1}
                alt="Ứng viên nổi bật"
                className="banner-item-rise banner-foreground-img h-full max-h-[260px] w-auto max-w-full object-contain object-bottom sm:max-h-[340px] lg:max-h-none lg:max-w-none lg:translate-x-[170px]"
              />
            </div>
            {/* Mobile: chữ + CTA sau — Desktop: cột trái */}
            <div className="order-2 w-full min-w-0 max-w-full pb-1 lg:order-1 lg:max-w-[560px] lg:pb-16 banner-copy-rise">
              <h1 className="m-0 max-w-full text-[1.65rem] font-semibold leading-snug text-white sm:text-[2.25rem] md:text-[2.75rem] lg:max-w-[620px] lg:text-[49px] lg:leading-[1.1]">
                <span className="block md:whitespace-nowrap">Nâng bước sự nghiệp</span>
                <span className="block md:whitespace-nowrap">vững vàng tương lai</span>
              </h1>
              <p className="mb-0 mt-3.5 text-[15px] leading-relaxed text-slate-200 sm:text-[18px] md:text-[20px]">
                Nền tảng tuyển dụng thông minh, kết nối ứng viên và nhà tuyển dụng nhanh hơn.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to="/jobs"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] bg-[#1848a0] px-[18px] text-[15px] font-semibold text-white no-underline sm:h-[54px] sm:min-w-[200px] sm:w-auto sm:text-[16px]"
                >
                  Tìm việc ngay
                </Link>
                <Link
                  to="/cv"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] bg-white/12 px-[18px] text-[15px] font-semibold text-white no-underline sm:h-[54px] sm:min-w-[200px] sm:w-auto sm:text-[16px]"
                >
                  Tạo CV bằng AI
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <h2 className={`${sectionTitleClass} mb-6`}>Về chúng tôi</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {[
              {
                title: "Đa dạng Job Kỹ sư tại Nhật",
                desc: "Hàng ngàn vị trí tuyển dụng được cập nhật mỗi ngày, thuộc các ngành Cơ khí, IT, Điện, Điện tử, Xây dựng tại các doanh nghiệp uy tín Nhật Bản",
              },
              {
                title: "Ứng dụng AI tạo CV",
                desc: "Tự động hóa việc viết CV chuẩn chuyên nghiệp, tối ưu từ khóa theo yêu cầu tuyển dụng Nhật Bản",
              },
              {
                title: "Định hướng & Gợi ý Job",
                desc: 'Hệ thống tự động phân tích hồ sơ để đề xuất các công việc có độ "matching" cao nhất với năng lực của bạn',
              },
            ].map((item) => (
              <article key={item.title} className="flex min-h-[350px] flex-col overflow-hidden sm:min-h-[475px] lg:min-h-[575px]">
                <div className="h-[225px] w-full shrink-0 bg-[#1848a0] sm:h-[69%] sm:min-h-[250px] lg:h-[75%]" />
                <h3 className="m-0 mt-3 text-[18px] font-semibold leading-[1.2] text-slate-800 sm:text-[20px] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mb-0 mt-2 flex-1 text-[15px] font-medium leading-[1.45] text-slate-800 sm:text-[16px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <h2 className={`${sectionTitleClass} mb-[18px]`}>
            Hơn 18 đối tác doanh nghiệp Nhật
            <br className="hidden sm:block" /> đang tìm kiếm nhân sự nước ngoài
          </h2>
          <div className="relative pt-3">
            <div className="partner-marquee"><div className="partner-marquee-track">{partnerHighlightLogos.concat(partnerHighlightLogos).map((logo, idx) => <div className="partner-logo-card" key={idx}><img src={logo} alt={`Đối tác ${idx + 1}`} className="partner-logo-image" /></div>)}</div></div>
            <div className="absolute top-3 bottom-0 w-14 pointer-events-none z-[2] left-0" style={{ background: "linear-gradient(to right, #ffffff 0%, transparent 100%)" }} />
            <div className="absolute top-3 bottom-0 w-14 pointer-events-none z-[2] right-0" style={{ background: "linear-gradient(to left, #ffffff 0%, transparent 100%)" }} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <h2 className={`${sectionTitleClass} mb-[18px]`}>Hơn 200 việc làm đang tìm kiếm nhân sự kỹ sư</h2>
          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <article key={i} className="rounded-[14px] bg-white p-4">
                <div className="mb-2.5 flex gap-2.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f3f5]">
                    <JobLineIcon name={job.icon} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="m-0 text-[15px] text-[#212529]">{job.title}</h3>
                    <p className="m-0 mt-1 text-[13px] text-[#adb5bd]">{job.company}</p>
                  </div>
                </div>
                <p className="m-0 mb-2.5 text-[13px] leading-[1.5] text-[#868e96]">{job.desc}</p>
                <div className="mb-3 flex flex-wrap gap-x-3 gap-y-2 text-[12px] text-[#868e96]">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                  <span>📚 {job.level}</span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-[20px] font-semibold text-[#1848a0]">
                    {job.salary} <span className="text-[13px] font-medium text-[#adb5bd]">yên</span>
                  </p>
                  <a href="#" className="text-[13px] font-medium text-[#1848a0] no-underline">
                    Xem chi tiết →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-[18px] flex justify-center"><Link to="/jobs" className="text-[#1848a0] rounded-[10px] py-2.5 px-4 font-semibold no-underline">Xem tất cả việc làm →</Link></div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="mt-6 w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-[#1848a0] px-4 py-6 text-white sm:px-[max(18px,calc((100vw-1120px)/2+20px))]">
          <div className="mx-auto max-w-[1120px]">
            <h3 className="m-0 text-[1.25rem] font-semibold leading-tight sm:text-[1.5rem] md:text-[30px]">Tìm kiếm việc làm phù hợp</h3>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <select className="h-11 rounded-lg bg-white px-3 text-[14px] font-semibold text-[#111827]">
                <option>Loại công việc</option>
              </select>
              <select className="h-11 rounded-lg bg-white px-3 text-[14px] font-semibold text-[#111827]">
                <option>Lĩnh vực</option>
              </select>
              <select className="h-11 rounded-lg bg-white px-3 text-[14px] font-semibold text-[#111827]">
                <option>Trình độ tiếng</option>
              </select>
              <select className="h-11 rounded-lg bg-white px-3 text-[14px] font-semibold text-[#111827]">
                <option>Địa điểm làm việc</option>
              </select>
              <select className="h-11 rounded-lg bg-white px-3 text-[14px] font-semibold text-[#111827]">
                <option>Mức lương</option>
              </select>
              <button type="button" className="h-11 rounded-lg bg-[#111827] font-semibold text-white">
                Tìm kiếm
              </button>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_130px]">
              <input
                className="h-11 w-full rounded-lg bg-white px-3 text-[14px] text-[#111827]"
                placeholder="Thanh search theo từ khoá..."
              />
              <button type="button" className="h-11 w-full rounded-lg bg-white font-semibold text-[#1848a0] sm:w-auto">
                Search
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={`grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-5 ${sectionSpacing}`}>
          <div className="w-full overflow-hidden rounded-xl">
            <img src={cvAiImg} alt="CV tối ưu bằng AI" className="block w-full object-cover" />
          </div>
          <div className="flex justify-center p-2 lg:justify-center">
            <div className="flex w-full max-w-xl flex-col items-stretch gap-4 sm:items-start">
              <p className="m-0 text-[1.125rem] font-semibold leading-snug text-[#1f2937] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2.125rem] lg:leading-[1.25]">
                Chỉ mất 3 phút để có CV chuẩn Nhật với công nghệ AI của Workstation JobShare.
              </p>
              <Link
                to="/cv"
                className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#1848a0] px-[18px] py-3 text-[15px] font-semibold text-white no-underline sm:w-auto sm:text-[16px]"
              >
                Thử ngay - Miễn phí
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <h2 className={`${sectionTitleClass} mb-8 sm:mb-10`}>Quy trình ứng tuyển (Step-by-Step)</h2>
          {/*
            Grid 5 ô (3 thẻ + 2 mũi tên): mọi ô cùng hàng kéo theo chiều cao ô cao nhất →
            đường kẻ dưới icon và chiều cao vùng chữ đồng đều theo bước có nhiều nội dung nhất.
          */}
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-y-2 lg:grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)] lg:gap-x-1 lg:gap-y-0">
            {processSteps.flatMap((item, i) => {
              const cells = [
                <ProcessStepCard key={`step-${item.step}`} item={item} />,
              ];
              if (i < 2) {
                cells.push(
                  <div
                    key={`arrow-${i}`}
                    className="flex items-center justify-center py-2 text-xl font-light leading-none text-[#d1d1d1] select-none lg:min-h-0 lg:px-0 lg:py-0 lg:text-2xl"
                    aria-hidden
                  >
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </div>
                );
              }
              return cells;
            })}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className={sectionTitleClass}>Tin tức mới nhất</h2>
            <Link
              to="/news"
              className="shrink-0 text-[14px] font-semibold text-[#1848a0] no-underline sm:text-[15px] lg:text-[16px]"
            >
              Xem tất cả tin tức →
            </Link>
          </div>
          <p className="my-3 text-[14px] leading-relaxed text-[#6b7280] sm:text-[15px] md:text-[16px]">
            Cập nhật nhanh thông tin, mẹo làm CTV và xu hướng việc làm Nhật Bản.
          </p>
          <div className="flex flex-col gap-4">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="grid grid-cols-1 gap-3 border-b border-slate-100 bg-white py-4 last:border-0 md:grid-cols-[minmax(0,110px)_minmax(0,150px)_1fr_auto] md:items-center md:gap-3 md:py-[14px] lg:grid-cols-[120px_170px_1fr_20px]"
              >
                <span className="text-[13px] font-medium text-[#6b7280] md:text-[14px]">{item.date}</span>
                <span className="inline-flex w-fit items-center justify-center rounded-full bg-blue-100 px-2 py-0.5 text-[12px] font-semibold text-[#1848a0] md:text-[13px]">
                  {item.tag}
                </span>
                <div className="min-w-0 md:min-w-0">
                  <h3 className="m-0 text-[15px] font-semibold leading-snug text-[#334155] sm:text-[16px] md:text-[17px] lg:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mb-0 mt-1.5 text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px] md:text-[15px]">
                    {item.desc}
                  </p>
                </div>
                <span className="hidden text-xl font-medium text-[#d1d5db] md:inline md:justify-self-end">›</span>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={sectionSpacing}>
          <h2 className={sectionTitleClass}>Ứng viên nói gì về chúng tôi?</h2>
          <p className="mb-[18px] mt-2.5 text-center text-[17px] text-[#9ca3af] sm:text-[22px] md:text-[26px]">
            Hàng nghìn ứng viên đã tìm việc thành công cùng JobShare
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="relative flex min-h-[160px] flex-col justify-between rounded-[14px] bg-white p-4 sm:min-h-[190px]"
              >
                <p className="absolute right-3 top-2 text-[32px] font-medium leading-none text-blue-200 sm:text-[38px]">''</p>
                <p className="m-0 pr-5 text-[14px] leading-[1.6] text-[#6b7280] sm:text-[15px]">{item.content}</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[20px]">{item.avatar}</div>
                  <div>
                    <p className="m-0 text-[15px] font-semibold text-[#334155]">{item.name}</p>
                    <p className="mb-0 mt-0.5 text-[13px] text-[#9ca3af]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
}
