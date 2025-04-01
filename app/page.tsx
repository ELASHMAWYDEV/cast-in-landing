"use client";
import { Button } from "@/components/ui/button";
import { AppStoreButton } from "@/components/app-store-button";
import { PlayStoreButton } from "@/components/play-store-button";
import { Footer } from "@/components/footer";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { AnimatedFeatureCard } from "@/components/ui/animated-feature-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Added for the screenshot carousel
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const intervalTime = 3000; // Time between screenshot changes (3 seconds)

  // Auto-rotate screenshots
  useEffect(() => {
    if (!autoRotate) return;

    const intervalId = setInterval(() => {
      setActiveScreenshot((current) => (current + 1) % screenshots.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [autoRotate]);

  const screenshots = [
    {
      src: "/profile-screenshot.png",
      alt: "Profile Screenshot",
      label: "Profile View",
    },
    {
      src: "/home-screenshot.png",
      alt: "Feed Screenshot",
      label: "Discover Feed",
    },
    {
      src: "/chat-screenshot.png",
      alt: "Casting Messages Screenshot",
      label: "Casting Messages",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section with BackgroundLines Effect */}
      <BackgroundLines
        className="bg-gradient-to-br from-violet-950 via-indigo-900 to-purple-900 min-h-screen flex items-center justify-center relative overflow-visible pt-20 sm:pt-24 md:pt-16 pb-12 sm:py-0"
        svgOptions={{ duration: 15 }}
      >
        {/* Scroll-based effects */}
        <div
          ref={targetRef}
          className="absolute inset-0 w-full h-full z-0"
        ></div>
        <motion.div
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-20 z-0"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0]),
            scale,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="container pt-72 px-4 md:px-6 md:pt-0 relative z-10">
          <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            {/* Left side: Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-white order-1 lg:order-1 mt-8 lg:mt-0">
              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <motion.span
                    className="text-xs sm:text-sm font-medium text-white flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                    The Future of Casting Is Here
                  </motion.span>
                </div>

                <div className="mb-2 sm:mb-4">
                  <ContainerTextFlip
                    words={[
                      "Elevate Your Casting Experience",
                      "Connect with Top Talent",
                      "Showcase Your Portfolio",
                      "Find Perfect Opportunities",
                    ]}
                    className="text-left text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl/none"
                    textClassName="bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white/90"
                    interval={4000}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="max-w-[600px] text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                >
                  Connect with top casting directors, collaborate with brands,
                  and showcase your portfolio in our revolutionary platform
                  designed exclusively for the modern casting industry.
                </motion.p>
              </motion.div>

              {/* Stats - Now presented as badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {[
                  { value: "10K+", label: "Models" },
                  { value: "500+", label: "Casting Directors" },
                  { value: "25,000+", label: "Casting Messages" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center"
                  >
                    <span className="text-base sm:text-lg font-bold text-white mr-1.5 sm:mr-2">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/70">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <AppStoreButton />
                  <PlayStoreButton />
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-500 overflow-hidden ring-2 ring-black/20"
                      >
                        <Image
                          src={`https://randomuser.me/api/portraits/${
                            i % 2 === 0 ? "women" : "men"
                          }/${i + 10}.jpg`}
                          alt="User"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow-400 sm:w-3.5 sm:h-3.5"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-white/90">
                      Joined by 10,000+ industry professionals
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: App Screenshots Showcase */}
            <div className="relative h-[450px] sm:h-[480px] md:h-[520px] lg:h-[550px] mx-auto lg:mx-0 order-2 lg:order-2 overflow-visible mt-10 sm:mt-12 lg:mt-0 w-full">
              {/* 3D App Device Frame */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center overflow-visible"
              >
                {/* Main device frame with interactive mockup */}
                <div className="relative w-[240px] sm:w-[250px] md:w-[280px] aspect-[9/19] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 border-[6px] sm:border-[8px] border-gray-800 shadow-2xl transform perspective-1000 rotate-z-0 rotate-y-[-5deg] sm:rotate-y-[-10deg] z-10">
                  {/* Device notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/3 h-5 sm:h-6 bg-black rounded-b-full z-20"></div>

                  {/* Screenshots carousel with animated transitions */}
                  <div className="h-full w-full rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreenshot}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={screenshots[activeScreenshot].src}
                          alt={screenshots[activeScreenshot].alt}
                          fill
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setActiveScreenshot(i);
                            // Pause auto-rotation for a while when manually clicked
                            setAutoRotate(false);
                            setTimeout(
                              () => setAutoRotate(true),
                              intervalTime * 2
                            );
                          }}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                            i === activeScreenshot
                              ? "bg-white scale-125"
                              : "bg-white/40"
                          }`}
                          aria-label={`View ${screenshots[i].label}`}
                        />
                      ))}
                    </div>

                    {/* Add subtle animation to indicate auto-rotation */}
                    <motion.div
                      className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/80"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ opacity: autoRotate ? 1 : 0 }}
                    />

                    {/* Feature label */}
                    <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1">
                      <span className="text-[10px] sm:text-xs font-medium text-white whitespace-nowrap">
                        {screenshots[activeScreenshot].label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating screenshots showing other app features - visible but smaller on mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -40, y: -100 }}
                  animate={{
                    opacity: 1,
                    x: [-20, -40, -60],
                    y: [-40, -50, -60],
                  }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="absolute left-0 top-1/4 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-[9/16] rotate-[-15deg] z-10 shadow-2xl sm:left-0 sm:top-1/4"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm -m-1" />
                  <Image
                    src="/home-screenshot.png"
                    alt="App Feed Screenshot"
                    className="rounded-2xl border border-white/10"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30, y: 100 }}
                  animate={{ opacity: 1, x: [20, 40, 60], y: [40, 50, 60] }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="absolute right-0 bottom-1/4 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-[9/16] rotate-[15deg] z-10 shadow-2xl sm:right-0 sm:bottom-1/4"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm -m-1" />
                  <Image
                    src="/chat-screenshot.png"
                    alt="App Casting Messages Screenshot"
                    className="rounded-2xl border border-white/10"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Decorative elements - adjusted for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -left-8 sm:-left-12 lg:-left-16 top-1/3 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl z-0"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -right-8 sm:-right-12 lg:-right-16 bottom-1/3 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-xl z-0"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator with improved animation */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2 font-medium">
              Scroll to explore
            </span>
            <motion.div
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </BackgroundLines>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95 pt-80 pb-0 md:pt-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Models" },
              { value: "500+", label: "Casting Directors" },
              { value: "25,000+", label: "Casting Messages" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full"
            >
              <span className="text-sm font-medium text-primary">Features</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Everything you need to succeed
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Our platform provides all the tools necessary for models and
              industry professionals to thrive in today's competitive market.
            </motion.p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 items-start">
            <AnimatedFeatureCard
              title="Professional Portfolios"
              description="Create stunning digital portfolios with your best work, stats, and experience. Stand out in the industry."
            />
            <AnimatedFeatureCard
              title="Casting Messages"
              description="Browse and apply to exclusive casting opportunities from top brands and directors worldwide."
            />
            <AnimatedFeatureCard
              title="Industry Network"
              description="Connect with fellow models, photographers, agencies, and brands. Build your professional network."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 bg-primary/10 rounded-full"
            >
              <span className="text-sm font-medium text-primary">
                Testimonials
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              What our users say
            </motion.h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Fatima Al-Sayed",
                role: "Fashion Model",
                image: "https://randomuser.me/api/portraits/women/57.jpg",
                quote:
                  "CastIn has transformed my career. I've booked twice as many jobs since joining the platform last year.",
              },
              {
                name: "Omar Al-Rashid",
                role: "Casting Director",
                image: "https://randomuser.me/api/portraits/men/85.jpg",
                quote:
                  "The talent pool on CastIn is exceptional. I can find exactly what I'm looking for in minutes rather than days.",
              },
              {
                name: "Leila Hassan",
                role: "Brand Manager",
                image: "https://randomuser.me/api/portraits/women/39.jpg",
                quote:
                  "We've streamlined our entire casting process thanks to CastIn. The platform is intuitive and powerful.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to transform your career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of industry professionals already using CastIn to
              connect, collaborate, and create amazing work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
