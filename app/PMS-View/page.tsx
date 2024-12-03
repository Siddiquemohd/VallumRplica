// components/PmsDetailSection.tsx
"use clint";
import React from "react";

const PmsDetailSection: React.FC = () => {
  return (
<>
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
            PMS View
            </h1>
            <p className="mt-2 text-sm text-gray-300">
                <a href="/" className="hover:underline">HOME </a> &gt;    PMS View
            </p>
            </div>
        </section>

        <section className="pms-detail-section py-8 bg-gray-50">
        <div className="container mx-auto pl-[242px] pr-[242px]">
            {/* Product Card */}
            <div
            className="shadow-md bg-white p-4 md:p-6 rounded-lg mb-8 animate-fadeIn"
            data-aos="fade-up"
            >
            <div className="flex flex-col md:flex-row items-start pb-6">
                {/* Product Image */}
                <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                    className="w-full rounded-lg"
                    src="https://vallum.in/api/img/products/202103041228486470.jpg"
                    alt="VALLUM INDIA DISCOVERY STRATEGY - EQUITY"
                />
                </div>
                {/* Product Details */}
                <div className="md:w-2/3 md:pl-6">
                <h4 className="text-xl font-semibold mb-2 text-black">
                    VALLUM INDIA DISCOVERY STRATEGY - EQUITY
                </h4>
                <p className="text-gray-700">
                    Vallum applies the <strong>Growth At Reasonable Price (GARP)</strong> philosophy. It is an intersection of both value and growth investing for portfolio construction. It looks for companies that are somewhat undervalued and have solid sustainable growth potential. We use profit cycle analysis for applying this strategy.
                </p>
                </div>
            </div>

            {/* Team Member Information */}
            <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-950">Team Member Information</h4>
                <div className="flex flex-col md:flex-row items-start">
                {/* Team Member Image */}
                <div className="md:w-1/4 mb-4 md:mb-0">
                    <img
                    className="w-[15rem] h-[10rem] mx-auto md:mx-0"
                    src="https://vallum.in/api/img/team/202104221906011940.jpg"
                    alt="Manish Bhandari"
                    />
                </div>
                {/* Team Member Details */}
                <div className="md:w-3/4 md:pl-6">
                    <h5 className="text-lg font-semibold text-purple-950">Manish Bhandari</h5>
                    <p className="text-black mb-2">CIIA, CEO & Portfolio Manager</p>
                    <div className="flex space-x-4">
                    <a
                        href="https://fb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a
                        href="https://tw.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default PmsDetailSection;
