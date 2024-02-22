import Image from "next/image";
import Header from "./components/Header";
import Cards from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <Header />
      <Cards />
    </main>
  );
}
