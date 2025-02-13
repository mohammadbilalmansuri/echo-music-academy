"use client";
import BackgroundGradient from "./ui/background-gradient";
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

const FeaturedCourses = () => {
  return (
    <section
      id="courses"
      className="w-full relative flex flex-col items-center"
    >
      <div className="w-full max-w-screen-2xl relative flex flex-col items-center xl:px-8 lg:px-7 md:px-6 sm:px-5 px-4 lg:py-24 md:py-20 py-16 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10">
        <div className="flex flex-col items-center md:gap-5 sm:gap-4 gap-3">
          <p className="md:text-2xl text-xl text-white/60">Featured Courses</p>
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white xl:text-7xl lg:text-6xl md:text-5xl xs:text-4xl text-3xl font-bold tracking-tight">
            Learn with the best
          </h2>
        </div>

        <div className="w-full grid lg:grid-cols-3 xs:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 sm:gap-5 gap-4 justify-center">
          {courses.map((course, index) => (
            <BackgroundGradient
              key={index}
              className="size-full flex flex-col items-start sm:gap-5 gap-4 rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden xl:p-8 lg:p-7 md:p-6 sm:p-5 p-4 relative"
            >
              <p className="text-white bg-black/75 absolute lg:top-10 lg:right-10 xs:top-8 xs:right-8 right-6 top-6 rounded-lg px-3 py-2">
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
              <h4 className="md:text-xl text-lg font-medium text-white">
                {course.title}
              </h4>
              <p className="-mt-2 md:text-base text-sm text-white/60">
                {course.description}
              </p>
              <p className="-mt-2 md:text-base text-sm text-white/60 border-b border-b-white/30">
                Instructor: {course.instructor}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
