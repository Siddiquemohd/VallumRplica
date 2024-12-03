// components/SignUpForm.tsx
'use client';  
import { useState } from "react";

interface FormData {
  name: string;
  dob: string;
  email: string;
  mobile: string;
  workProfile: string;
  natureOfBusiness: string;
  city: string;
  country: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    workProfile: "",
    natureOfBusiness: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
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
            Sign Up
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Sign Up
          </p>
        </div>
      </section>

    <section className="feature-section py-12" id="feature">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="bg-white shadow-md rounded-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-center text-2xl font-bold uppercase mb-4">
                  Vallum Client Sign Up
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name*"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile Number*"
                      required
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <select
                      name="workProfile"
                      id="workProfile"
                      required
                      value={formData.workProfile}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    >
                      <option value="">Select Work Profile</option>
                      <option value="Business">Business</option>
                      <option value="Working-Professional">Working Professional</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="natureOfBusiness"
                      id="natureOfBusiness"
                      placeholder="Nature of Business*"
                      required
                      maxLength={200}
                      value={formData.natureOfBusiness}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City*"
                      required
                      maxLength={50}
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <select
                      name="country"
                      id="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded"
                    >
                      <option value="">Select Country</option>
                      {/* Replace the following options with dynamic country data if necessary */}
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SignUpForm;
