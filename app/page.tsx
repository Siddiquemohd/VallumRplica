"use client";
import { useState, useEffect } from "react";
import FeatureSteps from "./components/Steps";
import ClientApproach from "./components/ClientApproach";
import Investment from "./components/Investment";
import InformationForm from "./components/Informationform";
import WeekendReading from "./components/WeekendReading";

const Home = () => {
  const images = ["/images/banner.jpg", "/images/banner1.jpg", "/images/invest.jpg"]; // Ensure these images are in your public folder
  const [index, setIndex] = useState(0);

  // Function to move to the next image
  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // 3000ms = 3 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <div className="padd pt-145 pb-11">
      {/* Image Slider */}
      <div className="banner-slider-container relative w-full h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-199 w-311"
          style={{
            transform: `translateX(-${index * 100}%)`, // Slide effect based on the index
          }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Banner ${idx + 1}`}
              className="banner-image"
            />
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold text-white">Welcome to Vallum Capital</h2>
          <p className="text-lg text-black">We help clients navigate equity markets</p>
        </div>

        {/* Prev and Next Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 rounded-full"
        >
          →
        </button>
      </div>
      </div>

      {/* Other Sections */}
      <div className="min-h-66vh bg-gray-50 flex items-center justify-center">
        <ClientApproach />
      </div>

      <div>
        <Investment />
      </div>
     <div>
        <div className="flex flex-col min-h-66vh bg-gray-50 flex items-center justify-center pt-10">
          <h3 className="text-4xl font-bold text-purple-900 mb-5">Begin Your Investing Journey Now!</h3>
          <h4 className="text-l text-black mb-5">Follow these simple steps to start investing with us…</h4>
        </div>

        <div className="min-h-15 bg-gray-50 flex items-center justify-center">
          <FeatureSteps />
        </div>
      </div>


      <div className="min-h-15 pt[99px;] bg-[#f3f7f8] flex items-center justify-center">
        <WeekendReading />
      </div>

      <div className="bg-white">
        <InformationForm />
      </div>
    </div>
  );
};

export default Home;
