"use client";
import { useState } from "react";
import { PageView } from "@/types";
export default function DarkLogin({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  const [tab, setTab] = useState<"login"|"signup">("login");
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col lg:flex-row">
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-gradient-to-br from-indigo-950 to-gray-900 p-10 xl:p-14">
        <div />
        <div>
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">Your wealth,<br />intelligently managed.</h2>
          <p className="text-indigo-300 text-base xl:text-lg mb-8">AI-driven insights to grow and protect your financial future.</p>
          <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-4 xl:p-5">
            <p className="text-white text-sm mb-4">"FinAdvisor helped me grow my portfolio by 34% in a year with zero stress."</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">RK</div>
              <div><p className="text-white text-sm font-medium">Rahul Kumar</p><p className="text-indigo-300 text-xs">Software Engineer, Bengaluru</p></div>
            </div>
          </div>
        </div>
        <p className="text-indigo-400/40 text-xs">© 2026 FinAdvisor</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14">
        <div className="w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{tab==="login"?"Welcome back":"Create account"}</h1>
          <p className="text-gray-400 text-sm mb-6 sm:mb-8">{tab==="login"?"Sign in to continue":"Start your free account"}</p>
          <div className="flex bg-gray-900 rounded-xl p-1 mb-6 sm:mb-8 border border-gray-800">
            {(["login","signup"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${tab===t?"bg-indigo-600 text-white":"text-gray-400 hover:text-white"}`}>{t==="login"?"Sign In":"Sign Up"}</button>
            ))}
          </div>
          <form className="space-y-4" onSubmit={(e)=>{e.preventDefault();onNavigate("dashboard");}}>
            {tab==="signup" && <div><label className="block text-sm text-gray-400 mb-1.5">Full Name</label><input type="text" placeholder="Nikhil TS" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition" /></div>}
            <div><label className="block text-sm text-gray-400 mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition" /></div>
            <div><label className="block text-sm text-gray-400 mb-1.5">Password</label><input type="password" placeholder="••••••••" className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition" /></div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-white transition">{tab==="login"?"Sign In →":"Create Account →"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
