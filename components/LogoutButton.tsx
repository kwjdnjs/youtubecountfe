"use client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.clear();
        location.reload();
      }}
    >
      로그아웃
    </button>
  );
}
