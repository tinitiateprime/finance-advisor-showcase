"use client";

import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Setup authentication",
    status: "completed",
    progress: 100,
  },
  {
    id: 2,
    title: "Build API endpoints",
    status: "in-progress",
    progress: 60,
  },
  {
    id: 3,
    title: "Integrate frontend",
    status: "pending",
    progress: 20,
  },
  {
    id: 4,
    title: "Deploy to production",
    status: "blocked",
    progress: 0,
  },
];

const statusStyles = {
  completed: {
    icon: <CheckCircle2 size={18} className="text-green-400" />,
    text: "text-green-400",
  },
  "in-progress": {
    icon: <Clock size={18} className="text-blue-400" />,
    text: "text-blue-400",
  },
  pending: {
    icon: <Clock size={18} className="text-gray-400" />,
    text: "text-gray-400",
  },
  blocked: {
    icon: <AlertTriangle size={18} className="text-red-400" />,
    text: "text-red-400",
  },
};

export default function DarkWorkflow() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Workflow Monitor</h1>

        <button className="bg-indigo-600 px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
          + New Task
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 text-gray-400 text-sm border-b border-gray-800 pb-2 mb-4">
        <span>Task</span>
        <span>Status</span>
        <span>Progress</span>
        <span>ID</span>
      </div>

      {/* Task Rows */}
      <div className="space-y-3">
        {tasks.map((task) => {
          const style =
            statusStyles[task.status as keyof typeof statusStyles];

          return (
            <div
              key={task.id}
              className="grid grid-cols-4 items-center bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-indigo-500/40 transition"
            >
              {/* Title */}
              <span className="text-sm">{task.title}</span>

              {/* Status */}
              <div className="flex items-center gap-2 text-sm">
                {style.icon}
                <span className={style.text}>{task.status}</span>
              </div>

              {/* Progress */}
              <div className="w-full">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400">
                  {task.progress}%
                </span>
              </div>

              {/* ID */}
              <span className="text-xs text-gray-500">
                #{task.id}
              </span>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Completed", value: 1 },
          { label: "In Progress", value: 1 },
          { label: "Pending", value: 1 },
          { label: "Blocked", value: 1 },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <p className="text-xl font-bold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}