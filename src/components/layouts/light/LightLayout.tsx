"use client";
import { useState } from "react";
import { PageView } from "@/types";
import Breadcrumb from "@/components/Breadcrumb";
import LightHome from "./LightHome";
import LightLogin from "./LightLogin";
import LightDashboard from "./LightDashboard";
import LightNotification from "./LightNotification";
import LightWorkflow from "./LightWorkflow";
import AIBot from "@/components/AIBot";


interface Props {
  page: PageView;
  onNavigate: (p: PageView) => void;
  onBack: () => void;
}

export default function LightLayout({ page, onNavigate, onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
              FA
            </div>
            <span className="font-semibold text-base sm:text-lg">
              FinAdvisor
            </span>
          </div>

          {/* Breadcrumb (desktop) */}
          <div className="hidden sm:block">
            <Breadcrumb
              page={page}
              onNavigate={onNavigate}
              onBack={onBack}
              textClass="text-gray-400"
              activeClass="text-gray-900"
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm px-3 py-1.5 border border-gray-200 hover:border-blue-400 rounded-lg transition text-gray-600"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("dashboard")}
              className="text-sm px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-500 hover:text-gray-900 p-1.5"
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
          <Breadcrumb
            page={page}
            onNavigate={onNavigate}
            onBack={onBack}
            textClass="text-gray-400"
            activeClass="text-gray-900"
          />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-2">

            <button
              onClick={() => {
                onNavigate("home");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-700 py-2 text-left border-b border-gray-100"
            >
              🏠 Home
            </button>

            <button
              onClick={() => {
                onNavigate("login");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-700 py-2 text-left border-b border-gray-100"
            >
              🔐 Login
            </button>

            <button
              onClick={() => {
                onNavigate("dashboard");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-700 py-2 text-left border-b border-gray-100"
            >
              📊 Dashboard
            </button>

            <button
              onClick={() => {
                onNavigate("notification");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-700 py-2 text-left border-b border-gray-100"
            >
              🔔 Notification
            </button>

            <button
              onClick={() => {
                onNavigate("workflow");
                setMenuOpen(false);
              }}
              className="text-sm text-gray-700 py-2 text-left"
            >
              ⚡ Workflow 
            </button>

          </div>
        )}
      </nav>

      {/* Pages */}
      {page === "home" && <LightHome onNavigate={onNavigate} />}
      {page === "login" && <LightLogin onNavigate={onNavigate} />}
      {page === "dashboard" && <LightDashboard onNavigate={onNavigate} />}
      {page === "notification" && <LightNotification onNavigate={onNavigate} />}
      {page === "workflow" && <LightWorkflow onNavigate={onNavigate} />}

      {/* AI Bot */}
      <AIBot theme="light" />
    </div>
  );
}

