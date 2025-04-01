"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  className?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  withBadge?: string;
  withGradientBorder?: boolean;
  withGradientBackground?: boolean;
  withHoverGlow?: boolean;
}

export function AnimatedFeatureCard({
  title,
  description,
  className,
  icon: Icon,
  iconClassName,
  withBadge,
  withGradientBorder = false,
  withGradientBackground = false,
  withHoverGlow = false,
}: AnimatedFeatureCardProps) {
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
      whileHover={{
        y: -5,
        scale: withHoverGlow ? 1.02 : 1.01,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "p-6 rounded-2xl bg-card border shadow-lg transition-all duration-300 relative overflow-hidden",
        withGradientBorder &&
          "border-transparent before:absolute before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-primary/50 before:to-blue-500/50 before:-z-10 before:content-['']",
        withGradientBackground &&
          "bg-gradient-to-br from-primary/5 to-blue-500/5",
        withHoverGlow && "hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {withBadge && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {withBadge}
          </span>
        </div>
      )}

      <div className="flex flex-col space-y-4">
        {Icon && (
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2",
              withGradientBackground &&
                "bg-gradient-to-br from-primary/10 to-blue-500/10",
              iconClassName
            )}
          >
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <motion.div
          className="w-10 h-0.5 bg-primary/40 rounded-full mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />
      </div>

      {withGradientBackground && (
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl"></div>
      )}
    </motion.div>
  );
}
