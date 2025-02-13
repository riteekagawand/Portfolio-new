import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../assets/lottie/code.json"; // Adjust path accordingly
import AnimationLottie from "./helper/animation-lottie"; // Adjust path accordingly
import GlowCard from "./helper/glow-card"; // Adjust path accordingly
import "./experience.css";
import svg1 from "../assets/svg/section.svg";
import svg2 from "../assets/svg/blur-23.svg";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Edba Academy.",
    duration: "June 2024 - September 2024",
  },
  {
    id: 2,
    title: "Web Consultant Head",
    company: "VCET Hackathon Committee.",
    duration: "June 2024 - Present",
  },
  {
    id: 3,
    title: "Python Intern",
    company: "Ignitech.",
    duration: "July 2022 – August 2022",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="relative z-10 border-t border-[#25213b] bg-[#0f1629] pt-12 md:pt-20"
    >
      {/* Background SVG */}
      <img
        src={svg1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-[-1]"
      />
      <div className="flex justify-center mb-5 lg:py-8">
        <div className="flex items-center">
        <h2
        className="flex justify-center items-center text-4xl md:text-6xl font-extrabold text-transparent"
        style={{
          background: 'linear-gradient(to bottom right, #1e90ff, #32cd32)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          height: '80px',
        }}
      >
         Professional Journey
      </h2>
        </div>
      </div>

      <div className="py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-6" style={{ marginTop: "15px" }}>
            {experiences.map((exp) => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-3 relative">
                  {/* Blur Effect SVG */}
                  <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
                    <img
                      src={svg2}
                      alt="Blur Effect"
                      className="w-[100%] md:w-[650px] opacity-100"
                    />
                  </div>
                  <div className="flex justify-center z-10 relative">
                    <p className="text-xs sm:text-sm text-green-400">{exp.duration}</p>
                  </div>
                  <div className="flex items-center gap-x-4 px-3 py-5 relative z-10">
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
  );
};

export default Experience;
