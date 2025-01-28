"use client";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginBtnWrapper() {
  let username = null;
  try {
    username = localStorage.getItem("username");
  } catch (e) {}

  if (username) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
