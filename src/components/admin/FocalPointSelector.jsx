import { useState, useRef, useEffect } from 'react';
import { Move } from 'lucide-react';

const FocalPointSelector = ({ 
  imageUrl, 
  onFocalPointChange, 
  initialFocalPoint = { x: 50, y: 50 },
  className = "" 
}) => {
  const [focalPoint, setFocalPoint] = useState(initialFocalPoint);
  const [isDragging, setIsDragging] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageUrl) {
      setImageLoaded(false);
    }
  }, [imageUrl]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateFocalPoint(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateFocalPoint(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateFocalPoint = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp values between 0 and 100
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));

    const newFocalPoint = { x: clampedX, y: clampedY };
    setFocalPoint(newFocalPoint);
    onFocalPointChange(newFocalPoint);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!imageUrl) return null;

  return (
    <div className={className}>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Set Focal Point
        </label>
        <p className="text-xs text-gray-500">
          Click and drag to position the focal point. This determines which part of the image will be centered when displayed.
        </p>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-crosshair select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
          </div>
        )}
        
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Focal point preview"
          className={`w-full h-full object-contain transition-opacity duration-200 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          draggable={false}
        />
        
        {/* Focal point indicator */}
        <div
          className="absolute w-6 h-6 bg-primary-blue border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
          style={{
            left: `${focalPoint.x}%`,
            top: `${focalPoint.y}%`,
          }}
        >
          <Move className="w-3 h-3 text-white m-0.5" />
        </div>
        
        {/* Grid overlay for better positioning */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        Focal point: {Math.round(focalPoint.x)}%, {Math.round(focalPoint.y)}%
      </div>
    </div>
  );
};

export default FocalPointSelector;
