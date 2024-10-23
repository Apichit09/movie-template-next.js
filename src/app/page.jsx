"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import pos1Image from "./image/pos1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

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

const genreCategories = [
  {
    name: "ประเภทหลัก",
    genres: ["ทั้งหมด", "แอคชั่น", "ตลก", "ดราม่า", "สยองขวัญ", "โรแมนติก"],
  },
  {
    name: "แนวผจญภัย",
    genres: ["ผจญภัย", "แฟนตาซี", "วิทยาศาสตร์", "ไซไฟ"],
  },
  {
    name: "แนวอาชญากรรม",
    genres: ["อาชญากรรม", "ลึกลับ", "สืบสวน", "ระทึกขวัญ"],
  },
  {
    name: "แนวประวัติศาสตร์",
    genres: ["ประวัติศาสตร์", "สงคราม", "ชีวประวัติ", "ย้อนยุค"],
  },
  {
    name: "แนวครอบครัว",
    genres: ["ครอบครัว", "อนิเมชั่น", "เด็ก", "การ์ตูน"],
  },
  {
    name: "แนวอื่นๆ",
    genres: ["สารคดี", "เพลง", "กีฬา", "ตะวันตก"],
  },
];

const MOVIES_PER_PAGE = 20;

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("ทั้งหมด");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const filtered = movies
      .filter(
        (movie) =>
          (selectedGenre === "ทั้งหมด" || movie.genre === selectedGenre) &&
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.id - a.id);
    setFilteredMovies(filtered);
    setCurrentPage(1);
  }, [selectedGenre, searchTerm]);

  const recommendedMovies = movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const indexOfLastMovie = currentPage * MOVIES_PER_PAGE;
  const indexOfFirstMovie = indexOfLastMovie - MOVIES_PER_PAGE;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  const totalPages = Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-[#232931]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1
          className="text-4xl font-bold text-[#4ECCA3] mb-8 text-center"
          data-aos="fade-up"
        >
          เลือกชมภาพยนตร์
        </h1>

        {/* ช่องค้นหา */}
        <div
          className="mb-8 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหาภาพยนตร์..."
              className="w-full md:w-96 px-4 py-2 rounded-full bg-[#393E46] text-[#EEEEEE] focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4ECCA3]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 md:pr-8">
            {/* หนังแนะนำ */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">
                หนังแนะนำ
              </h2>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll">
                  {[...recommendedMovies, ...recommendedMovies].map(
                    (movie, index) => (
                      <Link
                        href={`/movie/${movie.id}`}
                        key={index}
                        className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
                        data-aos="fade-up"
                        data-aos-delay={100 * (index % 8)}
                      >
                        <div className="bg-[#393E46] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="relative w-full pt-[150%]">
                            <Image
                              src={movie.image}
                              alt={movie.title}
                              layout="fill"
                              objectFit="cover"
                              className="absolute top-0 left-0 w-full h-full"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2 truncate">
                              {movie.title}
                            </h3>
                            <p className="text-[#4ECCA3]">{movie.genre}</p>
                          </div>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* หนังทั้งหมด */}
            <section data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">
                หนังทั้งหมด
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentMovies.map((movie, index) => (
                  <div key={movie.id} data-aos="fade-up" data-aos-delay={100 * index}>
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-1 px-3 py-1 rounded-md bg-[#393E46] text-[#EEEEEE] disabled:opacity-50"
                  >
                    <FaChevronLeft />
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`mx-1 px-3 py-1 rounded-md ${
                        currentPage === index + 1
                          ? "bg-[#4ECCA3] text-[#232931]"
                          : "bg-[#393E46] text-[#EEEEEE]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-3 py-1 rounded-md bg-[#393E46] text-[#EEEEEE] disabled:opacity-50"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </section>
          </div>

          {/* หมวดหมู่ด้านขวา */}
          <aside className="w-full md:w-1/4 mt-8 md:mt-0" data-aos="fade-left" data-aos-delay="400">
            <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">หมวดหมู่</h2>
            {genreCategories.map((category, index) => (
              <div key={index} className="mb-6" data-aos="fade-left" data-aos-delay={100 * index}>
                <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.genres.map((genre) => (
                    <li key={genre}>
                      <button
                        onClick={() => setSelectedGenre(genre)}
                        className={`w-full text-left px-4 py-2 rounded-md ${
                          selectedGenre === genre
                            ? "bg-[#4ECCA3] text-[#232931]"
                            : "bg-[#393E46] text-[#EEEEEE] hover:bg-[#4ECCA3] hover:text-[#232931]"
                        } transition-colors duration-300`}
                      >
                        {genre}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const MovieCard = ({ movie }) => (
  <Link href={`/movie/${movie.id}`}>
    <div
      className="bg-[#393E46] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <Image
        src={movie.image}
        alt={movie.title}
        width={300}
        height={450}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-[#EEEEEE] mb-2">
          {movie.title}
        </h2>
        <p className="text-[#4ECCA3] mb-2">{movie.genre}</p>
        <p className="text-[#EEEEEE]">คะแนน: {movie.rating}/5</p>
      </div>
    </div>
  </Link>
);
