import Link from "next/link";
import { FaHandHoldingUsd } from "react-icons/fa";

const ClientApproach = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-5 bg-white">
      {/* SVG Icon */}
      <div className="bg-purple-100 p-6 rounded-full shadow-md mb-6">
        <FaHandHoldingUsd className="text-gray-600 hover:text-purple-900" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-purple-900 mb-5">
        OUR CLIENT CENTRIC APPROACH
      </h1>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mb-7 text-xl">
        The capacity of any organization to meet its clients&apos; needs starts
        with its structure.
      </p>

      {/* Button */}
      <Link href="/OurClintApproch" passHref>
        <button className="max-w-48 mt-4 px-4 py-2 bg-purple-950 text-white font-semibold rounded-md hover:bg-white hover:text-purple-950 shadow hover:border-solid hover:border hover:border-black">
          VIEW MORE
        </button>
      </Link>
    </div>
  );
};

export default ClientApproach;
