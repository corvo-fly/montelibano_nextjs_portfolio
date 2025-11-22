import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-neutral-100">
      <Navbar />

      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
}
