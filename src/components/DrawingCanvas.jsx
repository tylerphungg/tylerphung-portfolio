import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(5);
  const [ctx, setCtx] = useState(null);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Make canvas responsive
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      const containerWidth = container.clientWidth - 32; // Subtract padding
      const containerHeight = Math.min(300, window.innerHeight * 0.4);
      
      canvas.width = containerWidth;
      canvas.height = containerHeight;
      
      // Restore context properties after resize
      context.strokeStyle = color;
      context.lineWidth = brushSize;
      context.lineCap = 'round';
      context.lineJoin = 'round';
    };

    // Set initial size
    updateCanvasSize();
    
    // Update size on window resize
    window.addEventListener('resize', updateCanvasSize);
    setCtx(context);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [color, brushSize]);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    e.preventDefault(); // Prevent scrolling on mobile
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setLastPos(pos);
    setIsDrawing(true);
  };

  const draw = (e) => {
    e.preventDefault(); // Prevent scrolling on mobile
    if (!isDrawing) return;
    
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    setLastPos(pos);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    ctx.strokeStyle = newColor;
  };

  const handleBrushSizeChange = (e) => {
    const newSize = e.target.value;
    setBrushSize(newSize);
    ctx.lineWidth = newSize;
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-4xl">
      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 w-full">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="rounded-lg cursor-crosshair w-full touch-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        />
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <label className="text-white/90 text-sm md:text-base">Color:</label>
          <motion.input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-8 h-8 rounded cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <label className="text-white/90 text-sm md:text-base">Brush Size:</label>
          <motion.input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={handleBrushSizeChange}
            className="w-24 md:w-32"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <span className="text-white/90 text-sm md:text-base w-6">{brushSize}</span>
        </motion.div>
        <motion.button
          onClick={clearCanvas}
          className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/20 text-sm md:text-base"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Clear
        </motion.button>
      </div>
    </div>
  );
}; 