import Image from "next/image";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#f6f7f9]">
      {/* Left: Title and Menu Icon */}
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Right: Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Profile */}
        <div className="flex items-center px-2 py-1 space-x-2">
          <div className="text-sm">
            <p className="text-gray-800 font-medium leading-none">
              Hello, Dagmawi Belayneh
            </p>
          </div>
        </div>
        {/* Notification Icon with Badge */}
        <div className="flex items-center bg-gray-200 rounded-full p-3 gap-1">
          <Icon icon="mdi:bell-outline" className="text-xl text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
