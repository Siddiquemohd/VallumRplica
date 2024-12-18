// components/InvestmentSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const InvestmentSection: React.FC = () => {
  return (
    <>
     {/* Hero Section */}
     <section className="relative bg-white">
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
          <h1 className="text-3xl md:text-4xl font-bold">
          Accredited Investors and Large Value Accredited Investors
          </h1>
        
            <p className="mt-2 text-sm text-gray-300">
              <Link href="/" className="hover:underline">
                HOME
              </Link>
              &gt; Accredited Investors and Large Value Accredited Investors
            </p>

        </div>
      </section>

    <section className="investment-section py-8 bg-white">
      <div className="container container-inner">
        <div
          className="box-shadow box-block p-3 p-md-4 aos-item product-list-card aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="feature-content pt-[15px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-950">
              Accredited Investors and Large Value Accredited Investors
            </h2>
            <p className="mb-6 text-black">
              <span>
                Accredited Investors and Large Value Accredited Investors
              </span>
            </p>
            <Image
              src="/images/table.jpg"
              alt="Accredited Investors"
              layout="responsive"
              width={16} // Aspect ratio width
              height={9} // Aspect ratio height
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
