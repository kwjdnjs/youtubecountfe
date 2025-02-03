import Link from "next/link";
import LoginBtnWrapper from "./login/LoginBtnWrapper";
import Username from "./Username";

export default function NavBar() {
  return (
    <nav className="bg-white flex justify-between items-center p-4 border-b shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="text-blue-500 hover:underline cursor-pointer">
            홈
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Username />
        <LoginBtnWrapper />
      </div>
    </nav>
  );
}
