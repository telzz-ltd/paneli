import { ApiDocsPage } from "@/pages/api-docs";
import { DashboardPage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

export const router = createBrowserRouter([
  { path: routes.login, Component: LoginPage },
  { path: routes.index, Component: DashboardPage },
  { path: routes.apiDocs, Component: ApiDocsPage },
]);
