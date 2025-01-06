"use client";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  className,
  href,
  onClick,
  ...props
}: PrimaryButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <Button
          borderRadius="5rem"
          className={`relative z-10 bg-black text-white ${className}`}
          {...props}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      borderRadius="5rem"
      className={`relative z-10 bg-black text-white ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}
