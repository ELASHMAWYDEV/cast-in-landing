"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Download } from "lucide-react";
import { AppStoreButton } from "@/components/app-store-button";
import { PlayStoreButton } from "@/components/play-store-button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadSheetOpen, setDownloadSheetOpen] = useState(false);

  // Close sheets when user presses escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDownloadSheetOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when sheets are open
  useEffect(() => {
    if (downloadSheetOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [downloadSheetOpen, mobileMenuOpen]);

  const navItems = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-white/10"
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-gradient-to-tr from-violet-600 to-purple-600 p-1.5 shadow-md shadow-purple-500/20"
            >
              <Image
                src="/castin-logo.png"
                alt="CastIn Logo"
                width={30}
                height={30}
                className="text-white rounded-lg"
              />
            </motion.div>
            <motion.span
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600"
              whileHover={{ scale: 1.03 }}
            >
              CastIn
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-3/4 group-hover:left-1/4 -translate-x-1/2 transition-all duration-300" />
                  </Button>
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ModeToggle />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                onClick={() => setDownloadSheetOpen(true)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center z-10">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`absolute inset-0 h-screen bg-background/95 backdrop-blur-md z-0 md:hidden flex flex-col items-center justify-center ${
              mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: mobileMenuOpen ? 0 : 20,
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: mobileMenuOpen ? 0.1 : 0,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" className="text-lg font-medium">
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: mobileMenuOpen ? 0 : 20,
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.2 : 0 }}
                className="mt-4"
              >
                <Button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDownloadSheetOpen(true);
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Download App Sheet */}
      <AnimatePresence>
        {downloadSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setDownloadSheetOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-gray-900 to-black border-t border-white/10 rounded-t-3xl p-6 pt-4 z-50 shadow-2xl"
            >
              {/* Drag Handle */}
              <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />

              {/* Close Button */}
              <button
                onClick={() => setDownloadSheetOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                aria-label="Close download sheet"
              >
                <X size={24} />
              </button>

              <div className="max-w-lg mx-auto">
                <div className="mb-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-3">
                    Get CastIn on Your Device
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    Download now and join thousands of models and casting
                    directors already using CastIn to revolutionize their
                    careers.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {[
                    "Create stunning digital portfolios",
                    "Connect with industry professionals",
                    "Apply to exclusive casting opportunities",
                    "Message directly with casting directors",
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mr-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <AppStoreButton />
                  <PlayStoreButton />
                </div>

                {/* Bottom Note */}
                <div className="text-center text-white/50 text-xs flex justify-center items-center space-x-1">
                  <span>Continue to</span>
                  <Link
                    href="/"
                    className="text-purple-400 hover:text-purple-300 hover:underline flex items-center"
                    onClick={() => setDownloadSheetOpen(false)}
                  >
                    explore our website <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
