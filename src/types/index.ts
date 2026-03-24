export type LayoutTheme = "dark" | "light" | "gradient";

export type PageView =
  | "home"
  | "login"
  | "dashboard"
  | "workflow"
  | "notifications"
  | "reports"
  | "settings";

export interface AppState {
  theme: LayoutTheme | null;
  page: PageView;
}

