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
    
    // Set canvas size
    canvas.width = 500;
    canvas.height = 300;
    
    // Set initial styles
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    
    setCtx(context);
  }, []);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
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
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          className="rounded-lg cursor-crosshair"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        />
      </div>
      <div className="flex gap-4 items-center">
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