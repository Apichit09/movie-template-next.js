"use client";
import { useState, useEffect } from 'react';
import AdminNavbar from '../components/Navbar';

// สร้างข้อมูลจำลอง 25 รายการ
const generateMovies = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Movie ${i + 1}`,
    category: ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror'][Math.floor(Math.random() * 5)],
    releaseDate: `202${Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    duration: Math.floor(Math.random() * 60) + 90
  }));
};

export default function ManageMovie() {
  const [movies, setMovies] = useState(generateMovies());
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('คุณแน่ใจหรือไม่ที่จะลบหนังเรื่องนี้?')) {
      setMovies(movies.filter(movie => movie.id !== id));
    }
  };

  const handleEdit = (id) => {
    // ในที่นี้เราจะ log ข้อมูลออกมา ในการใช้งานจริงคุณอาจต้องการ redirect ไปยังหน้าแก้ไข
    console.log('Edit movie with id:', id);
  };

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || movie.category === categoryFilter)
  );

  const categories = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror'];

  return (
    <div className="min-h-screen bg-[#232931]">
      <AdminNavbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-[#EEEEEE] mb-6">จัดการหนัง</h1>
        
        <div className="mb-4 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="ค้นหาชื่อหนัง"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded bg-[#393E46] text-[#EEEEEE] border border-[#4ECCA3]"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 rounded bg-[#393E46] text-[#EEEEEE] border border-[#4ECCA3]"
          >
            <option value="">ทุกหมวดหมู่</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[#EEEEEE] bg-[#393E46] rounded-lg overflow-hidden">
            <thead className="bg-[#4ECCA3] text-[#232931]">
              <tr>
                <th className="p-3 text-left">ชื่อเรื่อง</th>
                <th className="p-3 text-left">หมวดหมู่</th>
                <th className="p-3 text-left">วันที่เข้าฉาย</th>
                <th className="p-3 text-left">ความยาว (นาที)</th>
                <th className="p-3 text-left">การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.map((movie) => (
                <tr key={movie.id} className="border-b border-[#232931]">
                  <td className="p-3">{movie.title}</td>
                  <td className="p-3">{movie.category}</td>
                  <td className="p-3">{movie.releaseDate}</td>
                  <td className="p-3">{movie.duration}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(movie.id)}
                      className="bg-[#4ECCA3] text-[#232931] px-2 py-1 rounded mr-2 hover:bg-[#45b393] transition-colors"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="bg-red-500 text-[#EEEEEE] px-2 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}