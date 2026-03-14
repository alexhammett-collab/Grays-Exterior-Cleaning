"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.12),_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mx-auto shadow-xl shadow-brand-500/30">
            <Sparkles className="w-7 h-7 text-white" />
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready for a cleaner,
            <br />
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
              brighter home?
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get an instant guide price in 30 seconds, or join our cleaning round
            and let us come to you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#quote"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-8 text-base bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white shadow-xl shadow-brand-500/30 no-underline"
              )}
            >
              Get instant quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="tel:+441509000000"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white no-underline"
              )}
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Call us today
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            No obligation · Free estimates · Fully insured
          </p>
        </motion.div>
      </div>
    </section>
  );
}
