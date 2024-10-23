"use client";
import { useEffect, useState } from 'react';
import AdminNavbar from '../components/Navbar';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'จำนวนผู้ชม',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#4ECCA3',
      },
    ],
  });

  const recentMovies = [
    { id: 1, title: 'Inception', category: 'Sci-Fi', addedDate: '2023-03-15' },
    { id: 2, title: 'The Shawshank Redemption', category: 'Drama', addedDate: '2023-03-14' },
    { id: 3, title: 'The Dark Knight', category: 'Action', addedDate: '2023-03-13' },
    { id: 4, title: 'Pulp Fiction', category: 'Crime', addedDate: '2023-03-12' },
    { id: 5, title: 'Forrest Gump', category: 'Drama', addedDate: '2023-03-11' },
  ];

  return (
    <div className="min-h-screen bg-[#232931]">
      <AdminNavbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-[#EEEEEE] mb-6">Dashboard</h1>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#393E46] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#4ECCA3]">จำนวนหนังทั้งหมด</h2>
            <p className="text-3xl font-bold text-[#EEEEEE]">25 เรื่อง</p>
          </div>
          <div className="bg-[#393E46] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#4ECCA3]">จำนวนหมวดหมู่</h2>
            <p className="text-3xl font-bold text-[#EEEEEE]">8 หมวดหมู่</p>
          </div>
          <div className="bg-[#393E46] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#4ECCA3]">หนังที่เพิ่มในเดือนนี้</h2>
            <p className="text-3xl font-bold text-[#EEEEEE]">12 เรื่อง</p>
          </div>
        </div>

        {/* Recent Movies Table */}
        <div className="bg-[#393E46] p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-[#4ECCA3] mb-4">หนังที่เพิ่มล่าสุด</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[#EEEEEE]">
              <thead>
                <tr className="border-b border-[#232931]">
                  <th className="text-left p-2">ชื่อเรื่อง</th>
                  <th className="text-left p-2">หมวดหมู่</th>
                  <th className="text-left p-2">วันที่เพิ่ม</th>
                </tr>
              </thead>
              <tbody>
                {recentMovies.map((movie) => (
                  <tr key={movie.id} className="border-b border-[#232931]">
                    <td className="p-2">{movie.title}</td>
                    <td className="p-2">{movie.category}</td>
                    <td className="p-2">{movie.addedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-[#393E46] p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-[#4ECCA3] mb-4">ยอดผู้ชมรายเดือน</h2>
          <Bar data={chartData} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: '#EEEEEE' }
              },
              x: {
                ticks: { color: '#EEEEEE' }
              }
            },
            plugins: {
              legend: {
                labels: { color: '#EEEEEE' }
              }
            }
          }} />
        </div>

        {/* Contact Information */}
        <div className="bg-[#393E46] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#4ECCA3] mb-4">ข้อมูลการติดต่อล่าสุด</h2>
          <ul className="space-y-2 text-[#EEEEEE]">
            <li>ชื่อ: John Doe, อีเมล: john@example.com, หัวข้อ: ขอเพิ่มหนัง</li>
            <li>ชื่อ: Jane Smith, อีเมล: jane@example.com, หัวข้อ: รายงานปัญหาการเล่นวิดีโอ</li>
            <li>ชื่อ: Bob Johnson, อีเมล: bob@example.com, หัวข้อ: ขอคำแนะนำหนัง</li>
          </ul>
        </div>
      </main>
    </div>
  );
}