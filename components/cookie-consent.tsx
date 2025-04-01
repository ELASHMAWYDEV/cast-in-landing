"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p className="text-sm text-muted-foreground mb-4">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </p>
      <div className="flex gap-4">
        <Button onClick={acceptCookies} variant="default">
          Accept
        </Button>
        <Button onClick={acceptCookies} variant="outline">
          Decline
        </Button>
      </div>
    </Card>
  );
}