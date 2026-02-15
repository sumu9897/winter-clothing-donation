import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    donations: 0,
    campaigns: 0,
    impact: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Simulate loading user stats
    setTimeout(() => {
      setStats({
        donations: 12,
        campaigns: 5,
        impact: 38,
      });
    }, 500);
  }, []);

  const activities = [
    {
      id: 1,
      type: "donation",
      title: "Donated Winter Jackets",
      campaign: "Winter Warmth Drive",
      date: "2 days ago",
      items: 5,
      icon: "🧥",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      type: "donation",
      title: "Donated Blankets",
      campaign: "Save the Children",
      date: "1 week ago",
      items: 3,
      icon: "🛏️",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      type: "volunteer",
      title: "Volunteered for Pickup",
      campaign: "Flood Relief Fund",
      date: "2 weeks ago",
      hours: 4,
      icon: "🙋",
      color: "from-green-500 to-teal-500",
    },
  ];

  const quickActions = [
    {
      title: "Browse Campaigns",
      description: "Find new ways to help",
      icon: "🎯",
      path: "/campaign",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Make a Donation",
      description: "Contribute winter items",
      icon: "🎁",
      path: "/campaign",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Become Volunteer",
      description: "Join our team",
      icon: "🤝",
      path: "/",
      color: "from-orange-500 to-red-500",
    },
  ];

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div data-aos="fade-up">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              👋 Welcome Back
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, {user?.displayName || "User"}!
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Thank you for being part of our mission to bring warmth to those in need.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-16">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🎁
              </div>
              <span className="text-3xl font-bold text-blue-600">
                {stats.donations}
              </span>
            </div>
            <h3 className="text-gray-600 font-medium">Total Donations</h3>
            <p className="text-sm text-gray-500 mt-1">Items contributed</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🎯
              </div>
              <span className="text-3xl font-bold text-purple-600">
                {stats.campaigns}
              </span>
            </div>
            <h3 className="text-gray-600 font-medium">Campaigns Supported</h3>
            <p className="text-sm text-gray-500 mt-1">Active participations</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                ❤️
              </div>
              <span className="text-3xl font-bold text-green-600">
                {stats.impact}
              </span>
            </div>
            <h3 className="text-gray-600 font-medium">People Helped</h3>
            <p className="text-sm text-gray-500 mt-1">Direct impact</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Quick Actions */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-right">
              <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="px-6 pb-6 -mt-16">
                <div className="relative">
                  <img
                    src={
                      user?.photoURL ||
                      "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(user?.displayName || "User") +
                        "&size=200&background=4F46E5&color=fff&bold=true"
                    }
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-xl mx-auto"
                  />
                  <div className="absolute bottom-0 right-1/2 translate-x-16 translate-y-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {user?.displayName || "User"}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 truncate">
                    {user?.email}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Donor
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Member since</span>
                    <span className="font-semibold text-gray-900">
                      {formatDate(user?.metadata?.creationTime)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Account Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                      Active
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/dashboard/update-profile")}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Update Profile
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(action.path)}
                    className="w-full p-4 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group text-left border-2 border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}
                      >
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-left">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                  Recent Activity
                </h3>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                  View All
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={activity.id}
                    className="p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}
                      >
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Campaign: <span className="font-semibold">{activity.campaign}</span>
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          {activity.items && (
                            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">
                              {activity.items} items
                            </span>
                          )}
                          {activity.hours && (
                            <span className="px-3 py-1 bg-white rounded-full text-gray-700 font-medium">
                              {activity.hours} hours
                            </span>
                          )}
                          <span className="text-gray-500">{activity.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State Message */}
              {activities.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    No Activity Yet
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Start making a difference by donating to a campaign
                  </p>
                  <button
                    onClick={() => navigate("/campaign")}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Browse Campaigns
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;