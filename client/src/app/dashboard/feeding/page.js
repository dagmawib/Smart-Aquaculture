import React from "react";
import { Icon } from "@iconify/react";
import FeedingContent from "@/components/feeding/feeding";

export default function Feeding() {
  return (
    <div className="p-6 min-h-screen">
      <div
        className="rounded-xl p-4 text-gray-800"
        style={{
          backgroundImage: "url('/images/bgN.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Environment Stats</h2>
          <p className="text-sm text-gray-700">
            Over all real time condition of aquatic environment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Temperature */}
          <div className="flex items-center space-x-3 rounded-lg bg-white/80 p-4 shadow">
            <Icon
              icon="ph:thermometer-simple"
              width="40"
              height="40"
              className="text-red-500"
            />
            <div>
              <p className="text-xl font-bold">29°C</p>
              <p className="text-sm text-gray-600">Temperature</p>
            </div>
          </div>

          {/* PH Level */}
          <div className="flex items-center space-x-3 rounded-lg bg-white/80 p-4 shadow">
            <Icon
              icon="ph:scales"
              width="40"
              height="40"
              className="text-green-500"
            />
            <div>
              <p className="text-xl font-bold">7</p>
              <p className="text-sm text-gray-600">PH Level</p>
            </div>
          </div>

          {/* Turbidity */}
          <div className="flex items-center space-x-3 rounded-lg bg-white/80 p-4 shadow">
            <Icon
              icon="ph:sun"
              width="40"
              height="40"
              className="text-orange-500"
            />
            <div>
              <p className="text-xl font-bold">500 NTU</p>
              <p className="text-sm text-gray-600">Turbidity</p>
            </div>
          </div>
        </div>
      </div>
        <FeedingContent />
    </div>
  );
}
