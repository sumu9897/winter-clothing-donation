import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomeLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const testimonials = [
    {
      quote:
        "It feels great knowing that my donations are making a real difference in someone's life. Thank you for this platform!",
      name: 'Sara Khan',
      location: 'Dhaka',
    },
    {
      quote: 'I appreciate how easy it was to donate. This is such a great cause!',
      name: 'Rashed Ali',
      location: 'Chittagong',
    },
    {
      quote:
        "It's great to see a platform dedicated to helping those who need it the most during the cold months.",
      name: 'Mina Sultana',
      location: 'Sylhet',
    },
  ];

  const howItWorksSteps = [
    {
      title: 'Step 1: Choose a Campaign',
      description:
        'Browse through the active donation campaigns and choose one that you would like to contribute to.',
    },
    {
      title: 'Step 2: Fill the Donation Form',
      description: 'Fill out the donation form with details about the items you want to donate.',
    },
    {
      title: 'Step 3: We Pick It Up',
      description: 'Our volunteers will arrange a pickup from your location. Simple and easy!',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: true,
    });
  }, []);

  const handleVolunteerClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;
    if (!fullName || !email || !phone || !message) {
      toast.error('Please fill out all fields!');
      return;
    }

    setFormData({ fullName: '', email: '', phone: '', message: '' });
    toast.success('Thank you for signing up as a volunteer!');
    closeModal();
  };

  return (
    <div className="mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20">
        {/* Banner/Slider Section */}
        <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
                <div
                className="text-white text-center py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/K5WFSD7/donation-concept-preparing-used-old-clothes-from-wardrobe-rack-into-donate-box-34048-1450.jpg')`,
                }}
                >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Warm Hearts, Warm Winters
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Winter can be a harsh season for those without the proper clothing. 
                    Together, we can help provide warmth and comfort to vulnerable communities. 
                </p>
                <button className="mt-6 px-6 py-2 bg-primary rounded text-white text-lg hover:bg-primary-dark">
                    Donate Now
                </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className="text-white text-center py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/2gY9y8k/View-Campaigns.webp')`,
                }}
                >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Every Donation Counts
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    A single act of kindness can spark hope in someone's life. 
                    Every coat, sweater, or blanket you donate has the power to make winters warmer.
                </p>
                <button className="mt-6 px-6 py-2 bg-primary rounded text-white text-lg hover:bg-primary-dark">
                    View Campaigns
                </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className="text-black text-center py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/5shb8JN/watercolor-human-rights-day-background-23-2150998255.jpg')`,
                }}
                >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Together, We Create Impact
                </h2>
                <p className="text-lg md:text-xl mb-6">
                    Join hands with us to build a community of compassion. 
                    With your help, we can reach the farthest corners of Bangladesh, bringing relief to those in need.
                </p>
                <button className="mt-6 px-6 py-2 bg-primary rounded text-white text-lg hover:bg-primary-dark">
                    Join as Volunteer
                </button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className=" text-center py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/qgCSWJc/learn-more.webp')`,
                }}
                >
                <h2 className="text-3xl text-blue-700 md:text-5xl font-bold mb-4">
                    Make Winter Warmer
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-6">
                    Your generosity brings smiles and warmth to countless families. 
                    Together, we can make winters a little easier for those who need it most.
                </p>
                <button className="mt-6 px-6 py-2 bg-primary rounded text-white text-lg hover:bg-primary-dark">
                    Learn More
                </button>
                </div>
            </SwiperSlide>
        </Swiper>




        {/* About Section */}
        <section className="bg-gray-100 px-6 py-12" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to collect and distribute winter clothing to those in need, especially
              in rural and low-income areas of Bangladesh. Your contribution can make a tangible
              impact in someone's life. Together, we can create a warmer future.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-lg rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200}`}
                >
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join as Volunteer Section */}
        <section className="bg-gray-100 px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">
              Join as a Volunteer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
              Be part of a community dedicated to making a difference.
            </p>
            <button
              onClick={handleVolunteerClick}
              className="px-6 py-3 text-white bg-primary rounded shadow-md hover:bg-primary-dark focus:ring focus:ring-primary-light transition-all"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Become a Volunteer
            </button>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold mb-4 text-center">Volunteer Signup</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-primary-light"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-primary-light"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-primary-light"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-primary-light"
                    rows="4"
                    placeholder="Why do you want to join?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded shadow-md hover:bg-primary-dark transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <section className="bg-gray-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="font-semibold text-lg">How can I donate?</h3>
                <p className="text-gray-600 mt-2">
                  Simply navigate to our campaign page, select a campaign, and fill out the donation form.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="font-semibold text-lg">Where do my donations go?</h3>
                <p className="text-gray-600 mt-2">
                  All donations are distributed to underprivileged communities across Bangladesh, focusing on rural areas.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="font-semibold text-lg">Can I volunteer for pickup services?</h3>
                <p className="text-gray-600 mt-2">
                  Yes! Volunteers are crucial to our mission. You can sign up on our Volunteer page.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <h3 className="font-semibold text-lg">How do I contact you?</h3>
                <p className="text-gray-600 mt-2">
                  You can reach us through the contact form on our website or email us directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
