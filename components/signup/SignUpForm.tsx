"use client";

import { post } from "@/utils/httpRequest";
import { useState } from "react";
import ModalWrapper from "../modal/ModalWrapper";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const router = useRouter();

  const handleChange = async (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await post("v1/auth/signup", values);
      if (response) {
        console.log(response);
        router.push("/signupsuccess");
      }
    } catch (e) {
      setErr(e.toString());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <ModalWrapper error={err} />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              아이디
            </label>
            <input
              type="text"
              id="username"
              className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
              onChange={handleChange}
              value={values.username}
              placeholder="아이디 입력"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
              onChange={handleChange}
              value={values.email}
              placeholder="이메일 입력"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
              onChange={handleChange}
              value={values.password}
              placeholder="비밀번호 입력"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
