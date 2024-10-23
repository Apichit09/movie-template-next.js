"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import pos1Image from '../image/pos1.jpg';

const popularMovies = [
  { id: 1, title: "เดอะ มูฟวี่ 1", image: pos1Image, genre: "แอคชั่น", rating: 4.5 },
  { id: 2, title: "เดอะ มูฟวี่ 2", image: pos1Image, genre: "ตลก", rating: 4.2 },
  { id: 3, title: "เดอะ มูฟวี่ 3", image: pos1Image, genre: "ดราม่า", rating: 4.8 },
  { id: 4, title: "เดอะ มูฟวี่ 4", image: pos1Image, genre: "สยองขวัญ", rating: 4.0 },
  { id: 5, title: "เดอะ มูฟวี่ 5", image: pos1Image, genre: "โรแมนติก", rating: 4.3 },
  { id: 6, title: "เดอะ มูฟวี่ 6", image: pos1Image, genre: "แอคชั่น", rating: 4.6 },
  { id: 7, title: "เดอะ มูฟวี่ 7", image: pos1Image, genre: "ผจญภัย", rating: 4.1 },
  { id: 8, title: "เดอะ มูฟวี่ 8", image: pos1Image, genre: "แฟนตาซี", rating: 4.4 },
  { id: 9, title: "เดอะ มูฟวี่ 9", image: pos1Image, genre: "วิทยาศาสตร์", rating: 4.7 },
  { id: 10, title: "เดอะ มูฟวี่ 10", image: pos1Image, genre: "ไซไฟ", rating: 4.9 },
  { id: 11, title: "เดอะ มูฟวี่ 11", image: pos1Image, genre: "อาชญากรรม", rating: 4.2 },
  { id: 12, title: "เดอะ มูฟวี่ 12", image: pos1Image, genre: "ลึกลับ", rating: 4.5 },
  { id: 13, title: "เดอะ มูฟวี่ 13", image: pos1Image, genre: "สืบสวน", rating: 4.3 },
  { id: 14, title: "เดอะ มูฟวี่ 14", image: pos1Image, genre: "ระทึกขวัญ", rating: 4.6 },
  { id: 15, title: "เดอะ มูฟวี่ 15", image: pos1Image, genre: "ประวัติศาสตร์", rating: 4.1 },
];

export default function Popular() {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <div className="min-h-screen bg-[#232931]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-[#4ECCA3] mb-8 text-center">หนังแนะนำประจำเดือน</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {popularMovies.map((movie, index) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div 
                className="relative bg-[#393E46] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <div className="relative w-full pt-[150%]">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  {hoveredMovie === movie.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                      <p className="text-white text-center px-4">
                        <span className="block text-xl font-bold mb-2">{movie.title}</span>
                        <span className="block">{movie.genre}</span>
                        <span className="block">คะแนน: {movie.rating}/5</span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-[#EEEEEE] mb-2 truncate">{movie.title}</h2>
                  <p className="text-[#4ECCA3] truncate">{movie.genre}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-[#EEEEEE]">{movie.rating}/5</span>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-[#4ECCA3] text-[#232931] px-2 py-1 rounded-full text-sm font-bold">
                  #{index + 1}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}