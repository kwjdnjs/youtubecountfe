import LoginForm from "@/components/login/LoginForm";
import SignUpButton from "@/components/signup/SignUpButton";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <LoginForm />
        <SignUpButton />
      </div>
    </div>
  );
}
