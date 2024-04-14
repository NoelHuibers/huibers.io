import MainAnimation from "~/components/navbar/Animation";
import Navbar from "~/components/navbar/Navbar";
import About from "~/components/about/About";
import ContactForm from "~/components/Contact";
import { Toaster } from "sonner";
import Work from "~/components/work/Work";

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
        id="work"
        className="flex h-screen items-center justify-center bg-blueN"
      >
        <Work />
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
