"use client";

import { useState } from "react";
import { PageView } from "@/types";

import DarkHome from "./DarkHome";
import DarkLogin from "./DarkLogin";
import DarkDashboard from "./DarkDashboard";
import DarkNotification from "./DarkNotification";
import DarkWorkflow from "./DarkWorkflow";

import Breadcrumb from "@/components/Breadcrumb";
import AIBot from "@/components/AIBot";

interface Props {
  page: PageView;
  onNavigate: (p: PageView) => void;
  onBack: () => void;
}

export default function DarkLayout({ page, onNavigate, onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ DEBUG (remove later)
  console.log("Current Page:", page);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm">
              FA
            </div>
            <span className="font-semibold text-base sm:text-lg">
              FinAdvisor
            </span>
          </div>

          {/* Breadcrumb */}
          <div className="hidden sm:block">
            <Breadcrumb page={page} onNavigate={onNavigate} onBack={onBack} />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm px-3 py-1.5 border border-gray-700 hover:border-gray-500 rounded-lg text-gray-300"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("dashboard")}
              className="text-sm px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-400 p-1.5"
          >
            ☰
          </button>
        </div>

        {/* Mobile Breadcrumb */}
        <div className="sm:hidden px-4 pb-2">
          <Breadcrumb page={page} onNavigate={onNavigate} onBack={onBack} />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 flex flex-col gap-2">

            {[
              { label: "🏠 Home", page: "home" },
              { label: "🔐 Login", page: "login" },
              { label: "📊 Dashboard", page: "dashboard" },
              { label: "🔔 Notifications", page: "notifications" },
              { label: "⚙ Workflow", page: "workflow" },
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page as PageView);
                  setMenuOpen(false);
                }}
                className="text-sm text-gray-300 py-2 text-left border-b border-gray-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* PAGE RENDERING */}
     <div className="flex-1 overflow-auto">
  {page === "home" && <DarkHome onNavigate={onNavigate} />}
  {page === "login" && <DarkLogin onNavigate={onNavigate} />}
  {page === "dashboard" && (
    <DarkDashboard onNavigate={onNavigate} currentPage={page} />
  )}
  {page === "notifications" && (
    <DarkNotification onNavigate={onNavigate} />
  )}
  {page === "workflow" && (
    <DarkWorkflow onNavigate={onNavigate} />
  )}
</div>

      <AIBot theme="dark" />
    </div>
  );
}