"use client";

import { useState, useEffect } from "react";
import { Bell, CheckCircle2, AlertCircle, Info, Trash2 } from "lucide-react";

// ---------------- TYPES ----------------
type NotificationType = "success" | "warning" | "info";

type Notification = {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  time: string;
  read: boolean;
  group: "today" | "earlier";
};

type Product = {
  id: number;
  name: string;
  score: number;
};

// ---------------- ICONS ----------------
const icons: Record<NotificationType, JSX.Element> = {
  success: <CheckCircle2 className="text-green-500" size={20} />,
  warning: <AlertCircle className="text-yellow-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
};

// ---------------- MOCK DATA ----------------
const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Payment Successful",
    message: "Your subscription has been activated.",
    type: "success",
    time: "2 min ago",
    read: false,
    group: "today",
  },
  {
    id: 2,
    title: "Security Alert",
    message: "New login detected.",
    type: "warning",
    time: "10 min ago",
    read: false,
    group: "today",
  },
  {
    id: 3,
    title: "New Update",
    message: "Version 2.0 available.",
    type: "info",
    time: "1 hour ago",
    read: true,
    group: "earlier",
  },
];

const trendingData: Product[] = [
  { id: 1, name: "Oversized Hoodie", score: 96 },
  { id: 2, name: "Street Jacket", score: 89 },
  { id: 3, name: "Cargo Pants", score: 78 },
  { id: 4, name: "Graphic Tee", score: 85 },
];

// ---------------- COMPONENT ----------------
export default function TrendingNotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [trending, setTrending] = useState<Product[]>([]);
  const [filter, setFilter] = useState("today");

  useEffect(() => {
    setNotifications(initialNotifications);
    setTrending(trendingData);
  }, [filter]);

  // ACTIONS
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // GROUP RENDER
  const renderGroup = (group: "today" | "earlier", title: string) => {
    const items = notifications.filter((n) => n.group === group);
    if (!items.length) return null;

    return (
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-200" />

        <h2 className="text-xs text-gray-500 uppercase mb-4">{title}</h2>

        <div className="space-y-6">
          {items.map((n, idx) => (
            <div
              key={n.id}
              className="relative flex gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 opacity-0 animate-slide-in"
              style={{
                animationDelay: `${idx * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Dot */}
              <div className="absolute left-[-2px] top-1.5">
                <div
                  className={`w-3 h-3 rounded-full ${
                    n.read ? "bg-gray-400" : "bg-blue-500"
                  }`}
                />
              </div>

              {/* Icon */}
              <div className="mt-1 p-2 rounded-full bg-gray-100">
                {icons[n.type]}
              </div>

              {/* Content */}
              <div
                className={`${
                  !n.read ? "opacity-100" : "opacity-50"
                } flex-1`}
              >
                <div className="flex justify-between">
                  <h3
                    onClick={() => markRead(n.id)}
                    className="font-medium cursor-pointer text-gray-800"
                  >
                    {n.title}
                  </h3>
                  <span className="text-xs text-gray-400">{n.time}</span>
                </div>

                <p className="text-sm text-gray-600 mt-1">{n.message}</p>

                <div className="flex gap-3 mt-2 opacity-0 hover:opacity-100 transition">
                  {!n.read && (
                    <button
                      onClick={() => markRead(n.id)}
                      className="text-xs text-blue-500"
                    >
                      Mark read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(n.id)}
                    className="text-xs text-red-500 flex items-center gap-1"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <Bell className="text-blue-500" /> Activity & Trending
        </h1>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="text-red-500">LIVE</span>
        </div>
      </div>

      {/* FILTER (UPDATED SMALL BUTTONS) */}
      <div className="flex gap-2 mb-6">
        {["today", "week", "month"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
              filter === f
                ? "bg-black text-white scale-105"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* 🔔 NOTIFICATIONS */}
        <div>
          <div className="flex justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Notifications
            </h2>
            <button onClick={markAllRead} className="text-sm text-blue-500">
              Mark all read
            </button>
          </div>

          {renderGroup("today", "Today")}
          {renderGroup("earlier", "Earlier")}
        </div>

        {/* 🔥 TRENDING */}
        <div>
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            🔥 Trending Now
          </h2>

          <div className="grid gap-6">
            {trending.map((item) => (
              <div
                key={item.id}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Score: {item.score}
                </p>

                {item.score > 90 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full animate-bounce">
                    🔥 HOT
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(40px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}