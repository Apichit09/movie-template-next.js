import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#232931] flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#4ECCA3] mb-8 text-center">ติดต่อเรา</h1>
        
        <div className="bg-[#393E46] p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#4ECCA3] mb-4">ข้อมูลติดต่อ</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-[#EEEEEE]">
                  <FaEnvelope className="mr-3 text-[#4ECCA3]" />
                  <span>contact@moviewebsite.com</span>
                </li>
                <li className="flex items-center text-[#EEEEEE]">
                  <FaPhone className="mr-3 text-[#4ECCA3]" />
                  <span>+66 2 123 4567</span>
                </li>
                <li className="flex items-center text-[#EEEEEE]">
                  <FaMapMarkerAlt className="mr-3 text-[#4ECCA3]" />
                  <span>123 ถนนภาพยนตร์ เขตสุขุมวิท กรุงเทพฯ 10110</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#4ECCA3] mb-4">ติดตามเรา</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE] hover:text-[#4ECCA3]">
                  <FaFacebookSquare size={32} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE] hover:text-[#4ECCA3]">
                  <FaTwitterSquare size={32} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE] hover:text-[#4ECCA3]">
                  <FaInstagramSquare size={32} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#4ECCA3] mb-4">เวลาทำการ</h2>
            <p className="text-[#EEEEEE]">จันทร์ - ศุกร์: 9:00 - 18:00 น.</p>
            <p className="text-[#EEEEEE]">เสาร์ - อาทิตย์: 10:00 - 16:00 น.</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#4ECCA3] mb-4">ข้อมูลเพิ่มเติม</h2>
            <p className="text-[#EEEEEE]">หากคุณมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อเราผ่านช่องทางข้างต้น เรายินดีรับฟังความคิดเห็นของคุณเพื่อพัฒนาบริการให้ดียิ่งขึ้น</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}