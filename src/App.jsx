import React, { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Experience from "./components/Experience";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(true); // Toggle state

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <div>
          <Hero id="home"/>
          <Skills id="skills" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Education id="education" />
          <Contact id="contact" />
        </div>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </>
  );
}
