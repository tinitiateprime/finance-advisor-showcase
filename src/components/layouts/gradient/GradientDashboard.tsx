"use client";
import { kpis, transactions } from "@/data/staticData";
import { PageView } from "@/types";
import PortfolioAreaChart from "@/components/charts/AreaChart";
import AllocationDonutChart from "@/components/charts/DonutChart";

export default function GradientDashboard({ onNavigate }: { onNavigate: (p: PageView) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-white/50 text-xs sm:text-sm">Portfolio analytics · FY 2025</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Home", page: "home" },
            { label: "Notification", page: "notifications" },
            { label: "Workflow", page: "workflow" },
            { label: "Account", page: "login" },
            
          ].map((b) => (
            <button
              key={b.label}
              onClick={() => onNavigate(b.page as PageView)}
              className="border border-white/20 hover:border-white/40 text-white/60 hover:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition backdrop-blur bg-white/5"
            >
              {b.label}
            </button>
          ))}

          <button className="bg-gradient-to-r from-violet-600 to-cyan-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition">
            ↓ Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className="relative border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 backdrop-blur bg-white/5 hover:bg-white/10 transition overflow-hidden"
          >
            <div
              className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-25 ${
                i % 2 === 0 ? "bg-violet-500" : "bg-cyan-500"
              }`}
            />
            <p className="text-white/40 text-xs mb-1 sm:mb-2 truncate">{k.label}</p>
            <p className="text-lg sm:text-2xl font-black">{k.value}</p>
            <span className={`text-xs font-semibold ${k.up ? "text-cyan-400" : "text-red-400"}`}>
              {k.up ? "▲" : "▼"} {k.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="lg:col-span-2 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur bg-white/5">
          <h3 className="font-bold mb-1 text-sm sm:text-base">Portfolio Performance</h3>
          <p className="text-white/40 text-xs mb-3 sm:mb-4">vs S&P 500 Benchmark</p>
          <PortfolioAreaChart theme="gradient" />
        </div>

        <div className="border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur bg-white/5">
          <h3 className="font-bold mb-1 text-sm sm:text-base">Asset Allocation</h3>
          <p className="text-white/40 text-xs mb-3 sm:mb-4">Current distribution</p>
          <AllocationDonutChart theme="gradient" />
        </div>
      </div>

      <div className="border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur bg-white/5">
        <h3 className="font-bold mb-4 sm:mb-5 text-sm sm:text-base">Recent Transactions</h3>

        <div className="space-y-2 sm:space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.name}
              className="flex items-center justify-between py-2 sm:py-2.5 border-b border-white/10 last:border-0 gap-2"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    tx.positive
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {tx.positive ? "↑" : "↓"}
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold truncate">{tx.name}</p>
                  <p className="text-xs text-white/40">{tx.type}</p>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <p
                  className={`text-xs sm:text-sm font-bold ${
                    tx.positive ? "text-cyan-400" : "text-red-400"
                  }`}
                >
                  {tx.amount}
                </p>
                <p className="text-xs text-white/30">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}