"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <header
      className={cn(
        "w-full flex flex-col justify-center items-center fixed top-0 z-50 p-5",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#courses">Piano for Beginners</HoveredLink>
            <HoveredLink href="#courses">Guitar Essentials</HoveredLink>
            <HoveredLink href="#courses">Violin Mastery</HoveredLink>
            <HoveredLink href="#courses">Drumming Fundamentals</HoveredLink>
            <HoveredLink href="#courses">Flute Techniques</HoveredLink>
            <HoveredLink href="#courses">Clarinet Essentials</HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="#contact-us">Contact Us</HoveredLink>
      </Menu>
    </header>
  );
}
