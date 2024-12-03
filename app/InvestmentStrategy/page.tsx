import React from "react";

const InvestmentSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        {/* Background Image and Overlay */}
        <div className="relative pt-[115px]">
          <img
            src="/images/hand-shak.jpg" // Replace this with the actual image path
            alt="Team Hands"
            className="w-full h-[400px] object-cover" // Ensures the image fits like the provided design
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
          Investment Strategy
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Investment Strategy
          </p>
        </div>
      </section>

      {/* Investment Section */}
      <section className="investment-section py-8 bg-gray-100">
        <div className="container mx-auto px-80">
          <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-purple-950 mb-4">
              Investment Strategy &amp; Performance
            </h2>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-purple-950">Key Criteria</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Investing in 20-25 business opportunities. Investee Company
                  Sales/Topline &gt; Rs 500 Crs
                </li>
                <li>
                  No Stock More than 7% and less than 4% of portfolio while
                  investing
                </li>
                <li>No Sector more than 25% of portfolio</li>
                <li>
                  Blend of "Contra" and "Expected Growth at Reasonable Price"
                </li>
              </ul>
            </div>
            <div className="mt-6 flex justify-center">
              <img
                src="https://vallum.in/api/img/page/202404081007536678.png"
                alt="Investment Strategy"
                className="w-3/3 lg:w-2/2 xl:w-1/1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentSection;
