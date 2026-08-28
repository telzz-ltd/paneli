import type { RouteObject } from "react-router";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login";

export const routes: RouteObject[] = [
  { path: "/", Component: LoginPage },
  { path: "/dashboard", Component: DashboardPage },
];
