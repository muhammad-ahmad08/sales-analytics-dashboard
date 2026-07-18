// src/components/layout/Topbar.jsx
import { Search, Bell, Sun } from 'lucide-react';

export default function Topbar() {
  return (
    // sticky top-0 keeps the topbar at the top of the screen when scrolling
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      
      {/* Search Bar */}
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Sun size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={20} />
          {/* Notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            JD
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
        </div>
      </div>
    </header>
  );
}