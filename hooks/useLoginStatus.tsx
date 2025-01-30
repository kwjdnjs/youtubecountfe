import { useEffect } from "react";
import useUsername from "./useUsername";

export default function useLoginStatus() {
  const username = useUsername();

  useEffect(() => {
    console.log("현재 username 값:", username);
  }, [username]);

  return Boolean(username);
}
