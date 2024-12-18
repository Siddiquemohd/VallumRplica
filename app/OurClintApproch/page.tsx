import React from "react";
import Image from "next/image";
import Link from "next/link";

const ClientCentricApproach: React.FC = () => {
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
            Our Client Approach
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt;  Our Client Approach
          </p>
        </div>
      </section>

      <section className="investment-section py-16 bg-gray-100">
        <div className="container mx-auto px-8 lg:px-[13rem]">
          <div className="bg-white shadow-lg rounded-lg p-6 aos-item product-list-card aos-init aos-animate" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-purple-950 mb-6">Our Client Centric Approach</h2>
            
            <p className="text-gray-700">
              <span>
                <p className="text-gray-800">The capacity of any organization to meet its clients&apos; needs starts with its structure.</p>
              </span>
            </p>
            
            <h2 className="text-xl font-semibold text-purple-950 mt-6">Client Service Philosophy</h2>
            <p className="text-lg text-gray-700 mb-6">
              We strive to provide the quality of advisory services, built upon objective advice, for each and every one of our clients. To this end, we actively monitor our client/portfolio, and focus more on the fit of philosophy, rather than the portfolio size on day one.
            </p>

            <p className="text-gray-700">
              <span>The structure was designed with one pervasive focus - Client Service</span>
            </p>
            
            <h2 className="text-xl font-semibold text-purple-950 mt-6">When we created Vallum, we asked ourselves the following questions:</h2>
            <p className="text-lg text-gray-700 mt-4"><em>What is the most beneficial structure for Clients?</em></p>
            <p className="text-gray-700 mt-4">
              <span>Based on our decades of experience, we conclude:</span>
              <em>
                The skillsets required to manage an investment portfolio and advise, nurture, support, and communicate with clients are increasingly mutually exclusive.
                But it also comes with little or no direct contact with the individual and family investor, and therefore, little experience working as an &quot;advisor&quot; to the Client and their family.
                On the other hand, individuals with strong inter-personal communication and sales skills tend to be attracted to the financial services industry, where they can utilize their sales skills to attract Clients and family investors, and thereby earn a relatively high income, even though they typically lack investment management experience.
              </em>
            </p>

            <p className="text-lg text-gray-700 mt-4">
              <em>As such, our industry has developed what we call the &quot;tag-team&quot; approach.</em> Clients rarely get to interact with the investment professional, and vice versa, which means many of the critical aspects of the relationship (that dictate how the portfolio should be managed) are filtered through at least one degree of separation.
            </p>

            <p className="text-gray-700 mt-4">
              This one degree of separation is the genesis for three fault-lines, all of which fracture the client experience: Accuracy, Accountability, and Continuity.
            </p>

            <p className="text-gray-700 mt-6 font-semibold">
              To avoid this, our team members at Vallum work directly with the client, serving as the &quot;rain-maker&quot; / client-facing members as well as work behind the scenes making the investment decisions.
            </p>

            <p className="text-gray-700 mt-4"><em>All of our Portfolio Managers and team members are also our Client-facing Advisors.</em> This structure allows us to:</p>

            <ul className="list-disc pl-6 space-y-4 text-gray-700 mt-6">
              <li>Gather <em>Accurate</em> information first-hand, without filters</li>
              <li>Listen to the non-verbal, subconscious communication our clients are conveying by reading body language and tonality</li>
              <li>Ask the questions that arise in the moment, which facilitates clarification, deeper inspection, and ultimately, better understanding of our clients</li>
              <li>Submit to our clients&apos; <em>Accountability</em> requirements</li>
              <li>Maintain a low degree of client turnover, and thus, a high degree of <em>Continuity</em> within the firm&apos;s client base</li>
              <li>Spend our time and energy serving our clients, rather than looking for replacements</li>
            </ul>

            <p className="text-gray-700 mt-6">
              There are other aspects of our Client-centric structure, that, if you&apos;re interested, you can read about in the following sections, as well as our Frequently Asked Questions:
            </p>

            <h2 className="text-xl font-semibold text-purple-950 mt-6">Asset Custody</h2>
            <p className="text-lg text-gray-700">
              We custody our clients&apos; assets with ICICI Bank and HDFC Bank, highly respected custodians.
            </p>

            <h2 className="text-xl font-semibold text-purple-950 mt-6">Fee Structure</h2>
            <p className="text-lg text-gray-700">
              You Win, we Win Fee structure. To know aspects of Fee structure, send us an email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientCentricApproach;
