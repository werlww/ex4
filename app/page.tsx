import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
import { Solutions } from "@/components/sections/Solutions";
import { About } from "@/components/sections/About";
import { Presentations } from "@/components/sections/Presentations";
import { Cases } from "@/components/sections/Cases";
import { News } from "@/components/sections/News";
import { Clients } from "@/components/sections/Clients";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Solutions />
        <About />
        <Presentations />
        <Cases />
        <News />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
