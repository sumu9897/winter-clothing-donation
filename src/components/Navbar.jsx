import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/logo.png";
import userIcon from "../assets/user.jpg";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!", {
          icon: "👋",
        });
        setIsMobileMenuOpen(false);
      })
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
        console.error(error);
      });
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/campaign", label: "Campaigns" },
    { path: "/how-to-help", label: "How to Help" },
    ...(user?.email ? [{ path: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Winter Donation Logo"
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Winter Warmth
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Donation Platform
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* User Info */}
              {user?.email ? (
                <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
                  <img
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    src={user?.photoURL || userIcon}
                    alt="User Avatar"
                    title={user?.displayName || "User"}
                  />
                  <div className="hidden lg:block">
                    <p className="text-sm font-semibold text-gray-800 leading-tight">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.email?.slice(0, 10)}
                      {user?.email?.length > 10 ? "..." : ""}
                    </p>
                  </div>
                </div>
              ) : null}

              {/* Auth Button */}
              {user?.email ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Logout</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              ) : (
                <NavLink
                  to="/auth/login"
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Login</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </NavLink>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-[600px] mt-4" : "max-h-0"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 space-y-2 shadow-lg border border-gray-100">
              {/* Mobile User Info */}
              {user?.email && (
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl mb-3 shadow-sm">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    src={user?.photoURL || userIcon}
                    alt="User Avatar"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>
              )}

              {/* Mobile Nav Items */}
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Auth Button */}
              {user?.email ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Logout</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7"
                    />
                  </svg>
                </button>
              ) : (
                <NavLink
                  to="/auth/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-center"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ marginTop: "70px" }}
      />
    </>
  );
};

export default Navbar;