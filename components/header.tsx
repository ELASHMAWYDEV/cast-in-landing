"use client";

import { Camera } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="gradient-bg rounded-lg p-2">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">Cast In</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/privacy">
            <Button variant="ghost">Privacy</Button>
          </Link>
          <Link href="/terms">
            <Button variant="ghost">Terms</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}