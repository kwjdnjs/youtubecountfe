import LoginBtnWrapper from "./login/LoginBtnWrapper";
import Username from "./Username";

export default function NavBar() {
  return (
    <nav className="bg-white flex justify-end items-center p-4 border-b shadow-md">
      <div className="flex items-center gap-4">
        <Username />
        <LoginBtnWrapper />
      </div>
    </nav>
  );
}
