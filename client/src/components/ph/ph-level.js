"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", pH: 6.5 },
  { month: "Feb", pH: 7.0 },
  { month: "Mar", pH: 6.8 },
  { month: "Apr", pH: 7.2 },
  { month: "May", pH: 6.9 },
  { month: "Jun", pH: 7.1 },
  { month: "Jul", pH: 7.4 },
  { month: "Aug", pH: 7.3 },
  { month: "Sep", pH: 6.7 },
  { month: "Oct", pH: 7.0 },
  { month: "Nov", pH: 6.8 },
  { month: "Dec", pH: 7.2 },
];

const barData = [
  { name: "Sample A", pH: 6.8 },
  { name: "Sample B", pH: 7.2 },
  { name: "Sample C", pH: 6.5 },
  { name: "Sample D", pH: 7.4 },
  { name: "Sample E", pH: 7.1 },
  { name: "Sample F", pH: 6.8 },
  { name: "Sample G", pH: 7.2 },
  { name: "Sample H", pH: 6.5 },
  { name: "Sample I", pH: 7.4 },
  { name: "Sample J", pH: 7.1 },
  { name: "Sample K", pH: 6.8 },
];

const pieData = [
  { name: "Acidic", value: 30 },
  { name: "Neutral", value: 50 },
  { name: "Alkaline", value: 20 },
];

const COLORS = ["#007AFF", "#60A5FA", "#93C5FD"]; // shades of blue

export default function PHLevel() {
  return (
    <main className="py-6">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold text-[#007AFF]">7.0</h2>
          <p className="text-gray-500 font-bold text-lg">Average pH</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold text-[#007AFF]">245</h2>
          <p className="text-gray-500 font-bold text-lg">Samples Tested</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold text-[#007AFF]">72</h2>
          <p className="text-gray-500 font-bold text-lg">Acidic Samples</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h2 className="text-xl font-bold text-[#007AFF]">38</h2>
          <p className="text-gray-500 font-bold text-lg">Alkaline Samples</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow rounded-lg p-4 lg:col-span-2">
          <h3 className="font-semibold mb-4">pH Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" />
              <YAxis domain={[6, 8]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pH"
                stroke="#007AFF"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-semibold mb-4">pH Category Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={90} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow rounded-lg p-4 mt-6">
        <h3 className="font-semibold mb-4">pH by Sample</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="name" />
            <YAxis domain={[6, 8]} />
            <Tooltip />
            <Bar dataKey="pH" fill="#007AFF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
