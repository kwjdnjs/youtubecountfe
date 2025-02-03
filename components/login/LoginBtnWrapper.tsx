"use client";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import useAuth from "@/hooks/useAuth";

export default function LoginBtnWrapper() {
  const [isLoggedIn, isLoading] = useAuth();

  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
