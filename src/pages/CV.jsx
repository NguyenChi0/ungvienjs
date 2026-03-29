import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/** Dữ liệu demo sau khi “AI đọc CV” — sau này thay bằng kết quả API */
const DEMO_EXTRACTED = {
  nameRomaji: "NGUYEN VAN AN",
  nameKana: "グエン バン アン",
  birthDate: "1995-08-12",
  email: "an.nguyen.demo@email.com",
  phone: "+81-90-1234-5678",
  address: "Tokyo-to, Shinjuku-ku (demo)",
  japanese: "N2",
  education:
    "2014–2018: Đại học Bách khoa Hà Nội — Kỹ thuật Cơ khí (demo)\n2019–2021: Thạc sĩ — Công nghệ chế tạo (demo)",
  experience:
    "2021–2024: ABC Manufacturing Co., Ltd. — Kỹ sư thiết kế CAD\n- Thiết kế chi tiết máy, lập bản vẽ 2D/3D (demo)\n- Phối hợp với bộ phận sản xuất tại nhà máy Osaka",
  pr: "Kỹ năng CAD/SolidWorks, kinh nghiệm làm việc nhóm đa quốc gia. Mong muốn phát triển lâu dài tại Nhật. (demo — nội dung do AI trích xuất)",
};

function ExtractedFromUploadForm() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80">
      <div className="mb-4 rounded-lg bg-sky-50 border border-sky-100 px-3 py-2 text-sm text-slate-700">
        <span className="font-semibold text-[#1848a0]">Demo:</span> Các ô bên dưới mô phỏng dữ liệu AI đọc từ CV của bạn.
        Sau này bạn tích hợp AI để điền thật vào các trường này.
      </div>
      <h3 className="text-lg font-extrabold text-[#1848a0] mb-3">Thông tin đã trích xuất từ CV</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên (romaji)">
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            defaultValue={DEMO_EXTRACTED.nameRomaji}
          />
        </Field>
        <Field label="Họ tên (katakana / ghi chú)">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.nameKana} />
        </Field>
        <Field label="Ngày sinh">
          <input type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.birthDate} />
        </Field>
        <Field label="Email">
          <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.email} />
        </Field>
        <Field label="Số điện thoại">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.phone} />
        </Field>
        <Field label="Địa chỉ hiện tại">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.address} />
        </Field>
        <Field label="Trình độ tiếng Nhật">
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white" defaultValue={DEMO_EXTRACTED.japanese}>
            <option>N5</option>
            <option>N4</option>
            <option>N3</option>
            <option>N2</option>
            <option>N1</option>
          </select>
        </Field>
      </div>
      <Field label="Học vấn">
        <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.education} />
      </Field>
      <Field label="Kinh nghiệm làm việc">
        <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.experience} />
      </Field>
      <Field label="Tự giới thiệu (自己PR)">
        <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" defaultValue={DEMO_EXTRACTED.pr} />
      </Field>
      <button
        type="button"
        className="mt-6 w-full sm:w-auto rounded-full bg-[#1848a0] px-8 py-3 text-sm font-semibold text-white hover:opacity-95"
      >
        Lưu bản nháp
      </button>
    </div>
  );
}

function StandardCVForm() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80">
      <h3 className="text-lg font-extrabold text-[#1848a0] mb-3">Mẫu CV tiêu chuẩn</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên (romaji)">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="YAMADA Taro" />
        </Field>
        <Field label="Ngày sinh">
          <input type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Email">
          <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Số điện thoại">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Địa chỉ hiện tại">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Trình độ tiếng Nhật">
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white">
            <option>N5</option>
            <option>N4</option>
            <option>N3</option>
            <option>N2</option>
            <option>N1</option>
          </select>
        </Field>
      </div>
      <Field label="Học vấn">
        <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Trường, chuyên ngành, năm tốt nghiệp..." />
      </Field>
      <Field label="Kinh nghiệm làm việc">
        <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Công ty — vị trí — mô tả ngắn..." />
      </Field>
      <Field label="Tự giới thiệu (自己PR)">
        <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      </Field>
      <button
        type="button"
        className="mt-6 w-full sm:w-auto rounded-full bg-[#1848a0] px-8 py-3 text-sm font-semibold text-white hover:opacity-95"
      >
        Lưu bản nháp
      </button>
    </div>
  );
}

function TechnicalCVForm() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80">
      <h3 className="text-lg font-extrabold text-[#1848a0] mb-1">Mẫu CV nhóm kỹ thuật</h3>
      <p className="text-sm text-slate-600 mb-4">Tối ưu cho kỹ sư cơ khí, điện, xây dựng...</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Chuyên ngành kỹ thuật">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Cơ khí chế tạo máy" />
        </Field>
        <Field label="Chứng chỉ / bằng cấp liên quan">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="PE, AutoCAD..." />
        </Field>
        <Field label="Phần mềm kỹ thuật thành thạo">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="SolidWorks, CATIA..." />
        </Field>
      </div>
      <Field label="Kinh nghiệm dự án / nhà máy">
        <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Mô tả quy mô dự án, vai trò, thiết bị..." />
      </Field>
      <Field label="An toàn lao động / 5S (nếu có)">
        <textarea rows={2} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      </Field>
      <button
        type="button"
        className="mt-6 w-full sm:w-auto rounded-full bg-[#1848a0] px-8 py-3 text-sm font-semibold text-white hover:opacity-95"
      >
        Lưu bản nháp
      </button>
    </div>
  );
}

function ITCVForm() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80">
      <h3 className="text-lg font-extrabold text-[#1848a0] mb-1">Mẫu CV nhóm IT</h3>
      <p className="text-sm text-slate-600 mb-4">Nhấn mạnh stack, repo và sản phẩm.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Vị trí mong muốn">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Backend / Full-stack..." />
        </Field>
        <Field label="Ngôn ngữ lập trình">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="TypeScript, Go..." />
        </Field>
        <Field label="Framework / thư viện">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="React, Node.js..." />
        </Field>
      </div>
      <Field label="Dự án cá nhân / GitHub">
        <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Link repo, mô tả chức năng chính..." />
      </Field>
      <Field label="Môi trường làm việc">
        <textarea rows={2} className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="AWS, Docker, CI/CD..." />
      </Field>
      <button
        type="button"
        className="mt-6 w-full sm:w-auto rounded-full bg-[#1848a0] px-8 py-3 text-sm font-semibold text-white hover:opacity-95"
      >
        Lưu bản nháp
      </button>
    </div>
  );
}

function CV() {
  const [cvOrigin, setCvOrigin] = useState(null);
  const [template, setTemplate] = useState(null);
  /** Luồng “Có CV gốc”: đã chọn file và bấm tiếp tục → hiện Step 4 */
  const [uploadFileName, setUploadFileName] = useState(null);
  const [uploadProceed, setUploadProceed] = useState(false);
  const fileInputRef = useRef(null);

  const showStep3No = cvOrigin === "no";
  const showFormNo = showStep3No && template !== null;

  const showStep3Yes = cvOrigin === "yes" && !uploadProceed;
  const showStep4Yes = cvOrigin === "yes" && uploadProceed;

  useEffect(() => {
    if (cvOrigin !== "yes") {
      setUploadFileName(null);
      setUploadProceed(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [cvOrigin]);

  function handleYesFileChange(e) {
    const f = e.target.files?.[0];
    setUploadFileName(f ? f.name : null);
    setUploadProceed(false);
  }

  function handleUploadContinue() {
    if (uploadFileName) setUploadProceed(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-5 py-10">
        <section className="max-w-[900px] mx-auto">
          <h1 className="m-0 text-center text-xl sm:text-2xl md:text-[28px] leading-snug font-extrabold text-[#111827]">
            Chỉ mất 3 phút để có CV chuẩn Nhật với
            <br />
            công nghệ AI của Workstation JobShare.
          </h1>

          <p className="mt-6 mb-2 text-base font-bold text-[#1f2937]">Step 1</p>
          <div className="bg-[#ececf2] p-3">
            <div className="min-h-[44px] rounded-xl bg-[#1848a0] text-white flex items-center justify-center px-3 py-2 text-sm font-semibold">
              Lưu ý: Hãy <span className="mx-1 underline">ĐĂNG NHẬP</span> để tạo và tải CV về nhé.
            </div>
          </div>

          <p className="mt-8 mb-0 text-base font-bold text-[#1f2937]">Step 2</p>
          <p className="mt-2 mb-3 text-base sm:text-lg font-semibold text-[#1f2937]">
            Bạn có CV gốc chưa?
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <button
              type="button"
              onClick={() => {
                setCvOrigin("yes");
                setTemplate(null);
              }}
              className={`min-w-[100px] h-10 px-5 rounded-full border-2 text-sm font-semibold transition-colors ${
                cvOrigin === "yes"
                  ? "border-[#1848a0] bg-[#1848a0] text-white"
                  : "border-[#1848a0] text-[#1f2937] bg-white hover:bg-slate-50"
              }`}
            >
              Có
            </button>
            <button
              type="button"
              onClick={() => {
                setCvOrigin("no");
                setTemplate(null);
              }}
              className={`min-w-[100px] h-10 px-5 rounded-full border-2 text-sm font-semibold transition-colors ${
                cvOrigin === "no"
                  ? "border-[#1848a0] bg-[#1848a0] text-white"
                  : "border-[#1848a0] text-[#1f2937] bg-white hover:bg-slate-50"
              }`}
            >
              Chưa
            </button>
          </div>

          {/* —— Luồng Có: Step 3 upload → Step 4 form demo trích xuất —— */}
          {showStep3Yes && (
            <>
              <p className="mt-6 mb-0 text-base font-bold text-[#1f2937]">Step 3</p>
              <p className="mt-2 mb-1 text-base sm:text-lg font-semibold text-[#1f2937]">Tải CV gốc lên</p>
              <p className="mb-4 text-sm text-slate-600 max-w-[640px]">
                Tại bước này bạn sẽ tích hợp AI để đọc file CV và điền tự động vào các trường ở bước sau. Hiện tại chỉ cần chọn file và bấm tiếp tục để xem form demo.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm max-w-xl">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleYesFileChange}
                  className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1848a0] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-95"
                />
                {uploadFileName && (
                  <p className="mt-3 text-sm text-slate-700">
                    Đã chọn: <span className="font-medium text-[#1848a0]">{uploadFileName}</span>
                  </p>
                )}
                <button
                  type="button"
                  disabled={!uploadFileName}
                  onClick={handleUploadContinue}
                  className="mt-4 w-full sm:w-auto rounded-full bg-[#1848a0] px-6 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45 hover:enabled:opacity-95"
                >
                  Tiếp tục — xem kết quả trích xuất (demo)
                </button>
              </div>
            </>
          )}

          {showStep4Yes && (
            <>
              <p className="mt-10 mb-0 text-base font-bold text-[#1f2937]">Step 4</p>
              <p className="mt-2 mb-0 text-sm text-slate-600">
                Kiểm tra và chỉnh sửa thông tin. Dữ liệu dưới đây là <span className="font-medium">demo</span> — sau khi có AI, các ô sẽ được điền từ file{" "}
                <span className="font-mono text-slate-800">{uploadFileName}</span>.
              </p>
              <ExtractedFromUploadForm />
            </>
          )}

          {/* —— Luồng Chưa: chọn mẫu → form —— */}
          {showStep3No && (
            <>
              <p className="mt-6 mb-0 text-base font-bold text-[#1f2937]">Step 3</p>
              <p className="mt-2 mb-4 text-base sm:text-lg font-semibold text-[#1f2937]">
                Bạn đang muốn tạo CV theo mẫu nào?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTemplate("standard")}
                  className={`min-h-[42px] rounded-full border-2 border-[#1848a0] text-sm font-semibold px-3 py-2 transition-colors ${
                    template === "standard" ? "bg-[#1848a0] text-white" : "text-[#1f2937] bg-white hover:bg-slate-50"
                  }`}
                >
                  Tiêu chuẩn
                </button>
                <button
                  type="button"
                  onClick={() => setTemplate("technical")}
                  className={`min-h-[42px] rounded-full border-2 border-[#1848a0] text-sm font-semibold px-3 py-2 transition-colors ${
                    template === "technical" ? "bg-[#1848a0] text-white" : "text-[#1f2937] bg-white hover:bg-slate-50"
                  }`}
                >
                  Nhóm kỹ thuật
                </button>
                <button
                  type="button"
                  onClick={() => setTemplate("it")}
                  className={`min-h-[42px] rounded-full border-2 border-[#1848a0] text-sm font-semibold px-3 py-2 transition-colors ${
                    template === "it" ? "bg-[#1848a0] text-white" : "text-[#1f2937] bg-white hover:bg-slate-50"
                  }`}
                >
                  Nhóm IT
                </button>
              </div>

              {showFormNo && (
                <>
                  <p className="mt-8 mb-0 text-base font-bold text-[#1f2937]">Step 4</p>
                  <p className="mt-2 mb-0 text-sm text-slate-600">
                    Điền thông tin theo mẫu đã chọn (demo).
                  </p>
                  {template === "standard" && <StandardCVForm />}
                  {template === "technical" && <TechnicalCVForm />}
                  {template === "it" && <ITCVForm />}
                </>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CV;
