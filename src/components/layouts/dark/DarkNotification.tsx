"use client";
import { useState } from "react";
import { PageView } from "@/types";

type Notification = {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  type: "alert" | "update";
  icon: string;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Portfolio Growth Alert",
    message: "Your investments increased by 5.2% this week — a solid weekly gain.",
    time: "2m ago",
    unread: true,
    type: "update",
    icon: "📈",
  },
  {
    id: 2,
    title: "AI Investment Insight",
    message: "AI suggests diversifying into renewable energy stocks based on your risk profile.",
    time: "1h ago",
    unread: true,
    type: "update",
    icon: "✦",
  },
  {
    id: 3,
    title: "Security Alert",
    message: "New login detected from Chrome on Windows. Not you? Secure your account now.",
    time: "3h ago",
    unread: false,
    type: "alert",
    icon: "🔐",
  },
  {
    id: 4,
    title: "Market Update",
    message: "NIFTY 50 closed 0.8% higher today. Sensex followed with modest gains.",
    time: "Yesterday",
    unread: false,
    type: "update",
    icon: "📊",
  },
];

export default function DarkNotification({
  onNavigate,
}: {
  onNavigate: (p: PageView) => void;
}) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [tab, setTab] = useState<"all" | "unread" | "alerts">("all");
  const [dismissing, setDismissing] = useState<number[]>([]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const dismissNotification = (id: number) => {
    setDismissing((prev) => [...prev, id]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setDismissing((prev) => prev.filter((d) => d !== id));
    }, 250);
  };

  const reviewAlert = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const filtered = notifications.filter((n) => {
    if (tab === "unread") return n.unread;
    if (tab === "alerts") return n.type === "alert";
    return true;
  });

  const unreadCount = notifications.filter((n) => n.unread).length;
  const alertCount = notifications.filter((n) => n.type === "alert").length;

  return (
    <div className="w-full h-full bg-gray-950 font-sans overflow-auto">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest text-indigo-400 font-semibold uppercase mb-1">
              Activity
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Notifications
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Stay updated with your financial activity
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={markAllRead}
              className="text-sm px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
            >
              Mark all read
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="text-sm px-3 py-1.5 border border-gray-700 hover:border-gray-500 rounded-lg text-gray-300"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-2 mb-6 text-xs text-gray-400">
          <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
            {notifications.length} total
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
            {unreadCount} unread
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
            {alertCount} alerts
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["all", "unread", "alerts"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`text-sm px-4 py-1.5 rounded-lg border transition ${
                tab === t
                  ? "bg-indigo-600 border-indigo-500"
                  : "border-gray-700 text-gray-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-500 text-sm">
              🎉 All caught up!
            </div>
          ) : (
            filtered.map((n) => (
              <div
                key={n.id}
                className={`bg-gray-900 border rounded-xl p-4 flex gap-4 transition ${
                  n.unread
                    ? n.type === "alert"
                      ? "border-yellow-500/40"
                      : "border-indigo-500/40"
                    : "border-gray-800"
                } ${
                  dismissing.includes(n.id)
                    ? "opacity-0 translate-x-4"
                    : ""
                }`}
              >
                <div className="text-xl">{n.icon}</div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-white">
                      {n.title}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {n.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">
                    {n.message}
                  </p>

                  <div className="flex gap-2 mt-3">
                    {n.type === "alert" && (
                      <button
                        onClick={() => reviewAlert(n.id)}
                        className="text-xs px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md"
                      >
                        Review
                      </button>
                    )}
                    <button
                      onClick={() => dismissNotification(n.id)}
                      className="text-xs px-3 py-1 border border-gray-700 text-gray-400 rounded-md hover:text-white"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}