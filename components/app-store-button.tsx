"use client";

import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

interface AppStoreButtonProps {
  variant?: "default" | "secondary" | "ghost";
}

export function AppStoreButton({ variant = "secondary" }: AppStoreButtonProps) {
  return (
    <Button variant={variant} size="lg" className="w-full sm:w-auto">
      <Apple className="mr-2 h-5 w-5" />
      Download on App Store
    </Button>
  );
}