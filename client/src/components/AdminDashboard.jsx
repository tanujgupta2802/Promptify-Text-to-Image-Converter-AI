import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/admin/stats", { headers: { token } })
      .then((res) => setStats(res.data));
    axios
      .get("/api/admin/daily-signups", { headers: { token } })
      .then((res) => setSignups(res.data));
  }, []);

  const chartData = {
    labels: signups.map((s) => s._id),
    datasets: [
      {
        label: "Daily Signups",
        data: signups.map((s) => s.count),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="bg-white shadow p-4 rounded">
          Users: {stats.totalUsers}
        </div>
        <div className="bg-white shadow p-4 rounded">
          Images: {stats.totalImages}
        </div>
        <div className="bg-white shadow p-4 rounded">
          Revenue: ₹{stats.totalRevenue}
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <Line data={chartData} />
      </div>
    </div>
  );
}
