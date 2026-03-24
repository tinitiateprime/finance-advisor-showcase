"use client";

import { CheckCircle, Clock, Loader2 } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Data Collection",
    desc: "Gathering user inputs and system data",
    status: "done",
  },
  {
    id: 2,
    title: "Processing",
    desc: "Analyzing and transforming data",
    status: "active",
  },
  {
    id: 3,
    title: "Validation",
    desc: "Checking data accuracy",
    status: "pending",
  },
  {
    id: 4,
    title: "Deployment",
    desc: "Pushing updates to production",
    status: "pending",
  },
];

const statusIcon = {
  done: <CheckCircle className="text-green-400" />,
  active: <Loader2 className="animate-spin text-cyan-400" />,
  pending: <Clock className="text-gray-400" />,
};

export default function GradientWorkflow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-indigo-950 to-cyan-950 text-white p-6">
      
      {/* Header */}
      <h1 className="text-2xl font-bold mb-8">Workflow Pipeline</h1>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 to-cyan-500 opacity-30" />

        <div className="space-y-8">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="relative flex items-start gap-4 group">
              
              {/* Icon Circle */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                {statusIcon[step.status as keyof typeof statusIcon]}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

                <div className="relative">
                  <h3 className="text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {step.desc}
                  </p>

                  {/* Status badge */}
                  <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                    {step.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Progress */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-violet-500 to-cyan-500" />
        </div>
        <p className="text-xs text-gray-400 mt-2">50% completed</p>
      </div>
    </div>
  );
}
