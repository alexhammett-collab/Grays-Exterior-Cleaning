"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 py-3 safe-area-bottom">
            <a
              href="#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full h-12 text-base bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 no-underline"
              )}
            >
              Get instant quote
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
