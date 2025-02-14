"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const phrases = [
  "Coding the future",
  "Solving complex problems",
  "Building innovative solutions",
  "Exploring new technologies",
  "Turning ideas into reality",
];

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Computer Science Student
        </h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 h-12 text-muted-foreground"
          >
            {phrases[currentPhrase]}
          </motion.h2>
        </AnimatePresence>
        <Button size="lg" className="mt-4">
          View My Projects
        </Button>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
