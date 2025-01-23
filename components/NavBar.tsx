import LoginBtnWrapper from "./login/LoginBtnWrapper";
import Username from "./Username";

export default function NavBar() {
  return (
    <nav>
      <Username />
      <LoginBtnWrapper />
    </nav>
  );
}
