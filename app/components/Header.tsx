"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { FaFacebook, FaLinkedin, FaLock, FaTwitter } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Header: FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null); // Track the hovered menu item
  
  return (
    <header className="fixed top-0 left-0 z-50 right-0.5">
      {/* Top bar with onboarding link */}
      <div className="bg-purple-950 text-yellow-300 flex items-center justify-between py-1 px-3 text-3lg">
        {/* Onboarding link */}
        <div>
          <Link href="#" className="text-white px-4 py-3">
            For Direct Onboarding <span className="text-yellow-600">Click Here&apos;s</span>
          </Link>
        </div>

        {/* Social media icons and login button */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <FaTwitter />
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            <FaLinkedin />
          </Link>

          {/* Client login button */}
          <Link href="https://onlinefa.icicibank.com/wealthspectrum/portal/sign-in" target="_blank" className="text-white px-2 py-1 rounded-lg flex items-center space-x-1">
            <FaLock />
            <span>Client Login</span>
          </Link>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-white heead flex items-center justify-between px-4 pt-2 pb-2">
        {/* Logo */}
        <div className="flex-shrink-0 bg-white">
          <Image
            src="/images/vall.png" // Replace with your actual logo path
            alt="VALLUM Logo"
            width={150} // Adjust dimensions as needed
            height={50}
            className="cursor-pointer bg-white"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-9 text-sm font-bold ml-auto pr-[21px]">
          {/* Home - No dropdown */}
          <div className="group relative">
            <Link href="/" className="text-black hover:text-purple-950">
              HOME
              <span
                className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </div>

          {/* Dropdown for OUR PRODUCTS */}
          <div
            className="group relative"
            onMouseEnter={() => setIsHovered("products")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Link href="#" className="text-black hover:text-purple-950 flex items-center">
              OUR PRODUCTS
              <ChevronDownIcon className="h-5 w-5 ml-1 text-gray-500 group-hover:text-purple-950" />
              <span
                className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            {isHovered === "products" && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-15 w-56">
                <ul className="w-full border-t border-gray-200">
                  <li className="border-b border-gray-200">
                    <Link
                      href="/PMS"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      PMS
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Dropdown for REGULATORY INFORMATION */}
          <div
            className="group relative"
            onMouseEnter={() => setIsHovered("regulatory")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Link href="#" className="text-black hover:text-purple-950 flex items-center">
              REGULATORY INFORMATION
              <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500 group-hover:text-purple-950" />
              <span
                className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            {isHovered === "regulatory" && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-15 w-56">
                <ul className="w-full border-t border-gray-200">
                  <li className="border-b border-gray-200">
                    <Link
                      href="https://vallum.in/api/img/documents/202308081156259951.pdf" target="_blank"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      Disclosure Document
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link
                      href="https://vallum.in/api/img/documents/INVESTOR-CHARTER-OF-PORTFOLIO-MANAGEMENT-SERVICES.pdf" target="_blank"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      Investor Charter
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link
                      href="https://vallum.in/api/img/products/202411040927353029.pdf" target="_blank"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      SCORES
                    </Link>
                  </li>
                  <li className="border-b border-gray-200">
                    <Link
                      href="https://vallum.in/api/img/documents/SEBI-Master-Circular-for-Online-Resolution-of-Disputes.pdf" target="_blank"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      SEBI Master Circular for Online Resolution of Disputes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://vallum.in/api/img/documents/Vallum-Capital-Advisors-Fee-Illustration.xlsx" target="_blank"
                      className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
                    >
                      Fee Calculator
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
           





           {/* Dropdown for INVESTORS CORNER */}
<div
  className="group relative"
  onMouseEnter={() => setIsHovered("investors")}
  onMouseLeave={() => setIsHovered(null)}
>
  <Link href="#" className="text-black hover:text-purple-950 flex items-center"> 
    INVESTORS CORNER
    <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500 group-hover:text-purple-950" />
    <span
      className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>
  {isHovered === "investors" && (
    <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-15 w-56">
      <ul className="w-full border-t border-gray-200">
        <li className="border-b border-gray-200">
          <Link
            href="/InvestmentStrategy"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Investment Strategy
          </Link>
        </li>
        <li className="border-b border-gray-200">
          <Link
            href="/OurClintApproch"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Our Clint Centric Approach
          </Link>
        </li>
        <li>
          <Link
            href="AccreditedInvestors"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Accredited Investors and Large Value Accredited Investors
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>

<div
  className="group relative"
  onMouseEnter={() => setIsHovered("INSIHGTS")}
  onMouseLeave={() => setIsHovered(null)}
>
  <Link href="#" className="text-black hover:text-purple-950 flex items-center">
    INSIHGTS
    <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500 group-hover:text-purple-950" />
    <span
      className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>
  {isHovered === "INSIHGTS" && (
    <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-15 w-56">
      <ul className="w-full border-t border-gray-200">
        <li className="border-b border-gray-200">
          <Link
            href="/sharholderlatter"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Shareholder Latters
          </Link>
        </li>
        <li>
          <Link
            href="/vallum"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Vallium&apos;s Weeaking Reading
          </Link>
        </li>
        <li>
          <Link
            href="/Blogs"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/Media"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Meadia
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>

{/* Dropdown for ABOUT US */}
<div
  className="group relative"
  onMouseEnter={() => setIsHovered("about")}
  onMouseLeave={() => setIsHovered(null)}
>
  <Link href="#" className="text-black hover:text-purple-950 flex items-center">
    ABOUT US
    <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500 group-hover:text-purple-950" />
    <span
      className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-purple-950 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>
  {isHovered === "about" && (
    <div className="absolute mt-2 bg-white shadow-lg rounded-lg z-15 w-56">
      <ul className="w-full border-t border-gray-200">
        <li className="border-b border-gray-200">
          <Link
            href="/Who-we-are"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Who We Are
          </Link>
        </li>
        <li>
          <Link
            href="/Our-team"
            className="block px-4 py-2 text-black hover:text-white hover:bg-purple-950"
          >
            Our Team
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>







        </nav>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="/getintouch"
            className="bg-purple-950 text-white text-sm px-4 py-4 hover:bg-white hover:text-purple-950 hover:border-solid hover:border-2 hover:border-black"
          >
            FOR DIRECT ONBOARDING
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;