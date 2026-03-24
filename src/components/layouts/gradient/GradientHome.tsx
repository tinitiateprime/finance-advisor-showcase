"use client";
import { PageView } from "@/types";
import { advisors, kpis } from "@/data/staticData";
import FAQ from "@/app/FAQ/page";
export default function GradientHome({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <section className="py-14 sm:py-20 md:py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-cyan-600/10 blur-3xl rounded-full -z-10" />
        <span className="inline-block text-xs bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4 sm:mb-6">✦ AI-Powered Financial Guidance</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 sm:mb-6">Smart Financial <br /><span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Decisions Start Here</span></h1>
        <p className="text-white/60 text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">Personalized investment strategies, real-time portfolio tracking, and expert advisor matching.</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button onClick={() => onNavigate("login")} className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold transition shadow-lg shadow-violet-500/25">Get Started Free →</button>
          <button onClick={() => onNavigate("dashboard")} className="border border-white/20 hover:border-white/40 px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-white/70 hover:text-white transition backdrop-blur bg-white/5">View Dashboard</button>
        </div>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20">
        {kpis.map((k,i) => (
          <div key={k.label} className="relative rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 backdrop-blur bg-white/5 hover:bg-white/10 transition overflow-hidden">
            <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full blur-xl opacity-30 ${i%2===0?"bg-violet-500":"bg-cyan-500"}`} />
            <p className="text-white/40 text-xs mb-1 sm:mb-2 truncate">{k.label}</p>
            <p className="text-lg sm:text-2xl font-black">{k.value}</p>
            <span className={`text-xs font-semibold ${k.up?"text-cyan-400":"text-red-400"}`}>{k.up?"▲":"▼"} {k.delta}</span>
          </div>
        ))}
      </section>
      <section className="pb-14 sm:pb-24">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Top Advisors</h2>
          <p className="text-white/50 text-sm">Matched to your financial goals</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advisors.map((a,i) => (
            <div key={a.name} className="relative border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 backdrop-blur bg-white/5 hover:bg-white/10 transition overflow-hidden group">
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition ${i%2===0?"bg-violet-500":"bg-cyan-500"}`} />
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center font-bold text-sm flex-shrink-0">{a.avatar}</div>
                <div><p className="font-bold text-sm sm:text-base">{a.name}</p><p className="text-white/50 text-xs">{a.role}</p></div>
              </div>
              <div className="flex justify-between text-xs sm:text-sm text-white/50 mb-4"><span>⭐ {a.rating}</span><span>{a.clients} clients</span></div>
              <button onClick={() => onNavigate("login")} className="w-full bg-gradient-to-r from-violet-600/40 to-cyan-600/40 hover:from-violet-600 hover:to-cyan-600 border border-white/20 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition">Book Consultation</button>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </div>
  );
}
