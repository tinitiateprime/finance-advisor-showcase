"use client";
import { useState } from "react";
import { PageView } from "@/types";
export default function GradientLogin({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  const [tab, setTab] = useState<"login"|"signup">("login");
  return (
    <div className="flex min-h-[calc(100vh-57px)] items-center justify-center px-4 sm:px-6 py-10 sm:py-14 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/10 blur-3xl" />
      <div className="relative w-full max-w-sm sm:max-w-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur bg-white/5">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl" />
        <div className="text-center mb-6 sm:mb-8 relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">FA</div>
          <h1 className="text-xl sm:text-2xl font-black">{tab==="login"?"Welcome back":"Create account"}</h1>
          <p className="text-white/50 text-xs sm:text-sm mt-1">{tab==="login"?"Sign in to continue":"Start your free account"}</p>
        </div>
        <div className="flex bg-white/10 rounded-xl p-1 mb-5 sm:mb-6">
          {(["login","signup"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${tab===t?"bg-gradient-to-r from-violet-600 to-cyan-600 text-white":"text-white/50 hover:text-white"}`}>{t==="login"?"Sign In":"Sign Up"}</button>
          ))}
        </div>
        <form className="space-y-4" onSubmit={(e)=>{e.preventDefault();onNavigate("dashboard");}}>
          {tab==="signup" && <div><label className="block text-sm text-white/60 mb-1.5">Full Name</label><input type="text" placeholder="Nikhil TS" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-400 transition" /></div>}
          <div><label className="block text-sm text-white/60 mb-1.5">Email</label><input type="email" placeholder="you@example.com" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-400 transition" /></div>
          <div><label className="block text-sm text-white/60 mb-1.5">Password</label><input type="password" placeholder="••••••••" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-400 transition" /></div>
          <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 py-2.5 sm:py-3 rounded-xl text-sm font-bold text-white transition shadow-lg shadow-violet-500/25 mt-2">{tab==="login"?"Sign In →":"Create Account →"}</button>
        </form>
      </div>
    </div>
  );
}
