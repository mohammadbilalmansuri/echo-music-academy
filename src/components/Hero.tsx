"use client";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section className="w-full h-dvh relative flex flex-col items-center">
      <Spotlight className="-left-40 -top-56" fill="white" />
      <BackgroundLines className="flex items-center justify-center size-full flex-col px-5 gap-10 py-20">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/20 to-white text-2xl md:text-4xl lg:text-7xl font-bold tracking-tight relative z-10">
          Master the art of music
        </h2>
        <p className="max-w-xl text-base md:text-lg text-white/60 text-center relative z-10">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <PrimaryButton href="/courses">Explore Courses</PrimaryButton>
      </BackgroundLines>
    </section>
  );
}
