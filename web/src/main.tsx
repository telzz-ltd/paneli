import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/toast";
import { router } from "./config/router";
import "./styles.css";

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>,
  );
}
