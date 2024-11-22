import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

        <div className=" pt-20 pb-5">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Welcome Section */}
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.displayName || "User"}!
          </h1>
          <p className="text-gray-600">
            Here is your profile information. You can update it anytime.
          </p>
        </div>

        {/* Profile Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Profile Image */}
          <div className="text-center">
            <img
              src={
                user?.photoURL ||
                "https://via.placeholder.com/150/000000/FFFFFF/?text=Profile+Image"
              }
              alt="Profile"
              className="w-40 h-40 object-cover mx-auto rounded-full shadow-lg"
            />
          </div>

          {/* Profile Details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Profile Information
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Name:</strong> {user?.displayName || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {user?.email || "N/A"}
              </p>
              <p className="text-gray-700">
                <strong>Joined:</strong>{" "}
                {user?.metadata?.creationTime || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/dashboard/update-profile")}
            className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
          >
            Update Profile
          </button>
        </div>
      </div>
        </div>
      
    </div>
  );
}

export default Dashboard;
