import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider"; 

function Campaign() {
  const { user } = useContext(AuthContext);  
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("/donation.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch donations");
        return response.json();
      })
      .then((data) => setDonations(data))
      .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  const handleDonateNow = (donationId) => {
    if (!user) {
      navigate("/auth/login");
    } else {
      navigate(`/campaign/${donationId}`);
    }
  };

  return (
    <div>

      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Donation Campaigns
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {donations.map((donation) => (
            <div key={donation.id} className="card shadow-lg">
              <img
                src={donation.image}
                alt={donation.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{donation.title}</h3>
                <p className="text-gray-600 mt-2">{donation.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Division: {donation.division}
                </p>
                <button
                  onClick={() => handleDonateNow(donation.id)} 
                  className="btn btn-primary mt-4 w-full"
                >
                  {user ? "Donate Now" : "Please Log In to Donate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Campaign;
