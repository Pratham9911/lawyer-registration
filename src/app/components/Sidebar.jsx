'use client';
import { User, FolderOpen, X , Home} from 'lucide-react';

export default function Sidebar({ isOpen, closeSidebar, setActiveTab, activeTab }) {
  return (
    <aside
      className={`bg-white fixed top-0 left-0 h-full w-64 shadow-lg z-30 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:block`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Legal Tech</h1>
        <button
          className="md:hidden text-gray-500 hover:text-red-500"
          onClick={closeSidebar}
        >
          <X size={20} />
        </button>
      </div>

      <nav className="mt-6 space-y-2 px-4">
        <button
          onClick={() => {
            setActiveTab('home');
            closeSidebar();
          }}
          className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${
            activeTab === 'home'
              ? 'bg-blue-100 text-blue-700 font-semibold'
              : 'text-gray-700 hover:bg-blue-100'
          }`}
        >
          <Home size={18} />
          <span>Home</span>
        </button>
        <button
          onClick={() => {
            setActiveTab('profile');
            closeSidebar();
          }}
          className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${
            activeTab === 'profile'
              ? 'bg-blue-100 text-blue-700 font-semibold'
              : 'text-gray-700 hover:bg-blue-100'
          }`}
        >
          <User size={18} />
          <span>Profile</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('cases');
            closeSidebar();
          }}
          className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${
            activeTab === 'cases'
              ? 'bg-blue-100 text-blue-700 font-semibold'
              : 'text-gray-700 hover:bg-blue-100'
          }`}
        >
          <FolderOpen size={18} />
          <span>Active Cases</span>
        </button>
      </nav>
    </aside>
  );
}
