"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Piano for Beginners",
    description:
      "Start your musical journey with foundational piano skills taught by expert instructors.",
    price: 109.99,
    instructor: "Jane Smith",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048427/musicacademy/piano.webp",
  },
  {
    id: 2,
    title: "Guitar Essentials",
    description:
      "Learn the basics of guitar playing, including chords, strumming, and simple songs.",
    price: 99.99,
    instructor: "John Doe",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048426/musicacademy/guitar.webp",
  },
  {
    id: 3,
    title: "Violin Mastery",
    description:
      "Master the violin with advanced techniques and repertoire for intermediate players.",
    price: 129.99,
    instructor: "Emily Davis",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048427/musicacademy/violin.webp",
  },
  {
    id: 4,
    title: "Drumming Fundamentals",
    description:
      "Develop your rhythm and timing with comprehensive drum lessons for all levels.",
    price: 89.99,
    instructor: "Michael Brown",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048426/musicacademy/drum.webp",
  },
  {
    id: 5,
    title: "Flute Techniques",
    description:
      "Enhance your flute playing skills with lessons on breath control and articulation.",
    price: 119.99,
    instructor: "Sophia Wilson",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048426/musicacademy/flute.webp",
  },
  {
    id: 6,
    title: "Clarinet Essentials",
    description:
      "Learn the fundamentals of clarinet playing, including tone production and fingerings.",
    price: 89.99,
    instructor: "Liam Anderson",
    image:
      "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1736048426/musicacademy/clarinet.webp",
  },
];

export default function FeaturedCourses() {
  return (
    <section
      id="courses"
      className="w-full relative flex flex-col items-center"
    >
      <div className="w-full max-w-screen-2xl relative flex flex-col items-center gap-20 px-4 py-24">
        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl text-white/60">Featured Courses</p>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white text-xl md:text-3xl lg:text-6xl font-bold tracking-tight">
            Learn with the best
          </h2>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 justify-center">
          {courses.map((course, index) => (
            <BackgroundGradient
              key={index}
              className="size-full flex flex-col items-start gap-5 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden p-8"
            >
              <p className="text-white bg-black/75 absolute top-10 right-10 rounded-lg px-3 py-2">
                {course.price} $
              </p>
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="rounded-xl aspect-video object-cover object-center"
                style={{ width: "100%", height: "auto" }}
              />
              <h4 className="text-xl font-medium text-white">{course.title}</h4>
              <p className="-mt-2 text-white/60">{course.description}</p>
              <p className="-mt-2 text-white/60 border-b border-b-white/30">
                Instructor: {course.instructor}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
