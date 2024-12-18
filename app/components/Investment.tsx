import React, { useState } from "react";
import "./Investment.css";

const investmentData = [
  { year: "2012", title: "Newsletter – Compulsory Dividends For Equity", description: "Championed the fight for compulsory dividends in India, aligning cash flow generation with reporting accounting to save the banking system.", buttonText: "Read More" },
  { year: "2013", title: "Investment Plan Introduced", description: "Introduced a new comprehensive investment plan for sustainable growth.", buttonText: "Read More" },
  { year: "2014", title: "Market Expansion", description: "Expanded into new markets, focusing on growth opportunities and ROI.", buttonText: "Read More" },
  { year: "2015", title: "Sustainability Practices", description: "Implemented sustainability practices in investments for long-term growth.", buttonText: "Read More" },
  { year: "2016", title: "Digital Innovations", description: "Adopted digital innovation for better client services and operational efficiency.", buttonText: "Read More" },
];

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < investmentData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="investment-container">
      <h1 className="investment-title">Our 10 Year Investment Guidance</h1>

      <div className="timeline">
        {investmentData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="year">{item.year}</div>
            <div className={`dot cir ${activeIndex === index ? "active" : ""}`}></div>
          </div>
        ))}
        <div className={`line ${activeIndex > 0 ? "active" : ""}`}></div>
      </div>

      <div className="navigation flex justify-center space-x-4 mt-4">
        <button
          onClick={handlePrevious}
          className={`nav-arrow rounded-full p-3 ${
            activeIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
          disabled={activeIndex === 0}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className={`nav-arrow rounded-full p-3 ${
            activeIndex === investmentData.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
          disabled={activeIndex === investmentData.length - 1}
        >
          &gt;
        </button>
      </div>

      <div className="content">
        <h2 className="text-purple-950">{investmentData[activeIndex].title}</h2>
        <p>{investmentData[activeIndex].description}</p>
        <button>{investmentData[activeIndex].buttonText}</button>
      </div>
    </div>
  );
};

export default Investment;
