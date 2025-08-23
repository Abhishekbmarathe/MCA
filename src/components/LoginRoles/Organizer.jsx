import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../Modules/Api";


const Organizer = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // { userId, username, role }

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const res = await axios.get(`http://localhost:5000/api/events/user/${user.userId}`);
  //       setEvents(res.data);
  //     } catch (error) {
  //       console.error("❌ Failed to fetch events:", error);
  //     }
  //   };
  //   fetchEvents();
  // }, [user.userId]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleAddEvent = () => {
    navigate("/addevent");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <h1 className="text-xl font-semibold">Uploader Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, {user?.username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">My Events</h2>
          <button
            onClick={handleAddEvent}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Add New Event
          </button>
        </div>

        {events.length === 0 ? (
          <p className="text-gray-500">No events uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white shadow rounded-lg p-4 hover:shadow-md transition"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Date:</strong>{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <span
                    className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${event.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Organizer;
