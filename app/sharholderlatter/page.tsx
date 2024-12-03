import React from "react";

const ShareholdersSection: React.FC = () => {
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
      Shareholders Letters
      </h1>
      <p className="mt-2 text-sm text-gray-300">
        <a href="/" className="hover:underline">HOME </a> &gt;  Shareholders Letters
      </p>
    </div>
  </section>
    <section className="shareholders-section py-8" id="feature">
      <div className="container pl-[170px] pr-[170px]">
        <div className="box-shadow p-6 sm:p-8 bg-white shadow-lg rounded-lg aos-item aos-init aos-animate" data-aos="fade-up">
          <div className="md:grid-cols-2 gap-6 grid justify-items-center items-center">
            {/* Shareholder Letter Cards */}
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="box-grey mb-6">
                <div className="p-3">
                  <div className="grid-item-short">
                    <h5 className="text-left font-semibold text-lg text-purple-950">
                      Vallum Shareholders Letter March {2024 - index}
                    </h5>
                  </div>
                  <div className="mt-4">
                    <hr />
                    <a
                      href={`https://vallum.in/api/img/insights/202410230839096510${index}.pdf`}
                      target="_blank"
                      className="view-more custom-button btn-sm mt-3 inline-block py-2 px-4 shadow-lg bg-purple-950 text-white hover:bg-white hover:text-purple-950 transition-colors"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="row mt-6 justify-center">
            <div className="flex justify-center">
              <ul className="pagination flex items-center space-x-2">
                <li className="page-item disabled">
                  <a className="page-link text-gray-500 cursor-not-allowed" href="#" aria-label="Go to first page">
                    «
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link text-gray-500 cursor-not-allowed" href="#" aria-label="Go to previous page">
                    ⟨
                  </a>
                </li>
                {[1, 2, 3].map((pageNumber) => (
                  <li key={pageNumber} className="page-item">
                    <a className="page-link text-gray-800 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-full" href="#">
                      {pageNumber}
                    </a>
                  </li>
                ))}
                <li className="page-item disabled">
                  <a className="page-link text-gray-500 cursor-not-allowed" href="#" aria-label="Go to next page">
                    ⟩
                  </a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link text-gray-500 cursor-not-allowed" href="#" aria-label="Go to last page">
                    »
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ShareholdersSection;
