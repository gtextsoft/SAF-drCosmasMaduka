import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is already created

const Booking = () => {
  return (
    <div className="min-h-screen bg-[#FF0000]/10">
      <Navbar />
      <section className="py-20 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8">
            Book a Coaching Session with Dr. Cosmos
          </h2>
          <img
            src="/public/DrCo.jpg"
            alt="Coaching Session"
            className="mx-auto mb-8 rounded-lg shadow-lg"
          />
          <button
            onClick={() => window.location.href = 'http://cosmasmaduka.com/booking'}
            className=" bg-white text-xl text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Book Coaching
          </button>
        </div>
      </section>
    </div>
  );
};

export default Booking;
