import React, { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 relative"
        style={{
          backgroundImage: 'url("/images/liese.jpg")', // Path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px', // Padding to ensure content doesn't overlap
        }}
      >
        {/* Modal Header */}
        <div className="flex justify-center items-center p-4 border-b bg-opacity-70 relative">
          {/* Close Button - Positioned at the top-right */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-purple-950 hover:text-purple-950 focus:outline-none text-lg font-semibold"
            aria-label="Close"
          >
            X
          </button>
          
          {/* Title and Subtitle - Centered */}
          <div className="text-center">
            <h1 className="text-lg text-purple-950 font-bold modal-title" id="exampleModalLongTitle text-uppercase">
              VALLUM READINGS
            </h1>
            <h4 className="text-lg font-bold text-black">Subscribe Now</h4>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 bg-opacity-80">
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-950 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-950 border border-purple-950"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
