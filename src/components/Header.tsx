"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/NavbarMenu";
import { cn } from "@/utils/cn";

function Header({ className }: { className?: string }) {
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
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>

        <HoveredLink href="/contact">Contact Us</HoveredLink>
      </Menu>
    </header>
  );
}

export default Header;
