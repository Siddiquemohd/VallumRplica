import React from "react";

interface Article {
  date: string;
  title: string;
  imageUrl: string;
}

const articles: Article[] = [
  { date: "20th May 2023", title: "What Vallum Read this Week | 20th May 2023", imageUrl: "/images/capital.png" },
  { date: "13th May 2023", title: "What Vallum Read this Week | 13th May 2023", imageUrl: "/images/capital.png" },
  { date: "6th May 2023", title: "What Vallum Read this Week | 6th May 2023", imageUrl: "/images/capital.png" },
  { date: "22nd April 2023", title: "What Vallum Read this Week | 22nd April 2023", imageUrl: "/images/capital.png" },
  { date: "15th April 2023", title: "What Vallum Read this Week | 15th April 2023", imageUrl: "/images/capital.png" },
  { date: "8th April 2023", title: "What Vallum Read this Week | 8th April 2023", imageUrl: "/images/capital.png" },
  { date: "1st April 2023", title: "What Vallum Read this Week | 1st April 2023", imageUrl: "/images/capital.png" },
  { date: "25th March 2023", title: "What Vallum Read this Week | 25th March 2023", imageUrl: "/images/capital.png" },
  { date: "18th March 2023", title: "What Vallum Read this Week | 18th March 2023", imageUrl: "/images/capital.png" },
  { date: "11th March 2023", title: "What Vallum Read this Week | 11th March 2023", imageUrl: "/images/capital.png" }
];

const CardLayout: React.FC = () => {
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
          Vallum's Weekend Reading
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Vallum's Weekend Reading
          </p>
        </div>
      </section>


    <section className="py-12 pl-[216px] pr-[216px]">
      <div className="container mx-auto px-4 shadow-xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-[97%] h-[5rem] object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800">{article.title}</h5>
                <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                <a
                  href="#"
                  className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-purple-950 rounded-md hover:bg-white hover:text-purple-950 transition duration-200 shadow-3"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CardLayout;