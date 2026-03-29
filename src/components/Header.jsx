import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Trang chủ" },
  { to: "/aboutus", label: "AboutUs" },
  { to: "/jobs", label: "Job" },
  { to: "/cv", label: "CV" },
  { to: "/news", label: "News" },
];

function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

function Header() {
  const [authUser, setAuthUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("ungvienjs_auth");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (parsed?.email) {
        setAuthUser(parsed);
      }
    } catch {
      localStorage.removeItem("ungvienjs_auth");
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("ungvienjs_auth");
    setAuthUser(null);
    closeMenu();
  };

  const navLinkClass = ({ isActive }) =>
    [
      "block rounded-lg px-3 py-2.5 text-[15px] font-bold no-underline transition-colors",
      isActive ? "bg-slate-200 text-slate-900" : "text-slate-600 hover:bg-slate-50",
    ].join(" ");

  const navLinkClassDesktop = ({ isActive }) =>
    [
      "rounded-lg px-2.5 py-2 text-[15px] font-bold no-underline md:px-2.5",
      isActive ? "bg-slate-200 text-slate-900" : "text-slate-600 hover:bg-slate-50",
    ].join(" ");

  return (
    <header className="sticky top-0 z-[100] w-full max-w-[100vw] border-b border-slate-200 bg-white font-sans">
      <div className="relative z-[102] mx-auto flex min-w-0 max-w-[1120px] items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 md:px-5">
        <NavLink
          to="/"
          className="flex min-w-0 shrink items-center no-underline"
          onClick={closeMenu}
        >
          <img src={logoImg} alt="JobShare" className="h-9 w-auto max-h-10 object-contain sm:h-10 md:h-11" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex md:gap-3 lg:gap-4">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navLinkClassDesktop}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          {authUser ? (
            <>
              <span className="max-w-[140px] truncate rounded-full bg-slate-200 px-3 py-2 text-xs font-bold text-slate-800 lg:max-w-[200px] lg:text-sm">
                Xin chào, {authUser.displayName}
              </span>
              <button type="button" className={btnGhost} onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className={btnGhost}>
                Đăng ký
              </Link>
              <Link to="/login" className={btnPrimary}>
                Đăng nhập
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[100] bg-black/35 md:hidden"
            aria-label="Đóng menu"
            onClick={closeMenu}
          />
          <div className="absolute left-0 right-0 top-full z-[101] max-h-[min(80vh,calc(100dvh-52px))] overflow-y-auto border-b border-slate-200 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col px-3 py-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navLinkClass} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="border-t border-slate-100 px-3 py-3">
              {authUser ? (
                <div className="flex flex-col gap-2">
                  <p className="m-0 text-sm font-bold text-slate-800">Xin chào, {authUser.displayName}</p>
                  <button type="button" className={`${btnGhost} w-full justify-center`} onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/register" className={`${btnGhost} w-full justify-center`} onClick={closeMenu}>
                    Đăng ký
                  </Link>
                  <Link to="/login" className={`${btnPrimary} w-full justify-center`} onClick={closeMenu}>
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

const btnGhost =
  "inline-flex items-center justify-center rounded-[10px] border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 no-underline";
const btnPrimary =
  "inline-flex items-center justify-center rounded-[10px] border border-[#1848a0] bg-[#1848a0] px-4 py-2.5 text-sm font-semibold text-white no-underline";

export default Header;
