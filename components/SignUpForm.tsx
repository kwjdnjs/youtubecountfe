"use client";

import { post } from "@/utils/httpRequest";
import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { redirect } from "next/navigation";

export default function SignUpForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = async (e: any) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { resData, error } = await post("v1/auth/signup", values);
    if (resData) {
      console.log(resData);
      redirect("/signupsuccess");
    } else {
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
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={values.email}
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
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
