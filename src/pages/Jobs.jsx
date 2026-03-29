import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jobs = [
  {
    icon: "🏢",
    title: "STAFF SERVICE - Kỹ sư thiết kế cơ khí",
    company: "Staff Service Engineering",
    desc: "Top 3 công ty phái cử lớn tại Nhật tuyển kỹ sư thiết kế cơ khí...",
    location: "Tokyo, Japan",
    type: "Full-time",
    level: "N3+",
    salary: "250,000",
  },
  {
    icon: "💻",
    title: "OUTSOURCING - Kỹ sư IT",
    company: "Outsourcing Technology",
    desc: "Outsourcing Technology tuyển kỹ sư IT từ Việt Nam trình độ tương đương N3...",
    location: "Osaka, Japan",
    type: "Full-time",
    level: "N3+",
    salary: "280,000",
  },
  {
    icon: "⚡",
    title: "BENEXT - Kỹ sư cơ khí / Điện - Điện tử",
    company: "BeNEXT Corporation",
    desc: "Đợt tuyển thứ 18 của BeNEXT hợp tác với Workstation sắp diễn ra...",
    location: "Nagoya, Japan",
    type: "Full-time",
    level: "N4+",
    salary: "220,000",
  },
  {
    icon: "🏗️",
    title: "LINKTRUST - Kỹ sư quản lý thi công",
    company: "Linktrust Co., Ltd",
    desc: "Linktrust tuyển kỹ sư quản lý thi công trình độ N3+...",
    location: "Tokyo, Japan",
    type: "Full-time",
    level: "N3+",
    salary: "260,000",
  },
  {
    icon: "🔌",
    title: "Kỹ sư quản lý thi công cơ điện",
    company: "Denki Engineering",
    desc: "Công ty cơ điện hơn 50 năm tuổi tuyển kỹ sư cơ điện...",
    location: "Yokohama, Japan",
    type: "Full-time",
    level: "N3+",
    salary: "240,000",
  },
  {
    icon: "🏠",
    title: "TECHNOPRO - Kỹ sư thiết kế xây dựng",
    company: "TechnoPro Construction",
    desc: "Tuyển kỹ sư thiết kế xây dựng / thiết kế kiến trúc 2 đầu Việt Nhật...",
    location: "Việt Nam - Nhật Bản",
    type: "Full-time",
    level: "N3+",
    salary: "230,000",
  },
];

function Jobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsSectionRef = useRef(null);
  const expandedJobs = Array.from({ length: 6 }, (_, batchIndex) =>
    jobs.map((job, jobIndex) => ({
      ...job,
      _key: `${batchIndex}-${jobIndex}-${job.title}`,
    }))
  ).flat();
  const jobsPerPage = 10;
  const totalPages = Math.ceil(expandedJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const pagedJobs = expandedJobs.slice(startIndex, startIndex + jobsPerPage);

  useEffect(() => {
    jobsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 py-10">
        <section className="ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen bg-[#1848a0] px-[max(18px,calc((100vw-1120px)/2+20px))] py-6 text-white">
          <div className="mx-auto max-w-[1120px]">
            <h3 className="m-0 text-[30px] font-extrabold leading-tight">Tìm kiếm việc làm phù hợp</h3>

            <div className="mt-4 grid grid-cols-3 gap-3">
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
              <button className="h-11 rounded-lg bg-[#111827] font-bold text-white">Tìm kiếm</button>
            </div>

            <div className="mt-3 grid grid-cols-[1fr_130px] gap-3">
              <input
                className="h-11 rounded-lg bg-white px-3 text-[14px] text-[#111827]"
                placeholder="Thanh search theo từ khoá..."
              />
              <button className="h-11 rounded-lg bg-white font-extrabold text-[#1848a0]">Search</button>
            </div>
          </div>
        </section>

        <section ref={jobsSectionRef} className="mt-2 px-0 py-6 sm:p-7">
          <h2 className="mb-4 text-center text-2xl font-extrabold leading-snug text-slate-900 sm:mb-[18px] sm:text-3xl md:text-[40px] md:leading-[1.15]">
            Hơn 200 việc làm đang tìm kiếm nhân sự kỹ sư
          </h2>

          <div className="grid gap-4">
            {pagedJobs.map((job) => (
              <article key={job._key} className="min-w-0 border border-[#e5e5e5] bg-[#f5f5f5]">
                <div className="border-b border-[#e0e0e0] px-4 py-3 sm:px-6 sm:py-4">
                  <h3 className="m-0 break-words text-lg font-extrabold uppercase leading-snug text-[#1565a9] sm:text-2xl md:text-[34px] md:leading-tight">
                    [{job.location.split(",")[0]}] {job.title} &lt;JLPT N1&gt;
                  </h3>
                  <p className="m-0 mt-1 text-[13px] font-semibold text-[#5f6368] sm:text-[14px]">
                    ※会員のみに表示されます / 人事総務・経理会計・法務 正社員
                  </p>
                </div>

                <div className="px-4 py-4 sm:px-6 sm:py-5">
                  <div className="flex min-w-0 flex-col gap-4 md:flex-row">
                    <div className="flex h-28 w-full shrink-0 items-center justify-center bg-[#c9dde3] text-[14px] font-bold text-white sm:h-[130px] sm:text-[16px] md:h-[130px] md:w-[190px]">
                      会員のみに表示されます
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="inline-block rounded-sm bg-[#8f7f64] px-3 py-1 text-[13px] font-bold text-white sm:text-[14px]">
                        ヘッドハンター・人材紹介会社
                      </div>

                      <div className="mt-2 grid gap-1.5">
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr]">
                          <div className="bg-[#b9bcc0] px-3 py-2 text-[13px] font-bold text-white">職種</div>
                          <div className="bg-white px-3 py-2 text-[15px] text-[#444] sm:text-[16px]">
                            人事総務・経理会計・法務
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr]">
                          <div className="bg-[#b9bcc0] px-3 py-2 text-[13px] font-bold text-white">雇用形態</div>
                          <div className="bg-white px-3 py-2 text-[15px] text-[#444] sm:text-[16px]">{job.type}</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr]">
                          <div className="bg-[#b9bcc0] px-3 py-2 text-[13px] font-bold text-white">給与</div>
                          <div className="bg-white px-3 py-2 text-[15px] text-[#444] sm:text-[16px]">
                            【Lương thưởng】 Thu nhập dự kiến hằng năm: {job.salary} yên
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr]">
                          <div className="bg-[#b9bcc0] px-3 py-2 text-[13px] font-bold text-white">勤務地</div>
                          <div className="bg-white px-3 py-2 text-[15px] text-[#444] sm:text-[16px]">{job.location}</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr]">
                          <div className="bg-[#b9bcc0] px-3 py-2 text-[13px] font-bold text-white">職務内容</div>
                          <div className="bg-white px-3 py-2 text-[15px] text-[#444] sm:text-[16px]">
                            ▼ Bạn sẽ phụ trách chủ yếu các nghiệp vụ kế toán hằng ngày, đồng thời tham gia các nghiệp vụ cốt lõi trong chuỗi công việc.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <Link
                      to={`/jobs/${encodeURIComponent(job._key)}`}
                      state={{ job }}
                      className="block w-full max-w-xl rounded-md bg-[#185777] py-2.5 text-center text-base font-extrabold text-white no-underline sm:w-[90%] sm:text-xl md:w-[72%] md:text-[28px]"
                    >
                      求人情報詳細へ
                    </Link>
                  </div>
                  <p className="m-0 mt-3 text-center text-[14px] text-[#7c7c7c] sm:text-[16px]">
                    掲載期間：2026/03/27~2028/03/27
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#374151] disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:py-2"
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={
                  page === currentPage
                    ? "rounded-md bg-[#1848a0] px-2.5 py-1.5 text-sm font-bold text-white sm:px-3 sm:py-2"
                    : "rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#374151] sm:px-3 sm:py-2"
                }
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-[#374151] disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:py-2"
            >
              Sau
            </button>
          </div>

          <div className="mt-[10px] px-1 text-center text-[13px] text-[#6b7280] sm:text-[14px]">
            Hiển thị {startIndex + 1}-{Math.min(startIndex + jobsPerPage, expandedJobs.length)} / {expandedJobs.length} jobs
          </div>

          <div className="mt-[18px] flex justify-center">
            <button type="button" className="text-[#1848a0] rounded-[10px] py-2.5 px-4 font-bold">
              Xem tất cả việc làm →
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Jobs;
