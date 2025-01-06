"use client";

import { post } from "@/utils/httpRequest";
import { useState } from "react";

const login = async ({ username, password }: any) => {
  const postData = { username: username, password: password };
  const { resData, error } = await post("v1/auth/login", postData);

  if (resData) {
    saveToken(resData);
  } else {
    console.log(error);
  }

  return null;
};

function saveToken(response: any) {
  localStorage.clear();
  localStorage.setItem("tokenType", response["tokenType"]);
  localStorage.setItem("accessToken", response["accessToken"]);
  localStorage.setItem("refreshToken", response["refreshToken"]);
}

export default function Page() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await login(values);
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="align-self-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ minWidth: "25vw" }}>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
          </div>
          <div className="form-group" style={{ minWidth: "25vw" }}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="form-group" style={{ minWidth: "25vw" }}>
            <button type="submit" style={{ width: "100%" }}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
