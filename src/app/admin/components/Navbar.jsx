import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // ทำการ logout ที่นี่ (เช่น ลบ token จาก localStorage)
    // จากนั้น redirect ไปยังหน้า login
    router.push('/admin/login');
  };

  return (
    <nav className="bg-[#232931] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/admin/dashboard" className="text-xl font-bold">
              Admin Panel
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/admin/dashboard" className="hover:bg-[#393E46] px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/admin/add-movie" className="hover:bg-[#393E46] px-3 py-2 rounded-md text-sm font-medium">
                  Add Movie
                </Link>
                <Link href="/admin/manage-movie" className="hover:bg-[#393E46] px-3 py-2 rounded-md text-sm font-medium">
                  Manage Movie
                </Link>
                <Link href="/admin/add-categories" className="hover:bg-[#393E46] px-3 py-2 rounded-md text-sm font-medium">
                  Add Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button onClick={handleLogout} className="bg-[#4ECCA3] hover:bg-[#3db892] px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#393E46] focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/admin/dashboard" className="block hover:bg-[#393E46] px-3 py-2 rounded-md text-base font-medium">
            Dashboard
          </Link>
          <Link href="/admin/add-movie" className="block hover:bg-[#393E46] px-3 py-2 rounded-md text-base font-medium">
            Add Movie
          </Link>
          <Link href="/admin/add-categories" className="block hover:bg-[#393E46] px-3 py-2 rounded-md text-base font-medium">
            Add Categories
          </Link>
          <button onClick={handleLogout} className="w-full text-left bg-[#4ECCA3] hover:bg-[#3db892] px-3 py-2 rounded-md text-base font-medium">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}