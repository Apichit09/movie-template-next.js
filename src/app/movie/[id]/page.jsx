"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaPlus, FaShare } from 'react-icons/fa';

const moviesData = {
  1: {
    title: "เดอะ มูฟวี่ 1: การผจญภัยเริ่มต้น",
    description: "การผจญภัยครั้งแรกของวีรบุรุษในโลกแห่งจินตนาการ",
    genre: "แอคชั่น",
    rating: 4.5,
    duration: "2h 15m",
    releaseYear: 2023,
    posterImage: "/images/movie1-poster.jpg",
    videoUrl: "https://example.com/movie1.mp4"
  },
  2: {
    title: "เดอะ มูฟวี่ 2: ศึกชิงบัลลังก์",
    description: "การต่อสู้เพื่อครองอำนาจในอาณาจักรลึกลับ",
    genre: "แฟนตาซี",
    rating: 4.3,
    duration: "2h 30m",
    releaseYear: 2023,
    posterImage: "/images/movie2-poster.jpg",
    videoUrl: "https://example.com/movie2.mp4"
  },
  3: {
    title: "เดอะ มูฟวี่ 3: โลกใต้ทะเล",
    description: "การสำรวจโลกใต้ทะเลที่เต็มไปด้วยความมหัศจรรย์",
    genre: "ผจญภัย",
    rating: 4.7,
    duration: "2h 20m",
    releaseYear: 2024,
    posterImage: "/images/movie3-poster.jpg",
    videoUrl: "https://example.com/movie3.mp4"
  },
  4: {
    title: "เดอะ มูฟวี่ 4: ภารกิจลับสุดขอบฟ้า",
    description: "ภารกิจสายลับที่พาไปทั่วโลกเพื่อปกป้องมนุษยชาติ",
    genre: "สืบสวน",
    rating: 4.2,
    duration: "2h 10m",
    releaseYear: 2024,
    posterImage: "/images/movie4-poster.jpg",
    videoUrl: "https://example.com/movie4.mp4"
  },
  5: {
    title: "เดอะ มูฟวี่ 5: รักข้ามกาลเวลา",
    description: "เรื่องราวความรักที่ท้าทายกฎเกณฑ์ของเวลา",
    genre: "โรแมนติก",
    rating: 4.6,
    duration: "2h 05m",
    releaseYear: 2024,
    posterImage: "/images/movie5-poster.jpg",
    videoUrl: "https://example.com/movie5.mp4"
  },
  6: {
    title: "เดอะ มูฟวี่ 6: ผจญภัยในดินแดนมหัศจรรย์",
    description: "การเดินทางสู่ดินแดนแห่งเวทมนตร์และความมหัศจรรย์",
    genre: "แฟนตาซี",
    rating: 4.4,
    duration: "2h 18m",
    releaseYear: 2025,
    posterImage: "/images/movie6-poster.jpg",
    videoUrl: "https://example.com/movie6.mp4"
  },
  7: {
    title: "เดอะ มูฟวี่ 7: ปริศนาฆาตกรรมในคฤหาสน์",
    description: "การไขปริศนาฆาตกรรมสุดลึกลับในคฤหาสน์เก่าแก่",
    genre: "สืบสวน",
    rating: 4.5,
    duration: "2h 12m",
    releaseYear: 2025,
    posterImage: "/images/movie7-poster.jpg",
    videoUrl: "https://example.com/movie7.mp4"
  },
  8: {
    title: "เดอะ มูฟวี่ 8: ศึกซูเปอร์ฮีโร่",
    description: "การรวมพลังของเหล่าซูเปอร์ฮีโร่เพื่อปกป้องโลก",
    genre: "แอคชั่น",
    rating: 4.8,
    duration: "2h 35m",
    releaseYear: 2025,
    posterImage: "/images/movie8-poster.jpg",
    videoUrl: "https://example.com/movie8.mp4"
  },
  9: {
    title: "เดอะ มูฟวี่ 9: โลกอนาคต",
    description: "การผจญภัยในโลกอนาคตที่เต็มไปด้วยเทคโนโลยีล้ำสมัย",
    genre: "ไซไฟ",
    rating: 4.6,
    duration: "2h 22m",
    releaseYear: 2026,
    posterImage: "/images/movie9-poster.jpg",
    videoUrl: "https://example.com/movie9.mp4"
  },
  10: {
    title: "เดอะ มูฟวี่ 10: ตำนานนักรบโบราณ",
    description: "การต่อสู้ของนักรบโบราณเพื่อปกป้องบ้านเกิด",
    genre: "ประวัติศาสตร์",
    rating: 4.7,
    duration: "2h 28m",
    releaseYear: 2026,
    posterImage: "/images/movie10-poster.jpg",
    videoUrl: "https://example.com/movie10.mp4"
  },
  11: {
    title: "เดอะ มูฟวี่ 11: ผจญภัยในป่าลึกลับ",
    description: "การเอาชีวิตรอดในป่าทึบที่เต็มไปด้วยอันตราย",
    genre: "ผจญภัย",
    rating: 4.3,
    duration: "2h 08m",
    releaseYear: 2026,
    posterImage: "/images/movie11-poster.jpg",
    videoUrl: "https://example.com/movie11.mp4"
  },
  12: {
    title: "เดอะ มูฟวี่ 12: ศึกวายร้ายล้างโลก",
    description: "การต่อสู้กับวายร้ายที่ต้องการทำลายโลก",
    genre: "แอคชั่น",
    rating: 4.5,
    duration: "2h 25m",
    releaseYear: 2027,
    posterImage: "/images/movie12-poster.jpg",
    videoUrl: "https://example.com/movie12.mp4"
  },
  13: {
    title: "เดอะ มูฟวี่ 13: รักในรั้วมหาวิทยาลัย",
    description: "เรื่องราวความรักและมิตรภาพในรั้วมหาวิทยาลัย",
    genre: "โรแมนติก",
    rating: 4.2,
    duration: "2h 00m",
    releaseYear: 2027,
    posterImage: "/images/movie13-poster.jpg",
    videoUrl: "https://example.com/movie13.mp4"
  },
  14: {
    title: "เดอะ มูฟวี่ 14: ปริศนาโบราณคดี",
    description: "การค้นพบโบราณวัตถุลึกลับที่นำไปสู่การผจญภัยครั้งใหญ่",
    genre: "ผจญภัย",
    rating: 4.6,
    duration: "2h 15m",
    releaseYear: 2027,
    posterImage: "/images/movie14-poster.jpg",
    videoUrl: "https://example.com/movie14.mp4"
  },
  15: {
    title: "เดอะ มูฟวี่ 15: ศึกมนุษย์ต่างดาว",
    description: "การเผชิญหน้ากับการรุกรานของมนุษย์ต่างดาว",
    genre: "ไซไฟ",
    rating: 4.7,
    duration: "2h 30m",
    releaseYear: 2028,
    posterImage: "/images/movie15-poster.jpg",
    videoUrl: "https://example.com/movie15.mp4"
  },
  16: {
    title: "เดอะ มูฟวี่ 16: ตำนานดาบวิเศษ",
    description: "การตามหาดาบวิเศษที่มีพลังมหาศาล",
    genre: "แฟนตาซี",
    rating: 4.5,
    duration: "2h 20m",
    releaseYear: 2028,
    posterImage: "/images/movie16-poster.jpg",
    videoUrl: "https://example.com/movie16.mp4"
  },
  17: {
    title: "เดอะ มูฟวี่ 17: ศึกชิงมงกุฎ",
    description: "การแย่งชิงอำนาจในราชสำนักโบราณ",
    genre: "ประวัติศาสตร์",
    rating: 4.4,
    duration: "2h 25m",
    releaseYear: 2028,
    posterImage: "/images/movie17-poster.jpg",
    videoUrl: "https://example.com/movie17.mp4"
  },
  18: {
    title: "เดอะ มูฟวี่ 18: ปริศนาฆาตกรรมบนรถไฟ",
    description: "การไขปริศนาฆาตกรรมบนรถไฟสายด่วน",
    genre: "สืบสวน",
    rating: 4.6,
    duration: "2h 10m",
    releaseYear: 2029,
    posterImage: "/images/movie18-poster.jpg",
    videoUrl: "https://example.com/movie18.mp4"
  },
  19: {
    title: "เดอะ มูฟวี่ 19: ผจญภัยใต้ทะเลลึก",
    description: "การสำรวจความลึกลับใต้ท้องทะเล",
    genre: "ผจญภัย",
    rating: 4.5,
    duration: "2h 18m",
    releaseYear: 2029,
    posterImage: "/images/movie19-poster.jpg",
    videoUrl: "https://example.com/movie19.mp4"
  },
  20: {
    title: "เดอะ มูฟวี่ 20: ศึกซอมบี้ถล่มเมือง",
    description: "การต่อสู้เพื่อเอาชีวิตรอดในเมืองที่เต็มไปด้วยซอมบี้",
    genre: "สยองขวัญ",
    rating: 4.3,
    duration: "2h 05m",
    releaseYear: 2029,
    posterImage: "/images/movie20-poster.jpg",
    videoUrl: "https://example.com/movie20.mp4"
  },
  21: {
    title: "เดอะ มูฟวี่ 21: ปริศนาจักรวาล",
    description: "การเดินทางสู่ดวงดาวที่ไกลที่สุดเพื่อไขปริศนาจักรวาล",
    genre: "ไซไฟ",
    rating: 4.8,
    duration: "2h 40m",
    releaseYear: 2030,
    posterImage: "/images/movie21-poster.jpg",
    videoUrl: "https://example.com/movie21.mp4"
  },
  22: {
    title: "เดอะ มูฟวี่ 22: ศึกมายากล",
    description: "การต่อสู้ระหว่างนักมายากลเพื่อครองตำแหน่งจอมเวทย์",
    genre: "แฟนตาซี",
    rating: 4.5,
    duration: "2h 15m",
    releaseYear: 2030,
    posterImage: "/images/movie22-poster.jpg",
    videoUrl: "https://example.com/movie22.mp4"
  },
  23: {
    title: "เดอะ มูฟวี่ 23: มหากาพย์นักรบกู้โลก",
    description: "การรวมพลังของเหล่าวีรบุรุษเพื่อปกป้องโลกจากภัยคุกคาม",
    genre: "แอคชั่น",
    rating: 4.9,
    duration: "2h 50m",
    releaseYear: 2030,
    posterImage: "/images/movie23-poster.jpg",
    videoUrl: "https://example.com/movie23.mp4"
  },
  24: {
    title: "เดอะ มูฟวี่ 24: รักนิรันดร์",
    description: "เรื่องราวความรักที่ยืนยาวผ่านกาลเวลา",
    genre: "โรแมนติก",
    rating: 4.7,
    duration: "2h 20m",
    releaseYear: 2031,
    posterImage: "/images/movie24-poster.jpg",
    videoUrl: "https://example.com/movie24.mp4"
  }
};

const getRecommendedMovies = (genre, currentMovieId) => {
  return Object.entries(moviesData)
    .filter(([id, movie]) => movie.genre === genre && id !== currentMovieId)
    .map(([id, movie]) => ({
      id,
      title: movie.title,
      posterImage: movie.posterImage
    }))
    .slice(0, 5);
};

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const currentMovie = moviesData[id];
    setMovie(currentMovie);
    if (currentMovie) {
      setRecommendedMovies(getRecommendedMovies(currentMovie.genre, id));
    }
  }, [id]);

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#232931]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ส่วนของวิดีโอ */}
          <div className="w-full lg:w-2/3 mt-12">
            {isPlaying ? (
              <video
                src={movie.videoUrl}
                controls
                className="w-full aspect-video bg-black"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src={movie.posterImage}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-opacity"
                >
                  <FaPlay className="text-white text-6xl" />
                </button>
              </div>
            )}
          </div>

          {/* ข้อมูลหนัง */}
          <div className="w-full lg:w-1/3 mt-12 text-[#EEEEEE]">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4">{movie.description}</p>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-[#4ECCA3]">ประเภท:</span>
              <span>{movie.genre}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-[#4ECCA3]">คะแนน:</span>
              <span>{movie.rating}/5</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-[#4ECCA3]">ความยาว:</span>
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2 text-[#4ECCA3]">ปีที่ฉาย:</span>
              <span>{movie.releaseYear}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4ECCA3] text-[#232931] px-4 py-2 rounded-md flex items-center">
                <FaPlay className="mr-2" /> เล่น
              </button>
              <button className="bg-[#393E46] text-[#EEEEEE] px-4 py-2 rounded-md flex items-center">
                <FaPlus className="mr-2" /> เพิ่มในรายการ
              </button>
              <button className="bg-[#393E46] text-[#EEEEEE] px-4 py-2 rounded-md flex items-center">
                <FaShare className="mr-2" /> แชร์
              </button>
            </div>
          </div>
        </div>

        {/* ส่วนของความคิดเห็นหรือข้อมูลเพิ่มเติม */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">ความคิดเห็น</h2>
          {/* เพิ่มส่วนของความคิดเห็นตรงนี้ */}
        </div>

        {/* ส่วนของหนังแนะนำ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">หนังแนะนำ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendedMovies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div className="bg-[#393E46] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full pt-[150%]">
                    <Image
                      src={movie.posterImage}
                      alt={movie.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-[#EEEEEE] font-semibold truncate">{movie.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}