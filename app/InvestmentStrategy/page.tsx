import React from "react";
import Image from "next/image";
import Link from "next/link";

const InvestmentSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        {/* Background Image and Overlay */}
        <div className="relative pt-[115px]">
          <Image
            src="/images/BG.png" // Replace this with the actual image path
            alt="Team Hands"
            width={800} // Replace with actual width
            height={600} // Replace with actual height
            className="w-full h-[400px] object-cover" // Ensures the image fits like the provided design
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Investment Strategy</h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt; Investment Strategy
          </p>
        </div>
      </section>

      {/* Investment Section */}
      <section className="investment-section padding-top padding-bottom">
        <div className="container container-inner">
          <div
            className="box-shadow box-block p-3 p-md-4 aos-item product-list-card aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2 className="title text-2xl font-bold text-purple-950 mb-4">
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
                  Blend of &quot;Contra&quot; and &quot;Expected Growth at Reasonable Price&quot;
                </li>
              </ul>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/strate.png"
                alt="Investment Strategy"
                layout="responsive"
                width={16} // Aspect ratio width
                height={9} // Aspect ratio height
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
