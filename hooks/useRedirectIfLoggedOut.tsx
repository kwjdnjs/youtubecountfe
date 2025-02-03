import { useEffect } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

export default function useRedirectIfLoggedOut() {
  const [isLoggedIn, isLoading] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      alert("로그인이 필요합니다!");
      router.push("/");
    }
  }, [isLoggedIn, isLoading, router]);
}
