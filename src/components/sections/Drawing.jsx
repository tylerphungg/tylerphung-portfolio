import { RevealOnScroll } from "../RevealOnScroll";
import { DrawingCanvas } from "../DrawingCanvas";

export const Drawing = () => {
  return (
    <section
      id="drawing"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff69b4] via-transparent to-transparent opacity-10"></div>
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2
            className="text-5xl font-semibold mb-12 text-white text-center glow-text"
            style={{
              textShadow: `
                0 0 20px rgba(255, 255, 255, 0.8),
                0 0 40px rgba(255, 255, 255, 0.6),
                0 0 60px rgba(255, 255, 255, 0.4)
              `,
            }}
          >
            🎨 Interactive Drawing Canvas
          </h2>
          <p className="text-white/80 text-center mb-8 text-lg">
            Take a break and unleash your creativity! Draw something fun using the canvas below.
          </p>
          <div className="rounded-2xl p-8 relative">
            <div
              className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "2px solid rgba(255, 255, 255, 0.7)",
              }}
            ></div>
            <div className="relative z-10">
              <DrawingCanvas />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}; 