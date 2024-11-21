import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
              Be part of a community dedicated to making a difference. Volunteer with us to help
              collect, sort, and distribute donations to those who need them most.
            </p>
            <Link
              to="/volunteer"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Become a Volunteer
            </Link>
          </div>
        </section>

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
