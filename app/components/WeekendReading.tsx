import { useState } from "react";
import Slider from "react-slick";
import Modal from "../components/Model"; // Import the modal component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const VallumReading = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for managing modal visibility

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const articles = [
    {
      title: "What Vallum Read this Week | 25th March 2023",
      link: "/insight-what-vallum-reads/641eb920056cbd273d5bdc77",
    },
    {
      title: "What Vallum Read this Week | 18th March 2023",
      link: "/insight-what-vallum-reads/641586b8056cbd273d5bdc6e",
    },
    {
      title: "What Vallum Read this Week | 11th March 2023",
      link: "/insight-what-vallum-reads/640c72ac056cbd273d5bdc6a",
    },
    {
      title: "What Vallum Read this Week | 18th Feb 2023",
      link: "/insight-what-vallum-reads/63f089f3056cbd273d5bdc67",
    },
    {
      title: "What Vallum Read this Week | 20th May 2023",
      link: "/insight-what-vallum-reads/6468678f056cbd273d5bdc8b",
    },
    {
      title: "What Vallum Read this Week | 13th May 2023",
      link: "/insight-what-vallum-reads/645f58c2056cbd273d5bdc8a",
    },
    {
      title: "What Vallum Read this Week | 6th May 2023",
      link: "/insight-what-vallum-reads/64562e43056cbd273d5bdc87",
    },
  ];

  return (
    <div className="container pb-[30px]">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="section-headers text-center text-lg pt-[49px] pb-[20px]">
            <h1
              className="title text-purple-950 font-bold"
              style={{ fontSize: "2.125rem", lineHeight: "2.75rem" }}
            >
              Vallum&apos;s Weekend Reading
            </h1>
            <p className="mw-100 text-black pb-[20px]">
              &quot;The best thing a human being can do is to help another human being know more&quot;
              <br />
              <span>- Charlie Munger</span>
            </p>
            <button
              onClick={() => setIsModalOpen(true)} // Open modal on button click
              className="pt-[15px] pr-[34px] pb-[15px] pl-[35px] bg-purple-950 text-white hover:bg-white hover:text-purple-950 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>



      <div className="row justify-center px-4 md:px-16 lg:px-32">
  <div className="w-full md:w-3/4 lg:[width:94.666667%] mx-auto">
    <div className="image-container mb-6">
      <Image
        src="/images/Capital.png"
        alt="readings"
        width={0}
        height={0}
        className="w-[120%] md:w-[110%] lg:w-[105%] h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-md mx-auto"
        layout="responsive"
      />
    </div>
  </div>
</div>

<div className="px-4 md:px-12 lg:px-32">
  <div className="row reading-block m-0 pb-8">
    <Slider
      {...sliderSettings}
      className="readings-slider  px-4 py-6 md:px-8 md:py-10"
    >
      {articles.map((article, index) => (
        <div
          key={index}
          className="owl-item mx-2 md:mx-4"
          style={{ width: "100%", maxWidth: "350px" }}
        >
          <div className="card pb-4 bg-gray-100 rounded-lg shadow-lg bg-white pt-4 pl-3">
            <h6 className="title text-purple-950 text-sm md:text-base lg:text-lg font-semibold">
              <a href={article.link} className="hover:underline">
                {article.title}
              </a>
            </h6>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>






      <div className="flex justify-around row justify-content-center">
        <a
          href="/vallum"
          className="justify-content-center pt-[15px] pr-[34px] pb-[15px] pl-[35px] bg-purple-950 text-white hover:bg-white hover:text-purple-950 shadow-lg"
        >
          <button type="button">View More</button>
        </a>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default VallumReading;
