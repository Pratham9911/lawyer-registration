// components/Navbar.jsx
'use client';
import { Menu } from 'lucide-react';

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">
      {/* Sidebar toggle icon (mobile only) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <Menu size={22} />
      </button>

      {/* Welcome Text */}
      <h2 className="text-lg font-semibold text-gray-800">
        Welcome, Lawyer 👋
      </h2>

      {/* Dummy profile circle */}
      <div className="w-8 h-8 rounded-full bg-gray-300" />
    </header>
  );
}
