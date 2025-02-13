"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    name: "John Smith",
    designation: "Piano Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429425/echo/john-smith.webp",
  },
  {
    name: "John Doe",
    designation: "Guitar Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429425/echo/john-doe.webp",
  },
  {
    name: "Emily Davis",
    designation: "Violin Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429425/echo/emily-davis.webp",
  },
  {
    name: "Michael Brown",
    designation: "Drum Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429425/echo/mitchel-brown.webp",
  },
  {
    name: "Sophia Wilson",
    designation: "Flute Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429427/echo/sophia-wilson.webp",
  },
  {
    name: "Liam Anderson",
    designation: "Clarinet Expert",
    image:
      "https://res.cloudinary.com/samaxy/image/upload/v1739429425/echo/liam-anderson.webp",
  },
];

export default function Instructors() {
  return (
    <section className="w-full relative overflow-hidden">
      <WavyBackground className="w-full relative flex flex-col items-center justify-center gap-10 px-5 py-24">
        <div className="flex flex-col items-center gap-5">
          <h2 className="bg-clip-text text-transparent text-center bg-white text-xl md:text-3xl lg:text-6xl font-bold tracking-tight">
            Meet Our Instructors
          </h2>
          <p className="text-2xl">
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
