import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 md:mb-12 text-white text-center glow-text" style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `
          }}>
            Get in Touch
          </h2>

          <div className="rounded-2xl p-6 md:p-12 relative">
            {/* Glass Effect Container */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70" 
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.7)'
                 }}>
            </div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 text-center">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="flex flex-col items-center space-y-4 md:space-y-6">
                <motion.a
                  href="mailto:tylerphung84@gmail.com"
                  className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors inline-flex items-center text-center break-all px-2"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  tylerphung84@gmail.com
                </motion.a>

                <div className="flex space-x-4 md:space-x-6">
                  <motion.a
                    href="https://github.com/tylerphungg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    GitHub
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/tyler-phung-9a99b7270/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    LinkedIn
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
