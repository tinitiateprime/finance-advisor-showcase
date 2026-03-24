"use client";
import { useState } from "react";
import { PageView } from "@/types";
export default function LightLogin({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  const [tab, setTab] = useState<"login"|"signup">("login");
  return (
    <div className="flex min-h-[calc(100vh-57px)] items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4 sm:px-6 py-10 sm:py-14">
      <div className="w-full max-w-sm sm:max-w-md bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white text-lg sm:text-xl mx-auto mb-3 sm:mb-4">FA</div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{tab==="login"?"Welcome back":"Create account"}</h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">{tab==="login"?"Sign in to your account":"Get started today"}</p>
        </div>
        <div className="flex bg-gray-100 rounded-xl p-1 mb-5 sm:mb-6">
          {(["login","signup"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${tab===t?"bg-white text-blue-600 shadow-sm":"text-gray-500 hover:text-gray-700"}`}>{t==="login"?"Sign In":"Sign Up"}</button>
          ))}
        </div>
        <form className="space-y-4" onSubmit={(e)=>{e.preventDefault();onNavigate("dashboard");}}>
          {tab==="signup" && <div><label className="block text-sm text-gray-600 mb-1.5 font-medium">Full Name</label><input type="text" placeholder="Nikhil TS" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" /></div>}
          <div><label className="block text-sm text-gray-600 mb-1.5 font-medium">Email</label><input type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" /></div>
          <div><label className="block text-sm text-gray-600 mb-1.5 font-medium">Password</label><input type="password" placeholder="••••••••" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" /></div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-white transition shadow-lg shadow-blue-100 mt-2">{tab==="login"?"Sign In →":"Create Account →"}</button>
        </form>
      </div>
    </div>
  );
}
