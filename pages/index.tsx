import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-gray-200 scrollbar-thin">
      <Head>
        <link rel="icon" href="/images (1).png" />
        <title>Aries Pujie Prasetio Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start scroll-smooth">
        <Hero />
      </section>
      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
