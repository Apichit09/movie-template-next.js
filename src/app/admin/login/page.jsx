"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === '123') {
      router.push('/admin/dashboard'); // หรือหน้าที่คุณต้องการให้ redirect ไปหลังจาก login สำเร็จ
    } else {
      alert('รหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#393E46] to-[#232931]">
      <div className="bg-[#EEEEEE] p-10 rounded-lg shadow-md w-full max-w-md text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-[#232931] mb-6">Member Login</h2>
        <div className="flex justify-center mb-6">
          <div className="bg-[#393E46] rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4ECCA3]" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-[#393E46] rounded-md bg-[#EEEEEE] text-[#232931]"
            data-aos="fade-right"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-4 border border-[#393E46] rounded-md bg-[#EEEEEE] text-[#232931]"
            data-aos="fade-left"
          />
          <button 
            type="submit" 
            className="w-full py-2 bg-[#4ECCA3] text-[#EEEEEE] rounded-md hover:bg-[#3db892] transition-colors duration-300"
            data-aos="fade-up"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-[#393E46] cursor-pointer">Forgot Username / Password?</p>
        <p className="mt-2 text-[#4ECCA3] cursor-pointer">Create your Account →</p>
      </div>
    </div>
  );
}