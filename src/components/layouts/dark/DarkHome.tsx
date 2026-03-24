"use client";
import { PageView } from "@/types";
import { advisors, kpis } from "@/data/staticData";
import { ArrowRight } from "lucide-react";
import FAQ from "@/app/FAQ/page";

export default function DarkHome({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      <section className="py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <span className="inline-block text-xs bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-full mb-4 sm:mb-5">AI-Powered Financial Guidance</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">Smart Financial <br /><span className="text-indigo-400">Decisions Start Here</span></h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">Personalized investment strategies, real-time portfolio tracking, and expert advisor matching.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={() => onNavigate("login")} className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-medium transition text-center">Get Started</button>
            <button onClick={() => onNavigate("dashboard")} className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-xl text-gray-300 transition text-center">View Dashboard →</button>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">Portfolio Overview</span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">● Live</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mb-1">$15,000</p>
          <p className="text-green-400 text-sm mb-4 sm:mb-6">▲ +50% this year</p>
          <div className="h-16 sm:h-20 bg-gradient-to-r from-indigo-900/40 to-indigo-600/20 rounded-xl flex items-end px-3 sm:px-4 pb-2 sm:pb-3 gap-1">
            {[30,45,35,60,50,75,65,85,70,90,80,100].map((h,i) => (
              <div key={i} className="flex-1 bg-indigo-500 rounded-sm opacity-70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
            {kpis.slice(0,2).map((k) => (
              <div key={k.label} className="bg-gray-800 rounded-xl p-2.5 sm:p-3">
                <p className="text-xs text-gray-500">{k.label}</p>
                <p className="font-bold mt-1 text-sm sm:text-base">{k.value}</p>
                <p className={`text-xs ${k.up?"text-green-400":"text-red-400"}`}>{k.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16 md:pb-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Top Advisors</h2>
        <p className="text-gray-500 text-sm mb-6 sm:mb-8">Matched to your financial goals</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advisors.map((a) => (
            <div key={a.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-indigo-500/50 transition">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold flex-shrink-0">{a.avatar}</div>
                <div><p className="font-semibold">{a.name}</p><p className="text-gray-400 text-xs">{a.role}</p></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mb-4"><span>⭐ {a.rating}</span><span>{a.clients} clients</span></div>
              <button onClick={() => onNavigate("login")} className="w-full border border-indigo-500/40 text-indigo-400 hover:bg-indigo-600 hover:text-white py-2 rounded-xl text-sm transition">Book Consultation</button>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </div>
  );
}
