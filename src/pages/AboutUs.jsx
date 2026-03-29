import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-5 py-10">
        <h1 className="m-0 text-[40px] leading-[1.15] font-extrabold text-slate-900">
          AboutUs
        </h1>
        <p className="mt-3 text-slate-600 text-[18px]">
          Nội dung giới thiệu sẽ được hiển thị tại đây.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
