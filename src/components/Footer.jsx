import logoImg from "../assets/logo.png";

function Footer() {
  const footerExplore = ["Trang chủ", "Về chúng tôi", "Tính năng", "Tin tức", "FAQ"];
  const footerSupport = ["Trợ giúp", "Hướng dẫn", "Liên hệ", "Điều khoản sử dụng"];
  const footerContact = ["Hotline: 1900 xxxx", "Email: support@jobshare.vn", "Địa chỉ: Nhật Bản"];
  const bottomLinks = ["Điều khoản", "Chính sách bảo mật"];

  return (
    <footer className="mt-14 bg-[#212529] py-10 pb-7 font-sans text-[#d1d5db]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-5">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-[280px]">
            <div className="mb-[18px] flex items-center gap-2">
              <img src={logoImg} alt="JobShare" className="h-auto max-w-full w-[min(260px,100%)]" />
            </div>
            <p className="mb-[18px] text-sm leading-relaxed text-[#ADB5BD]">
              Cầu nối tin cậy giữa ứng viên Việt Nam và doanh nghiệp Nhật Bản.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Facebook", text: "f", href: "https://facebook.com" },
                { label: "Z", text: "Z", href: "#" },
                { label: "Email", text: "✉", href: "mailto:support@jobshare.vn" },
                { label: "YouTube", text: "▶", href: "https://youtube.com" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/[0.08] text-lg font-bold text-white no-underline transition-colors hover:bg-white/15"
                  aria-label={c.label}
                >
                  {c.text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-black uppercase tracking-[0.08em] text-white">Khám phá</h4>
            <ul className="m-0 list-none p-0">
              {footerExplore.map((label) => (
                <li key={label} className="mb-3 last:mb-0">
                  <a href="#" className="text-sm text-[#ADB5BD] no-underline transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-black uppercase tracking-[0.08em] text-white">Hỗ trợ</h4>
            <ul className="m-0 list-none p-0">
              {footerSupport.map((label) => (
                <li key={label} className="mb-3 last:mb-0">
                  <a href="#" className="text-sm text-[#ADB5BD] no-underline transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-3.5 text-[13px] font-black uppercase tracking-[0.08em] text-white">Liên hệ</h4>
            <ul className="m-0 list-none p-0">
              {footerContact.map((item) => (
                <li key={item} className="mb-3 last:mb-0">
                  <a href="#" className="text-sm text-[#ADB5BD] no-underline transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-[18px] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="m-0 text-center text-[13px] text-[#ADB5BD] sm:text-left">
            © {new Date().getFullYear()} UngVienJS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end">
            {bottomLinks.map((t) => (
              <a
                key={t}
                href="#"
                className="text-[13px] text-[#ADB5BD] no-underline transition-colors hover:text-white"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
