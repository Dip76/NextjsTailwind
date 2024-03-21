"use client"
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => setIsOpen(!isOpen); // Function to toggle open/close

  // Responsive behavior (optional)
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  return (
    <>
      <button
        id="sidebar-toggle"
        className="fixed top-0 left-0 px-4 py-2 text-white bg-blue-600 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12h4m0 0l2-2m-2 2l-2-2" />
        </svg>
      </button>
      <div
        id="sidebar"
        className={`fixed hidden top-0 left-0 h-full w-64 overflow-y-auto bg-gray-800 text-white transition duration-300 ease-in-out ${
          isOpen ? 'block' : ''
        }`}
      >
        <ul className="flex flex-col space-y-2 pt-5 px-4">
          <li>
            <a href="#" className="hover:text-gray-200">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">Dashboard</a>
          </li>
          {/* Add your navigation links here */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
