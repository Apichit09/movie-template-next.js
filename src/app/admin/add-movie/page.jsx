"use client";
import { useState } from 'react';
import AdminNavbar from '../components/Navbar';

export default function AddMovie() {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    releaseDate: '',
    duration: '',
    category: '',
    director: '',
    cast: '',
    posterUrl: '',
    trailerUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ทำการส่งข้อมูลไปยัง API หรือจัดการตามที่ต้องการ
    console.log('Movie data submitted:', movieData);
    // รีเซ็ตฟอร์มหลังจากส่งข้อมูล
    setMovieData({
      title: '',
      description: '',
      releaseDate: '',
      duration: '',
      category: '',
      director: '',
      cast: '',
      posterUrl: '',
      trailerUrl: ''
    });
    alert('เพิ่มหนังสำเร็จ!');
  };

  return (
    <div className="min-h-screen bg-[#232931]">
      <AdminNavbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-[#EEEEEE] mb-6">เพิ่มหนังใหม่</h1>
        <form onSubmit={handleSubmit} className="bg-[#393E46] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-[#EEEEEE] mb-2">ชื่อเรื่อง</label>
            <input
              type="text"
              id="title"
              name="title"
              value={movieData.title}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-[#EEEEEE] mb-2">คำอธิบาย</label>
            <textarea
              id="description"
              name="description"
              value={movieData.description}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="releaseDate" className="block text-[#EEEEEE] mb-2">วันที่เข้าฉาย</label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={movieData.releaseDate}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-[#EEEEEE] mb-2">ความยาว (นาที)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={movieData.duration}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-[#EEEEEE] mb-2">หมวดหมู่</label>
            <input
              type="text"
              id="category"
              name="category"
              value={movieData.category}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="director" className="block text-[#EEEEEE] mb-2">ผู้กำกับ</label>
            <input
              type="text"
              id="director"
              name="director"
              value={movieData.director}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cast" className="block text-[#EEEEEE] mb-2">นักแสดง</label>
            <input
              type="text"
              id="cast"
              name="cast"
              value={movieData.cast}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="posterUrl" className="block text-[#EEEEEE] mb-2">URL โปสเตอร์</label>
            <input
              type="url"
              id="posterUrl"
              name="posterUrl"
              value={movieData.posterUrl}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="trailerUrl" className="block text-[#EEEEEE] mb-2">URL ตัวอย่างหนัง</label>
            <input
              type="url"
              id="trailerUrl"
              name="trailerUrl"
              value={movieData.trailerUrl}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#232931] text-[#EEEEEE] border border-[#4ECCA3]"
              required
            />
          </div>
          <button type="submit" className="bg-[#4ECCA3] text-[#232931] px-4 py-2 rounded hover:bg-[#45b393] transition-colors">
            เพิ่มหนัง
          </button>
        </form>
      </main>
    </div>
  );
}