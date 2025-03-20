import React from 'react';
import Navbar from './Navbar';

const eventImages = [
  '/eventimages/event1.jpg',
  '/eventimages/event2.jpg',
  '/eventimages/event3.jpg',
  '/eventimages/event4.jpg',
  '/eventimages/event5.jpg',
  '/eventimages/event6.jpg',
  '/eventimages/event7.jpg',
  '/eventimages/event8.jpg',
  '/eventimages/event9.jpg',
  '/eventimages/event10.jpg',
];

const EventImage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FF0000]/10">
      <Navbar />
      <div className="container mx-auto pt-24 pb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#fcfffe]">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {eventImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={image}
                alt={`Dr Cosmos Maduka Event ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventImage;
