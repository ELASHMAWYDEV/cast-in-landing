"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Small delay for better UX - don't show immediately on page load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setShowConsent(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-6 md:w-[420px] z-50"
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-background/95 backdrop-blur-md rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Cookie className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg">Cookie Preferences</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                  onClick={() => setShowConsent(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking "Accept
                  All", you consent to our use of cookies.
                </p>

                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-xs space-y-2 bg-muted/30 p-3 rounded-lg"
                  >
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Essential Cookies</span>
                        <p className="text-muted-foreground mt-0.5">
                          Always active and necessary for the website to
                          function properly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Analytics Cookies</span>
                        <p className="text-muted-foreground mt-0.5">
                          Help us improve our website by collecting anonymous
                          usage information.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={acceptCookies}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 min-w-[120px]"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    className="flex-1 sm:flex-none min-w-[120px]"
                  >
                    Decline All
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full sm:w-auto text-xs mt-1 sm:mt-0 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? "Hide Details" : "Cookie Policy"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
