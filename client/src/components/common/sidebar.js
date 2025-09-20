"use client";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
    <>
      {/* Mobile: hamburger (fixed so it doesn't take layout space) */}
      {!open && (
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            aria-label="Open sidebar"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 shadow-sm"
          >
            <Icon icon="ph:list" width="20" height="20" />
          </button>
        </div>
      )}

      {/* Desktop sidebar + Mobile overlay */}
      <aside className="hidden md:flex w-[250px] bg-white p-4 max-h-screen flex-col">
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
        <nav className="text-sm space-y-1 mt-[45px]">
          <p className="text-black font-semibold text-lg px-2 my-4">Chart</p>
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const IconComponent = item.icon;
              return (
                <li
                  key={item.href}
                  className={
                    isActive
                      ? "text-[#007AFF] bg-gray-100"
                      : "hover:bg-blue-100 text-[#007AFF]"
                  }
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
      {/* Mobile slide-over panel */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-4 overflow-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon
                    icon="ph:drop-fill"
                    width="25"
                    height="25"
                    className="text-[#007AFF]"
                  />
                </div>
                <h1 className="text-lg font-bold text-gray-900 ml-3">
                  Smart Aquaculture
                </h1>
              </div>
              <button
                aria-label="Close sidebar"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md text-gray-700"
              >
                <Icon icon="ph:x" width="20" height="20" />
              </button>
            </div>

            <nav className="text-sm space-y-1 mt-[20px]">
              <p className="text-black font-semibold text-lg px-2 my-4">
                Chart
              </p>
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const IconComponent = item.icon;
                  return (
                    <li
                      key={item.href}
                      className={
                        isActive
                          ? "text-[#007AFF] bg-gray-100"
                          : "hover:bg-blue-100 text-[#007AFF]"
                      }
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
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

              <p className="text-black font-semibold text-lg px-2 my-4 mt-[24px]">
                Information
              </p>
              <ul className="space-y-4">
                {InformationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const IconComponent = item.icon;
                  return (
                    <li
                      key={item.href}
                      className={
                        isActive ? "bg-[#0374D41A] rounded-md" : undefined
                      }
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
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
          </div>
        </div>
      )}
    </>
  );
}
