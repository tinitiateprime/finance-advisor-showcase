import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "FinAdvisor", description: "AI-Powered Financial Advisor" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
