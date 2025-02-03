import { useEffect, useState } from "react";

export default function useUsername() {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    try {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);
    } catch (e) {
      console.error("로컬 스토리지 접근 오류:", e);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  }, []);

  return [username, isLoading]; // isLoading도 반환
}
