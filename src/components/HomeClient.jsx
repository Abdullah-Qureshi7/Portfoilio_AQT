"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Stack from "@/components/sections/Stack";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Youtube from "@/components/sections/Youtube";
import Trust from "@/components/sections/Trust";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

/**
 * Client homepage shell — keeps production prerender stable on Next.js 15.
 * Edit text in src/data/ (see EDIT.md), not here.
 */
export default function HomeClient() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Stack />
        <Process />
        <Education />
        <Certifications />
        <Achievements />
        <Experience />
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
