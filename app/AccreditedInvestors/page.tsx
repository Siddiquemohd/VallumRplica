// components/InvestmentSection.tsx
import React from "react";

const InvestmentSection: React.FC = () => {
  return (
    <>
     {/* Hero Section */}
     <section className="relative bg-white">
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
          Accredited Investors and Large Value Accredited Investors
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Accredited Investors and Large Value Accredited Investors
          </p>
        </div>
      </section>

    <section className="investment-section py-8 px-80 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="box-shadow box-block p-6 md:p-8 bg-white rounded-md shadow-md"
          data-aos="fade-up"
        >
          <div className="feature-content text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-950">
              Accredited Investors and Large Value Accredited Investors
            </h2>
            <p className="mb-6 text-black">
              <span>
                Accredited Investors and Large Value Accredited Investors
              </span>
            </p>
            <img
              src="https://vallum.in/api/img/page/202206151107349142.jpeg"
              alt="Accredited Investors"
              className="card-img-top mx-auto w-1/1"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default InvestmentSection;
