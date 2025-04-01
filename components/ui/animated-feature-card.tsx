"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function AnimatedFeatureCard({ title, description, className }: AnimatedFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "p-6 rounded-2xl bg-card border shadow-lg transition-colors",
        className
      )}
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}