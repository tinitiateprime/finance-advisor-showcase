"use client";
import { LayoutTheme } from "@/types";
const layouts = [
  { id: "dark" as LayoutTheme, name: "Dark", desc: "Sleek dark theme with indigo accents. Sidebar layout.", tag: "Popular", tagColor: "bg-indigo-600",
    previewBg: "bg-gray-950", topBar: "bg-indigo-600", sidebar: "bg-gray-800", card1: "bg-gray-800", card2: "bg-gray-800" },
  { id: "light" as LayoutTheme, name: "Professional", desc: "Clean white layout with blue tones. Tab navigation.", tag: "Clean", tagColor: "bg-blue-600",
    previewBg: "bg-white", topBar: "bg-blue-600", sidebar: "bg-gray-100", card1: "bg-blue-50", card2: "bg-gray-50" },
  { id: "gradient" as LayoutTheme, name: "Gradient", desc: "Vibrant violet-to-cyan gradients. Floating card layout.", tag: "Bold", tagColor: "bg-violet-600",
    previewBg: "bg-gradient-to-br from-violet-950 to-cyan-950", topBar: "bg-gradient-to-r from-violet-500 to-cyan-500", sidebar: "bg-white/10", card1: "bg-white/10", card2: "bg-white/10" },
];
export default function LayoutSelector({ onSelect }: { onSelect: (t: LayoutTheme) => void }) {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12 px-2">
        <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs px-4 py-1.5 rounded-full mb-4 sm:mb-5">✦ Choose Your Experience</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">Select a Layout Theme</h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">All themes include the same pages — pick the style that fits you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
        {layouts.map((layout) => (
          <button key={layout.id} onClick={() => onSelect(layout.id)}
            className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-5 text-left hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <span className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-xs text-white px-2.5 py-1 rounded-full font-medium ${layout.tagColor}`}>{layout.tag}</span>
            <div className={`w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-4 sm:mb-5 border border-gray-700 ${layout.previewBg} p-2.5 sm:p-3 flex flex-col gap-1.5 sm:gap-2`}>
              <div className={`h-2.5 sm:h-3 w-1/2 ${layout.topBar} rounded`} />
              <div className="flex gap-1.5 sm:gap-2 flex-1">
                <div className={`w-1/4 ${layout.sidebar} rounded`} />
                <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
                  <div className="grid grid-cols-3 gap-1 h-6 sm:h-8">
                    {[0,1,2].map(i => <div key={i} className={`${layout.card1} rounded`} />)}
                  </div>
                  <div className={`flex-1 ${layout.card2} rounded`} />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-white text-base sm:text-lg mb-1">{layout.name}</h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{layout.desc}</p>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:gap-3 transition-all">
              Launch Theme <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 sm:gap-6 mt-8 sm:mt-12 text-gray-600 text-xs sm:text-sm flex-wrap justify-center">
        {["Homepage","Login","Dashboard"].map((p,i) => (
          <span key={p} className="flex items-center gap-2">{i>0 && <span>→</span>}<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-600" />{p}</span></span>
        ))}
      </div>
    </div>
  );
}

