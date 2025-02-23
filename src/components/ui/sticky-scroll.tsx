"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsWideScreen(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) =>
      setIsWideScreen(event.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isWideScreen) return;
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = useMemo(() => {
    return [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
  }, []);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <div
      className="scrollbar-hidden w-full relative flex flex-col items-center xl:h-[30rem] lg:h-[26rem] overflow-y-scroll"
      ref={ref}
    >
      <div className="w-full max-w-screen-2xl flex justify-between gap-20 px-5">
        <div className="relative lg:w-1/2 w-full flex flex-col items-start lg:gap-0 md:gap-12 gap-8">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="xl:min-h-[30rem] lg:min-h-[26rem] flex flex-col justify-center lg:gap-10 md:gap-6 gap-4"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isWideScreen ? (activeCard === index ? 1 : 0.3) : 1,
                }}
                className="leading-tight xl:text-4xl lg:text-3xl md:text-2xl xs:text-xl text-lg font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: isWideScreen ? (activeCard === index ? 1 : 0.3) : 1,
                }}
                className="md:text-lg text-white/60"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>

        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block w-1/2 xl:h-[30rem] h-[26rem] rounded-2xl bg-white sticky top-0 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
};

export default StickyScroll;
