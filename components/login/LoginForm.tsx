"use client";

import { post } from "@/utils/httpRequest";
import { useState } from "react";
import ModalWrapper from "../modal/ModalWrapper";

function saveTokenAndUsername(response: any) {
  localStorage.clear();
  localStorage.setItem("tokenType", response["tokenType"]);
  localStorage.setItem("accessToken", response["accessToken"]);
  localStorage.setItem("refreshToken", response["refreshToken"]);
  localStorage.setItem("username", response["username"]);
}

export default function LoginForm() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = async (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await post("v1/auth/login", values);
      saveTokenAndUsername(response);
      window.location.href = "/";
    } catch (e) {
      setErr(e.toString());
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <ModalWrapper error={err} />
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700"
            >
              이름
            </label>
            <input
              type="text"
              id="username"
              className="mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg py-3 px-4"
              onChange={handleChange}
              value={values.username}
              placeholder="Enter your name"
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
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
