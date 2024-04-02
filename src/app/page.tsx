import MainAnimation from "~/components/Animation";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main className="w-screen">
      <Navbar />
      <section
        id="main"
        className="bg-blueN z-0 flex h-screen w-screen items-center justify-center"
      >
        <MainAnimation />
      </section>
    </main>
  );
}
