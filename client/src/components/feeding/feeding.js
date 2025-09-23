"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", feed: 12 },
  { day: "Tue", feed: 18 },
  { day: "Wed", feed: 15 },
  { day: "Thu", feed: 20 },
  { day: "Fri", feed: 14 },
  { day: "Sat", feed: 22 },
  { day: "Sun", feed: 19 },
  { day: "Thu", feed: 20 },
  { day: "Fri", feed: 14 },
  { day: "Sat", feed: 22 },
  { day: "Sun", feed: 19 },
  { day: "Thu", feed: 20 },
  { day: "Fri", feed: 14 },
  { day: "Sat", feed: 22 },
  { day: "Sun", feed: 19 },
];

export default function FeedingPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Feeding Management</h1>

      {/* Feeding Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-4">
          <h2 className="text-lg font-medium text-gray-500">Daily Feed Average</h2>
          <p className="text-2xl font-bold text-blue-600">17 kg</p>
        </div>

        <div className="bg-[#007AFF] shadow-md rounded-2xl border border-gray-200 p-4">
          <h2 className="text-lg font-medium text-white">Monthly Feed Used</h2>
          <p className="text-2xl font-bold text-white">480 kg</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-4">
          <h2 className="text-lg font-medium text-gray-500">Feed Efficiency</h2>
          <p className="text-2xl font-bold text-blue-600">92%</p>
        </div>
      </div>

      {/* Feeding Chart */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Weekly Feeding Schedule</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Bar dataKey="feed" fill="#007AFF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
