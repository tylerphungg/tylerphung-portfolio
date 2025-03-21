import { useState, useEffect } from 'react';

export const ProjectCarousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Preload images
    media.forEach((item) => {
      if (item.type === 'image') {
        const img = new Image();
        img.onerror = (e) => {
          console.error(`Failed to load image: ${item.url}`, e);
          setError(`Failed to load image: ${item.url}`);
        };
        img.src = item.url;
      }
    });
  }, [media]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  if (error) {
    return (
      <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
        <p className="text-white/90">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full mb-6">
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        {/* Glass Effect Container */}
        <div className="absolute inset-0 bg-white/10 rounded-xl border-4 border-white/70" 
             style={{
               backdropFilter: 'blur(8px)',
               WebkitBackdropFilter: 'blur(8px)',
               border: '4px solid rgba(255, 255, 255, 0.7)'
             }}>
        </div>

        {/* Main Media Display */}
        <div className="relative z-10 w-full h-full">
          {media[currentIndex].type === 'video' ? (
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              src={media[currentIndex].url}
              poster={media[currentIndex].thumbnail}
              onError={(e) => {
                console.error(`Failed to load video: ${media[currentIndex].url}`, e);
                setError(`Failed to load video: ${media[currentIndex].url}`);
              }}
            />
          ) : (
            <img
              src={media[currentIndex].url}
              alt={media[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                console.error(`Failed to load image: ${media[currentIndex].url}`, e);
                setError(`Failed to load image: ${media[currentIndex].url}`);
              }}
            />
          )}
        </div>
      </div>

      {/* Navigation Buttons with Glass Effect - Only show if there's more than one media item */}
      {media.length > 1 && (
        <>
          <div className="absolute left-[-20px] top-[128px] -translate-y-1/2 z-20">
            <div className="absolute inset-0 bg-white/10 rounded-full border-2 border-white/20"
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.2)'
                 }}>
            </div>
            <button
              onClick={prevSlide}
              className="relative text-white p-2 rounded-full hover:bg-white/10 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-[-20px] top-[128px] -translate-y-1/2 z-20">
            <div className="absolute inset-0 bg-white/10 rounded-full border-2 border-white/20"
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.2)'
                 }}>
            </div>
            <button
              onClick={nextSlide}
              className="relative text-white p-2 rounded-full hover:bg-white/10 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </>
      )}

      {/* Thumbnail Navigation Below Image - Only show if there's more than one media item */}
      {media.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 