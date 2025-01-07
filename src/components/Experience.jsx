import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../assets/lottie/code.json"; // Adjust path accordingly
import AnimationLottie from "./helper/animation-lottie"; // Adjust path accordingly
import GlowCard from "./helper/glow-card"; // Adjust path accordingly
import "./experience.css";
import svg1 from "../assets/svg/section.svg";
import svg2 from '../assets/svg/blur-23.svg'

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Edba Academy.",
    duration: "(June 2024 - Sepetember 2024)",
  },
  {
    id: 2,
    title: "Web Consultant Head",
    company: "VCET Hackathon Committee.",
    duration: "(June 2024 - Present)",
  },
  {
    id: 3,
    title: "Python Intern",
    company: "Ignitech.",
    duration: "(July 2022 – August 2022)",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative z-10 border-t   border-[#25213b] bg-[#0f1629]"
    >
      {/* Adjusted z-index for SVG */}
      <img
        src={svg1}
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-[-1]" style={{ height: "full", width: "100%"}}
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] "></span>
          <h2
  className="flex justify-center items-center text-4xl md:text-6xl font-extrabold text-transparent"
  style={{
    background: 'linear-gradient(to bottom right, #1e90ff, #32cd32)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>
  Professional Journey
</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
          <div className="flex flex-col gap-6" style={{ marginTop: "30px" }}> {/* Added inline style for more control */}
    {experiences.map((exp) => (
      <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
      <div className="p-3 relative">
        {/* SVG for blur effect */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none ">
          <img
            src={svg2}
            alt="Blur Effect"
            className="w-[650px] opacity-100 " style={{
              width: "650px", // Set desired width
              height: "140px", // Set desired height
            }}
          />
        </div>
    
        <div className="flex justify-center z-10 relative">
          <p className="text-xs sm:text-sm text-green-400">{exp.duration}</p>
        </div>
    
        <div className="flex items-center gap-x-8 px-3 py-5 relative z-10">
          <div className="text-blue-400 transition-all duration-300 hover:scale-125">
            <BsPersonWorkspace size={36} />
          </div>
          <div>
            <p className="text-base sm:text-xl mb-2 font-medium uppercase" style={{marginLeft: "2rem"}}>
              {exp.title}
            </p>
            <p className="text-sm sm:text-base" style={{marginLeft: "2rem"}}>{exp.company} </p>
          </div>
        </div>
      </div>
    </GlowCard>
    
    ))}
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
