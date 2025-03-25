import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectCarousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0);

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prevIndex) => 
        prevIndex === media.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    }
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
          <AnimatePresence initial={false} custom={direction}>
            {media[currentIndex].type === 'video' ? (
              <motion.video
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                controls
                src={media[currentIndex].url}
                poster={media[currentIndex].thumbnail}
                onError={(e) => {
                  console.error(`Failed to load video: ${media[currentIndex].url}`, e);
                  setError(`Failed to load video: ${media[currentIndex].url}`);
                }}
              />
            ) : (
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                src={media[currentIndex].url}
                alt={media[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                onError={(e) => {
                  console.error(`Failed to load image: ${media[currentIndex].url}`, e);
                  setError(`Failed to load image: ${media[currentIndex].url}`);
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons with Glass Effect - Only show if there's more than one media item */}
      {media.length > 1 && (
        <>
          <motion.div 
            className="absolute left-[-20px] top-[128px] -translate-y-1/2 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full border-2 border-white/20"
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.2)'
                 }}>
            </div>
            <button
              onClick={() => paginate(-1)}
              className="relative text-white p-2 rounded-full hover:bg-white/10 transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </motion.div>
          <motion.div 
            className="absolute right-[-20px] top-[128px] -translate-y-1/2 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-white/10 rounded-full border-2 border-white/20"
                 style={{
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '2px solid rgba(255, 255, 255, 0.2)'
                 }}>
            </div>
            <button
              onClick={() => paginate(1)}
              className="relative text-white p-2 rounded-full hover:bg-white/10 transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </>
      )}

      {/* Thumbnail Navigation Below Image - Only show if there's more than one media item */}
      {media.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {media.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 