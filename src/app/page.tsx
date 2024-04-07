import MainAnimation from "~/components/Animation";
import Navbar from "~/components/Navbar";
import About from "~/components/sections/About/About";
import ContactForm from "~/components/sections/Contact";
import { Toaster } from "sonner";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <section
        id="main"
        className="flex h-screen items-center justify-center bg-blueN"
      >
        <MainAnimation />
      </section>
      <section
        id="about"
        className="flex h-screen items-center justify-center bg-blueN"
      >
        <About />
      </section>
      <section
        id="contact"
        className="flex min-h-screen items-center justify-center bg-blueN py-8"
      >
        <ContactForm />
      </section>
      <Toaster />
    </main>
  );
}
