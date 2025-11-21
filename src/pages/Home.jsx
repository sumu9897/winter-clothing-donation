import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const testimonials = [
    {
      quote:
        "This platform made donating incredibly easy. Glad to be part of such a meaningful mission.",
      name: "Sara Khan",
      location: "Dhaka",
    },
    {
      quote:
        "I never realized how many people suffer during winter. This platform truly makes a difference.",
      name: "Rashed Ali",
      location: "Chittagong",
    },
    {
      quote:
        "A beautiful initiative. Proud to support and help vulnerable families stay warm.",
      name: "Mina Sultana",
      location: "Sylhet",
    },
  ];

  const steps = [
    {
      title: "Step 1: Choose a Campaign",
      description:
        "Explore our active campaigns and select one where you'd like to contribute.",
    },
    {
      title: "Step 2: Fill the Donation Form",
      description:
        "Provide details of your winter clothes and items for donation.",
    },
    {
      title: "Step 3: We Pick It Up",
      description:
        "Our volunteers coordinate with you and collect items from your doorstep.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
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
    <div className="mx-auto">
      {/* HERO / SLIDER */}
      <div className="pt-20">
        <Swiper
          spaceBetween={20}
          navigation={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {[
            {
              img: "https://i.ibb.co.com/K5WFSD7/donation-concept-preparing-used-old-clothes-from-wardrobe-rack-into-donate-box-34048-1450.jpg",
              title: "Warm Hearts, Warm Winters",
              text: "Thousands struggle through winter without proper clothing. Together, we can make a difference.",
              btn: "Donate Now",
            },
            {
              img: "https://i.ibb.co.com/2gY9y8k/View-Campaigns.webp",
              title: "Every Donation Creates Hope",
              text: "Your small act of kindness can bring warmth and dignity to someone in need.",
              btn: "View Campaigns",
            },
            {
              img: "https://i.ibb.co.com/5shb8JN/watercolor-human-rights-day-background-23-2150998255.jpg",
              title: "Together, We Create Impact",
              text: "Join hands with us to support communities across Bangladesh during harsh winters.",
              btn: "Join as Volunteer",
            },
            {
              img: "https://i.ibb.co.com/qgCSWJc/learn-more.webp",
              title: "Make Winter Warmer",
              text: "Your support helps us reach families who need warmth, care, and protection.",
              btn: "Learn More",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center relative"
                style={{ backgroundImage: `url('${slide.img}')` }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="relative z-10 px-4 md:px-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    {slide.text}
                  </p>
                  <button className="mt-4 px-6 py-3 bg-primary rounded text-white text-lg hover:bg-primary-dark transition">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ABOUT SECTION */}
        <section className="bg-gray-100 px-6 py-12" data-aos="fade-up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-5">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to supporting vulnerable communities during harsh
              winters by collecting and distributing warm clothing across
              Bangladesh. Every item you donate—whether a sweater, blanket, or
              jacket—helps protect someone from the cold. Together, we can build
              a compassionate community where no one has to endure winter
              unprotected.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-12" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md p-6 rounded-lg text-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                >
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOLUNTEER SECTION */}
        <section className="bg-gray-100 px-6 py-12" data-aos="fade-up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Join as a Volunteer</h2>
            <p className="text-gray-700 text-lg mb-6">
              Be part of a community-driven mission. Our volunteers are the
              reason we can reach thousands of families every winter. Your time
              and effort can help keep someone warm and safe.
            </p>
            <button
              onClick={openModal}
              className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary-dark transition"
            >
              Become a Volunteer
            </button>
          </div>
        </section>

        {/* VOLUNTEER MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-5 text-center">
                Volunteer Signup
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Why do you want to volunteer?"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded hover:bg-primary-dark transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAQ */}
        <section className="bg-gray-50 px-6 py-12" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="font-semibold text-lg">
                  How do I donate winter clothes?
                </h3>
                <p className="text-gray-600 mt-2">
                  Visit the campaign page, select a campaign, and fill out the
                  donation form.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="font-semibold text-lg">
                  Who receives the donated items?
                </h3>
                <p className="text-gray-600 mt-2">
                  Donations are distributed to vulnerable families in rural and
                  low-income communities across Bangladesh.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="font-semibold text-lg">
                  Can I volunteer for item pickups?
                </h3>
                <p className="text-gray-600 mt-2">
                  Absolutely! Volunteers are essential to our mission. Sign up
                  through the volunteer form.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <h3 className="font-semibold text-lg">How do I contact you?</h3>
                <p className="text-gray-600 mt-2">
                  You can reach us using the contact form or email us directly
                  for support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
