"use client";
import { Button } from "@/components/ui/button";
import { AppStoreButton } from "@/components/app-store-button";
import { PlayStoreButton } from "@/components/play-store-button";
import { Footer } from "@/components/footer";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedFeatureCard } from "@/components/ui/animated-feature-card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/25" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <AnimatedText
                  text="The Social Network for the Casting Industry"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="max-w-[600px] text-white/90 md:text-xl"
                >
                  Connect with top casting directors, collaborate with brands, and showcase your portfolio. Join the fastest-growing social platform designed exclusively for models and industry professionals.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <AppStoreButton />
                <PlayStoreButton />
              </motion.div>
            </div>
            <div className="relative mx-auto lg:mx-0">
              {/* Main App Screenshot - Profile View */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                className="relative aspect-[9/16] w-[280px] mx-auto"
              >
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                  alt="App Profile Screenshot"
                  className="rounded-[2rem] shadow-2xl"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
              {/* Secondary Screenshots */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -left-24 top-20 aspect-[9/16] w-[240px] -rotate-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
                  alt="App Feed Screenshot"
                  className="rounded-[2rem] shadow-xl"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-24 top-32 aspect-[9/16] w-[240px] rotate-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"
                  alt="App Casting Calls Screenshot"
                  className="rounded-[2rem] shadow-xl"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Everything you need to succeed
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-3 items-start">
            <AnimatedFeatureCard
              title="Professional Portfolios"
              description="Create stunning digital portfolios with your best work, stats, and experience. Stand out in the industry."
            />
            <AnimatedFeatureCard
              title="Casting Calls"
              description="Browse and apply to exclusive casting opportunities from top brands and directors worldwide."
            />
            <AnimatedFeatureCard
              title="Industry Network"
              description="Connect with fellow models, photographers, agencies, and brands. Build your professional network."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}