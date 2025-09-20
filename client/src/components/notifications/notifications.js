"use client";
import { useState } from "react";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("Unread");

  const tabs = ["Unread", "Seen", "All"];

  const notifications = [
    {
      id: 1,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: true,
    },
    {
      id: 2,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: true,
    },
    {
      id: 3,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: false,
    },
    {
      id: 4,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: true,
    },
    {
      id: 5,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: true,
    },
    {
      id: 6,
      title: "Saving goal reached",
      date: "13 Nov, 2024",
      description:
        "You have successfully saved and invested the amount you set out to save and invest this month",
      unread: false,
    },
  ];

  const filteredNotifications =
    activeTab === "Unread"
      ? notifications.filter((n) => n.unread)
      : activeTab === "Seen"
      ? notifications.filter((n) => !n.unread)
      : notifications;

  return (
    <div className="py-6">
      {/* Tabs */}
      <div className="flex space-x-4 bg-white rounded-full w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full transition ${
              activeTab === tab
                ? "bg-[#007AFF] text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications */}
      <div className="mt-6 space-y-4">
        {filteredNotifications.map((notif) => (
          <div key={notif.id} className="relative">
            {/* notification card */}
            <div className="flex items-stretch justify-between p-4 pl-6 bg-white rounded-lg">
              {/* main content */}
              <div className="ml-2 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {notif.title}
                      <span className="text-sm text-gray-500 ml-3">
                        {notif.date}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {notif.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* unread dot on the right */}
              {notif.unread && (
                <span className="w-2 h-2 rounded-full bg-[#007AFF] self-start mt-2 ml-4" />
              )}
            </div>

            {/* ← vertical blue line (overlay on the left edge) */}
            <div
              aria-hidden
              className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-full transform -translate-x-1/2 ${
                notif.unread ? "bg-[#007AFF]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
