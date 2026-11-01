import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Works from "@/components/sections/Works";
import Youtube from "@/components/sections/Youtube";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

/**
 * Homepage — each section is its own component.
 * To edit text/content, open files in src/data/ (not this file).
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Stack />
        <Services />
        <Process />
        <Education />
        <Certifications />
        <Achievements />
        <Experience />
        <Works />
        <Youtube />
        <Trust />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
