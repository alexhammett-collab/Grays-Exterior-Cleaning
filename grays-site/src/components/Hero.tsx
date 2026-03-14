"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80&auto=format&fit=crop"
        alt="Beautiful clean home exterior"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-brand-300 font-medium">
              <Shield className="w-3.5 h-3.5" />
              Trusted across Leicestershire
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight"
          >
            Your home&apos;s best look,{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              delivered on schedule
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl"
          >
            Premium exterior cleaning with route-based scheduling, instant
            pricing, and a service experience built around{" "}
            <span className="text-white font-semibold">your convenience</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-6 text-base bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white shadow-xl shadow-brand-500/30 no-underline"
              )}
            >
              Get instant quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#round"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 text-base border-white/30 text-white hover:bg-white/15 hover:text-white no-underline backdrop-blur-sm"
              )}
            >
              Join our round
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-300"
          >
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <span className="ml-1 text-white font-semibold">5.0</span>
              <span>on Google</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Loughborough, Quorn, Barrow & surrounds</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
