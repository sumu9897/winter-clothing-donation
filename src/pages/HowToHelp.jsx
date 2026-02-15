import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HowToHelp() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const waysToHelp = [
    {
      title: "Donate Winter Clothing",
      description:
        "Share your unused winter clothes and help someone stay warm this winter. Every jacket, sweater, or blanket can make a difference.",
      image: "https://i.ibb.co.com/bL065jF/Donate-Clothing.webp",
      icon: "🧥",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Clean, gently used winter items",
        "Jackets, sweaters, blankets",
        "Free doorstep pickup",
        "Tax-deductible donations",
      ],
    },
    {
      title: "Volunteer Your Time",
      description:
        "Join our team of dedicated volunteers to make a difference in your community. Help with collection, distribution, or coordination.",
      image: "https://i.ibb.co.com/rfQzmBw/Volunteer.jpg",
      icon: "🙋",
      color: "from-purple-500 to-pink-500",
      details: [
        "Flexible scheduling",
        "Training provided",
        "Team-based activities",
        "Make lasting connections",
      ],
    },
    {
      title: "Spread the Word",
      description:
        "Share our mission with your friends and family to amplify our impact. Social media, word of mouth - every share helps.",
      image: "https://i.ibb.co.com/zxGbZGP/Spread-the-Word.jpg",
      icon: "📢",
      color: "from-orange-500 to-red-500",
      details: [
        "Share on social media",
        "Tell friends and family",
        "Host awareness events",
        "Become an ambassador",
      ],
    },
  ];

  const impactSteps = [
    {
      step: "1",
      title: "Choose Your Way",
      description: "Select how you'd like to contribute - donate, volunteer, or spread awareness",
      icon: "🎯",
    },
    {
      step: "2",
      title: "Take Action",
      description: "Follow simple steps to make your contribution - we handle the rest",
      icon: "⚡",
    },
    {
      step: "3",
      title: "See the Impact",
      description: "Track how your contribution helps families stay warm through winter",
      icon: "❤️",
    },
  ];

  const faqs = [
    {
      question: "What items can I donate?",
      answer:
        "We accept clean, gently used winter clothing including jackets, sweaters, blankets, scarves, gloves, and warm socks. Items should be in good condition.",
    },
    {
      question: "How does the pickup process work?",
      answer:
        "Once you submit a donation form, our volunteers will contact you within 24-48 hours to schedule a convenient pickup time. The service is completely free.",
    },
    {
      question: "Can I donate money instead of items?",
      answer:
        "Currently, we focus on collecting physical items. However, you can sponsor specific campaigns or become a partner organization. Contact us for more details.",
    },
    {
      question: "How do I become a volunteer?",
      answer:
        "Fill out our volunteer form on the homepage or dashboard. We'll contact you with orientation details and upcoming opportunities that match your availability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div data-aos="fade-up">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              🤝 Join the Movement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How You Can Help
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our mission to bring warmth and support to those in need. Every
              little effort counts, and together we can make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Three Simple Ways
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ways You Can Contribute
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the way that works best for you - or do all three!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {waysToHelp.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={way.image}
                    alt={way.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl`}
                    >
                      {way.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {way.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mb-6">
                    {way.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(index === 0 ? "/campaign" : "/")}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${way.color} text-white hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2`}
                  >
                    <span>Get Started</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Impact Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From contribution to impact - see how your help reaches those in need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-10"></div>

            {impactSteps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="bg-white border-4 border-gray-100 rounded-2xl p-8 text-center hover:border-blue-200 transition-all duration-300 hover:shadow-xl relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Together, We're Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Real numbers showing the collective impact of our community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15,234", label: "Families Helped" },
              { number: "45,000+", label: "Items Donated" },
              { number: "523", label: "Active Volunteers" },
              { number: "8", label: "Divisions Covered" },
            ].map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about helping out
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-500 text-2xl flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-24 overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Contribution Counts
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Whether you donate, volunteer, or simply spread the word, your actions
            matter. Join us today and be part of something bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/campaign")}
              className="px-10 py-5 bg-white text-blue-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Start Donating</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-10 py-5 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowToHelp;