import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { HiEye, HiEyeOff } from "react-icons/hi"; // Icons for toggle visibility

const Login = () => {
  const { userLogin, signInWithGoogle, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      setLoading(false);
      return;
    }

    try {
      const result = await userLogin(email, password);
      setUser(result.user);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      if (err.message.includes("auth/invalid-email")) {
        toast.error("Invalid email address.");
      } else if (err.message.includes("auth/wrong-password")) {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
      toast.success("Signed in with Google successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 pt-20">
      <div className="card bg-white w-full max-w-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <HiEye size={20} /> : <HiEyeOff size={20} />}
              </span>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <label className="label mt-2">
              <Link to="/auth/forget-password" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control">
            <button className="btn btn-neutral w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Social Login */}
        <div className="divider my-6">OR</div>
        <div className="form-control">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
            disabled={loading}
          >
            <FcGoogle size={24} />
            <span>{loading ? "Signing in..." : "Sign in with Google"}</span>
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center font-semibold mt-4">
          Don’t Have an Account?{" "}
          <Link className="text-blue-500 hover:underline" to="/auth/register">
            Register
          </Link>
        </p>
      </div>

      {/* ToastContainer */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
