"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

interface PlayStoreButtonProps {
  variant?: "default" | "secondary" | "ghost";
}

export function PlayStoreButton({ variant = "secondary" }: PlayStoreButtonProps) {
  return (
    <Button variant={variant} size="lg" className="w-full sm:w-auto">
      <PlayCircle className="mr-2 h-5 w-5" />
      Get it on Google Play
    </Button>
  );
}