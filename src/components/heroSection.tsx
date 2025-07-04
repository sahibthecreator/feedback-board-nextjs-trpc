"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
}

export default function HeroSection({ title }: HeroProps) {
  return (
    <div className="h-80 bg-background relative overflow-hidden flex flex-col">
      <Image
        src="/images/hero-illustration.svg"
        alt="Buildscout Hero Illustration"
        className="w-[109rem] h-[27rem] max-w-none absolute left-1/2 -translate-x-1/2 top-16 opacity-60"
        width={1744}
        height={400}
        priority
      />
      <h1 className="text-5xl text-white font-bold text-center relative z-10 my-auto">
        {title}
      </h1>
    </div>
  );
}
