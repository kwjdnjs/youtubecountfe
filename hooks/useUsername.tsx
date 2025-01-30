import { useEffect, useState } from "react";

export default function useUsername() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    try {
      setUsername(localStorage.getItem("username"));
    } catch (e) {}
  }, []);

  return username;
}
