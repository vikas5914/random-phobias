"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhobiaGenerator from "@/components/phobia-generator";
import { Footer } from "@/components/footer";
import { phobias, type Phobia } from "@/lib/phobias";

const AUTO_ROTATE_INTERVAL_MS = 5000;

export default function Home() {
  const [currentPhobia, setCurrentPhobia] = useState<Phobia | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomPhobia = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * phobias.length);
      setCurrentPhobia(phobias[randomIndex]);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    getRandomPhobia();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomPhobia();
    }, AUTO_ROTATE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Static base background color */}
      <div className="absolute inset-0 bg-slate-900 z-0" />

      {/* Animated background image layer */}
      <AnimatePresence>
        {currentPhobia?.src && (
          <motion.div
            key={currentPhobia.src} // Key change triggers animation
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10" // z-10 for image layer
            style={{ backgroundImage: `url('${currentPhobia.src}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }} // Control fade duration (e.g., 1 second)
          />
        )}
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-20" /> {/* z-20 for overlay */}

      {/* Content must be above overlay and background */}
      <main className="relative z-30 flex flex-1 flex-col items-center justify-center p-4 sm:p-8"> {/* z-30 for main content */}
        <PhobiaGenerator phobia={currentPhobia} isLoading={isLoading} />
      </main>
      {/* Footer already has z-30 */}
      <Footer />
    </div>
  );
}
