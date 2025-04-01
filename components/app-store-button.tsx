"use client";

import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppStoreButtonProps {
  variant?: "default" | "secondary" | "ghost";
  className?: string;
}

export function AppStoreButton({
  variant = "secondary",
  className,
}: AppStoreButtonProps) {
  return (
    <Button
      variant={variant === "default" ? "default" : "secondary"}
      size="lg"
      className={cn(
        "w-full sm:w-auto relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800 to-black text-white hover:from-zinc-700 hover:to-zinc-900 transition-all",
        "px-5 py-2.5 h-auto font-medium border-0 shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-center space-x-2">
        <Apple className="h-6 w-6" />
        <div className="flex flex-col items-start">
          <span className="text-xs font-normal">Download on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </div>
    </Button>
  );
}
