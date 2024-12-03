import React from "react";

const contactsection: React.FC = () => {
  return (
    <section
      className="contact-section pt-10 pb-10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="row justify-center feature-wrapper">
          {/* Form Section */}
          <div className="lg:w-2/3 mb-8">
            <div
              className="box-shadow p-6 md:p-8 bg-white rounded-lg"
              data-aos="fade-up"
            >
              <form noValidate className="needs-validation">
                <div className="text-center">
                  <h3 className="title mb-6 text-xl font-bold">
                    Please share your details, we shall contact you.
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    required
                    maxLength={50}
                  />
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email*"
                    required
                    maxLength={100}
                  />
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="mobile"
                    id="mobile"
                    placeholder="Contact Number"
                    maxLength={10}
                  />
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="nature_of_business"
                    id="nature_of_business"
                    placeholder="Nature of Business*"
                    required
                    maxLength={200}
                  />
                  <select
                    className="form-select border border-gray-300 rounded-md p-2 w-full"
                    name="work_profile"
                    id="work_profile"
                    required
                  >
                    <option value="">Select Work Profile</option>
                    <option value="Business">Business</option>
                    <option value="Working-Professional">Working Professional</option>
                  </select>
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="city"
                    id="city"
                    placeholder="City*"
                    required
                    maxLength={50}
                  />
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="state"
                    id="state"
                    placeholder="State*"
                    required
                    maxLength={50}
                  />
                  <input
                    className="form-input border border-gray-300 rounded-md p-2 w-full"
                    name="country"
                    id="country"
                    placeholder="Country*"
                    required
                    maxLength={15}
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/3 mb-8">
            <div
              className="box-shadow p-6 md:p-8 bg-white rounded-lg"
              data-aos="fade-up"
            >
              <h3 className="title text-center text-xl font-bold mb-4">Contact Details</h3>
              <div className="contact-info text-center">
                <p className="mb-4">
                  <i className="fa fa-map-marker mr-2"></i>
                  Bungalow No 36, Kalanagar, Bandra (East),<br />
                  Mumbai, India - 400 051
                </p>
                <p className="mb-4">
                  <i className="fa fa-phone mr-2"></i>+91 8655664539
                </p>
                <p className="mb-4">
                  <i className="fa fa-envelope mr-2"></i>
                  <a href="mailto:connect.vallum@vallum.in">connect.vallum@vallum.in</a>
                </p>
                <p className="mb-4">
                  <i className="fa fa-whatsapp mr-2"></i>+91 9326576656
                </p>
                <ul className="flex justify-center space-x-4 mt-4">
                  <li>
                    <a href="https://www.facebook.com/vallum.capital" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/VallumConnect" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vallum/" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactsection;
