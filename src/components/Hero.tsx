"use client";
import Spotlight from "./ui/spotlight-effect";
import BackgroundLines from "./ui/background-lines";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <section className="w-full h-dvh relative flex flex-col items-center">
      <Spotlight className="-top-56 -left-40" fill="white" />
      <BackgroundLines className="flex items-center justify-center size-full flex-col px-5 lg:gap-10 gap-8 lg:py-24 md:py-20 py-16">
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white xl:text-7xl lg:text-6xl md:text-5xl xs:text-4xl text-3xl font-bold tracking-tight relative z-10">
          Master the art of music
        </h1>
        <p className="md:max-w-xl max-w-lg text-base md:text-lg text-white/60 text-center relative z-10 pb-2">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <PrimaryButton href="#courses">Explore Courses</PrimaryButton>
      </BackgroundLines>
    </section>
  );
};

export default Hero;
