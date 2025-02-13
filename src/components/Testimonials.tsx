"use client";
import InfiniteMovingCards from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full relative flex flex-col items-center bg-dot-white/15">
      <div className="w-full max-w-screen-2xl relative flex flex-col items-center px-5 lg:py-48 md:py-40 py-32 xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 gap-10">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-white/40 to-white xl:text-6xl lg:text-5xl md:text-4xl xs:text-3xl text-2xl font-bold tracking-tight">
          Hear our Harmony: Voices of Success
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
