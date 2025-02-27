import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'journey', label: 'Journey', path: '/#journey' },
  { id: 'events', label: 'Events', path: '/#events' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
  { id: 'store', label: 'Store', path: '/store' },
  { id: 'booking', label: 'Book Coaching', path: '/booking' }, // New booking link
];

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#FF0000]/40 backdrop-blur-sm z-50 border-b border-[#000080]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/cosmoslogo.png" alt="Cosmos Logo" className="h-10" />
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `text-[#FF0005] hover:text-white transition-colors ${
                    isActive ? 'text-white' : ''
                  } ${item.id === 'booking' ? 'relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800' : ''}`
                }
              >
                <span className={`${item.id === 'booking' ? 'relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent' : ''}`}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
