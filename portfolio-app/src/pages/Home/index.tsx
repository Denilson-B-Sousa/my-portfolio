import { Hero } from "@components/hero";
import { Header } from "@components/header";

export function Home() {
  return (
    <main className="m-auto grid place-items-center">
      <Header />
      <Hero />
    </main>
  );
}