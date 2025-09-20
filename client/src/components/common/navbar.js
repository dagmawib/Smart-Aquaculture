"use client";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const pageTitle = {
    "/dashboard": "Dashboard",
    "/dashboard/temperature": "Temperature",
    "/dashboard/ph": "PH Level",
    "/dashboard/turbidity": "Turbidity",
    "/dashboard/feeding": "Feeding",
    "/dashboard/notifications": "Notifications",
    "/dashboard/diseasePre": "Disease Prediction",
  };
  const title = pageTitle[pathname] || "Dashboard";
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#f6f6f6] border-b border-gray-200">
      {/* Left: Title and Menu Icon */}
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>

      {/* Right: Notifications and Profile */}
      <div className="hidden md:flex items-center space-x-4">
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
