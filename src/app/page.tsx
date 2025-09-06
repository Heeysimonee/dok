import Image from "next/image";
import dok_logo from "@/../public/DOK.svg";
import Link from "next/link";
import { Landing } from "./_components/Landing";
import { Features } from "./_components/Features";
import prisma from "@/lib/prisma";

const navLinks = [
  { name: "Features", href: "#features" },
  // { name: "About us", href: "#about-us" },
  // { name: "Demo", href: "#demo" },
];
export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between scroll-smooth text-stone-800">
      <header className=" h-16 w-full px-10 flex items-center justify-between gap-10 font-light text-lg sticky top-0 border-b bg-white/30 backdrop-blur-md">
        <div className="w-1/6">
          <Image src={dok_logo} alt="logo" height={40} width={40} />
        </div>
        <div className=" w-4/6 flex items-center justify-center gap-2  grow">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 hover:border-b hover:border-slate-900 hover:font-semibold transition-all"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="w-1/6 flex items-center gap-5 justify-end font-light">
          <Link
            href={"/login"}
            className="bg-primary py-2 px-4 rounded-md hover:bg-primary/90 text-white"
          >
            Login
          </Link>
          <Link
            className="bg-white py-2 px-4 rounded-md hover:bg-accent transition-all"
            href="/sign-up"
          >
            Get DOK free
          </Link>
        </div>
      </header>
      <Landing />
      <Features />
    </main>
  );
}
