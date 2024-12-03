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
    image: "/images/tec.png", // Replace with your actual image path
  },
  {
    id: 2,
    title: "VALLUM TRACKER",
    description: "Use our tech-enabled platform to complete all document processes.",
    image: "/images/techo.png", // Replace with your actual image path
  },
  {
    id: 3,
    title: "GET ON BOARDED",
    description: "Portfolio Creation Begins, Welcome to the Vallum Family!",
    image: "/images/techoo.png", // Replace with your actual image path
  },
];

const FeatureSteps = () => {
  const [activeStep, setActiveStep] = useState<Step>(steps[0]);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full justify-between">
      {/* Left Side: Image and Description */}
      
      <div className="flex flex-col items-center text-center lg:w-1/2">
        <img
          src={activeStep.image}
          alt={activeStep.title}
           className="w-1/3 h-1/4 object-contain transition-all duration-300"
        />
        
      </div>

      {/* Right Side: Steps */}
      <div className="flex flex-col space-y-15 lg:w-1/3 max-h-screen">
        {steps.map((step) => (
          <div
            key={step.id}
            onMouseEnter={() => setActiveStep(step)}
            className={`flex items-center gap-4 cursor-pointer transition-colors ${
              activeStep.id === step.id
                ? "text-purple-700 font-bold"
                : "text-gray-600"
            }`}
          >
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                activeStep.id === step.id
                  ? "bg-purple-700 text-white border-purple-700"
                  : "bg-white border-gray-400 text-gray-600"
              }`}
            >
              {step.id}
            </div>
            {/* Step Text */}
            <div>
              <h3 className="text-lg">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSteps;
