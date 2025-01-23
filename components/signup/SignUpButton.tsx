"use client";

import { redirect } from "next/navigation";

export default function SignUpButton() {
  return (
    <button
      onClick={() => {
        redirect("/signup");
      }}
    >
      회원가입
    </button>
  );
}
