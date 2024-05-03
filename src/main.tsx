import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Pocetna from "./pages/Pocetna.tsx";
import Aktivnosti from "./pages/Aktivnosti.tsx";
import Volonteri from "./pages/Volonteri.tsx";
import Udruge from "./pages/Udruge.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pocetna",
        element: <Pocetna />,
      },
      {
        path: "aktivnosti",
        element: <Aktivnosti />,
      },
      {
        path: "volonteri",
        element: <Volonteri />,
      },
      {
        path: "udruge",
        element: <Udruge />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
