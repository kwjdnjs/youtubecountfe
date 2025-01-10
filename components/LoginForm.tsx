"use client";

import { post } from "@/utils/httpRequest";
import { redirect } from "next/navigation";
import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

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

    const { resData, error } = await post("v1/auth/login", values);

    if (resData) {
      saveTokenAndUsername(resData);
      redirect("/");
    } else {
      console.log(error);
      setErr(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <ModalWrapper error={err} />
      <div className="align-self-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ minWidth: "25vw" }}>
            <label htmlFor="username">이름</label>
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
