"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "w-full relative grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="relative group h-full w-full sm:p-2.5 p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-white/10 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="sm:p-8 p-5 border border-white/20 hover:border-white/30 rounded-2xl transition-all duration-200 group-hover:border-white/60 size-full bg-black relative z-20 flex flex-col md:gap-5 sm:gap-4 xs:gap-3 gap-2">
            <h3 className="md:text-xl text-lg font-medium text-white/80">
              {item.title}
            </h3>
            <p className="text-white/60">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HoverEffect;
