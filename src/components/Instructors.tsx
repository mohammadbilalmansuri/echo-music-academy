"use client";
import AnimatedTooltip from "./ui/animated-tooltip";
import WavyBackground from "./ui/wavy-background";

const instructors = [
  {
    name: "John Smith",
    designation: "Piano Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272292/echomusicacademy/john-smith.webp",
  },
  {
    name: "John Doe",
    designation: "Guitar Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272291/echomusicacademy/john-doe.webp",
  },
  {
    name: "Emily Davis",
    designation: "Violin Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272291/echomusicacademy/emily-davis.webp",
  },
  {
    name: "Michael Brown",
    designation: "Drum Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272292/echomusicacademy/mitchel-brown.webp",
  },
  {
    name: "Sophia Wilson",
    designation: "Flute Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272292/echomusicacademy/sophia-wilson.webp",
  },
  {
    name: "Liam Anderson",
    designation: "Clarinet Expert",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1740272292/echomusicacademy/liam-anderson.webp",
  },
];

export default function Instructors() {
  return (
    <section className="w-full relative overflow-hidden">
      <WavyBackground className="w-full relative flex flex-col items-center justify-center md:gap-10 gap-8 px-5 lg:py-24 md:py-20 py-16">
        <div className="flex flex-col items-center lg:gap-5 sm:gap-4 gap-3 text-center">
          <h2 className="bg-clip-text text-transparent text-center bg-white xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl text-2xl font-bold tracking-tight">
            Meet Our Instructors
          </h2>
          <p className="lg:text-2xl md:text-xl text-lg lg:max-w-lg sm:max-w-sm max-w-xs leading-snug">
            Discover the talented professionals who will guide your musical
            journey
          </p>
        </div>

        <div className="flex items-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </section>
  );
}
