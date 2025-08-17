import React from 'react'
import Nav from './Nav'

const Home = () => {
    return (
        <div className="min-h-screen">
            <Nav />

            <section className="flex min-h-[60vh]">
                {/* Left Section */}
                <div className="w-1/2 bg-[#4f46e5] flex flex-col justify-center items-start p-12 text-white ">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                        Discover Amazing <br /> Events Near You
                    </h1>
                    <p className="text-lg mb-6">
                        Join thousands of event enthusiasts. Create, discover, and attend incredible events in your area. From conferences to festivals, find your next adventure.
                    </p>
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition cursor-pointer">
                        Browse Events
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-1/2 bg-yellow-400 text-white flex justify-center items-center text-3xl font-bold  ">
                    Events Await
                </div>
            </section>


            {/* cards section */}
            <section className=''>
                <div className='m-auto w-fit p-6'>
                    <h1 className='font-semibold text-3xl w-fit m-auto'>
                        Featured Events
                    </h1>
                    <h2 className='text-xl'>
                        Discover amazing events happening around you
                    </h2>
                </div>
                <div className='p-4'>

                    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Event Image */}
                        <div className="h-48 w-full">
                            <img
                                src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2" // sample image, replace with your own
                                alt="Music Festival"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Music Festival</h2>
                            <p className="text-gray-600 mb-3">
                                Three-day outdoor music festival with top artists...
                            </p>
                            <p className="text-sm mb-1">📍 Bangalore, Karnataka, India</p>
                            <p className="text-sm mb-3">📅 2024-04-20</p>

                            <button className="w-full bg-[#4f46e5] hover:bg-purple-700 text-white py-2 rounded-xl transition cursor-pointer">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
