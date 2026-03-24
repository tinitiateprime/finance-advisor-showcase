"use client";
import { useState } from "react";
import { kpis, transactions } from "@/data/staticData";
import { PageView } from "@/types";
import PortfolioAreaChart from "@/components/charts/AreaChart";
import AllocationDonutChart from "@/components/charts/DonutChart";

const navItems = [
  { icon: "⬡", label: "Overview", page: "home" },
  { icon: "📊", label: "Reports", page: "dashboard" },
  { icon: "🔐", label: "Account", page: "login" },
  { icon: "🔔", label: "Notifications", page: "notifications" },
  { icon: "⚙️", label: "Workflow", page: "workflow" },
];

export default function DarkDashboard({
  onNavigate,
  currentPage,
}: {
  onNavigate: (p: PageView) => void;
  currentPage: PageView;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-57px)] relative">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 md:top-[57px] z-40 md:z-auto h-full md:h-[calc(100vh-57px)]
        flex flex-col w-56 bg-gray-900 border-r border-gray-800 p-4 sm:p-6 gap-1
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4 md:hidden">
          <span className="font-semibold text-sm">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 text-xl"
          >
            ✕
          </button>
        </div>

        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              onNavigate(item.page as PageView);
              setSidebarOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition w-full text-left
            ${
              item.page === currentPage
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto min-w-0">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              ☰
            </button>

            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-400 text-sm">
                Portfolio analytics · FY 2025
              </p>
            </div>
          </div>

          <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm">
            ↓ Export
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5"
            >
              <p className="text-gray-500 text-xs mb-2">{k.label}</p>
              <p className="text-2xl font-bold">{k.value}</p>

              <span
                className={`text-xs font-medium ${
                  k.up ? "text-green-400" : "text-red-400"
                }`}
              >
                {k.up ? "▲" : "▼"} {k.delta}
              </span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-1">Portfolio Performance</h3>
            <p className="text-gray-500 text-xs mb-4">
              vs S&P 500 Benchmark
            </p>
            <PortfolioAreaChart theme="dark" />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="font-semibold mb-1">Asset Allocation</h3>
            <p className="text-gray-500 text-xs mb-4">
              Current distribution
            </p>
            <AllocationDonutChart theme="dark" />
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="font-semibold mb-5">Recent Transactions</h3>

          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.name}
                className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold
                    ${
                      tx.positive
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {tx.positive ? "↑" : "↓"}
                  </div>

                  <div>
                    <p className="text-sm font-medium">{tx.name}</p>
                    <p className="text-xs text-gray-500">{tx.type}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      tx.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {tx.amount}
                  </p>
                  <p className="text-xs text-gray-600">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
