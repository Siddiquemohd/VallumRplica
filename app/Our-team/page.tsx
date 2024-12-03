"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome is imported
import { FaFacebook, FaTwitter } from "react-icons/fa"; // FontAwesome Icons for Social Links

const MeetOurExperts: React.FC = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            Meet Our Team
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Meet Our Team
          </p>
        </div>
      </section>
      {/* The Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg w-[900px] max-h-[60vh] overflow-y-auto relative">
            {/* Close Button (Cross Icon) */}
            <a
              href="#"
              onClick={closeModal}
              className="close text-3xl text-gray-600 absolute top-4 right-4"
              aria-label="Close"
            >
              <i className="fa fa-times"></i> {/* Cross icon */}
            </a>
            <div className="modal-body flex">
              {/* Image Section */}
              <div className="w-1/4 p-2">
                <div className="team-popup-img">
                  <img
                    className="our-team-modal-img w-full h-auto object-cover"
                    src="https://vallum.in/api/img/team/202104221906011940.jpg"
                    alt="Manish Bhandari"
                  />
                </div>
              </div>
              {/* Content Section */}
              <div className="w-3/4 p-4">
                <div className="modal-custom-content">
                  <div className="member-name font-bold text-xl text-black">Manish Bhandari</div>
                  <div className="modal-title title-designation text-lg text-black">
                    Manish Bhandari, CIIA, CEO &amp; Portfolio Manager
                  </div>
                  <div className="team-social-icon mt-2 mb-2">
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          href="https://fb.com"
                          target="_blank"
                          className="circle text-blue-600"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tw.com"
                          target="_blank"
                          className="circle text-blue-400"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="description text-sm text-black">
                    {/* Description Content */}
                    Manish Bhandari serves as the Director and Principal Officer of Vallum Capital Advisors Private Limited, a SEBI registered Portfolio Manager. He was recently elected as a Director on the Board of Association of Portfolio Managers in India (APMI), a Trade Body for Portfolio Managers registered with the Securities &amp; Exchange Board of India (SEBI).

                    With more than two decades of experience in the Indian Capital Markets, he founded Vallum Capital in 2010. The firm specializes in investment management and advisory services, catering to Institutional Investors, Family Offices, and High Net Worth Individuals (HNIs). Manish's expertise lies in providing guidance on Equities and Asset Allocations.

                    Prior to establishing Vallum Capital, Manish spent six years as a Vice President and Portfolio Manager (Equities) at ING Management in India. His exceptional insights and achievements have earned him recognition, with his write up in the Editorials of Economic Times and was a regular contributor to Nikkei Business, Japan under the heading "Charm of India." He is renowned as one of the accomplished figures on Dalal Street, known as the Wizards of Dalal Street. Additionally, CNBC has acknowledged him as a promising next-generation Investment Manager in India. Manish actively contributes to various financial publications both within India and internationally, establishing himself as a regular expert commentator in the industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card that triggers the modal */}
      <section className="feature-section py-12 bg-gray-100" id="feature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-purple-950">Meet Our Experts</h2>
          </div>
          <div className="flex justify-center">
            {/* Flip Card */}
            <div className="relative w-72 h-96 group flex justify-around">
              {/* Front Face */}
              <div className="absolute w-[147%] h-full bg-purple-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center group-hover:hidden ">
                <h4 className="font-bold text-2xl text-lg text-left team-title text-white">
                  Manish Bhandari, CIIA
                </h4>
                <div className="title-designation text-xl">Manish Bhandari</div>
                <div className="title-designation text-l">
                  Manish Bhandari, CIIA, CEO &amp; Portfolio Manager
                </div>
                <div className="pb-[41px] flex justify-start space-x-4">
                  <a href="https://fb.com" target="_blank" rel="noopener noreferrer" className="text-blue-950">
                    <FaFacebook className="text-white text-2xl" />
                  </a>
                  <a href="https://tw.com" target="_blank" rel="noopener noreferrer" className="text-blue-950">
                    <FaTwitter className="text-white text-2xl" />
                  </a>
                </div>
                <div>
                  <img
                    src="https://vallum.in/api/img/team/202104221906011940.jpg"
                    alt="Manish Bhandari"
                    className="max-w-full max-h-[191%] object-cover mb-4"
                  />
                </div>
              </div>
              {/* Back Face */}
              <div className="absolute w-[147%] h-full bg-purple-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hidden group-hover:flex">
                <h4 className="font-bold text-lg text-center">Manish Bhandari, CIIA</h4>
                <p className="text-sm text-white mt-4 text-center">
                Manish Bhandari serves as the Director and Principal Officer of Vallum Capital Advisors Private Limited, a SEBI registered Portfolio Manager. He was recently elected as a Director on the Board of Association of Portfolio Managers in India (APMI), a Trade Body for Portfolio Managers registered with the Securities & Exchange Board of India (SEBI). With more than two decades of experience in the Indian Capital Markets, he founded Vallum Capital in ...
                </p>
                <button
                  onClick={openModal}
                  className="mt-4 px-4 py-2 bg-white text-purple-950  hover:bg-purple-950 hover:text-white rounded shadow"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurExperts;
