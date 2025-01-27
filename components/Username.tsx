"use client";

export default function Username() {
  const username = localStorage.getItem("username");

  return <span>{username} 님</span>;
}
