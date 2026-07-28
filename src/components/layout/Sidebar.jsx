// src/components/layout/Sidebar.jsx
import { LayoutDashboard, ShoppingCart, Package, Users, Settings } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Orders', icon: ShoppingCart, active: false },
  { name: 'Products', icon: Package, active: false },
  { name: 'Customers', icon: Users, active: false },
  { name: 'Settings', icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    // Hidden on mobile (md:flex), visible on desktop. w-64 sets the width.
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Shoplytics</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
            }`}
          >
            {/* Renders the specific icon component */}
            <item.icon size={20} />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
