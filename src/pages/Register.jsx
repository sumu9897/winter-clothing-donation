import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validate Name
    if (name.length < 5) {
      setError({ ...error, name: "Name must be more than 5 characters." });
      return;
    } else {
      setError((prev) => ({ ...prev, name: null }));
    }

    // Validate Password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError({ ...error, password: passwordError });
      return;
    } else {
      setError((prev) => ({ ...prev, password: null }));
    }

    // Create New User
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Update User Profile
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Signed in with Google successfully!");
        navigate("/"); 
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center pt-20">
      <ToastContainer />
      <div className="card bg-base-100 w-full max-w-lg shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">Register your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" />
            {error.name && <label className="label text-rose-700">{error.name}</label>}
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
          </div>

          {/* Password Input with Toggle */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              {/* Eye Icon Toggle */}
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
            {error.password && <label className="label text-rose-700">{error.password}</label>}
          </div>

          {/* Register Button */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>

        {/* Google Sign-In */}
        <div className="divider my-6">OR</div>
        <div className="form-control">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={24} />
            <span>Sign Up with Google</span>
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="text-center font-semibold mt-4">
          Already have an account? <Link className="text-red-500" to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
