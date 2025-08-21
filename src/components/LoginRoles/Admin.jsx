import React, { useState } from "react";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    organizer: "",
    description: "",
    image: null,
  });

  const [pendingEvents, setPendingEvents] = useState([
    {
      id: 1,
      title: "Music Concert",
      date: "2025-09-01",
      location: "Auditorium A",
      description: "An evening of classical music performances.",
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "2025-09-05",
      location: "Gallery B",
      description: "Showcasing modern art by local artists.",
    },
    {
      id: 3,
      title: "Tech Conference",
      date: "2025-09-10",
      location: "Conference Center",
      description: "Annual technology and innovation conference.",
    },
  ]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Submitted:", formData);
    alert("Event submitted successfully!");
    // You can send formData to backend here (with FormData for file upload)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 shadow rounded text-center">
            <h2 className="text-xl font-bold text-blue-600">4</h2>
            <p>Pending</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h2 className="text-xl font-bold text-green-600">0</h2>
            <p>Approved</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h2 className="text-xl font-bold text-red-600">0</h2>
            <p>Rejected</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h2 className="text-xl font-bold text-purple-600">4</h2>
            <p>Total</p>
          </div>
          <div className="bg-white p-4 shadow rounded text-center">
            <h2 className="text-xl font-bold text-gray-700">0</h2>
            <p>Total Viewers</p>
          </div>
        </div>

        {/* Add Event Form */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-lg font-bold mb-4">Add Event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="organizer"
              placeholder="Organizer"
              className="w-full border p-2 rounded"
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border p-2 rounded"
              rows="3"
              onChange={handleChange}
            ></textarea>
            {/* Image Upload */}
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Event
            </button>
          </form>
        </div>

        {/* Pending Events */}
        <h2 className="text-lg font-bold mb-4">Pending Events</h2>
        <div className="space-y-4">
          {pendingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 shadow rounded flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.date} - {event.location}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
              <div className="space-x-3">
                <button className="text-blue-500 hover:underline">View</button>
                <button className="text-green-500 hover:underline">Approve</button>
                <button className="text-red-500 hover:underline">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
