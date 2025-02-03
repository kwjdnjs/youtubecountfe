import { useEffect } from "react";
import useUsername from "./useUsername";

export default function useAuth() {
  const [username, isLoading] = useUsername(); // 수정된 useUsername 사용

  return [Boolean(username), isLoading];
}
