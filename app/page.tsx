"use client";

import FeatureSteps from "./components/Steps";
import ClientApproach from "./components/ClientApproach";
import Investment from "./components/Investment";
import InformationForm from "./components/Informationform";
import WeekendReading from "./components/WeekendReading";
import Banner from "./components/Banner";


const Home = () => {
  

  // Function to move to the next image
 
  return (
    <div className="relative bg-gray-50 min-h-screen pt-[100px]">
     
    <div className="bg-white">
      <Banner/>
    </div>

      {/* Other Sections */}
      <div className="bg-gray-50 flex items-center justify-center px-4">
        <ClientApproach />
      </div>

      <div className="">
        <Investment />
      </div>

      <div>
        <div className="flex flex-col pt-[50px] bg-gray-50 items-center justify-center pt-10 px-4 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-5">
            Begin Your Investing Journey Now!
          </h3>
          <h4 className="text-sm sm:text-base md:text-lg text-black mb-5">
            Follow these simple steps to start investing with us…
          </h4>
        </div>

        <div className="text-center text-3xl font-bold text-purple-700 my-8">
          <FeatureSteps />
        </div>
      </div>

      <section className="min-h-[15vh] bg-[#f3f7f8] flex items-center justify-center px-4">
        <WeekendReading />
      </section>

      <div className="bg-white min-h-[15vh] bg-[#f3f7f8] flex items-center justify-center px-4">
        <InformationForm />
      </div>
    </div>
  );
};

export default Home;
