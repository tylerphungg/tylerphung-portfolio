import { useEffect, useRef, useState } from 'react';

export const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(5);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas size based on screen width
    const setCanvasSize = () => {
      const maxWidth = Math.min(window.innerWidth - 40, 600); // Increased max width for better drawing area
      const scale = window.devicePixelRatio || 1;
      canvas.width = maxWidth * scale;
      canvas.height = (maxWidth * 0.6) * scale; // Maintain aspect ratio
      canvas.style.width = `${maxWidth}px`;
      canvas.style.height = `${(maxWidth * 0.6)}px`;
      
      // Scale the context to handle high DPI displays
      context.scale(scale, scale);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Set initial styles
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    
    setCtx(context);

    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  const getCoordinates = (e) => {
    if (e.type.includes('touch')) {
      const touch = e.touches[0];
      const rect = canvasRef.current.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      return {
        offsetX: (touch.clientX - rect.left) * scale,
        offsetY: (touch.clientY - rect.top) * scale
      };
    }
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    return {
      offsetX: (e.clientX - rect.left) * scale,
      offsetY: (e.clientY - rect.top) * scale
    };
  };

  const startDrawing = (e) => {
    e.preventDefault(); // Prevent scrolling while drawing
    const { offsetX, offsetY } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    e.preventDefault(); // Prevent scrolling while drawing
    if (!isDrawing) return;
    const { offsetX, offsetY } = getCoordinates(e);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
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
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto px-4">
      <h2 className="text-lg md:text-xl text-white">Drawing Canvas</h2>
      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 w-full flex justify-center">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="rounded-lg cursor-crosshair"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', maxWidth: '100%', height: 'auto' }} // Ensure full width and auto height
        />
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center w-full">
        <div className="flex items-center gap-2">
          <label className="text-white/90">Color:</label>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-white/90">Brush Size:</label>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={handleBrushSizeChange}
            className="w-24"
          />
        </div>
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
        >
          Clear
        </button>
      </div>
    </div>
  );
}; 