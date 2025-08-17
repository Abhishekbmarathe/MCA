import React from "react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f5f7ff] to-[#e6ebff]">
      {/* Back to Home */}
      <a
        href="/"
        className="text-sm text-indigo-600 mb-6 hover:underline"
      >
        ← Back to Home
      </a>

      {/* Icon + Heading */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 mb-4">
          <span className="text-2xl">👑</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Sign In as Admin</h1>
        <p className="text-gray-500">Administrative Access</p>
      </div>

      {/* Login Box */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form>
          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
          >
            Sign In as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
