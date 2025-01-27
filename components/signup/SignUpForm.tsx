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
        router.push(`/signupsuccess`);
      }
    } catch (e) {
      setErr(e.toString());
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ModalWrapper error={err} />
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="min-w-[25vw]">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              아이디
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={values.username}
            />
          </div>
          <div className="min-w-[25vw]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div className="min-w-[25vw]">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="min-w-[25vw]">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
