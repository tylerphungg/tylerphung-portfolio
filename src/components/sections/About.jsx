import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-5xl font-semibold mb-8 text-white text-center glow-text" style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `
          }}>
            About Me
          </h2>

          <div className="rounded-2xl p-8 relative">
            {/* Glass Effect Container */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70" 
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.7)'
                 }}>
            </div>

            <div className="relative z-10">
              <p className="text-lg text-white/90 mb-6">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-4 text-white">Computer Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">C</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Python</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">HTML</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">CSS</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Java</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">JavaScript</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">VB.Net</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">C#</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">PHP</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Swift</span>
                  </div>
                </div>

                <div className="rounded-xl p-4">
                  <h3 className="text-xl font-semibold mb-4 text-white">Computer Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Bootstrap</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">MongoDB</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">React.js</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Node.js</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Github</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">MySQL</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Flutter</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Linux</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">Postman</span>
                    <span className="bg-white/10 text-white py-1.5 px-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all">SwaggerHub</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="rounded-2xl p-6 relative">
                  {/* Glass Effect Container */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70" 
                       style={{
                         backdropFilter: 'blur(8px)',
                         WebkitBackdropFilter: 'blur(8px)',
                         border: '2px solid rgba(255, 255, 255, 0.7)'
                       }}>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-white">🏫 Education</h3>
                    <div className="space-y-4 text-white/90">
                      <div>
                        <h4 className="font-semibold text-white">
                          B.S. in Computer Science - University of Central Florida
                        </h4>
                        <p className="text-white/80">2021 - 2024</p>
                        <p className="mt-2">
                          Relevant Coursework: Data Structures & Algorithms, Software Engineering, Object Oriented Programming, Mobile Device Software Development, Processes of Object-Oriented Software
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6 relative">
                  {/* Glass Effect Container */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70" 
                       style={{
                         backdropFilter: 'blur(8px)',
                         WebkitBackdropFilter: 'blur(8px)',
                         border: '2px solid rgba(255, 255, 255, 0.7)'
                       }}>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-white">💼 Work Experience</h3>
                    <div className="space-y-4 text-white/90">
                      <div>
                        <h4 className="font-semibold text-white">
                          Software Development Intern - FAST Enterprises
                        </h4>
                        <p className="text-white/80">May 2024 - August 2024</p>
                        <p className="mt-2">
                          Maintained and pushed code to production to enhance California GenTax site software and meet the specific needs of each
                          client using C#, VB.Net, and SQL.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
