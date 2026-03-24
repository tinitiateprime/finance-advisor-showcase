"use client";

import { MoreVertical } from "lucide-react";

const workflowData = [
  {
    title: "To Do",
    tasks: [
      { id: 1, name: "Design login page", priority: "High" },
      { id: 2, name: "Setup database schema", priority: "Medium" },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      { id: 3, name: "API integration", priority: "High" },
    ],
  },
  {
    title: "Review",
    tasks: [
      { id: 4, name: "Code review for dashboard", priority: "Low" },
    ],
  },
  {
    title: "Done",
    tasks: [
      { id: 5, name: "Project setup", priority: "Low" },
    ],
  },
];

const priorityColor = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-yellow-100 text-yellow-600",
  Low: "bg-green-100 text-green-600",
};

export default function LightWorkflow() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Workflow Board
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          + Add Task
        </button>
      </div>

      {/* Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workflowData.map((column) => (
          <div
            key={column.title}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-700 font-medium">
                {column.title}
              </h2>
              <MoreVertical size={16} className="text-gray-400" />
            </div>

            {/* Tasks */}
            <div className="space-y-3 flex-1">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
                >
                  <p className="text-sm text-gray-800 font-medium">
                    {task.name}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${priorityColor[task.priority as keyof typeof priorityColor]}`}
                    >
                      {task.priority}
                    </span>

                    <span className="text-xs text-gray-400">
                      Task #{task.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Add task placeholder */}
            <button className="mt-4 text-sm text-gray-500 hover:text-blue-600 text-left">
              + Add task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}