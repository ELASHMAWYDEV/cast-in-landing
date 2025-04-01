"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayStoreButtonProps {
  variant?: "default" | "secondary" | "ghost";
  className?: string;
}

export function PlayStoreButton({
  variant = "secondary",
  className,
}: PlayStoreButtonProps) {
  return (
    <Button
      variant={variant === "default" ? "default" : "secondary"}
      size="lg"
      className={cn(
        "w-full sm:w-auto relative overflow-hidden rounded-xl text-white transition-all",
        "bg-gradient-to-r from-[#02afff] via-[#0277fe] to-[#0156dc] hover:brightness-110",
        "px-5 py-2.5 h-auto font-medium border-0 shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-2">
        <PlayCircle className="h-6 w-6" />
        <div className="flex flex-col items-start">
          <span className="text-xs font-normal">Get it on</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      </div>
    </Button>
  );
}
