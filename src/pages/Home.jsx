import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [stats, setStats] = useState({
    donations: 0,
    volunteers: 0,
    families: 0,
    campaigns: 0,
  });

  const testimonials = [
    {
      quote:
        "This platform made donating incredibly easy. Glad to be part of such a meaningful mission.",
      name: "Sara Khan",
      location: "Dhaka",
      avatar: "SK",
    },
    {
      quote:
        "I never realized how many people suffer during winter. This platform truly makes a difference.",
      name: "Rashed Ali",
      location: "Chittagong",
      avatar: "RA",
    },
    {
      quote:
        "A beautiful initiative. Proud to support and help vulnerable families stay warm.",
      name: "Mina Sultana",
      location: "Sylhet",
      avatar: "MS",
    },
    {
      quote:
        "The volunteer coordination was seamless. I could see the direct impact of my contribution.",
      name: "Kamal Hossain",
      location: "Rajshahi",
      avatar: "KH",
    },
  ];

  const steps = [
    {
      title: "Choose a Campaign",
      description:
        "Explore our active campaigns and select one where you'd like to contribute.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fill the Donation Form",
      description:
        "Provide details of your winter clothes and items for donation.",
      icon: "📝",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "We Pick It Up",
      description:
        "Our volunteers coordinate with you and collect items from your doorstep.",
      icon: "🚚",
      color: "from-orange-500 to-red-500",
    },
  ];

  const impacts = [
    {
      title: "Families Reached",
      description: "Across 8 divisions in Bangladesh",
      metric: "15,000+",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Items Distributed",
      description: "Blankets, jackets, and warm clothing",
      metric: "45,000+",
      icon: "🧥",
    },
    {
      title: "Active Volunteers",
      description: "Committed to making a difference",
      metric: "500+",
      icon: "🙋",
    },
    {
      title: "Partner Organizations",
      description: "Working together for warmth",
      metric: "25+",
      icon: "🤝",
    },
  ];

  const features = [
    {
      title: "Transparent Distribution",
      description: "Track where your donations go with real-time updates",
      icon: "📊",
    },
    {
      title: "Verified Campaigns",
      description: "All campaigns are verified and monitored by our team",
      icon: "✅",
    },
    {
      title: "Free Pickup Service",
      description: "We collect donations from your doorstep at no cost",
      icon: "🚗",
    },
    {
      title: "Community Impact",
      description: "Join thousands making winter warmer for families",
      icon: "❤️",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-out-cubic",
    });

    // Animate statistics
    const animateValue = (key, end, duration) => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setStats((prev) => ({ ...prev, [key]: end }));
          clearInterval(timer);
        } else {
          setStats((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    setTimeout(() => {
      animateValue("donations", 12547, 2000);
      animateValue("volunteers", 523, 2000);
      animateValue("families", 15234, 2000);
      animateValue("campaigns", 48, 2000);
    }, 500);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;
    if (!fullName || !email || !phone || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Thank you for signing up as a volunteer!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    closeModal();
  };

  return (
    <div className="mx-auto overflow-hidden">
      {/* HERO SLIDER */}
      <div className="pt-16">
        <Swiper
          spaceBetween={0}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          effect="fade"
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="hero-swiper"
        >
          {[
            {
              img: "https://i.ibb.co.com/K5WFSD7/donation-concept-preparing-used-old-clothes-from-wardrobe-rack-into-donate-box-34048-1450.jpg",
              title: "Warm Hearts, Warm Winters",
              text: "Thousands struggle through winter without proper clothing. Together, we can make a difference.",
              btn: "Donate Now",
              overlay: "bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent",
            },
            {
              img: "https://i.ibb.co.com/2gY9y8k/View-Campaigns.webp",
              title: "Every Donation Creates Hope",
              text: "Your small act of kindness can bring warmth and dignity to someone in need.",
              btn: "View Campaigns",
              overlay: "bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent",
            },
            {
              img: "https://i.ibb.co.com/5shb8JN/watercolor-human-rights-day-background-23-2150998255.jpg",
              title: "Together, We Create Impact",
              text: "Join hands with us to support communities across Bangladesh during harsh winters.",
              btn: "Join as Volunteer",
              overlay: "bg-gradient-to-r from-orange-900/90 via-orange-800/70 to-transparent",
            },
            {
              img: "https://i.ibb.co.com/qgCSWJc/learn-more.webp",
              title: "Make Winter Warmer",
              text: "Your support helps us reach families who need warmth, care, and protection.",
              btn: "Learn More",
              overlay: "bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[75vh] md:h-[90vh] flex items-center justify-start text-left text-white bg-cover bg-center relative"
                style={{ backgroundImage: `url('${slide.img}')` }}
              >
                <div className={`absolute inset-0 ${slide.overlay}`}></div>

                <div className="relative z-10 px-6 md:px-20 max-w-7xl">
                  <div className="max-w-2xl space-y-6 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl font-light leading-relaxed drop-shadow-lg">
                      {slide.text}
                    </p>
                    <button className="group mt-6 px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 flex items-center gap-2">
                      {slide.btn}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* STATISTICS BANNER */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="0">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stats.donations.toLocaleString()}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  Items Donated
                </div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stats.volunteers}+
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  Volunteers
                </div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stats.families.toLocaleString()}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  Families Helped
                </div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stats.campaigns}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  Active Campaigns
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="relative py-20 overflow-hidden bg-white" data-aos="fade-up">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  About Our Mission
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Building a Warmer Bangladesh
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We are committed to supporting vulnerable communities during harsh
                  winters by collecting and distributing warm clothing across
                  Bangladesh. Every item you donate—whether a sweater, blanket, or
                  jacket—helps protect someone from the cold.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Together, we can build a compassionate community where no one has to
                  endure winter unprotected. Join us in our mission to bring warmth,
                  dignity, and hope to thousands of families.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                    Learn More About Us
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold">
                    View Our Impact
                  </button>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://i.ibb.co.com/5shb8JN/watercolor-human-rights-day-background-23-2150998255.jpg"
                    alt="Community Support"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                  <div className="text-sm text-gray-600">Divisions Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Making Donation Simple & Transparent
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We've built a platform that makes giving back easy, transparent, and impactful
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Simple Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Three simple steps to make your donation reach those in need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200"></div>
              
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                >
                  <div className="bg-white border-4 border-gray-100 p-8 rounded-2xl text-center hover:border-gray-200 transition-all duration-300 hover:shadow-xl relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg rotate-3 hover:rotate-0 transition-transform`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
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

        {/* IMPACT SHOWCASE */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMyIgZmlsbD0id2hpdGUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Impact This Winter
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Real numbers that show the difference we're making together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impacts.map((impact, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="text-5xl mb-4">{impact.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {impact.metric}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {impact.title}
                  </div>
                  <div className="text-white/80">
                    {impact.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Community Voices
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What People Are Saying
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from donors and volunteers who are part of our mission
              </p>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-4xl text-blue-500 mb-4">"</div>
                    <p className="text-gray-700 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* VOLUNTEER CTA SECTION */}
        <section className="relative py-20 overflow-hidden" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 text-white">
            <div className="text-6xl mb-6" data-aos="zoom-in">🙋‍♂️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
              Join as a Volunteer
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Be part of a community-driven mission. Our volunteers are the
              reason we can reach thousands of families every winter. Your time
              and effort can help keep someone warm and safe.
            </p>
            <button
              onClick={openModal}
              className="px-10 py-5 bg-white text-red-600 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Become a Volunteer Today →
            </button>
          </div>
        </section>

        {/* VOLUNTEER MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 md:p-10 relative animate-scale-in">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>

              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                  🎉
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Join Our Team!
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and start making a difference
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    placeholder="Enter your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    placeholder="+880 1XXX-XXXXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                    placeholder="Tell us what motivates you..."
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAQ */}
        <section className="bg-white py-20" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
                Got Questions?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Find answers to common questions about our donation process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "How do I donate winter clothes?",
                  a: "Visit the campaign page, select a campaign, and fill out the donation form. We'll coordinate a pickup time with you.",
                },
                {
                  q: "Who receives the donated items?",
                  a: "Donations are distributed to verified vulnerable families in rural and low-income communities across all 8 divisions of Bangladesh.",
                },
                {
                  q: "Can I volunteer for item pickups?",
                  a: "Absolutely! Volunteers are essential to our mission. Sign up through the volunteer form and we'll contact you with opportunities.",
                },
                {
                  q: "Is there a cost for pickup service?",
                  a: "No, our pickup service is completely free. We collect donations from your doorstep at no charge.",
                },
                {
                  q: "How do you verify campaigns?",
                  a: "All campaigns are thoroughly verified by our team. We work with trusted partner organizations and conduct regular audits.",
                },
                {
                  q: "Can I track my donation?",
                  a: "Yes! We provide updates on how donations are distributed. You can see the impact of your contribution through our platform.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-start gap-3">
                    <span className="text-blue-500 text-2xl flex-shrink-0">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Every donation, no matter how small, brings warmth to someone in need.
              Start your journey of giving today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
                Browse Campaigns
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default Home;