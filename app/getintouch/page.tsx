//import ContactSection from "../components/contactsection";
import Image from "next/image";
import Link from "next/link";



const ContactPage: React.FC = () => {
  return (
    < >
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
            Get In Touch
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:underline">HOME</Link> &gt; W Get In Touch
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 p-6 bg-white">
  {/* Contact Form Section */}
  <div className="w-full lg:w-2/2 bg-white shadow-lg p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-purple-950 mb-4">
      Please share your details, We shall contact you.
    </h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name*"
        className="border p-3 rounded-md w-full"
        required
      />
      <input
        type="email"
        placeholder="Email*"
        className="border p-3 rounded-md w-full"
        required
      />
      <input
        type="text"
        placeholder="Contact Number"
        className="border p-3 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Nature of Business*"
        className="border p-3 rounded-md w-full"
        required
      />
      <select className="border p-3 rounded-md w-full">
        <option>Select Work Profile</option>
        <option>Profile 1</option>
        <option>Profile 2</option>
      </select>
      <input
        type="text"
        placeholder="City*"
        className="border p-3 rounded-md w-full"
        required
      />
      <input
        type="text"
        placeholder="State*"
        className="border p-3 rounded-md w-full"
        required
      />
      <input
        type="text"
        placeholder="Country*"
        className="border p-3 rounded-md w-full"
        required
      />
      <button
        type="submit"
        className="col-span-1 md:col-span-2 bg-purple-950 text-white font-bold py-3 rounded-md hover:bg-purple-800"
      >
        SUBMIT
      </button>
    </form>
  </div>

  {/* Contact Details Section */}
  <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-lg">
    <h2 className="text-2xl font-bold text-purple-950 mb-4">Contact Details</h2>
    <p className="mb-2 text-black">
      📍 Bungalow No 36, Kalanagar, Bandra (East), Mumbai, India - 400 051
    </p>
    <p className="mb-2 text-black">📞 +91 8655664539</p>
    <p className="mb-2 text-black">📧 connect.vallum@vallum.in</p>
    <p className="mb-2 text-black">🌐 www.vallum.in</p>
    <p className="mb-4 text-black">📱 +91 9326576656</p>
    <div className="flex gap-4">
      <a href="#" className="text-purple-950 hover:text-purple-700">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-purple-950 hover:text-purple-700">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="text-purple-950 hover:text-purple-700">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</section>

{/* Separate Map Section */}
<section className="bg-white shadow-lg p-6 rounded-lg mt-8">
  <h2 className="text-2xl font-bold text-purple-950 mb-4 text-center">
    Our Location
  </h2>
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.883905576906!2d72.83466401539953!3d19.04486505779852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91f0c7f9df3%3A0x23cf00237822d8ec!2sBandra%20East%2C%20Mumbai%2C%20Maharashtra%20400051!5e0!3m2!1sen!2sin!4v1695982183123!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

    </>
  );
};

export default ContactPage;
