import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <Hero />
      <FeaturedCourses />
    </main>
  );
}
