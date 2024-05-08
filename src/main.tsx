import React from "react";
import ReactDOM from "react-dom/client";
import AppMemo from "./App.tsx";
import ErrorPageMemo from "./components/ErrorPage.tsx";
import PocetnaMemo from "./pages/Pocetna.tsx";
import AktivnostiMemo from "./pages/Aktivnosti.tsx";
import VolonteriMemo from "./pages/Volonteri.tsx";
import UdrugeMemo from "./pages/Udruge.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMemo />,
    errorElement: <ErrorPageMemo />,
    children: [
      {
        path: "/",
        element: <PocetnaMemo />,
      },
      {
        path: "aktivnosti",
        element: <AktivnostiMemo />,
      },
      {
        path: "volonteri",
        element: <VolonteriMemo />,
      },
      {
        path: "udruge",
        element: <UdrugeMemo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
