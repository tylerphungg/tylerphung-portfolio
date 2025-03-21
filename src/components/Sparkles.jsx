import { useEffect, useState } from 'react';

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Create 40 sparkles with random positions and animations
    const newSparkles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 5 + 3}px`,
      duration: `${Math.random() * 20 + 20}s`, // Even longer duration for more dramatic movement
      delay: `${Math.random() * 10}s`, // More varied delays
      opacity: Math.random() * 0.3 + 0.7,
      glowSize: `${Math.random() * 15 + 8}px`,
      rotation: Math.random() * 360,
      // Add random movement patterns
      movementPattern: Math.random() < 0.5 ? 'float' : 'float-alt',
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`absolute w-1 h-1 rounded-full ${
            sparkle.movementPattern === 'float' ? 'animate-float' : 'animate-float-alt'
          }`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
            animationDuration: sparkle.duration,
            animationDelay: sparkle.delay,
            opacity: sparkle.opacity,
            transform: `rotate(${sparkle.rotation}deg)`,
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 70%)',
            boxShadow: `0 0 ${sparkle.glowSize} rgba(255,255,255,1), 0 0 ${sparkle.glowSize * 1.5} rgba(255,255,255,0.6)`,
          }}
        />
      ))}
    </div>
  );
}; 