import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'journey', label: 'Journey', path: '/#journey' },
  { id: 'events', label: 'Events', path: '/#events' },
  { id: 'contact', label: 'Contact', path: '/#contact' },
  { id: 'store', label: 'Store', path: '/store' },
   { id: 'eventimages', label: 'Gallery', path: '/eventimage' },
  { id: 'booking', label: 'Book Coaching', path: '/booking' },
 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <nav className="fixed w-full bg-[#FF0000]/60 backdrop-blur-md z-50 border-b border-[#000080]/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/cosmoslogo.png" alt="Cosmos Logo" className="h-10" />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#000080] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={({ isActive }) =>
                  `px-3 py-2 text-white hover:text-[#000080] transition-all duration-300 ${isActive ? 'font-bold' : ''} ${
                    item.id === 'booking' ? "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#FF0000] to-[#000080] p-0.5 font-bold" : ''
                  }`
                }
              >
                {item.id === 'booking' ? (
                  <span className="relative flex items-center gap-2 rounded-md bg-black px-5 py-2.5 transition-all duration-300 ease-in group-hover:bg-opacity-0">
                    <Calendar className="h-4 w-4" />
                    {item.label}
                    <span className="absolute -right-[100%] top-1/2 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-[200%] group-hover:-translate-x-full group-hover:opacity-50"></span>
                  </span>
                ) : (
                  item.label
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-[#FF0000]/80 backdrop-blur-md py-4 border-b border-[#000080]/50 shadow-lg`}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={({ isActive }) =>
                  `block px-6 py-3 text-white transition-all duration-300 ${isActive ? 'font-bold bg-white/5' : ''} ${
                    item.id === 'booking' ? 'my-4 mx-4 flex items-center justify-center gap-2 bg-gradient-to-br from-[#FF0000] to-[#000080] rounded-lg p-0.5 font-bold hover:shadow-lg hover:shadow-[#000080]/50 transform hover:scale-105' : 'hover:bg-white/10'
                  }`
                }
              >
                {item.id === 'booking' ? (
                  <span className="flex items-center gap-2 rounded-md bg-black/90 w-full justify-center py-2">
                    <Calendar className="h-4 w-4" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
