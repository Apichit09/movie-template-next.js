import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#232931] text-[#EEEEEE]" data-aos="fade-up" data-aos-duration="800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">MovieHub</h2>
            <p className="text-sm">ศูนย์รวมข้อมูลภาพยนตร์ที่ดีที่สุดสำหรับคุณ</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4ECCA3]">หมวดหมู่</h3>
            <ul className="space-y-2">
              {['แอคชั่น', 'ตลก', 'ดราม่า', 'สยองขวัญ', 'โรแมนติก'].map((category) => (
                <li key={category}>
                  <Link href={`/category/${category.toLowerCase()}`} className="hover:text-[#4ECCA3] transition-colors duration-300">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4ECCA3]">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {['เกี่ยวกับเรา', 'ติดต่อเรา', 'คำถามที่พบบ่อย', 'นโยบายความเป็นส่วนตัว', 'เงื่อนไขการใช้งาน'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#4ECCA3] transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#4ECCA3]">ติดตามเรา</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, href: 'https://facebook.com' },
                { Icon: FaTwitter, href: 'https://twitter.com' },
                { Icon: FaInstagram, href: 'https://instagram.com' },
                { Icon: FaYoutube, href: 'https://youtube.com' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#393E46] p-2 rounded-full hover:bg-[#4ECCA3] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#393E46] mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} MovieHub. สงวนลิขสิทธิ์ทั้งหมด.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;