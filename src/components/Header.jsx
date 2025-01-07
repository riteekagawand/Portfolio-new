import React, { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope, // Icon for Contact
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home" },
    { id: "skills", icon: FaCode, text: "Skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience" },
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "education", icon: FaGraduationCap, text: "Education" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70; // Offset for fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveLink(sectionId);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] w-auto">
      <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
        <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-2.5">
          <div className="flex items-center gap-1 md:gap-2">
            {navLinks.map(({ id, icon: Icon, text }) => (
              <button
                key={id}
                onClick={() => handleScrollToSection(id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300 flex items-center gap-2
                  hover:bg-white/10 
                  ${activeLink === id ? "bg-white/15 text-white" : "text-gray-300 hover:text-white"}`}
              >
                <Icon
                  className={`text-base ${activeLink === id ? "scale-110" : ""}`}
                />
                <span className="hidden md:inline">{text}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
}
