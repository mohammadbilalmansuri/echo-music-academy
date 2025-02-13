"use client";
import HoverEffect from "./ui/card-hover-effect";

const webinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    link: "#",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    link: "#",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    link: "#",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    link: "#",
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    link: "#",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    link: "#",
  },
];

export default function Webinars() {
  return (
    <section className="w-full relative flex flex-col items-center">
      <div className="w-full max-w-screen-2xl relative lg:pt-48 md:pt-40 pt-32 lg:pb-24 md:pb-20 pb-16 flex flex-col items-center lg:gap-16 md:gap-14 sm:gap-12 gap-10 sm:px-2.5 px-2">
        <div className="flex flex-col items-center lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-white/60">
            Featured Webinars
          </p>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl text-2xl font-bold tracking-tight">
            Enhance Your Musical Journey
          </h2>
        </div>
        <HoverEffect items={webinars} />
      </div>
    </section>
  );
}
