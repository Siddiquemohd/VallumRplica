import Link from 'next/link';
import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="bg-teal-50 py-8 pr-[7.5rem] pl-[7.5rem]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-13">
        {/* Company Info */}
        <div>
        <div className="flex-shrink-0">
        <Image
          src="/images/vall.png"// Replace with your actual logo path
          alt="VALLUM Logo"
          width={150} // Adjust dimensions as needed
          height={50}
        />
          <p className="text-l text-black">
            Bungalow No 36, Kalanagar, Bandra (East), Mumbai, India - 400 051
          </p>
          <p className="mt-2 text-black text-l">
            <span>📞</span> +91 8655664539
          </p>
          <p className="mt-1 text-l">
            <span>✉️</span> <a href="mailto:connect.vallum@vallum.in" className="text-purple-900">connect.vallum@vallum.in</a>
          </p>
          <p className="mt-1 text-l">
            <span>🌐</span> <a href="https://www.vallum.in" className="text-purple-900">www.vallum.in</a>
          </p>
        </div>
        </div>

        {/* Information Links */}
        <div>
          <h2 className="font-bold text-purple-900 mb-4 text-xl">INFORMATION</h2>
          <ul className="border-0 space-y-2 text-black text-l">
            <li><Link href="/home" className=" ">Home</Link></li>
            <li><Link href="/products" className="">Our Products</Link></li>
            <li><Link href="/team" className="">Our Team</Link></li>
            <li><Link href="/readings" className="">Readings</Link></li>
          </ul>
        </div>

        <div>
         <h1 className="text-white">hello</h1>
          <ul className="border-0 space-y-2 text-black text-l">
            <li><Link href="/home" className=" ">Get In Touch</Link></li>
            <li><Link href="/products" className="">Careers</Link></li>
            <li><Link href="/team" className="">FAQ's</Link></li>
            <li><Link href="/readings" className="">Login</Link></li>
            <li><Link href="/readings" className="">Sign Up</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-bold text-purple-900 mb-4 text-xl">VALLUM READINGS</h2>
          <p className="text-black text-xl">Subscribe Now</p>
          <input
            type="email"
            placeholder="Please enter your email id*"
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
          <button className="mt-4 w-full bg-purple-900 text-xl text-bold text-white py-4 rounded hover:bg-white hover:text-purple-900 hover:border-solid hover:border-2 hover:border-black">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="container mx-auto mt-8 text-l text-black">
        <p>
          For Grievances - <a href="mailto:pms.grievances@vallum.in" className="text-purple-900">pms.grievances@vallum.in</a>
        </p>
        <p>
          In case the grievance is not redressed, the investor can take up the matter with SEBI through 
          <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-900"> SCORES (SEBI COMPLAINTS REDRESS SYSTEM)</a>
        </p>
        <p>
          For online dispute resolution platform - 
          <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-purple-900"> https://smartodr.in/login</a>
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t pt-4 flex justify-between items-center text-l text-black">
        <p>Copyright © 2024 Vallum Capital Advisors</p>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-gray-600 hover:text-purple-900" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-600 hover:text-purple-900" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-gray-600 hover:text-purple-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
