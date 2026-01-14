import { useState, useRef, useEffect } from 'react';
import { Crop, RotateCcw, Check, X } from 'lucide-react';

const ImageCropper = ({ 
  imageUrl, 
  onCropComplete, 
  aspectRatio = 16/9, // Default aspect ratio for project images
  className = "",
  initialCrop = null // Optional initial crop coordinates
}) => {
  const [crop, setCrop] = useState(initialCrop || { x: 0, y: 0, width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [outputResolution, setOutputResolution] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const hasInitialized = useRef(false);
  const retryCount = useRef(0);

  useEffect(() => {
    if (imageUrl) {
      setImageLoaded(false);
      setImageError(false);
      hasInitialized.current = false;
      retryCount.current = 0;
      // Reset crop if no initial crop provided
      if (!initialCrop) {
        setCrop({ x: 0, y: 0, width: 100, height: 100 });
      }
    }
  }, [imageUrl, initialCrop]);

  // Separate effect to check if image is already loaded (for cached images)
  useEffect(() => {
    if (!imageUrl) return;
    
    // Use a small delay to allow refs to be set
    const checkImageLoaded = setTimeout(() => {
      if (imageRef.current && containerRef.current) {
        const img = imageRef.current;
        // If image is already loaded (cached), trigger load handler
        if (img.complete && img.naturalWidth > 0 && !hasInitialized.current && !imageLoaded) {
          console.log('Image already loaded (cached), triggering load handler');
          handleImageLoad();
        }
      }
    }, 150);

    return () => clearTimeout(checkImageLoaded);
  }, [imageUrl]);

  const handleImageLoad = () => {
    console.log('Image loaded successfully', {
      hasImageRef: !!imageRef.current,
      hasContainerRef: !!containerRef.current,
      imageComplete: imageRef.current?.complete,
      imageNaturalWidth: imageRef.current?.naturalWidth,
      retryCount: retryCount.current
    });
    
    if (!imageRef.current || !containerRef.current) {
      if (retryCount.current < 3) {
        retryCount.current += 1;
        console.log('Image or container ref not available, retrying...', retryCount.current);
        // Retry after a short delay
        setTimeout(() => {
          if (imageRef.current && containerRef.current) {
            handleImageLoad();
          } else {
            console.error('Failed to load image: refs not available after retry');
            setImageError(true);
            retryCount.current = 0;
          }
        }, 200);
      } else {
        console.error('Max retries reached, giving up');
        setImageError(true);
        retryCount.current = 0;
      }
      return;
    }
    
    // Reset retry count on success
    retryCount.current = 0;

    // Wait a bit for the image to be fully rendered
    setTimeout(() => {
      try {
        // Double-check refs are still available
        if (!imageRef.current || !containerRef.current) {
          console.log('Refs no longer available after timeout');
          setImageError(true);
          return;
        }

        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        
        if (containerWidth === 0 || containerHeight === 0) {
          if (retryCount.current < 3) {
            retryCount.current += 1;
            console.log('Container has zero dimensions, retrying...', retryCount.current);
            setTimeout(() => handleImageLoad(), 200);
          } else {
            console.error('Container dimensions still zero after retries');
            setImageError(true);
            retryCount.current = 0;
          }
          return;
        }
        
        let newCrop;
        
        // If initial crop is provided, use it; otherwise initialize to center
        if (initialCrop && initialCrop.width > 0 && initialCrop.height > 0) {
          // Validate and adjust initial crop to fit within container
          const cropWidth = Math.min(initialCrop.width, containerWidth);
          const cropHeight = Math.min(initialCrop.height, containerHeight);
          const x = Math.max(0, Math.min(initialCrop.x, containerWidth - cropWidth));
          const y = Math.max(0, Math.min(initialCrop.y, containerHeight - cropHeight));
          
          newCrop = {
            x,
            y,
            width: cropWidth,
            height: cropHeight
          };
        } else {
          // Initialize crop to center with proper aspect ratio
          const cropWidth = Math.min(containerWidth * 0.8, containerWidth);
          const cropHeight = cropWidth / aspectRatio;
          
          const x = (containerWidth - cropWidth) / 2;
          const y = (containerHeight - cropHeight) / 2;
          
          newCrop = {
            x: Math.max(0, x),
            y: Math.max(0, y),
            width: cropWidth,
            height: cropHeight
          };
        }
        
        setCrop(newCrop);
        
        // Calculate output resolution
        const scaleX = imageRef.current.naturalWidth / containerWidth;
        const scaleY = imageRef.current.naturalHeight / containerHeight;
        setOutputResolution({
          width: Math.round(newCrop.width * scaleX),
          height: Math.round(newCrop.height * scaleY)
        });
        
        setImageLoaded(true);
        hasInitialized.current = true;
        console.log('Crop initialized successfully:', newCrop);
      } catch (error) {
        console.error('Error in handleImageLoad:', error);
        setImageError(true);
        setImageLoaded(false);
      }
    }, 100);
  };

  const handleImageError = () => {
    console.error('Image failed to load');
    setImageError(true);
    setImageLoaded(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setDragStart({
      x: e.clientX - rect.left - crop.x,
      y: e.clientY - rect.top - crop.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current || !imageRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragStart.x;
    const newY = e.clientY - containerRect.top - dragStart.y;

    // Calculate image position within container (accounting for object-contain)
    const containerAspect = containerRect.width / containerRect.height;
    const imageAspect = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
    
    let displayedImageWidth, displayedImageHeight, imageOffsetX, imageOffsetY;
    
    if (imageAspect > containerAspect) {
      // Image is wider - fit to width
      displayedImageWidth = containerRect.width;
      displayedImageHeight = containerRect.width / imageAspect;
      imageOffsetX = 0;
      imageOffsetY = (containerRect.height - displayedImageHeight) / 2;
    } else {
      // Image is taller - fit to height
      displayedImageHeight = containerRect.height;
      displayedImageWidth = containerRect.height * imageAspect;
      imageOffsetX = (containerRect.width - displayedImageWidth) / 2;
      imageOffsetY = 0;
    }

    // Constrain crop within the actual image bounds (not just container)
    const minX = imageOffsetX;
    const minY = imageOffsetY;
    const maxX = imageOffsetX + displayedImageWidth - crop.width;
    const maxY = imageOffsetY + displayedImageHeight - crop.height;

    setCrop(prev => {
      const newCrop = {
        ...prev,
        x: Math.max(minX, Math.min(maxX, newX)),
        y: Math.max(minY, Math.min(maxY, newY))
      };
      
      // Update output resolution when crop moves
      const scaleX = imageRef.current.naturalWidth / displayedImageWidth;
      const scaleY = imageRef.current.naturalHeight / displayedImageHeight;
      setOutputResolution({
        width: Math.round(newCrop.width * scaleX),
        height: Math.round(newCrop.height * scaleY)
      });
      
      return newCrop;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCropComplete = () => {
    if (!imageRef.current || !containerRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Get container and image dimensions
    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();
    
    // Calculate the actual displayed image size (accounting for object-contain)
    const containerAspect = containerRect.width / containerRect.height;
    const imageAspect = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
    
    let displayedImageWidth, displayedImageHeight, imageOffsetX, imageOffsetY;
    
    if (imageAspect > containerAspect) {
      // Image is wider - fit to width
      displayedImageWidth = containerRect.width;
      displayedImageHeight = containerRect.width / imageAspect;
      imageOffsetX = 0;
      imageOffsetY = (containerRect.height - displayedImageHeight) / 2;
    } else {
      // Image is taller - fit to height
      displayedImageHeight = containerRect.height;
      displayedImageWidth = containerRect.height * imageAspect;
      imageOffsetX = (containerRect.width - displayedImageWidth) / 2;
      imageOffsetY = 0;
    }
    
    // Calculate scale factors
    const scaleX = imageRef.current.naturalWidth / displayedImageWidth;
    const scaleY = imageRef.current.naturalHeight / displayedImageHeight;
    
    // Adjust crop coordinates to account for image offset within container
    const adjustedCropX = crop.x - imageOffsetX;
    const adjustedCropY = crop.y - imageOffsetY;
    
    // Calculate source coordinates in the original image
    const sourceX = Math.max(0, adjustedCropX * scaleX);
    const sourceY = Math.max(0, adjustedCropY * scaleY);
    const sourceWidth = Math.min(crop.width * scaleX, imageRef.current.naturalWidth - sourceX);
    const sourceHeight = Math.min(crop.height * scaleY, imageRef.current.naturalHeight - sourceY);
    
    // Set canvas size to the actual crop dimensions in pixels (high resolution)
    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
    
    // Draw cropped image to canvas at full resolution
    ctx.drawImage(
      imageRef.current,
      sourceX, sourceY, sourceWidth, sourceHeight,
      0, 0, sourceWidth, sourceHeight
    );
    
    // Convert to blob with high quality
    canvas.toBlob((blob) => {
      if (blob) {
        console.log('Cropped image size:', blob.size, 'bytes');
        console.log('Crop coordinates:', { sourceX, sourceY, sourceWidth, sourceHeight });
        onCropComplete(blob);
      }
    }, 'image/jpeg', 0.95); // Increased quality to 95%
  };

  const resetCrop = () => {
    if (!containerRef.current || !imageRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    const cropWidth = Math.min(containerWidth * 0.8, containerWidth);
    const cropHeight = cropWidth / aspectRatio;
    
    const x = (containerWidth - cropWidth) / 2;
    const y = (containerHeight - cropHeight) / 2;
    
    setCrop({
      x: Math.max(0, x),
      y: Math.max(0, y),
      width: cropWidth,
      height: cropHeight
    });
    
    // Recalculate output resolution
    const imageRect = imageRef.current.getBoundingClientRect();
    const scaleX = imageRef.current.naturalWidth / imageRect.width;
    const scaleY = imageRef.current.naturalHeight / imageRect.height;
    setOutputResolution({
      width: Math.round(cropWidth * scaleX),
      height: Math.round(cropHeight * scaleY)
    });
  };

  if (!imageUrl) return null;

  return (
    <div className={className}>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Crop Image
        </label>
        <p className="text-xs text-gray-500">
          Drag the crop area to select the portion of the image to display. This will be the exact size shown on the website.
        </p>
      </div>
      
      <div className="relative">
        <div 
          ref={containerRef}
          className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-move select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
              <span className="ml-2 text-sm text-gray-600">Loading image...</span>
            </div>
          )}
          
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <X className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm text-red-600">Failed to load image</p>
                <p className="text-xs text-gray-500 mt-1">Please try uploading again</p>
              </div>
            </div>
          )}
          
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Crop preview"
            className={`w-full h-full object-contain transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={(e) => {
              console.log('Image onLoad event fired', e.target.complete, e.target.naturalWidth);
              handleImageLoad();
            }}
            onError={(e) => {
              console.error('Image onError event fired', e);
              handleImageError();
            }}
            draggable={false}
            style={{ display: imageError ? 'none' : 'block' }}
          />
          
          {/* Crop overlay */}
          {imageLoaded && (
            <>
              {/* Dark overlay outside crop area */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"
                style={{
                  clipPath: `polygon(
                    0% 0%, 
                    0% 100%, 
                    ${crop.x}px 100%, 
                    ${crop.x}px ${crop.y}px, 
                    ${crop.x + crop.width}px ${crop.y}px, 
                    ${crop.x + crop.width}px ${crop.y + crop.height}px, 
                    ${crop.x}px ${crop.y + crop.height}px, 
                    ${crop.x}px 100%, 
                    100% 100%, 
                    100% 0%
                  )`
                }}
              />
              
              {/* Crop border */}
              <div
                className="absolute border-2 border-white shadow-lg pointer-events-none"
                style={{
                  left: crop.x,
                  top: crop.y,
                  width: crop.width,
                  height: crop.height
                }}
              >
                {/* Corner handles */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-white border border-gray-400 rounded-sm" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border border-gray-400 rounded-sm" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border border-gray-400 rounded-sm" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-gray-400 rounded-sm" />
              </div>
            </>
          )}
        </div>
        
        {/* Controls */}
        {imageLoaded && (
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={resetCrop}
                className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded hover:bg-gray-50"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </button>
              <div className="text-xs text-gray-500">
                <div>Preview: {Math.round(crop.width)} × {Math.round(crop.height)}px</div>
                <div className="text-green-600 font-medium">
                  Output: {outputResolution.width} × {outputResolution.height}px
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCropComplete}
                className="flex items-center px-4 py-2 text-sm text-white bg-primary-blue rounded hover:bg-accent-dark"
              >
                <Check className="w-4 h-4 mr-1" />
                Apply Crop
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCropper;
