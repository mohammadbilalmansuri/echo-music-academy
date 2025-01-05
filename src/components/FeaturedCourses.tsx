"use client";
import Link from "next/link";
import courseData from "@/courses.json";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="w-full relative flex flex-col items-center">
      <div className="w-full max-w-screen-2xl relative flex flex-col items-center gap-16 px-4 py-20">
        <div className="flex flex-col items-center gap-5">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/20 to-white text-xl md:text-3xl lg:text-6xl font-bold tracking-tight">
            Featured Courses
          </h2>
          <p className="text-2xl text-white/60">Learn with the best</p>
        </div>
        <div className="w-full grid grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course: Course, index) => (
            <BackgroundGradient
              key={index}
              className="size-full flex flex-col items-center text-center gap-5 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden p-8"
            >
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
              <Link href={`/courses/${course.slug}`}>Learn More</Link>
            </BackgroundGradient>
          ))}
        </div>
        <PrimaryButton>View All Courses</PrimaryButton>
      </div>
    </section>
  );
}
