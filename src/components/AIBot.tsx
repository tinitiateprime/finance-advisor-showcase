"use client";
import { useState, useRef, useEffect } from "react";
import { aiResponses } from "@/data/staticData";

interface Message { role: "user" | "ai"; text: string; }

const suggestions = ["My portfolio", "Stock allocation", "Risk level", "My advisor", "Financial goals"];

function getReply(input: string): string {
  const l = input.toLowerCase();
  if (l.includes("portfolio") || l.includes("value"))   return aiResponses.portfolio;
  if (l.includes("stock") || l.includes("aapl"))        return aiResponses.stocks;
  if (l.includes("risk") || l.includes("drawdown"))     return aiResponses.risk;
  if (l.includes("advisor") || l.includes("sarah"))     return aiResponses.advisor;
  if (l.includes("goal") || l.includes("retire"))       return aiResponses.goal;
  return aiResponses.default;
}

export default function AIBot({ theme }: { theme: "dark" | "light" | "gradient" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "ai", text: aiResponses.default }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(m => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { role: "ai", text: getReply(text) }]);
    }, 900);
  };

  const isDark = theme !== "light";

  const bubbleBg    = theme === "gradient" ? "bg-gradient-to-br from-violet-950 to-cyan-950 border-white/10"
                    : theme === "dark"     ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200";
  const headerBg    = theme === "gradient" ? "bg-gradient-to-r from-violet-600 to-cyan-600"
                    : theme === "dark"     ? "bg-indigo-600"
                    : "bg-blue-600";
  const inputBg     = theme === "gradient" ? "bg-white/10 border-white/20 text-white placeholder-white/40"
                    : theme === "dark"     ? "bg-gray-800 border-gray-600 text-white placeholder-gray-500"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400";
  const sendBg      = theme === "gradient" ? "bg-gradient-to-r from-violet-600 to-cyan-600"
                    : theme === "dark"     ? "bg-indigo-600 hover:bg-indigo-500"
                    : "bg-blue-600 hover:bg-blue-500";
  const aiBubble    = theme === "gradient" ? "bg-white/10 text-white"
                    : theme === "dark"     ? "bg-gray-800 text-gray-200"
                    : "bg-blue-50 text-gray-800";
  const userBubble  = theme === "gradient" ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                    : theme === "dark"     ? "bg-indigo-600 text-white"
                    : "bg-blue-600 text-white";
  const chipBg      = theme === "gradient" ? "bg-white/10 text-white/70 hover:bg-white/20 border-white/20"
                    : theme === "dark"     ? "bg-gray-800 text-gray-400 hover:bg-gray-700 border-gray-700"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100";
  const fabBg       = theme === "gradient" ? "bg-gradient-to-br from-violet-600 to-cyan-600"
                    : theme === "dark"     ? "bg-indigo-600 hover:bg-indigo-500"
                    : "bg-blue-600 hover:bg-blue-500";
  const textMuted   = isDark ? "text-white/50" : "text-gray-400";

  return (
    <>
      {/* FAB */}
      {!open && (
        <button onClick={() => setOpen(true)}
          className={`fixed bottom-5 right-5 z-50 ${fabBg} text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-transform hover:scale-110`}
          aria-label="Open AI Chat">
          🤖
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className={`fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 max-h-[85vh] flex flex-col rounded-2xl shadow-2xl border ${bubbleBg} overflow-hidden`}>
          {/* Header */}
          <div className={`${headerBg} px-4 py-3 flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</div>
              <div>
                <p className="text-white font-semibold text-sm">FinAdvisor AI</p>
                <p className="text-white/70 text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-xl leading-none">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ maxHeight: "340px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? userBubble : aiBubble}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className={`px-4 py-3 rounded-2xl ${aiBubble}`}>
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)}
                className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition ${chipBg}`}>
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask about your finances..."
              className={`flex-1 text-sm px-3.5 py-2.5 rounded-xl border focus:outline-none transition ${inputBg}`}
            />
            <button onClick={() => send(input)}
              className={`${sendBg} text-white px-4 py-2.5 rounded-xl text-sm font-medium transition`}>
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
