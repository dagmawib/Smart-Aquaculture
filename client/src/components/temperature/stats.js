"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceArea  } from "recharts";
import { Icon } from "@iconify/react";
import { Snowflake, Sun, CloudSun } from "lucide-react";

const data = [
  { hour: "12", temp: 18 },
  { hour: "1", temp: 19 },
  { hour: "2", temp: 19 },
  { hour: "3", temp: 21 },
  { hour: "4", temp: 22 },
  { hour: "5", temp: 20 },
  { hour: "6", temp: 19 },
  { hour: "7", temp: 18 },
  { hour: "8", temp: 21 },
  { hour: "9", temp: 26 },
  { hour: "10", temp: 29 },
  { hour: "11", temp: 30 },
  { hour: "12", temp: 28 },
  { hour: "1", temp: 27 },
  { hour: "2", temp: 29 },
  { hour: "3", temp: 31 },
  { hour: "4", temp: 28 },
  { hour: "5", temp: 27 },
  { hour: "6", temp: 24 },
  { hour: "7", temp: 21 },
  { hour: "8", temp: 23 },
  { hour: "9", temp: 25 },
  { hour: "10", temp: 23 },
  { hour: "11", temp: 22 },
].map((d, i) => ({ ...d, idx: i }));

export default function TempStats() {
  return (
    <div className="min-h-screen py-6">
      {/* Top Stats Section */}
      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col space-y-1 p-6">
          <Icon icon="ph:snowflake" width="60" height="60" className="text-[#007AFF]" />
          <h2 className="text-2xl font-bold">17℃</h2>
          <p className="text-gray-500 text-sm">Lowest of the day</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col space-y-1 p-6">
          <Icon icon="ph:cloud-sun" width="60" height="60" className="text-[#FF9500]" />
          <h2 className="text-2xl font-bold">25℃</h2>
          <p className="text-gray-500 text-sm">Average</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col space-y-1 p-6">
          <Icon icon="ph:sun" width="60" height="60" className="text-[#FF3B30]" />
          <h2 className="text-2xl font-bold">31℃</h2>
          <p className="text-gray-500 text-sm">Highest of the day</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Temperature</h2>
          <span className="text-gray-500 text-sm">24Hrs</span>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              {/* Background bands */}
              <ReferenceArea x1={0} x2={2} y1={0} y2={40} fill="#32ADE6" fillOpacity={0.2} />
              <ReferenceArea x1={8} x2={9} y1={0} y2={40} fill="#32ADE6" fillOpacity={0.2} />
              <ReferenceArea x1={10} x2={11} y1={0} y2={40} fill="#FF3B30" fillOpacity={0.2} />
              <ReferenceArea x1={12} x2={13} y1={0} y2={40} fill="#FF3B30" fillOpacity={0.2} />
              <ReferenceArea x1={16} x2={17} y1={0} y2={40} fill="#32ADE6" fillOpacity={0.2} />

              {/* Grid + Axes */}
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="idx" type="number" tickFormatter={(idx) => data[idx] && data[idx].hour} />
              <YAxis hide />

              {/* Temperature Line */}
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
