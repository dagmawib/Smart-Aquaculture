"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const temperatureData = [
  { value: 200 },
  { value: 42 },
  { value: 105 },
  { value: 10 },
  { value: 8 },
  { value: 204 },
  { value: 70 },
];

const phData = [
  { value: 8 },
  { value: 1 },
  { value: 7.2 },
  { value: 1 },
  { value: 9 },
  { value: 3 },
];

const turbidityData = [
  { value: 120 },
  { value: 140 },
  { value: 160 },
  { value: 200 },
  { value: 180 },
  { value: 130 },
  { value: 150 },
];

const feedingData = [
  { hour: "12", value: 30 },
  { hour: "1", value: 70 },
  { hour: "2", value: 0 },
  { hour: "3", value: 50 },
  { hour: "4", value: 20 },
  { hour: "5", value: 0 },
  { hour: "6", value: 100 },
  { hour: "7", value: 0 },
  { hour: "8", value: 60 },
  { hour: "9", value: 0 },
  { hour: "10", value: 40 },
  { hour: "11", value: 80 },
  { hour: "7", value: 0 },
  { hour: "8", value: 60 },
  { hour: "9", value: 0 },
  { hour: "10", value: 40 },
  { hour: "11", value: 80 },
  { hour: "7", value: 0 },
  { hour: "8", value: 60 },
  { hour: "9", value: 0 },
  { hour: "10", value: 40 },
  { hour: "11", value: 80 },
];

export default function Stats() {
  return (
    <div className="space-y-6 py-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Temperature */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Temperature</h3>
            <span className="rounded-full bg-[#F6F8FC] px-2 py-1 text-xs text-gray-500">
              24Hrs
            </span>
          </div>
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={temperatureData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 flex justify-between text-sm">
            <div>
              <p className="font-bold">8°C</p>
              <p className="text-gray-500">Low</p>
            </div>
            <div>
              <p className="font-bold">105°C</p>
              <p className="text-gray-500">Average</p>
            </div>
            <div>
              <p className="font-bold">204°C</p>
              <p className="text-gray-500">High</p>
            </div>
          </div>
        </div>

        {/* PH Level */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">PH Level</h3>
            <span className="rounded-full bg-[#F6F8FC] px-2 py-1 text-xs text-gray-500">
              24Hrs
            </span>
          </div>
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={phData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 flex justify-between text-sm">
            <div>
              <p className="font-bold">1</p>
              <p className="text-gray-500">Low</p>
            </div>
            <div>
              <p className="font-bold">6</p>
              <p className="text-gray-500">Average</p>
            </div>
            <div>
              <p className="font-bold">9</p>
              <p className="text-gray-500">High</p>
            </div>
          </div>
        </div>

        {/* Turbidity */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Turbidity</h3>
            <span className="rounded-full bg-[#F6F8FC] px-2 py-1 text-xs text-gray-500">
              24Hrs
            </span>
          </div>
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={turbidityData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#000"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-2 flex justify-between text-sm">
            <div>
              <p className="font-bold">100</p>
              <p className="text-gray-500">Low</p>
            </div>
            <div>
              <p className="font-bold">125</p>
              <p className="text-gray-500">Average</p>
            </div>
            <div>
              <p className="font-bold">500</p>
              <p className="text-gray-500">High</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feeding Schedule */}
      <div className="rounded-xl bg-white p-4 shadow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium">Feeding Schedule</h3>
          <span className="rounded-full bg-[#F6F8FC] px-2 py-1 text-xs text-gray-500">
            24Hrs
          </span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={feedingData}>
            <XAxis dataKey="hour" />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#3b82f6"
              radius={[10, 10, 0, 0]}
              background={{ fill: "#e5e7eb", radius: 10 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
