import { useState, useRef } from 'react';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToImage = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth;
    
    if (direction === 'next') {
      if (currentIndex === images.length - 1) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(prev => prev + 1);
      }
    } else if (direction === 'prev') {
      if (currentIndex === 0) {
        container.scrollTo({ left: scrollAmount * (images.length - 1), behavior: 'smooth' });
        setCurrentIndex(images.length - 1);
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const handleImageError = (e) => {
    console.error('Error loading image:', e.target.src);
    e.target.src = '/images/clouds.jpg'; // Fallback image
  };

  return (
    <div className="relative w-full max-w-[900px] h-auto min-h-[500px] mx-auto my-4 md:my-8 rounded-2xl p-4 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Glass Effect Container */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl border-2 border-white/70" 
           style={{
             backdropFilter: 'blur(8px)',
             WebkitBackdropFilter: 'blur(8px)',
             border: '2px solid rgba(255, 255, 255, 0.7)'
           }}>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Image Carousel Container */}
        <div className="relative w-full max-w-[300px] h-[250px] md:h-[300px]">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToImage('prev')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.7)'
            }}
          >
            <span className="text-white text-xl md:text-2xl">←</span>
          </button>
          <button
            onClick={() => scrollToImage('next')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.7)'
            }}
          >
            <span className="text-white text-xl md:text-2xl">→</span>
          </button>

          {/* Image Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center snap-always"
              >
                <div className="relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-xl"
                    onError={handleImageError}
                  />
                  {/* Image Outline */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/70">
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 md:gap-3 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  const scrollAmount = container.clientWidth * index;
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ID Card Content */}
        <div className="text-white flex-1 text-center md:text-left">
          <h3 className="text-5xl md:text-7xl font-semibold mb-4 md:mb-6 glow-text" style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `
          }}>Tyler Phung</h3>
          <p className="text-2xl md:text-3xl text-white/90 mb-6 md:mb-10">Full Stack Developer</p>
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl text-white/80">"As a full-stack developer, I see coding as more than just logic—it's a canvas for creativity. I love blending design, innovation, and technology to craft intuitive, scalable applications that don't just function well but feel like an experience."</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 