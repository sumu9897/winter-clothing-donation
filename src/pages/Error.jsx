import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* 404 Number */}
        <div className="mb-8" data-aos="zoom-in">
          <h1 className="text-[200px] md:text-[300px] font-black leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>
        </div>

        {/* Sad Emoji with Animation */}
        <div className="text-8xl mb-6 animate-bounce-slow" data-aos="fade-up" data-aos-delay="200">
          😔
        </div>

        {/* Heading */}
        <h2 
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p 
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          The page you're looking for seems to have wandered off into the winter fog. 
          Don't worry, we'll help you find your way back home.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            to="/"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-full font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div 
          className="mt-12 pt-8 border-t border-gray-200"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-sm text-gray-500 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/campaign"
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Campaigns
            </Link>
            <Link
              to="/how-to-help"
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              How to Help
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Dashboard
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Error;