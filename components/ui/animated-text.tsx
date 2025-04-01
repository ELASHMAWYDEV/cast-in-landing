"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: number[];
  highlightClassName?: string;
  staggerChildren?: number;
  delayChildren?: number;
  withGradient?: boolean;
  withUnderline?: boolean;
  animateOnce?: boolean;
}

export const AnimatedText = ({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-primary font-bold",
  staggerChildren = 0.08,
  delayChildren = 0.03,
  withGradient = false,
  withUnderline = false,
  animateOnce = true,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: animateOnce, margin: "-50px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!animateOnce) {
      controls.start("hidden");
    }
  }, [controls, isInView, animateOnce]);

  // Ensure text is visible immediately if not in view
  useEffect(() => {
    // Set initial state to visible if not in view and animateOnce is true
    if (!isInView && animateOnce) {
      controls.set("visible");
    }
  }, [controls, isInView, animateOnce]);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delayChildren * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
      },
    },
  };

  const baseClassName = cn(
    className,
    withGradient &&
      "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
  );

  // Force immediate rendering of text if animation fails
  if (!words || words.length === 0) {
    return <div className={baseClassName}>{text}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={baseClassName}
      variants={container}
      initial="visible"
      animate={controls}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(index);

        return (
          <motion.span
            variants={child}
            style={{
              display: "inline-block",
              position: "relative",
            }}
            key={index}
            className={isHighlighted ? highlightClassName : ""}
          >
            {word}{" "}
            {isHighlighted && withUnderline && (
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/70 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
