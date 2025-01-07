import ProjectCard from './helper/project-card';
import "./project.css";

const Projects = () => {
  
const projectsData = [
  {
    id: 1,
    name: 'SwiftPath',
    description: "Swiftpath is an AI-powered career planning platform that helps users navigate their professional journey. The platform uses machine learning algorithms to suggest personalized career paths based on users' skills, experience, and interests. I worked on building the backend, including designing APIs using Node.js, Express, and integrating machine learning models to provide real-time career advice. I also managed the integration with external APIs to gather job market insights and career resources.",
    tools: ['Express', 'MongoDB', 'OpenAI API', 'Node Mailer', 'Google Map API'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    sourceCode: "https://github.com/riteekagawand/VH24-WEBMASTERS",
  },
  {
    id: 2,
    name: 'Travel Agency App: TripFinder',
    description: 'TripFinder is an intuitive travel planning application that helps users find and plan their next trips based on their preferences. I worked as a Full Stack Developer, responsible for both the frontend and backend development. I implemented features like destination search, hotel booking integration, real-time weather updates, and trip itineraries. The backend was built using Node.js and Express, while the frontend was developed with React. The app integrates with external APIs for travel information and maps, and stores user data in MongoDB.',
    tools: ['ReacttJS', 'Tailwind CSS', "Google Maps", "NodeJS", 'Node.js', 'Express', 'WebSocket', "Gmail Passkey"],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    sourceCode: "https://github.com/riteekagawand/TripFinder",
  },
  {
    id: 3,
    name: 'Sahayata',
    description: 'Sahayata is a social platform aimed at connecting people in need of assistance with volunteers offering help. As a Full Stack Developer, I was responsible for building both the frontend and backend of the application. The platform allows users to post requests for help, such as groceries, medical supplies, or other assistance, while volunteers can respond to these posts. I implemented real-time messaging using WebSockets, allowing users and volunteers to communicate seamlessly. The application is built with Node.js and Express for the backend, MongoDB for data storage, and React for the frontend. The app uses JWT authentication for secure user login and role management.',
    tools: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT',],
    code: '',
    role: 'Backend Developer',
    demo: '',
    sourceCode: "https://github.com/riteekagawand/Sahayata",
  },
  {
    id: 4,
    name: 'Lung Care',
    description: "Lung Care is a machine learning-based health application designed to help individuals monitor and manage their lung health. I worked as a Full Stack Developer on this Flutter-based application. The app uses machine learning algorithms to analyze lung health data such as breathing patterns, oxygen levels, and symptoms, providing users with personalized advice and health insights. The application integrates with wearable devices to collect real-time health data, which is processed using ML models to predict potential issues. I also developed features for users to track their health progress over time, with visual charts and reports generated through the app. The backend was built with Python and Flask, while the mobile application was developed using Flutter. WebSocket was used for real-time data synchronization, and MongoDB was used for secure data storage.",
    tools: ['Flutter', 'Python', 'Flask', 'Machine Learning', 'TensorFlow', 'Keras'],
    code: '',
    demo: '',
    role: 'Full Stack Developer',
    sourceCode: 'https://github.com/your-username/ai-financial-app',
  }
];

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-16">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex flex-col items-center">
          <h2
            className="text-4xl md:text-6xl font-extrabold text-transparent"
            style={{
              background: 'linear-gradient(to bottom right, #1e90ff, #32cd32)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Professional Journey
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443] mt-4"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <div
              id={`sticky-card-${project.id}`}
              key={project.id}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
