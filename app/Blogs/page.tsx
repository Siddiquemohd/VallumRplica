"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type InsightCard = {
  title: string;
  url: string;
};

const insightsData: InsightCard[] = [
    { title: 'Public Sector Units (PSUs) Bubble reaching Crescendo!', url: 'https://www.example.com/1' },
    { title: '4 June Yaad Hai Na !!', url: 'https://www.example.com/2' },
    { title: 'The State of Digital Transformation in India', url: 'https://www.example.com/3' },
    { title: 'Future of Cloud Computing in India', url: 'https://www.example.com/4' },
    { title: 'Impact of AI on Modern Business Strategies', url: 'https://www.example.com/5' },
    { title: 'Blockchain Technology and Its Potential', url: 'https://www.example.com/6' },
    { title: 'AI Revolution in Healthcare', url: 'https://www.example.com/7' },
    { title: 'Sustainability in the Tech Industry', url: 'https://www.example.com/8' },
    { title: 'Cybersecurity in the Digital Age', url: 'https://www.example.com/9' },
    { title: 'Future of Remote Work in 2025', url: 'https://www.example.com/10' },
  ];

  const ITEMS_PER_PAGE = 10;

  const InsightsSection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(insightsData.length / ITEMS_PER_PAGE);
  
    const paginatedData = insightsData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    const handlePrev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  

  return (
<>
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
            Blogs
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt; Blogs
          </p>
        </div>
      </section>


      <section className="insights-vallum-section py-16 bg-white"> 

      <div>
        <div className="container container-inner">
          {/* Insights Cards */}
          <div className="rounded-lg shadow-lg ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {paginatedData.map((insight, index) => (
                  <div
                  key={index}
                  className="box-grey bg-gray-#eee p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                  >
                  <div className="grid-item-content">
                      <h5 className="view-more modal-title text-xl font-semibold text-purple-950">
                      {insight.title}
                      </h5>
                  </div>
                  <hr className="my-4 border-gray-300" />
                  <div className="">
                      <a
                      href={insight.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-more custom-button text-white bg-purple-950 hover:bg-white hover:text-purple-950 py-2 px-4 rounded-sm inline-block shadow-lg"
                      >
                      View More
                      </a>
                  </div>
                  </div>
              ))}
              </div>
          </div>
          {/* Pagination Controls */}
          <div className="pagination mt-8 flex justify-center items-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`py-2 px-4 rounded-md ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`py-2 px-4 rounded-md ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section> 


    </>
  );
};

export default InsightsSection;
