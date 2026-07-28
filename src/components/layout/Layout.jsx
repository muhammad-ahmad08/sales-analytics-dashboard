// src/components/layout/Layout.jsx
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    // Main container: flex row, full height, gray background
    <div className="flex h-screen bg-gray-50">
      
      {/* Sidebar sits on the left */}
      <Sidebar />

      {/* Main content area takes up the rest of the screen */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        
        {/* The children (our Dashboard Page) go here, with padding and scroll */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

    </div>
  );
}
