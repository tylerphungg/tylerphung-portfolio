import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Drawing", href: "#drawing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div 
        className="absolute inset-0 bg-white/10 backdrop-blur-lg border-b border-white/70" 
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.7)'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[16px] tracking-wider font-semibold text-white glow-text whitespace-nowrap"
            style={{
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.6),
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              fontSize: '16px',
              letterSpacing: '0.05em'
            }}
          >
            Tyler Phung
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative font-mono text-white hover:text-white/90 transition-colors duration-300 group tracking-wider font-semibold glow-text"
                style={{
                  textShadow: `
                    0 0 10px rgba(255, 255, 255, 0.8),
                    0 0 20px rgba(255, 255, 255, 0.6),
                    0 0 30px rgba(255, 255, 255, 0.4)
                  `,
                  fontSize: '16px',
                  letterSpacing: '0.05em'
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
            <motion.a
              href="/images/Tyler_Phung_Resume.pdf"
              download="Tyler_Phung_Resume.pdf"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + navItems.length * 0.1 }}
              className="relative font-mono text-white hover:text-white/90 transition-colors duration-300 group tracking-wider font-semibold glow-text px-4 py-2 rounded-lg overflow-hidden"
              style={{
                textShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8),
                  0 0 20px rgba(255, 255, 255, 0.6),
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
                fontSize: '16px',
                letterSpacing: '0.05em'
              }}
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4] via-[#fe97ac] to-[#ff69b4] animate-gradient-x" />
              <div className="absolute inset-[1px] bg-black/20 rounded-lg" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-white/90 transition-colors duration-300 font-mono"
            style={{ 
              fontSize: '16px',
              letterSpacing: '0.05em'
            }}
          >
            <HiMenu className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-white/90 hover:text-white transition-colors text-base font-medium rounded-lg hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <motion.a
            href="/images/Tyler_Phung_Resume.pdf"
            download="Tyler_Phung_Resume.pdf"
            className="block px-4 py-3 text-white font-medium relative overflow-hidden rounded-lg mt-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4] via-[#fe97ac] to-[#ff69b4] animate-gradient-x" />
            <div className="absolute inset-[1px] bg-black/20 rounded-lg" />
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
