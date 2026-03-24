"use client";
import { useState } from "react";
import LayoutSelector from "@/components/LayoutSelector";
import DarkLayout from "@/components/layouts/dark/DarkLayout";
import LightLayout from "@/components/layouts/light/LightLayout";
import GradientLayout from "@/components/layouts/gradient/GradientLayout";
import { AppState, LayoutTheme, PageView } from "@/types";
export default function RootPage() {
  const [state, setState] = useState<AppState>({ theme: null, page: "home" });
  const selectTheme = (theme: LayoutTheme) => setState({ theme, page: "home" });
  const navigate = (page: PageView) => setState((s) => ({ ...s, page }));
  const goBack = () => setState({ theme: null, page: "home" });
  if (!state.theme) return <LayoutSelector onSelect={selectTheme} />;
  const props = { page: state.page, onNavigate: navigate, onBack: goBack };
  return (
    <>
      {state.theme === "dark"     && <DarkLayout     {...props} />}
      {state.theme === "light"    && <LightLayout    {...props} />}
      {state.theme === "gradient" && <GradientLayout {...props} />}
    </>
  );
}


