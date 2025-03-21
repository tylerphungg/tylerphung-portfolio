import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{
      backgroundImage: url ('/images/clouds.jpg'),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[50px]" style={{
        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)',
      }}></div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[50px]" style={{
        backdropFilter: 'blur(50px)',
        WebkitBackdropFilter: 'blur(50px)',
      }}></div>
      <div className="relative z-10 mb-4 text-4xl font-mono font-bold text-white">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="relative z-10 w-[200px] h-[2px] bg-white/20 rounded overflow-hidden">
        <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#ffffff] animate-loading-bar"></div>
      </div>
    </div>
  );
};
