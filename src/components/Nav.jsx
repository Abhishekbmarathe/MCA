import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <nav className="flex justify-around py-4 relative">
        <h1 className="font-semibold text-2xl text-[#4f46e5]">EVENT HUB</h1>

        {/* Sign In + Dropdown (hover-stable) */}
        <div className="relative group">
          <button className="bg-[#4f46e5] text-white px-5 py-1 rounded-sm cursor-pointer">
            Sign In
          </button>

          {/* Dropdown */}
          <div
            className="
              absolute right-0 top-full w-64 bg-white shadow-lg rounded-md
              border border-gray-200 p-4 z-50
              opacity-0 invisible pointer-events-none
              group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
              transition-opacity duration-150
            "
          >
            <h3 className="font-semibold text-gray-700 mb-2">Select Your Role</h3>

            {/* Admin */}
            <Link
              to="/admin-login"
              className="flex items-start gap-3 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 text-white font-bold">
                A
              </span>
              <div>
                <p className="font-medium">Admin</p>
                <p className="text-sm text-gray-500">Manage and approve events</p>
              </div>
            </Link>

            {/* Organizer */}
            <Link
              to="/organizer-login"
              className="flex items-start gap-3 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-white font-bold">
                U
              </span>
              <div>
                <p className="font-medium">Organizer</p>
                <p className="text-sm text-gray-500">Create and upload events</p>
              </div>
            </Link>

            {/* User */}
            <Link
              to="/user-login"
              className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-400 text-white font-bold">
                V
              </span>
              <div>
                <p className="font-medium">User</p>
                <p className="text-sm text-gray-500">Browse and view events</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
