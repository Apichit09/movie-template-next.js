"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminCheck() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleFirstQuestion = (isAdmin) => {
    if (isAdmin) {
      setStep(2);
    } else {
      alert('กรุณาออกจากหน้านี้');
      router.push('/'); // สมมติว่าเรามีหน้าหลักที่ path '/'
    }
  };

  const handleSecondQuestion = (isReallySure) => {
    if (isReallySure) {
      router.push('/admin/login');
    } else {
      alert('กรุณาออกจากหน้านี้');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#232931] flex items-center justify-center">
      <div className="bg-[#393E46] p-8 rounded-lg shadow-md max-w-md w-full">
        {step === 1 ? (
          <>
            <h1 className="text-2xl font-bold text-[#EEEEEE] mb-6 text-center">คุณเป็น Admin ใช่หรือไม่?</h1>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleFirstQuestion(true)}
                className="bg-[#4ECCA3] text-[#232931] px-6 py-2 rounded hover:bg-[#45b393] transition-colors"
              >
                ใช่
              </button>
              <button
                onClick={() => handleFirstQuestion(false)}
                className="bg-red-500 text-[#EEEEEE] px-6 py-2 rounded hover:bg-red-600 transition-colors"
              >
                ไม่ใช่
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-[#EEEEEE] mb-6 text-center">จริงแน่นะ?</h1>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleSecondQuestion(true)}
                className="bg-[#4ECCA3] text-[#232931] px-6 py-2 rounded hover:bg-[#45b393] transition-colors"
              >
                จริง
              </button>
              <button
                onClick={() => handleSecondQuestion(false)}
                className="bg-red-500 text-[#EEEEEE] px-6 py-2 rounded hover:bg-red-600 transition-colors"
              >
                ไม่จริง
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}