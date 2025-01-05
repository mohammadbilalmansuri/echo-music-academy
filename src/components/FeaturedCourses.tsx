"use client";
import Link from "next/link";
import courseData from "@/courses.json";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  instructor: string;
}

export default function FeaturedCourses() {
  return (
    <section
      id="courses"
      className="w-full relative flex flex-col items-center"
    >
      <div className="w-full max-w-screen-2xl relative flex flex-col items-center gap-20 px-4 py-28">
        <div className="flex flex-col items-center gap-5">
          <p className="text-2xl text-white/60">Featured Courses</p>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white text-xl md:text-3xl lg:text-6xl font-bold tracking-tight">
            Learn with the best
          </h2>
        </div>

        <div className="w-full grid grid-cols-3 gap-10 justify-center">
          {courseData.map((course: Course, index) => (
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
