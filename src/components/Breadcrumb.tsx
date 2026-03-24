"use client";
import { PageView } from "@/types";

const crumbMap: Record<PageView, { label: string; path: PageView | null }[]> = {
  home: [
    { label: "Home", path: null }
  ],

  login: [
    { label: "Home", path: "home" },
    { label: "Account", path: null }
  ],

  dashboard: [
    { label: "Home", path: "home" },
    { label: "Dashboard", path: null }
  ],

  notification: [
    { label: "Home", path: "home" },
    { label: "Notification", path: null }
  ],

  workflow: [
    { label: "Home", path: "home" },
    { label: "Workflow", path: null }
  ],
};

export default function Breadcrumb({
  page,
  onNavigate,
  onBack,
  textClass = "text-gray-400",
  activeClass = "text-gray-900"
}: {
  page: PageView;
  onNavigate: (p: PageView) => void;
  onBack: () => void;
  textClass?: string;
  activeClass?: string;
}) {
  const crumbs = crumbMap[page] || [];

  return (
    <div className="flex items-center gap-1.5 text-xs sm:text-sm flex-wrap">
      
      {/* Themes (Back Button) */}
      <button
        onClick={onBack}
        className={`${textClass} hover:opacity-80 transition flex items-center gap-1 whitespace-nowrap`}
      >
        ← Themes
      </button>

      <span className={textClass}>/</span>

      {crumbs.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1.5">
          {i > 0 && <span className={textClass}>/</span>}

          {c.path ? (
            <button
              onClick={() => onNavigate(c.path!)}
              className={`${textClass} hover:opacity-80 transition whitespace-nowrap`}
            >
              {c.label}
            </button>
          ) : (
            <span className={`${activeClass} font-medium whitespace-nowrap`}>
              {c.label}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}