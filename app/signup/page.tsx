"use client";

import { useEffect, useState } from "react";

let TOKEN_TYPE = null;
let ACCESS_TOKEN = null;

/** CREATE CUSTOM AXIOS INSTANCE */
function post(url, data) {
  fetch(`http://localhost:8080${url}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
const signUp = async ({ username, password }) => {
  const data = { username: username, password: password };
  const response = await post(`/api/v1/auth/signup`, data);
  return response.data;
};

export default function SignUpPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    TOKEN_TYPE = localStorage.getItem("tokenType");
    ACCESS_TOKEN = localStorage.getItem("accessToken");
  }, []);

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUp(values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
