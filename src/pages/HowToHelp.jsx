import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HowToHelp() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How You Can Help</h1>
          <p className="text-lg md:text-xl">
            Join our mission to bring warmth and support to those in need. Every little effort
            counts!
          </p>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Ways You Can Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donate Clothing */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="https://i.ibb.co.com/bL065jF/Donate-Clothing.webp"
                alt="Donate Clothing"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Donate Clothing</h3>
              <p className="text-gray-600">
                Share your unused winter clothes and help someone stay warm this winter.
              </p>
            </div>

            {/* Volunteer */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="https://i.ibb.co.com/rfQzmBw/Volunteer.jpg"
                alt="Volunteer"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-gray-600">
                Join our team of dedicated volunteers to make a difference in your community.
              </p>
            </div>

            {/* Spread the Word */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <img
                src="https://i.ibb.co.com/zxGbZGP/Spread-the-Word.jpg"
                alt="Spread the Word"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
              <p className="text-gray-600">
                Share our mission with your friends and family to amplify our impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Every Contribution Counts</h2>
          <p className="text-lg mb-6">
            Whether you donate, volunteer, or simply spread the word, your actions matter.
          </p>
          <button className="btn btn-primary px-8 py-3 rounded-lg shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default HowToHelp;
