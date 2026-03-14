"use client";

import { motion } from "framer-motion";
import { Camera, Upload, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function PhotoUpload() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/5 rounded-full blur-3xl" />

          <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-sm text-brand-300 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Future feature
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Snap a photo, get a quote
              </h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Upload a photo of your property and our system will provide a
                more accurate, tailored quote based on the size, condition, and
                scope of work needed.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Camera className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>Take a photo from the front of your property</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Upload className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>Upload through the website or WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Sparkles className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>Receive a tailored quote within minutes</span>
                </div>
              </div>
              <a
                href="#quote"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-400 hover:to-brand-500 no-underline"
                )}
              >
                Try the quote tool now
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>

            {/* Upload mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 lg:mt-0"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 sm:p-12 text-center hover:border-brand-400/40 transition-colors cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-brand-500/20 flex items-center justify-center mx-auto">
                    <Camera className="w-8 h-8 text-brand-400" />
                  </div>
                  <p className="mt-4 text-white font-medium">
                    Drop your property photo here
                  </p>
                  <p className="mt-1.5 text-sm text-slate-400">
                    or click to browse files
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-sm text-white/70">
                    <Upload className="w-4 h-4" />
                    Upload photo
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Front view", "Side view", "Close-up"].map((label) => (
                    <div
                      key={label}
                      className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                    >
                      <span className="text-[10px] text-slate-500 text-center leading-tight px-1">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
