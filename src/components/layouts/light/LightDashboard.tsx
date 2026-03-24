"use client";

import { useState } from "react";
import { kpis, transactions } from "@/data/staticData";
import { PageView } from "@/types";
import PortfolioAreaChart from "@/components/charts/AreaChart";
import AllocationDonutChart from "@/components/charts/DonutChart";

export default function LightDashboard({
  onNavigate,
}: {
  onNavigate: (p: PageView) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8">
      
      {/* Tabs + Dropdown */}
      <div className="overflow-x-auto mb-6 sm:mb-8">
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit min-w-max relative">

          {/* Tabs */}
          {[
            { label: "Overview", page: "home" },
            { label: "Reports", page: "dashboard" },
            { label: "Notification", page: "notification" },
            { label: "Workflow", page: "workflow" },
          ].map((t) => (
            <button
              key={t.label}
              onClick={() => onNavigate(t.page as PageView)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                t.page === "dashboard"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}

          {/* Account Dropdown */}
          <div className="relative">
         

            {openDropdown && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-md z-50 overflow-hidden">
                
                <button
                  onClick={() => {
                    onNavigate("login");
                    setOpenDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Account
                </button>

                <button
                  onClick={() => {
                    onNavigate("notifications");
                    setOpenDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Notification
                </button>

                <button
                  onClick={() => {
                    onNavigate("workflow");
                    setOpenDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Workflow
                </button>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Financial Reports
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Portfolio analytics · FY 2025
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition self-start sm:self-auto">
          ↓ Export PDF
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-400 text-xs mb-1 sm:mb-2 truncate">
              {k.label}
            </p>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              {k.value}
            </p>
            <span
              className={`text-xs font-medium ${
                k.up ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {k.up ? "▲" : "▼"} {k.delta}
            </span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
            Portfolio Performance
          </h3>
          <p className="text-gray-400 text-xs mb-3 sm:mb-4">
            vs S&P 500 Benchmark
          </p>
          <PortfolioAreaChart theme="light" />
        </div>

        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
            Asset Allocation
          </h3>
          <p className="text-gray-400 text-xs mb-3 sm:mb-4">
            Current distribution
          </p>
          <AllocationDonutChart theme="light" />
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4 sm:mb-5 text-sm sm:text-base">
          Recent Transactions
        </h3>

        <div className="space-y-2 sm:space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.name}
              className="flex items-center justify-between py-2 sm:py-2.5 border-b border-gray-100 last:border-0 gap-2"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-sm font-bold ${
                    tx.positive
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {tx.positive ? "↑" : "↓"}
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                    {tx.name}
                  </p>
                  <p className="text-xs text-gray-400">{tx.type}</p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className={`text-xs sm:text-sm font-semibold ${
                    tx.positive
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {tx.amount}
                </p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}