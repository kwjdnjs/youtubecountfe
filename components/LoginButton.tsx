"use client";

import { redirect } from "next/navigation";

export default function LoginButton() {
  return (
    <button
      onClick={() => {
        redirect("/login");
      }}
    >
      로그인
    </button>
  );
}
