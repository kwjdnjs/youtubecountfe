"use client";

export default function Username() {
  let username = null;

  try {
    username = localStorage.getItem("username");
  } catch (e) {}

  return <span>{username} 님</span>;
}
