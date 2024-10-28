import { Hero } from "@components/hero";
import { Header } from "@components/header";
import { Project } from "@components/project";
import { Footer } from "@components/footer";

export function Home() {
  return (
    <main className="m-auto grid place-items-center">
      <Header />
      <Hero />
      <Project/>
      <Footer/>
    </main>
  );
}