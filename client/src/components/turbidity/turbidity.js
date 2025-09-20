"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

const lineData = [
  { day: "Mon", turbidity: 2.8 },
  { day: "Tue", turbidity: 3.5 },
  { day: "Wed", turbidity: 2.9 },
  { day: "Thu", turbidity: 4.2 },
  { day: "Fri", turbidity: 3.1 },
  { day: "Sat", turbidity: 3.8 },
  { day: "Sun", turbidity: 2.7 },
];

const radialData = [
  {
    name: "Current",
    value: 3.2,
    fill: "#007AFF",
  },
  {
    name: "Safe Limit",
    value: 5,
    fill: "#E5E7EB",
  },
];

const recentReadings = [
  { id: 1, source: "Well A", turbidity: 3.1, status: "Normal" },
  { id: 2, source: "River B", turbidity: 4.6, status: "High" },
  { id: 3, source: "Tank C", turbidity: 2.4, status: "Low" },
  { id: 4, source: "Reservoir D", turbidity: 3.9, status: "Moderate" },
];

export default function TurbidityPage() {
  return (
    <main className="py-6">
      

      {/* Charts + Gauge */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-4">Weekly Turbidity Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="turbidity"
                stroke="#007AFF"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Radial Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-4">Turbidity vs Safe Limit</h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                background
                clockWise
                dataKey="value"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid md:grid-cols-3 gap-10 my-6">
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Samples Collected</p>
          <h2 className="text-xl font-bold text-[#007AFF]">124</h2>
        </div>
        <div className="bg-[#007AFF] rounded-lg p-4 shadow">
          <p className="text-white">Highest Reading</p>
          <h2 className="text-xl font-bold text-white">4.6 NTU</h2>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <p className="text-gray-500">Lowest Reading</p>
          <h2 className="text-xl font-bold text-[#007AFF]">2.1 NTU</h2>
        </div>
      </div>

      {/* Recent Readings Table */}
      <div className=" py-4 mt-6">
        <h3 className="font-semibold mb-4">Recent Turbidity Readings</h3>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#007AFF] text-white">
              <tr>
                <th className="px-4 py-4">Source</th>
                <th className="px-4 py-4">Turbidity (NTU)</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReadings.map((reading) => (
                <tr key={reading.id} className="border-b border-gray-200 last:border-none">
                  <td className="px-4 py-4">{reading.source}</td>
                  <td className="px-4 py-4 text-[#007AFF] font-medium">
                    {reading.turbidity}
                  </td>
                  <td
                    className={`px-4 py-4 font-medium ${
                      reading.status === "High"
                        ? "text-red-500"
                        : reading.status === "Low"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {reading.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
