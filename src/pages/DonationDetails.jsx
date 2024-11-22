import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";  // Import ToastContainer
import { AuthContext } from "../provider/AuthProvider"; 

function DonationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);  
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  const [modalVisible, setModalVisible] = useState(false); // For modal visibility

  useEffect(() => {
    if (!user) {
      toast.error("Please log in to view this page.");
      navigate("/auth/login"); 
      return;
    }

    // Fetch donation details
    fetch("/donation.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch donation details.");
        return response.json();
      })
      .then((data) => {
        const selectedDonation = data.find((d) => d.id.toString() === id); 
        setDonation(selectedDonation || null);
      })
      .catch((error) => {
        console.error("Error fetching donation details:", error);
        toast.error("Failed to load donation details.");
      })
      .finally(() => setLoading(false));
  }, [id, navigate, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon."); // Show Toast

    // Show the modal after submission
    setModalVisible(true);

    // Reset form data
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      notes: "",
    });

    // Automatically close the modal after 2 seconds
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!donation) {
    return (
      <div>
        <p className="text-center sm:mt-32 lg:mt-40 text-4xl text-red-700">Donation not found!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {donation.title}
        </h2>
        <div className="card shadow-lg p-6">
          <img
            src={donation.image}
            alt={donation.title}
            className="h-64 w-full object-cover"
          />
          <div className="mt-4">
            <p><strong>Description:</strong> {donation.description}</p>
            <p className="mt-2"><strong>Division:</strong> {donation.division}</p>
            <p className="mt-2"><strong>Status:</strong> {donation.status}</p>
            <p className="mt-2"><strong>Contact Info:</strong> {donation.contactInfo}</p>
            <p className="mt-2"><strong>Deadline:</strong> {donation.deadline}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <h3 className="text-2xl font-semibold">Donate Items</h3>
          <div className="form-control">
            <label>Quantity of Items</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label>Item Type</label>
            <input
              type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label>Additional Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Submit Donation</button>
        </form>

        {/* Modal for Thank You message */}
        {modalVisible && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-bold text-center">Thank You for Your Donation!</h2>
              <p className="text-center mt-4">Your donation has been successfully recorded. We will reach your destination soon.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Toast Container to show the toast messages */}
      <ToastContainer />
    </div>
  );
}

export default DonationDetails;
