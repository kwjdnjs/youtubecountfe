"use client";

import useUsername from "@/hooks/useUsername";

export default function Username() {
  const username = useUsername();

  return <span>{username} 님</span>;
}
