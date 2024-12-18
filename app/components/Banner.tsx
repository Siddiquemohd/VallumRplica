import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/home-banner.png", // Replace with the actual path of your first image
    "/images/home-banner1.png", // Replace with the actual path of your second image
  ];

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[567px] overflow-hidden">
        {/* Sliding Images */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ width: '100%', height: '100%' }}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={1700} // Set the desired width
              height={12} // Set the desired height
             // layout="fill" // Ensures the image covers its container
              objectFit="cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white text-xl sm:text-2xl p-2 z-20"
        >
          <span aria-label="Previous">‹</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white text-xl sm:text-2xl p-2 z-20"
        >
          <span aria-label="Next">›</span>
        </button>

        {/* Fixed Overlay Text */}
        <div className="absolute top-[70px] left-[71px] m-4 font-bold pointer-events-none z-20 flex  flex-col items-start justify-start ">
          <h6 className="text-purple-950">
            Welcome to Vallum Capital
          </h6>
          <h1 className="text-black text-5xl">
            We help clients <br />
            navigate <br />
            equity markets
          </h1>
       </div>

      </div>
    </div>
  );
};

export default Banner;
