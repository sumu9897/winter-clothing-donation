import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/logo.png";
import userIcon from "../assets/user.jpg";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully logged out!"))
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/campaign" className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}>
          Donation Campaigns
        </NavLink>
      </li>

      <li>
        <NavLink to="/how-to-help" className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}>
          How to Help
        </NavLink>
      </li>

      {user?.email && (
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50 px-4 md:px-10">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12M4 18h16" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box w-56 shadow mt-3 p-2 z-[100]"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-lg font-bold hover:opacity-80">
            <img src={logo} alt="Logo" className="w-9 h-9" />
            <span>Donation Platform</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-3">
          {/* User Avatar */}
          <div className="flex items-center gap-2">
            {user?.email ? (
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full object-cover border"
                  src={user?.photoURL || userIcon}
                  alt="User"
                />
                <p className="hidden md:block font-medium">{user?.displayName || "User"}</p>
              </div>
            ) : (
              <img src={userIcon} alt="Guest" className="w-10 h-10 rounded-full" />
            )}
          </div>

          {/* Auth Buttons */}
          {user?.email ? (
            <button onClick={handleLogout} className="btn btn-neutral rounded-none">
              Log Out
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;
