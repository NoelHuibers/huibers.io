import MainAnimation from "~/components/Animation";
import Navbar from "~/components/Navbar";
import ContactForm from "~/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="w-screen">
      <Navbar />
      <section
        id="main"
        className="z-0 flex h-screen w-screen items-center justify-center bg-blueN"
      >
        <MainAnimation />
      </section>
      <section
        id="contact"
        className="z-0 flex h-screen w-screen items-center justify-center bg-blueN"
      >
        <ContactForm />
      </section>
    </main>
  );
}
