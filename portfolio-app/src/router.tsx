import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { PdfViewer } from "@pages/pdf-viewer";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home/>
          </>
        }
      />
      <Route
        path="view"
        element={
          <>
            <PdfViewer/>
          </>
        }
      />
    </Routes>
  )
}