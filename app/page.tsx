import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonies } from "./components/Testimonies";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <div className="container mx-auto">
        <section className="p-5" id="home">
          <Header />
        </section>
        <section className="p-5 border-t border-gray-200" id="about">
          <About />
        </section>
      </div>
      <section className="" id="services">
        <div className="bg-blue-950">
          <Services />
        </div>
        <div className="overflow-x-hidden -mt-1"></div>
      </section>
      <section className="p-5" id="team">
        <Team />
      </section>
      <section className="p-5" id="testimonies">
        <Testimonies />
      </section>
      <section className="relative" id="contact">
        <Contact />
      </section>
    </main>
  );
}
