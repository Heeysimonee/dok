import Image from "next/image";
import stars from "@/../public/stars.svg";
import { Button } from "@/components/ui/button";

export const Landing = () => {
  return (
    <section className="h-[calc(100dvh-64px)] w-full flex items-center justify-center px-10 lg:px-20">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-6xl font-thin text-left">
          Where ideas take shape
          <br />
          <span className="font-italiana text-9xl"> perfectly.</span>
        </h1>
        <p className="w-2/3 font-semibold text-lg">
          It&apos;s not just an editor. It&apos;s your digital studio. Where
          every word finds its{" "}
          <span className="font-italiana text-indigo-600">place</span>, every
          section its{" "}
          <span className="font-italiana text-indigo-600">rhythm</span>, every
          variable its{" "}
          <span className="font-italiana text-indigo-600">elegance</span>.
        </p>

        <Button>Get DOK for free</Button>
      </div>
      <div>
        <Image src={stars} alt="stars illustration" height={500} />
      </div>
    </section>
  );
};
