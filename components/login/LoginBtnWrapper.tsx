"use client";

import useLoginStatus from "@/hooks/useLoginStatus";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginBtnWrapper() {
  const isLoggedIn = useLoginStatus();

  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}
