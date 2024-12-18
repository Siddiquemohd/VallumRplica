// components/WhoWeAreSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhoWeAreSection: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold">
            Portfolio Management Services
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt; PORTFOLIO MANAGEMENT SERVICES
          </p>
        </div>
      </section>

      <section className="who-we-section py-8 lg:py-16 bg-white" id="feature">
        <div className="container mx-auto px-8 lg:px-48">
          <div className="bg-white shadow-md rounded-lg p-6 lg:p-8" data-aos="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-purple-950">Who we are</h2>

            <div className="space-y-6 pb-[50px]">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 text-purple-950">
                  Vallum Capital Advisors develops customized, unconflicted Equity
                  investment solutions for institutions, family offices, and
                  high-net-worth individuals
                </h4>
                <p className="text-black">
                  Independent and privately held, we serve as advisor and advocate
                  for our clients, with full discretionary management.
                </p>
              </div>

              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 text-purple-950">
                  Hands-on experience on all sides of the investment relationship.
                </h4>
                <p className="text-justify text-black">
                  Senior members of the Vallum Investment Team have had successful
                  careers as asset managers, portfolio managers, and investment
                  research analysts. We know what&apos;s required to manage money
                  successfully. We bring that experience to every client
                  relationship.
                </p>
              </div>

              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 text-purple-950">
                  A fully engaged team.
                </h4>
                <p className="text-justify text-black">
                  When it comes to the strength of a team, we know that the whole
                  is greater than the sum of the parts. Ours is a collaborative
                  culture, one that shares information and ideas, working together
                  to ensure that each client benefits fully from the full breadth
                  and depth of our cumulative experience, shared expertise, and
                  culture of client service.
                </p>
              </div>

              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 text-purple-950">
                  Focused on risk.
                </h4>
                <p className="text-justify text-black">
                  Vallum focuses on capital preservation and long-term wealth
                  creation. Our multi-faceted experience, analytic insight, and
                  comprehensive understanding of risk help us evaluate the full
                  dimensions of the real risks equity investors face and enable us
                  to devise sound strategies to counter them.
                </p>
              </div>

              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 text-purple-950">
                  Portfolio Management experts.
                </h4>
                <p className="text-justify text-black">
                  Vallum has a proven track record in investments in equity asset
                  class. As more and more investors look to the potential of
                  Portfolio Management to enhance portfolio performance and reduce
                  portfolio volatility, expertise outside the traditional equity
                  mutual fund style has become a critical element in improving
                  investment performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAreSection;
