import React, { useState, useEffect } from "react";
import HostelCard from "./HostelCard";
import axios from "axios"; // Import axios for API requests

const Featured = () => {
  // State to store hostels
  const [hostels, setHostels] = useState([]);

  // Fetch hostels data from the Flask API on component mount
  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hostels", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setHostels(response.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching hostels data", error);
      }
    };

    fetchHostels(); // Call the function inside useEffect
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      {/* Featured Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {hostels.length > 0 ? (
          hostels.map((hostel, index) => (
            <HostelCard key={index} hostel={hostel} />
          ))
        ) : (
          <p>No hostels found.</p>
        )}
      </div>
    </>
  );
};

export default Featured;
