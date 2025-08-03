"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Reveal from "../Reveal";

type Props = {
  name: string;
  icon: string;
};

const Skill = ({ name, icon }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const clientRect = ref.current.getBoundingClientRect();

    xDistance.set(e.x - clientRect.x);
    yDistance.set(e.y - clientRect.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Reveal duration={1.5}>
      <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] ">
        <motion.div
          ref={ref}
          className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
          style={{
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        ></motion.div>
        <img src={icon} alt={`${name} icon`} />
        <p className="text-lg">{name}</p>
      </div>
    </Reveal>
  );
};

export default Skill;
