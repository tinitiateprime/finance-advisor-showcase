"use client";
import { useState } from "react";
import { PageView } from "@/types";
import DarkHome from "./DarkHome";
import DarkLogin from "./DarkLogin";
import DarkDashboard from "./DarkDashboard";
import DarkNotification from "./DarkNotification";
import DarkWorkflow from "./DarkWorkflow"; // ✅ Added

import Breadcrumb from "@/components/Breadcrumb";
import AIBot from "@/components/AIBot";

interface Props {
  page: PageView;
  onNavigate: (p: PageView) => void;
  onBack: () => void;
}

export default function DarkLayout({ page, onNavigate, onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
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
              className="text-sm px-3 py-1.5 border border-gray-700 hover:border-gray-500 rounded-lg transition text-gray-300"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("dashboard")}
              className="text-sm px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-400 hover:text-white p-1.5"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </div>
          </button>
        </div>

        {/* Mobile Breadcrumb */}
        <div className="sm:hidden px-4 pb-2">
          <Breadcrumb page={page} onNavigate={onNavigate} onBack={onBack} />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 flex flex-col gap-2">

            <button
              onClick={() => {
                onNavigate("home");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-300 py-2 text-left border-b border-gray-800"
            >
              🏠 Home
            </button>

            <button
              onClick={() => {
                onNavigate("login");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-300 py-2 text-left border-b border-gray-800"
            >
              🔐 Login
            </button>

            <button
              onClick={() => {
                onNavigate("dashboard");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-300 py-2 text-left border-b border-gray-800"
            >
              📊 Dashboard
            </button>

            <button
              onClick={() => {
                onNavigate("notifications");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-300 py-2 text-left border-b border-gray-800"
            >
              🔔 Notifications
            </button>

            {/* ✅ Workflow Button */}
            <button
              onClick={() => {
                onNavigate("workflow");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-300 py-2 text-left"
            >
              ⚙ Workflow
            </button>

          </div>
        )}
      </nav>

      {/* Page Rendering */}
      {page === "home" && <DarkHome onNavigate={onNavigate} />}
      {page === "login" && <DarkLogin onNavigate={onNavigate} />}
      {page === "dashboard" && <DarkDashboard onNavigate={onNavigate} currentPage={"home"} />}
      {page === "notifications" && <DarkNotification onNavigate={onNavigate} />}
      {page === "workflow" && <DarkWorkflow {...({ onNavigate } as any)} />} {/* ✅ Added */}
      <AIBot theme="dark" />
    </div>
  );
}