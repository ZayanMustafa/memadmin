'use client'

import { useState } from 'react';
import { 
  FiHome, FiCalendar, FiUsers, FiTruck, FiSettings, 
  FiLogOut, FiMenu, FiX, FiPlus, FiSearch,
  FiChevronDown, FiChevronUp, FiClock, FiCheck, FiXCircle
} from 'react-icons/fi';

const AdminLayout = ({ children, activeTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-dark-900 text-white-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-dark-800 transition-all duration-300 border-r border-white-900`}>
        <div className="p-4 flex items-center justify-between border-b border-white-900">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold bg-white bg-clip-text text-transparent">
              MemVehicle
            </h1>
          ) : (
            <h1 className="text-xl font-bold bg-white bg-clip-text text-transparent">
              MV
            </h1>
          )}
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded-lg hover:bg-dark-700 hover:text-white-300"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
        
        <nav className="mt-6 px-2">
          <NavItem 
            icon={<FiHome size={20} />} 
            text="Dashboard" 
            active={activeTab === 'dashboard'} 
            href="/admin"
            sidebarOpen={sidebarOpen}
          />
          <NavItem 
            icon={<FiCalendar size={20} />} 
            text="Appointments" 
            active={activeTab === 'appointments'} 
            href="/admin/appointments"
            sidebarOpen={sidebarOpen}
          />
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors hover:bg-dark-700 ${activeTab === 'vehicles' || activeTab === 'users' ? 'bg-dark-700' : ''}`}
            >
              <FiTruck size={20} />
              {sidebarOpen && (
                <>
                  <span className="ml-3">Management</span>
                  {dropdownOpen ? <FiChevronUp className="ml-auto" /> : <FiChevronDown className="ml-auto" />}
                </>
              )}
            </button>
            {dropdownOpen && sidebarOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <NavItem 
                  icon={<FiUsers size={16} />} 
                  text="Users" 
                  active={activeTab === 'users'} 
                  href="/admin/users"
                  sidebarOpen={sidebarOpen}
                  subItem
                />
                <NavItem 
                  icon={<FiTruck size={16} />} 
                  text="Vehicles" 
                  active={activeTab === 'vehicles'} 
                  href="/admin/vehicles"
                  sidebarOpen={sidebarOpen}
                  subItem
                />
              </div>
            )}
          </div>
          <NavItem 
            icon={<FiSettings size={20} />} 
            text="Settings" 
            active={activeTab === 'settings'} 
            href="/admin/settings"
            sidebarOpen={sidebarOpen}
          />
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-white-900">
          <button className="flex items-center w-full p-2 rounded-lg hover:bg-dark-700 text-pink-400">
            <FiLogOut size={20} />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-dark from-gray-900 to-gray-800">
        {/* Top Bar */}
        <header className="bg-dark-800 shadow-sm p-4 flex items-center justify-between border-b border-white-900">
          <div className="flex items-center bg-dark-700 rounded-lg px-3 py-2 w-96">
            <FiSearch className="text-white-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none w-full text-white-100 placeholder-white-400"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-dark-700 relative">
              <div className="w-2 h-2 bg-pink-500 rounded-full absolute top-1 right-1"></div>
              <FiCalendar className="text-white-300" size={20} />
            </button>
            <button className="flex items-center space-x-2 bg-white-600 border border-white px-4 py-2 rounded-lg hover:opacity-90">
              <FiPlus size={18} />
              <span>New Appointment</span>
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-white-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active, href, sidebarOpen, subItem = false }) => {
  return (
    <a
      href={href}
      className={`flex items-center ${subItem ? 'pl-8' : ''} p-3 rounded-lg transition-colors ${active ? 'bg-gradient-to-r from-white-900/50 to-pink-900/30 text-white-300' : 'hover:bg-dark-700 hover:text-white-300'}`}
    >
      <span className={`${active ? 'text-pink-400' : 'text-white-400'}`}>{icon}</span>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </a>
  );
};

export default AdminLayout;