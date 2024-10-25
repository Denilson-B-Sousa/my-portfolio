import { Hero } from "@components/hero";
import { Header } from "@components/header";
import { Project } from "@components/project";

export function Home() {
  return (
    <main className="m-auto grid place-items-center">
      <Header />
      <Hero />
      <Project/>
    </main>
  );
}