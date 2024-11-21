import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import logo from '../assets/logo.png';
import userIcon from '../assets/user.jpg';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Successfully logged out!');
      })
      .catch((error) => {
        toast.error('Failed to log out. Please try again.');
        console.error(error);
      });
  };

  return (
    <>
      <nav className="navbar bg-base-100 shadow-md fixed z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              style={{ zIndex: 1000 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              <li>
                <NavLink to="/" activeClassName="text-primary">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/campaign" activeClassName="text-primary">
                  Donation Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink to="/how-to-help" activeClassName="text-primary">
                  How to Help
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" activeClassName="text-primary">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" className="w-8 h-8 inline-block mr-2" />
            Donation Platform
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" activeClassName="text-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/campaign" activeClassName="text-primary">
                Donation Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-to-help" activeClassName="text-primary">
                How to Help
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName="text-primary">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-2">
          <div className="items-center">
            {user && user?.email ? (
              <div className="flex items-center gap-2">
                <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                <p>{user?.displayName}</p>
              </div>
            ) : (
              <img src={userIcon} alt="user-icon" className="w-10" />
            )}
          </div>
          {user && user?.email ? (
            <button
              onClick={handleLogout}
              className="btn btn-neutral rounded-none"
            >
              Log Out
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;
