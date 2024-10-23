"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaRandom } from 'react-icons/fa';
import pos1Image from '../image/pos1.jpg';

const movies = [
  {
    id: 1,
    title: "เดอะ มูฟวี่ 1",
    image: pos1Image,
    genre: "แอคชั่น",
    rating: 4.5,
  },
  {
    id: 2,
    title: "เดอะ มูฟวี่ 2",
    image: pos1Image,
    genre: "ตลก",
    rating: 4.2,
  },
  {
    id: 3,
    title: "เดอะ มูฟวี่ 3",
    image: pos1Image,
    genre: "ดราม่า",
    rating: 4.8,
  },
  {
    id: 4,
    title: "เดอะ มูฟวี่ 4",
    image: pos1Image,
    genre: "สยองขวัญ",
    rating: 4.0,
  },
  {
    id: 5,
    title: "เดอะ มูฟวี่ 5",
    image: pos1Image,
    genre: "โรแมนติก",
    rating: 4.3,
  },
  {
    id: 6,
    title: "เดอะ มูฟวี่ 6",
    image: pos1Image,
    genre: "แอคชั่น",
    rating: 4.6,
  },
  {
    id: 7,
    title: "เดอะ มูฟวี่ 7",
    image: pos1Image,
    genre: "ผจญภัย",
    rating: 4.1,
  },
  {
    id: 8,
    title: "เดอะ มูฟวี่ 8",
    image: pos1Image,
    genre: "แฟนตาซี",
    rating: 4.4,
  },
  {
    id: 9,
    title: "เดอะ มูฟวี่ 9",
    image: pos1Image,
    genre: "วิทยาศาสตร์",
    rating: 4.7,
  },
  {
    id: 10,
    title: "เดอะ มูฟวี่ 10",
    image: pos1Image,
    genre: "ไซไฟ",
    rating: 4.9,
  },
  {
    id: 11,
    title: "เดอะ มูฟวี่ 11",
    image: pos1Image,
    genre: "อาชญากรรม",
    rating: 4.2,
  },
  {
    id: 12,
    title: "เดอะ มูฟวี่ 12",
    image: pos1Image,
    genre: "ลึกลับ",
    rating: 4.5,
  },
  {
    id: 13,
    title: "เดอะ มูฟวี่ 13",
    image: pos1Image,
    genre: "สืบสวน",
    rating: 4.3,
  },
  {
    id: 14,
    title: "เดอะ มูฟวี่ 14",
    image: pos1Image,
    genre: "ระทึกขวัญ",
    rating: 4.6,
  },
  {
    id: 15,
    title: "เดอะ มูฟวี่ 15",
    image: pos1Image,
    genre: "ประวัติศาสตร์",
    rating: 4.1,
  },
  {
    id: 16,
    title: "เดอะ มูฟวี่ 16",
    image: pos1Image,
    genre: "สงคราม",
    rating: 4.4,
  },
  {
    id: 17,
    title: "เดอะ มูฟวี่ 17",
    image: pos1Image,
    genre: "ชีวประวัติ",
    rating: 4.7,
  },
  {
    id: 18,
    title: "เดอะ มูฟวี่ 18",
    image: pos1Image,
    genre: "ย้อนยุค",
    rating: 4.0,
  },
  {
    id: 19,
    title: "เดอะ มูฟวี่ 19",
    image: pos1Image,
    genre: "ครอบครัว",
    rating: 4.8,
  },
  {
    id: 20,
    title: "เดอะ มูฟวี่ 20",
    image: pos1Image,
    genre: "อนิเมชั่น",
    rating: 4.9,
  },
  {
    id: 21,
    title: "เดอะ มูฟวี่ 21",
    image: pos1Image,
    genre: "เด็ก",
    rating: 4.2,
  },
  {
    id: 22,
    title: "เดอะ มูฟวี่ 22",
    image: pos1Image,
    genre: "การ์ตูน",
    rating: 4.5,
  },
  {
    id: 23,
    title: "เดอะ มูฟวี่ 23",
    image: pos1Image,
    genre: "สารคดี",
    rating: 4.3,
  },
  {
    id: 24,
    title: "เดอะ มูฟวี่ 24",
    image: pos1Image,
    genre: "เพลง",
    rating: 4.6,
  },
  {
    id: 25,
    title: "เดอะ มูฟวี่ 25",
    image: pos1Image,
    genre: "กีฬา",
    rating: 4.1,
  },
];

const genres = ['ทั้งหมด', 'แอคชั่น', 'ตลก', 'ดราม่า', 'สยองขวัญ', 'โรแมนติก'];

export default function Random() {
  const [selectedGenre, setSelectedGenre] = useState('ทั้งหมด');
  const [randomMovie, setRandomMovie] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDuration, setSpinDuration] = useState(0);

  const spinWheel = () => {
    setIsSpinning(true);
    setRandomMovie(null);
    const duration = Math.floor(Math.random() * 2000) + 3000; // สุ่มระยะเวลาระหว่าง 3-5 วินาที
    setSpinDuration(duration);

    const interval = setInterval(() => {
      const filteredMovies = selectedGenre === 'ทั้งหมด'
        ? movies
        : movies.filter(movie => movie.genre === selectedGenre);
      const randomIndex = Math.floor(Math.random() * filteredMovies.length);
      setRandomMovie(filteredMovies[randomIndex]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsSpinning(false);
    }, duration);
  };

  return (
    <div className="min-h-screen bg-[#232931]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-[#4ECCA3] mb-8 text-center">สุ่มภาพยนตร์</h1>
        
        <div className="mb-8 flex justify-center">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-2 rounded-md bg-[#393E46] text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`px-6 py-3 rounded-full ${
              isSpinning ? 'bg-[#393E46] text-[#EEEEEE]' : 'bg-[#4ECCA3] text-[#232931] hover:bg-[#45b393]'
            } transition-colors duration-300 flex items-center`}
          >
            <FaRandom className={`mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
            {isSpinning ? 'กำลังสุ่ม...' : 'สุ่มภาพยนตร์'}
          </button>
        </div>
        
        <div className="flex justify-center">
          <div className={`bg-[#393E46] rounded-lg overflow-hidden shadow-lg max-w-sm transition-all duration-500 ${
            isSpinning ? 'animate-pulse' : ''
          } ${randomMovie ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {randomMovie && (
              <>
                <Image
                  src={randomMovie.image}
                  alt={randomMovie.title}
                  width={300}
                  height={450}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[#EEEEEE] mb-2">{randomMovie.title}</h2>
                  <p className="text-[#4ECCA3] mb-2">{randomMovie.genre}</p>
                  <p className="text-[#EEEEEE]">คะแนน: {randomMovie.rating}/5</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}