import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectCarousel } from "../ProjectCarousel";
import popout1 from "/images/popout/popout1.jpg";
import popout2 from "/images/popout/popout2.jpg";
import popout3 from "/images/popout/popout3.jpg";
import popout4 from "/images/popout/popout4.jpg";
import popoutVideo from "/images/popout/popout-demo.mp4";
import audibelleVideo from "/images/popout/AudibELLE.mp4";

export const Projects = () => {
  const popoutMedia = [
    {
      type: 'image',
      url: popout1,
      alt: 'Popout Project Screenshot 1'
    },
    {
      type: 'image',
      url: popout2,
      alt: 'Popout Project Screenshot 2'
    },
    {
      type: 'image',
      url: popout3,
      alt: 'Popout Project Screenshot 3'
    },
    {
      type: 'image',
      url: popout4,
      alt: 'Popout Project Screenshot 4'
    },
    {
      type: 'video',
      url: popoutVideo,
      thumbnail: popout1,
      alt: 'Popout Project Demo Video'
    }
  ];

  const audibelleMedia = [
    {
      type: 'video',
      url: audibelleVideo,
      alt: 'AudibELLE Project Demo Video'
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 md:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-semibold mb-8 md:mb-12 text-white text-center glow-text"
            style={{
              textShadow: `
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.6),
                0 0 60px rgba(255, 255, 255, 0.4)
              `,
            }}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* AudibELLE VR Game */}
            <div className="rounded-2xl p-6 md:p-8 relative">
              <div
                className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70"
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "2px solid rgba(255, 255, 255, 0.7)",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  AudibELLE VR Language Learner
                </h3>
                <p className="text-sm text-white-300 font-medium mb-4">
                  🎖 Finalist Project – Featured In UCF Showcase
                </p>
                <div className="mb-6">
                  <ProjectCarousel media={audibelleMedia} />
                </div>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  AudibELLE is an immersive VR game selected as a finalist project,
                  designed to help students improve language skills through AI-driven
                  interactions, pronunciation practice, and customizable lesson plans
                  for instructors.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {["Unity", "C#", "MySQL"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-white/10 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-full text-xs md:text-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/JesusCarb/audibelle-new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors inline-flex items-center text-sm md:text-base"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Popout App */}
            <div className="rounded-2xl p-6 md:p-8 relative">
              <div
                className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70"
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "2px solid rgba(255, 255, 255, 0.7)",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  Popout Event Platform
                </h3>
                <p className="text-sm text-white-300 font-medium mb-4">
                  Full-Stack Event Management Application
                </p>
                <div className="mb-6">
                  <ProjectCarousel media={popoutMedia} />
                </div>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  A full-stack event management application that allows users to create, manage, and join events. Features include user authentication, event creation, RSVP functionality, and real-time updates.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {["HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "React.js", "Node.js", "Flutter"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-white/10 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-full text-xs md:text-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/danielrr25/EventApp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors inline-flex items-center text-sm md:text-base"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
