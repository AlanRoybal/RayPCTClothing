import React, { useState } from "react";

function ImageCarousel({ images = [], className = "" }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div
      className={`relative w-full h-[32rem] flex items-center justify-center bg-gray-100 overflow-hidden shadow-2xl ${className}`}
    >
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="max-h-full max-w-full object-contain transition duration-500 ease-in-out"
      />

      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === current ? "bg-black" : "bg-white border border-black"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
