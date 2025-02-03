import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall, IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import ContactForm from './contact-form';

const personalData = {
  name: "Riteeka Gawand",
  profile: '/profile.png',
  designation: "Full Stack Developer",
  description: "My name is Riteeka Gawand. I am a passionate full stack developer with a strong foundation in web development. I love learning new technologies and continuously improving my skills. I am particularly interested in building robust and scalable applications, and I enjoy tackling complex problems. My core expertise is in JavaScript and I work with various front-end and back-end technologies. I am always looking for new opportunities to grow and collaborate on exciting projects.",
  email: 'riteekagawand7@gmail.com',
  phone: '+91 8850752020',
  address: 'Mumbai, Maharashtra, India',
  github: 'https://github.com/riteekagawand',
  facebook: 'https://www.facebook.com/riteeka.gawand',
  linkedIn: 'https://www.linkedin.com/in/riteeka-gawand/',
  twitter: 'https://x.com/GawandRiteeka',
  resume: "https://drive.google.com/drive/u/0/my-drive"
};

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 w-full">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3" style={{ marginLeft: "10px" }}>
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3" style={{ marginLeft: "10px", marginTop: "20px" }}>
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3" style={{ marginLeft: "10px", marginTop: "20px" }}>
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.address}</span>
            </p>
          </div>

          {/* Social Media Icons Section */}
          <div className="mt-14 sm:mt-14 md:mt-16 lg:mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-14 md:gap-14 lg:gap-10" style={{ marginTop: '20px' }}>
            <a target="_blank" rel="noopener noreferrer" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={personalData.twitter}>
              <FaTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
