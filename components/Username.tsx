"use client";

export default function Username() {
  const username = localStorage.getItem("username");

  return <div>{username}</div>;
}
