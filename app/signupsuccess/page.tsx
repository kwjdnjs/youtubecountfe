"use client";

import { redirect } from "next/navigation";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="text-xl font-semibold text-gray-800 mb-6">
          ✅ 성공적으로 가입되었습니다.
        </div>
        <button
          onClick={() => redirect("/login")}
          className="w-full bg-blue-500 text-white text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
        >
          로그인으로 이동
        </button>
      </div>
    </div>
  );
}
