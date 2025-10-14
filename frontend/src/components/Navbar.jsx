import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FolderOpen, MessageSquare, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#0a1929] border-r border-gray-800 z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-800">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.svg" alt="RhyMerge Logo" className="h-10" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6">
            <ul className="space-y-2 px-3">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-200
                      ${isActive(path)
                        ? 'bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/20'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;