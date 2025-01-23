"use client";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginBtnWrapper() {
  const username = localStorage.getItem("username");

  if (username) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
