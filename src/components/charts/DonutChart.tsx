"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { allocationData } from "@/data/staticData";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function AllocationDonutChart({ theme }: { theme: "dark" | "light" | "gradient" }) {
  const isDark = theme !== "light";
  const textColor = isDark ? "#d1d5db" : "#374151";
  const colors = theme === "gradient" ? ["#8b5cf6","#06b6d4","#f59e0b","#ec4899","#64748b"]
    : theme === "dark" ? ["#6366f1","#8b5cf6","#06b6d4","#f59e0b","#64748b"]
    : ["#2563eb","#0891b2","#059669","#d97706","#94a3b8"];
  const options: ApexOptions = {
    chart: { type: "donut", background: "transparent", animations: { enabled: true } },
    colors,
    labels: allocationData.labels,
    legend: { position: "bottom", labels: { colors: textColor }, fontSize: "11px" },
    plotOptions: { pie: { donut: { size: "60%", labels: { show: true, total: { show: true, label: "Total", color: textColor, formatter: () => "100%" } } } } },
    dataLabels: { enabled: false },
    tooltip: { theme: isDark ? "dark" : "light", y: { formatter: (v) => `${v}%` } },
    responsive: [{ breakpoint: 480, options: { chart: { height: 220 }, legend: { position: "bottom" } } }],
  };
  return <ApexChart type="donut" options={options} series={allocationData.values} height={260} width="100%" />;
}
