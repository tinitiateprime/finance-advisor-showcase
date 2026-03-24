"use client";
import { PageView } from "@/types";
import { advisors, kpis } from "@/data/staticData";
import FAQ from "@/app/FAQ/page";
export default function LightHome({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <section className="py-12 sm:py-16 md:py-20 text-center max-w-3xl mx-auto">
        <span className="inline-block text-xs bg-blue-100 text-blue-700 border border-blue-200 px-3 py-1 rounded-full mb-4 sm:mb-5">AI-Powered Financial Guidance</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">Smart Financial Decisions <span className="text-blue-600">Start Here</span></h1>
        <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">Personalized investment strategies, real-time portfolio tracking, and expert advisor matching.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button onClick={() => onNavigate("login")} className="bg-blue-600 hover:bg-blue-500 px-6 sm:px-8 py-3 rounded-xl font-medium text-white transition shadow-lg shadow-blue-100">Get Started Free</button>
          <button onClick={() => onNavigate("dashboard")} className="border border-gray-300 hover:border-blue-400 px-6 sm:px-8 py-3 rounded-xl text-gray-600 transition">View Dashboard →</button>
        </div>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm hover:shadow-md transition">
            <p className="text-gray-400 text-xs mb-1 sm:mb-2 truncate">{k.label}</p>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">{k.value}</p>
            <span className={`text-xs font-medium ${k.up?"text-emerald-600":"text-red-500"}`}>{k.up?"▲":"▼"} {k.delta}</span>
          </div>
        ))}
      </section>
      <section className="pb-12 sm:pb-20">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div><h2 className="text-xl sm:text-2xl font-bold text-gray-900">Top Advisors</h2><p className="text-gray-500 text-xs sm:text-sm">Matched to your financial goals</p></div>
          <button onClick={() => onNavigate("login")} className="text-xs sm:text-sm text-blue-600 hover:underline whitespace-nowrap">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advisors.map((a) => (
            <div key={a.name} className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white flex-shrink-0">{a.avatar}</div>
                <div><p className="font-semibold text-gray-900 text-sm sm:text-base">{a.name}</p><p className="text-gray-400 text-xs">{a.role}</p></div>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-4"><span>⭐ {a.rating}</span><span>{a.clients} clients</span></div>
              <button onClick={() => onNavigate("login")} className="w-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 py-2 rounded-xl text-sm transition border border-blue-100 hover:border-transparent">Book Consultation</button>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </div>
  );
}
