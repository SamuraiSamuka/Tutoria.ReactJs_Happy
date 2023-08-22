import { createRoot } from "react-dom/client";
import Root from "./Components/Root/Root.tsx";
import "./Tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing.tsx";
import OrphanagesMap from "./Pages/OrphanagesMap.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/app",
        element: <OrphanagesMap />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);