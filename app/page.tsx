import LogoutButton from "@/components/LogoutButton";
import Username from "@/components/Username";

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-500">Hello</h1>
      <Username />
      <LogoutButton />
    </div>
  );
}
