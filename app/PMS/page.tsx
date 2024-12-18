import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const Team: React.FC = () => {
  return (
    <main className="bg-gray-100">
      {/* Team Section */}
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
            Portfolio Management Services
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt; PORTFOLIO MANAGEMENT SERVICES
          </p>
        </div>
      </section>


      {/* Strategy Card Section */}
      <section className="bg-gray-100 py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto p-4 flex">
          {/* Image Section */}
          <div className="w-1/3">
            <Image
              src="/images/strategy.jpg" // Replace with your actual image path
              alt="Strategy"
              layout="responsive"
              width={16} // Aspect ratio width
              height={9} // Aspect ratio height
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-2/3 pl-6 flex flex-col justify-center">
            <h2 className="text-lg font-bold text-purple-950">
              VALLUM INDIA DISCOVERY STRATEGY (VALLUM GARP)
            </h2>
            <p className="text-gray-600 mt-2">
              Vallum applies the Growth At Reasonable Price (GARP) strategy, it
              is an intersection of both value and growth investing...
            </p>
            <Link href="/PMS-View" passHref>
      <button className="max-w-48 mt-4 px-4 py-2 bg-purple-950 text-white font-semibold rounded-md hover:bg-white hover:text-purple-950 shadow hover:border-solid hover:border hover:border-black">
        VIEW MORE
      </button>
    </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
