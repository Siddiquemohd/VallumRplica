import { useState } from "react";



type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "INSTANT REGISTRATION",
    description: "Click on Sign Up to begin your on-boarding journey.",
    image: "/images/1a.png",
  },
  {
    id: 2,
    title: "VALLUM TRACKER",
    description: "Use our tech-enabled platform to complete all document processes.",
    image: "/images/3a.png",
  },
  {
    id: 3,
    title: "GET ON BOARDED",
    description: "Portfolio Creation Begins, Welcome to the Vallum Family!",
    image: "/images/4a.png",
  },
];

const FeatureSteps = () => {
  const [activeImage, setActiveImage] = useState<string>(steps[0].image);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left Side: Image */}
      <div className="relative flex items-center justify-center lg:w-1/2">

{/* Background Circles */}
<div className="absolute w-96 h-96 rounded-full bg-purple-100"></div>
  <div className="absolute w-[22rem] h-[22rem] rounded-full bg-purple-200"></div>
  <div className="absolute w-[18rem] h-[18rem] rounded-full bg-purple-300"></div>

        <img
          src={activeImage}
          alt="Step Illustration"
          className="w-[12rem] h-[9rem] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>


      

      {/* Right Side: Steps */}
      <div className="relative lg:w-1/2 flex flex-col space-y-24 bottom-[50px]">
        {/* SVG for Big Half-Circle */}
     <svg
        className="absolute -left-20 top-[116px] h-[68%] w-40"
        viewBox="0 0 200 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 0 A100 250 0 0 1 100 600"
          stroke="#4808B8FF"  
          strokeWidth="8"  
          strokeDasharray="10,10" 
          fill="none"
        />
      </svg>




        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            onMouseEnter={() => setActiveImage(step.image)}
            className={`relative flex items-center gap-6 cursor-pointer transition-all duration-300 ${
              index === 1 ? "ml-8" : "" // Margin Left for Step 2
            } ${index === 2 ? "mr-8" : ""}`} // Margin Right for Step 3
          >
            {/* Step Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 shadow-md text-2xl font-bold hover:text-white hover:bg-purple-950 ${
                step.id === 2 ? "bg-purple-950 text-blue" : "border-purple-300 text-purple-700"
              }`}
            >
              {step.id}
            </div>

            {/* Step Content */}
            <div>
              <h3 className="text-lg font-bold text-purple-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSteps;
