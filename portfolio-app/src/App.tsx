import { Outlet } from "react-router-dom";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

function App() {

  return (
    <main className="m-auto grid place-items-center">
      <Header />
        <Outlet />
      <Footer />
    </main>
  );
}

export default App
