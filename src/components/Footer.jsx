import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@donationplatform.com" className="hover:underline">
                info@donationplatform.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +880 1234 567890
            </li>
            <li>
              <strong>Address:</strong> 123 Donation St, Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links & Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/donation-campaigns" className="hover:text-yellow-400 transition">
                Donation Campaigns
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
          </ul>
          <h2 className="text-xl font-bold mt-8 mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              aria-label="Visit our Twitter profile"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
              aria-label="Visit our LinkedIn profile"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

        {/* Column 3: Newsletter Subscription */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-300 mb-4">
            Sign up for our newsletter to stay updated on new campaigns and opportunities to help.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
            />
            <button className="bg-yellow-400 text-gray-900 px-3 py-2 rounded-r-md hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Donation Platform. All Rights Reserved.
        </p>
        <p className="text-gray-400 mt-2">
          Designed and Developed by{' '}
          <a
            href="https://github.com/sumu9897"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:underline"
          >
            Mohammad Sumon
          </a>
        </p>
      </div>


    </footer>
  );
};

export default Footer;
