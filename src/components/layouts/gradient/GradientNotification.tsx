"use client";

import { Bell, CheckCircle, AlertTriangle, Info } from "lucide-react";

// ---------------- DATA ----------------
const notifications = [
  {
    id: 1,
    title: "Payment Successful",
    message: "Your subscription has been activated.",
    type: "success",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "System Alert",
    message: "Unusual login activity detected.",
    type: "warning",
    time: "10 min ago",
  },
  {
    id: 3,
    title: "New Feature",
    message: "Explore the new analytics dashboard.",
    type: "info",
    time: "1 hour ago",
  },
];

const trending = [
  { id: 1, name: "Oversized Hoodie", score: 96 },
  { id: 2, name: "Street Jacket", score: 89 },
  { id: 3, name: "Cargo Pants", score: 78 },
];

// ---------------- ICON MAP ----------------
const iconMap = {
  success: <CheckCircle className="text-green-400" />,
  warning: <AlertTriangle className="text-yellow-400" />,
  info: <Info className="text-blue-400" />,
};

// ---------------- COMPONENT ----------------
export default function TrendingNotificationGradient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-950 to-cyan-950 text-white p-6">

      {/* 🔴 HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
            <Bell className="text-cyan-400" />
          </div>
          <h1 className="text-2xl font-bold">Notifications & Trending</h1>
        </div>

        {/* LIVE */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="text-red-400">LIVE</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* 🔔 NOTIFICATIONS */}
        <div>
          <h2 className="text-lg font-semibold mb-6">🔔 Notifications</h2>

          <div className="space-y-4">
            {notifications.map((n) => (
              <div
                key={n.id}
                className="relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

                <div className="relative flex items-start gap-4">

                  {/* Icon */}
                  <div className="p-2 rounded-lg bg-white/10">
                    {iconMap[n.type as keyof typeof iconMap]}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{n.title}</h3>
                    <p className="text-gray-300 text-sm">{n.message}</p>
                  </div>

                  {/* Time */}
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {n.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 TRENDING */}
        <div>
          <h2 className="text-lg font-semibold mb-6">🔥 Trending Now</h2>

          <div className="space-y-4">
            {trending.map((item) => (
              <div
                key={item.id}
                className="relative group p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

                <div className="relative flex justify-between items-center">

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-300">
                      Score: {item.score}
                    </p>
                  </div>

                  {/* HOT badge */}
                  {item.score > 90 && (
                    <span className="bg-red-500 text-xs px-3 py-1 rounded-full animate-bounce">
                      🔥 HOT
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <Bell size={40} />
          <p className="mt-3">No notifications yet</p>
        </div>
      )}
    </div>
  );
}