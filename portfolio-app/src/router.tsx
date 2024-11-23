import { createBrowserRouter} from "react-router-dom";
import { Home } from "./pages/home";
import { PdfViewer } from "@pages/pdf-viewer";
import App from "App";
import { Projects } from "@pages/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projetos",
        element: <Projects />,
      },
      {
        path: "/view",
        element: <PdfViewer />,
      },
    ],
  },
]);