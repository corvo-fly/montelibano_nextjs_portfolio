import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-neutral-100">
      <Navbar />

      <main className="pt-16 min-h-screen flex items-center justify-center">
        <h1 className="text 3x1 font-bold text-emerald-400">
          Hero Section
        </h1>
      </main>
    </div>
  );
}
