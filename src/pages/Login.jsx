import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("ungvienjs_users") || "[]");
    const matched = users.find(
      (u) => u.email === formData.email.trim() && u.password === formData.password
    );

    if (!matched) {
      setError("Sai email hoặc mật khẩu.");
      return;
    }

    localStorage.setItem(
      "ungvienjs_auth",
      JSON.stringify({
        email: matched.email,
        displayName: matched.fullName || matched.email.split("@")[0],
        loggedInAt: Date.now(),
      })
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-5 py-10">
        <div className="max-w-[500px] mx-auto bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="m-0 text-[32px] font-extrabold text-slate-900">Đăng nhập</h1>
          <p className="mt-2 text-slate-500">Đăng nhập bằng tài khoản đã đăng ký</p>

          <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              className="h-11 rounded-lg border border-slate-300 px-3"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            />
            <input
              type="password"
              className="h-11 rounded-lg border border-slate-300 px-3"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
            />

            {error && <p className="m-0 text-[#1848a0] text-[14px] font-semibold">{error}</p>}

            <button type="submit" className="h-11 rounded-lg bg-[#1848a0] text-white font-bold">
              Đăng nhập
            </button>
          </form>

          <p className="mt-4 mb-0 text-[14px] text-slate-600">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-[#1848a0] font-bold">
              Đăng ký
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
