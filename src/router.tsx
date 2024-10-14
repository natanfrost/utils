import { createBrowserRouter } from "react-router-dom";
import { TranslateKeyConverter } from "./pages/TranslateKeyConverter";
import { MockGenerator } from "./pages/MockGenerator";
import { Header } from "./components/Header";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: '/utils',
    element: <App />,
    children: [
      {
        path: "/utils/translate-key-converter",
        element: <TranslateKeyConverter />,
      },
      {
        path: "/utils/mock-file-generator",
        element: <MockGenerator />,
      },
    ]
  },
]);