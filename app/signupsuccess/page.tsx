"use client";

import { redirect } from "next/navigation";

export default function Page() {
  return (
    <div>
      <div>성공적으로 가입되었습니다.</div>
      <button
        onClick={() => {
          redirect("/login");
        }}
      >
        로그인으로
      </button>
    </div>
  );
}
