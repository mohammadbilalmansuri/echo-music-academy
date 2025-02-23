"use client";
import { cn } from "@/utils/cn";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { createNoise3D } from "simplex-noise";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = useMemo(() => createNoise3D(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  const animationIdRef = useRef<number | null>(null);

  const getSpeed = useCallback(
    (): number => (speed === "slow" ? 0.001 : 0.002),
    [speed]
  );

  const waveColors = useMemo(
    () => colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors]
  );

  const drawWave = useCallback(
    (n: number): void => {
      if (!ctxRef.current) return;
      ntRef.current += getSpeed();

      for (let i = 0; i < n; i++) {
        ctxRef.current.beginPath();
        ctxRef.current.lineWidth = waveWidth || 50;
        ctxRef.current.strokeStyle = waveColors[i % waveColors.length];

        for (let x = 0; x < wRef.current; x += 5) {
          const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
          ctxRef.current.lineTo(x, y + hRef.current * 0.5);
        }

        ctxRef.current.stroke();
        ctxRef.current.closePath();
      }
    },
    [getSpeed, waveWidth, waveColors, noise]
  );

  const render = useCallback((): void => {
    if (!ctxRef.current) return;
    ctxRef.current.fillStyle = backgroundFill || "black";
    ctxRef.current.globalAlpha = waveOpacity || 0.5;
    ctxRef.current.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;
    wRef.current = ctx.canvas.width = window.innerWidth;
    hRef.current = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    window.onresize = () => {
      if (ctxRef.current) {
        wRef.current = ctxRef.current.canvas.width = window.innerWidth;
        hRef.current = ctxRef.current.canvas.height = window.innerHeight;
        ctxRef.current.filter = `blur(${blur}px)`;
      }
    };

    render();
  }, [blur, render]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-dvh flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{ ...(isSafari ? { filter: `blur(${blur}px)` } : {}) }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;
