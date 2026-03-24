
import { useState } from "react";
import { PageView } from "@/types";
import Breadcrumb from "@/components/Breadcrumb";
import GradientHome from "./GradientHome";
import GradientLogin from "./GradientLogin";
import GradientDashboard from "./GradientDashboard";
import GradientNotification from "./GradientNotification";
import GradientWorkflow from "./GradientWorkflow";
import AIBot from "@/components/AIBot";

interface Props {
  page: PageView;
  onNavigate: (p: PageView) => void;
  onBack: () => void;
}

export default function GradientLayout({ page, onNavigate, onBack }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Render page function (cleaner than multiple conditions)
  const renderPage = () => {
    // GradientWorkflow's and GradientNotification's props are not typed to accept onNavigate in their declarations;
    // cast them to any here so we can pass the prop without a type error.
    const WorkflowComp: any = GradientWorkflow;
    const NotificationComp: any = GradientNotification;

    if (page === "home") return <GradientHome onNavigate={onNavigate} />;
    if (page === "login") return <GradientLogin onNavigate={onNavigate} />;
    if (page === "dashboard") return <GradientDashboard onNavigate={onNavigate} />;
    if (page === "notifications") return <NotificationComp onNavigate={onNavigate} />;
    if (page === "workflow") return <WorkflowComp onNavigate={onNavigate} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-gray-950 to-cyan-950 text-white font-sans">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
              FA
            </div>
            <span className="font-semibold text-base sm:text-lg">FinAdvisor</span>
          </div>

          {/* Breadcrumb desktop */}
          <div className="hidden sm:block">
            <Breadcrumb
              page={page}
              onNavigate={onNavigate}
              onBack={onBack}
              textClass="text-white/50"
              activeClass="text-white"
            />
          </div>

          {/* Desktop buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => onNavigate("login")}
              className="text-sm px-3 py-1.5 border border-white/20 hover:border-white/40 rounded-lg transition text-white/70"
            >
              Login
            </button>

            <button
              onClick={() => onNavigate("dashboard")}
              className="text-sm px-3 py-1.5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg transition font-medium"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white/60 hover:text-white p-1.5"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
            </div>
          </button>
        </div>

        {/* Mobile breadcrumb */}
        <div className="sm:hidden px-4 pb-2">
          <Breadcrumb
            page={page}
            onNavigate={onNavigate}
            onBack={onBack}
            textClass="text-white/50"
            activeClass="text-white"
          />
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white/5 border-t border-white/10 px-4 py-3 flex flex-col gap-2">

            <button
              onClick={() => {
                onNavigate("home");
                setMenuOpen(false);
              }}
              className="text-sm text-white/70 py-2 text-left border-b border-white/10"
            >
              🏠 Home
            </button>

            <button
              onClick={() => {
                onNavigate("login");
                setMenuOpen(false);
              }}
              className="text-sm text-white/70 py-2 text-left border-b border-white/10"
            >
              🔐 Login
            </button>

            <button
              onClick={() => {
                onNavigate("dashboard");
                setMenuOpen(false);
              }}
              className="text-sm text-white/70 py-2 text-left border-b border-white/10"
            >
              📊 Dashboard
            </button>

            <button
              onClick={() => {
                onNavigate("notifications");
                setMenuOpen(false);
              }}
              className="text-sm text-white/70 py-2 text-left border-b border-white/10"
            >
              🔔 Notification
            </button>

            <button
              onClick={() => {
                onNavigate("workflow");
                setMenuOpen(false);
              }}
              className="text-sm text-white/70 py-2 text-left"
            >
              ⚡ Workflow
            </button>

          </div>
        )}
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* AI Assistant */}
      <AIBot theme="gradient" />
    </div>
  );
}
