import Image from "next/image";
import { LoginForm } from "./_components/LoginForm";
import login from "@/../public/login.svg";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-dvh w-full grid grid-cols-2 grid-rows-1 gap-4 text-stone-800">
      <Link
        href="/"
        className="absolute bottom-5 right-5 bg-accent hover:bg-stone-800 hover:text-accent transition-all p-2 rounded-full"
      >
        <ArrowLeft />
      </Link>

      {/* Left column */}
      <div className="h-full  flex items-center justify-center p-10">
        <Image src={login} alt="girl looking at the start" />
      </div>

      {/* Right column */}
      <div className="h-full flex flex-col items-center justify-center gap-5 bg-indigo-600">
        <h1 className="text-3xl font-bold text-accent">Welcome back!</h1>
        <LoginForm />
      </div>
    </div>
  );
}
