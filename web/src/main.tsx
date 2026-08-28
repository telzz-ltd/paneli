import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AntdConfig } from "./components/antd-config";
import { routes } from "./routes";
import "./styles.css";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AntdConfig>
      <RouterProvider router={router} />
    </AntdConfig>,
  );
}
