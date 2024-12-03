import React from "react";

const TeamSection: React.FC = () => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src="/images/techo.png" // Replace with the correct image path
          alt="Team Section"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-2/3 p-6">
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          VALLUM INDIA DISCOVERY STRATEGY - EQUITY
        </h2>
        <p className="text-gray-600 mb-4">
          Vallum applies the Growth At Reasonable Price (GARP) philosophy, it is
          an intersection of both value and growth investi...
        </p>
        <button className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
