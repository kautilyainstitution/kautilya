"use client"
import { useEffect, useState } from 'react';

export function ModernMapEmbed() {
  const [theme, setTheme] = useState<'light'|'dark'>('light');

  useEffect(() => {
    // Detect theme preference (you can replace this with your theme system)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    
    const handler = (e: MediaQueryListEvent) => 
      setTheme(e.matches ? 'dark' : 'light');
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31468502.508008234!2d81.35061000000002!3d15.678505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bb05adbb83b%3A0xce3f099fe711df75!2sKautilya%20Institution!5e0!3m2!1sen!2sin!4v1747599361792!5m2!1sen!2sin&theme=${theme}`;

  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
      <div className="relative pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
        <iframe
          src={mapUrl}
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Our Location on Google Maps"
        />
      </div>
      <div className="p-4 text-center text-muted-foreground text-sm">
        Kautilya Institution Location
      </div>
    </div>
  );
}