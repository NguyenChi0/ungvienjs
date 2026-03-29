import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("ungvienjs_users") || "[]");
    const existed = users.some((u) => u.email === formData.email.trim());
    if (existed) {
      setError("Email này đã tồn tại.");
      return;
    }

    const newUser = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
      createdAt: Date.now(),
    };
    localStorage.setItem("ungvienjs_users", JSON.stringify([...users, newUser]));
    localStorage.setItem(
      "ungvienjs_auth",
      JSON.stringify({
        email: newUser.email,
        displayName: newUser.fullName,
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
          <h1 className="m-0 text-[32px] font-extrabold text-slate-900">Đăng ký tài khoản</h1>
          <p className="mt-2 text-slate-500">Tạo tài khoản giả lập và lưu vào localStorage</p>

          <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
            <input
              className="h-11 rounded-lg border border-slate-300 px-3"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
            />
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
            <input
              type="password"
              className="h-11 rounded-lg border border-slate-300 px-3"
              placeholder="Xác nhận mật khẩu"
              value={formData.confirmPassword}
              onChange={(e) => setFormData((p) => ({ ...p, confirmPassword: e.target.value }))}
            />

            {error && <p className="m-0 text-[#1848a0] text-[14px] font-semibold">{error}</p>}

            <button type="submit" className="h-11 rounded-lg bg-[#1848a0] text-white font-bold">
              Đăng ký
            </button>
          </form>

          <p className="mt-4 mb-0 text-[14px] text-slate-600">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-[#1848a0] font-bold">
              Đăng nhập
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Register;
