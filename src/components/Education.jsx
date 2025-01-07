import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../assets/lottie/education.json';
import AnimationLottie from "./helper/animation-lottie";
import GlowCard from "./helper/glow-card";
import svg1 from "../assets/svg/section.svg";
import svg2 from '../assets/svg/blur-23.svg'

const educations = [
  {
    id: 1,
    title: "BACHELOR DEGREE",
    institution: "Vidyavardhini College of Engineering and Technology",
    duration: "2023 - Present",
  },
  {
    id: 2,
    title: "DIPLOMA",
    institution: "Government Polytechnic, Thane",
    duration: "2020 - 2023",
  },
  {
    id: 3,
    title: "SECONDARY SCHOOL CERTIFICATE",
    institution: "Our Lady of Remedy High School",
    duration: "2010 - 2020",
  },
];

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={svg1}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2
            className="flex justify-center items-center text-4xl md:text-6xl font-extrabold text-transparent"
            style={{
              background: 'linear-gradient(to bottom right, #1e90ff, #32cd32)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Education
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            {/* Directly apply width and height in inline style */}
            <div style={{ width: '450px', height: '450px', marginTop: '-32px' }} className="transform -translate-y-36">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6" style={{ marginTop: "-15px" }}>
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <img
                        src={svg2}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-blue-400  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase" style={{marginLeft: "2rem"}}>
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base" style={{marginLeft: "2rem"}}>{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
