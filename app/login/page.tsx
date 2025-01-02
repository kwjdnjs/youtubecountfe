"use client";

import { useState } from "react";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

/** CREATE CUSTOM AXIOS INSTANCE */
function post(url, data) {
  return fetch(`http://localhost:8080${url}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

const login = async ({ username, password }) => {
  const data = { username: username, password: password };
  const response = await post(`/api/v1/auth/login`, data);
  const json = await response.json();
  console.log(json);
  return json;
};

export default function Page() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(values)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("tokenType", response["tokenType"]);
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("refreshToken", response["refreshToken"]);
        window.location.href = `/home`;
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
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
