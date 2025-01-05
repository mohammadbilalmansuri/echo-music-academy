import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <div className="h-screen"></div>
    </main>
  );
}
