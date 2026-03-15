"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Users, Calendar, ArrowRight, Sparkles, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const mockResults: Record<string, { street: string; homes: number; day: string; savings: number }> = {
  "LE11": { street: "Maple Close", homes: 6, day: "Tuesday", savings: 3 },
  "LE12": { street: "Victoria Road", homes: 4, day: "Wednesday", savings: 2 },
  "LE7":  { street: "Church Lane", homes: 8, day: "Thursday", savings: 4 },
  "LE4":  { street: "Oakwood Drive", homes: 3, day: "Friday", savings: 2 },
};

export default function StreetClean() {
  const [postcode, setPostcode] = useState("");
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<(typeof mockResults)[string] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!postcode.trim()) return;
    setSearching(true);
    setResult(null);
    setSearched(false);

    setTimeout(() => {
      const prefix = postcode.trim().toUpperCase().replace(/\s+/g, "");
      const match = Object.entries(mockResults).find(([key]) =>
        prefix.startsWith(key)
      );
      setResult(match ? match[1] : null);
      setSearched(true);
      setSearching(false);
    }, 1200);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-sm font-semibold text-brand-700 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Smart scheduling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Join your street clean
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            We may already be cleaning homes on your street. Join an existing round to
            save money and get a faster, more convenient service.
          </p>
        </motion.div>

        {/* Search input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <div className="relative">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Enter your postcode"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-slate-200 bg-white text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={searching || !postcode.trim()}
                className={cn(
                  "h-14 px-6 rounded-2xl font-semibold text-white flex items-center gap-2 transition-all",
                  searching
                    ? "bg-slate-400 cursor-wait"
                    : "bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 shadow-lg shadow-brand-500/25 active:scale-[0.98]"
                )}
              >
                {searching ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-400 text-center">
              Try: LE11 3AA, LE12 8PQ, LE7 7FW
            </p>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {searching && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <div className="flex justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full bg-brand-500"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  Checking our cleaning rounds near you...
                </p>
              </div>
            </motion.div>
          )}

          {searched && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-8"
            >
              {/* Success banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3.5 mb-4">
                <p className="text-sm font-semibold text-emerald-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Great news — we&apos;re already cleaning homes near you!
                </p>
              </div>

              {/* Street card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-brand-500 via-brand-400 to-emerald-400" />

                <div className="p-6 sm:p-8">
                  {/* Street info */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-brand-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900">
                        {result.street}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {postcode.trim().toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="bg-slate-50 rounded-xl p-3.5 text-center">
                      <Users className="w-5 h-5 text-brand-500 mx-auto" />
                      <p className="mt-1.5 text-xl font-bold text-slate-900">{result.homes}</p>
                      <p className="text-[11px] text-slate-500 font-medium">Homes on round</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3.5 text-center">
                      <Calendar className="w-5 h-5 text-brand-500 mx-auto" />
                      <p className="mt-1.5 text-xl font-bold text-slate-900">{result.day}</p>
                      <p className="text-[11px] text-slate-500 font-medium">Next round</p>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3.5 text-center">
                      <Sparkles className="w-5 h-5 text-emerald-600 mx-auto" />
                      <p className="mt-1.5 text-xl font-bold text-emerald-700">£{result.savings}</p>
                      <p className="text-[11px] text-emerald-600 font-medium">Round saving</p>
                    </div>
                  </div>

                  {/* Social proof */}
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl px-4 py-3">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                        >
                          {["S", "M", "J"][i]}
                        </div>
                      ))}
                    </div>
                    <span>
                      We&apos;re already cleaning <strong>{result.homes} homes</strong> on {result.street}
                    </span>
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-full h-13 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                    Join this round
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-2.5 text-xs text-slate-400 text-center">
                    Join this round and save £{result.savings} per clean
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {searched && !result && (
            <motion.div
              key="no-result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  We&apos;re not in your area yet
                </h3>
                <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
                  But we&apos;re expanding! Register your interest and we&apos;ll let you
                  know when we start cleaning near you.
                </p>
                <button className="mt-5 h-12 px-6 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
                  Register interest
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
