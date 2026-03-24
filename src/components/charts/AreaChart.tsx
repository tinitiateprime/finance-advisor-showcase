"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { performanceData } from "@/data/staticData";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function PortfolioAreaChart({ theme }: { theme: "dark" | "light" | "gradient" }) {
  const isDark = theme !== "light";
  const textColor = isDark ? "#9ca3af" : "#6b7280";
  const gridColor = isDark ? "#1f2937" : "#f3f4f6";
  const colors = theme === "gradient" ? ["#8b5cf6","#06b6d4"] : theme === "dark" ? ["#6366f1","#8b5cf6"] : ["#2563eb","#06b6d4"];
  const options: ApexOptions = {
    chart: { type: "area", background: "transparent", toolbar: { show: false }, animations: { enabled: true }, zoom: { enabled: false } },
    colors,
    fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0, stops: [0,90,100] } },
    stroke: { curve: "smooth", width: 2 },
    xaxis: { categories: performanceData.months, labels: { style: { colors: textColor, fontSize: "10px" } }, axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { labels: { style: { colors: textColor, fontSize: "10px" }, formatter: (v) => `$${(v/1000).toFixed(0)}k` } },
    grid: { borderColor: gridColor, strokeDashArray: 4 },
    tooltip: { theme: isDark ? "dark" : "light", y: { formatter: (v) => `$${v.toLocaleString()}` } },
    legend: { labels: { colors: textColor }, position: "top", fontSize: "12px" },
    dataLabels: { enabled: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 200 }, legend: { position: "bottom" } } }],
  };
  const series = [
    { name: "My Portfolio", data: performanceData.portfolio },
    { name: "Benchmark",    data: performanceData.benchmark },
  ];
  return <ApexChart type="area" options={options} series={series} height={240} width="100%" />;
}
