"use client";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/dashboard",
      label: "Enviromental Stats",
      icon: "ph:chart-line",
    },
    {
      href: "/dashboard/temperature",
      label: "Temperature",
      icon: "ph:thermometer-simple",
    },
    {
      href: "/dashboard/ph",
      label: "PH Level",
      icon: "ph:scales",
    },
    {
      href: "/dashboard/turbidity",
      label: "Turbidity",
      icon: "ph:sun-light",
    },
    {
      href: "/dashboard/feeding",
      label: "Feeding",
      icon: "ph:fish",
    },
  ];
  const InformationItems = [
    {
      href: "/dashboard/notifications",
      label: "Notifications",
      icon: "ph:bell",
    },
    {
      href: "/dashboard/diseasePre",
      label: "Disease Prediction",
      icon: "ph:asclepius",
    },
  ];

  return (
    <aside className="w-[250px] bg-white p-4 max-h-screen flex flex-col">
      <div className="flex items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full">
          <Icon
            icon="ph:drop-fill"
            width="25"
            height="25"
            className="text-[#007AFF]"
          />
        </div>
        <h1 className="text-lg font-bold text-gray-900">Smart Aquaculture</h1>
      </div>
      <nav className="text-sm space-y-1 mt-[56px]">
        <p className="text-black font-semibold text-lg px-2 my-4">Chart</p>
        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <li
                key={item.href}
                className={isActive ? "text-[#007AFF] bg-gray-100" : "hover:bg-blue-100 text-[#007AFF]"}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-2 px-8 py-2 rounded-md font-semibold ${
                    isActive
                      ? "text-[#0374D4]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {typeof IconComponent === "string" ? (
                    <Icon icon={IconComponent} className="w-5 h-5" />
                  ) : (
                    <IconComponent className="w-5 h-5" />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-black font-semibold text-lg px-2 my-4 mt-[40px]">
          Information
        </p>
        <ul className="space-y-4">
          {InformationItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <li
                key={item.href}
                className={isActive ? "bg-[#0374D41A] rounded-md" : undefined}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-2 px-8 py-2 rounded-md font-semibold ${
                    isActive
                      ? "text-[#0374D4]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {typeof IconComponent === "string" ? (
                    <Icon icon={IconComponent} className="w-5 h-5" />
                  ) : (
                    <IconComponent className="w-5 h-5" />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
