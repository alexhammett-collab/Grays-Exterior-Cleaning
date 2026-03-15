"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Home, Calendar, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NearbyStreet {
  street: string;
  homes: number;
  nextClean: string;
  distance: string;
}

const mockNearby: Record<string, NearbyStreet[]> = {
  "LE11": [
    { street: "Maple Close", homes: 6, nextClean: "Tuesday", distance: "0.1 mi" },
    { street: "Ashby Road", homes: 4, nextClean: "Tuesday", distance: "0.3 mi" },
    { street: "Park Road", homes: 3, nextClean: "Wednesday", distance: "0.5 mi" },
    { street: "Forest Road", homes: 2, nextClean: "Thursday", distance: "0.7 mi" },
  ],
  "LE12": [
    { street: "Victoria Road", homes: 4, nextClean: "Wednesday", distance: "0.1 mi" },
    { street: "High Street", homes: 7, nextClean: "Wednesday", distance: "0.2 mi" },
    { street: "Mill Lane", homes: 3, nextClean: "Thursday", distance: "0.4 mi" },
  ],
  "LE7": [
    { street: "Church Lane", homes: 8, nextClean: "Thursday", distance: "0.1 mi" },
    { street: "Station Road", homes: 5, nextClean: "Thursday", distance: "0.3 mi" },
    { street: "The Green", homes: 2, nextClean: "Friday", distance: "0.6 mi" },
  ],
};

export default function NearbyActivity() {
  const [postcode, setPostcode] = useState("");
  const [searching, setSearching] = useState(false);
  const [streets, setStreets] = useState<NearbyStreet[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!postcode.trim()) return;
    setSearching(true);
    setStreets([]);
    setSearched(false);

    setTimeout(() => {
      const prefix = postcode.trim().toUpperCase().replace(/\s+/g, "");
      const match = Object.entries(mockNearby).find(([key]) =>
        prefix.startsWith(key)
      );
      setStreets(match ? match[1] : []);
      setSearched(true);
      setSearching(false);
    }, 1400);
  };

  const totalHomes = streets.reduce((sum, s) => sum + s.homes, 0);

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-semibold text-emerald-700 mb-5">
            <Shield className="w-3.5 h-3.5" />
            Local network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Are we already cleaning<br className="hidden sm:block" /> your street?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Enter your postcode to discover how many homes near you are already
            on one of our regular cleaning rounds.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-2">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Your postcode, e.g. LE11 3AA"
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-transparent text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={searching || !postcode.trim()}
                className={cn(
                  "h-12 px-5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all",
                  searching
                    ? "bg-slate-200 text-slate-500 cursor-wait"
                    : "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]"
                )}
              >
                {searching ? (
                  <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-600 rounded-full animate-spin" />
                ) : (
                  "Check"
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {searching && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 space-y-3"
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 rounded-xl bg-white border border-slate-200 animate-pulse"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </motion.div>
          )}

          {searched && streets.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8"
            >
              {/* Summary banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-emerald-500 to-brand-500 rounded-2xl p-5 sm:p-6 text-white mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      Good news — we&apos;re already here!
                    </p>
                    <p className="text-sm text-white/80 mt-0.5">
                      We&apos;re cleaning <strong className="text-white">{totalHomes} homes</strong> across{" "}
                      <strong className="text-white">{streets.length} streets</strong> near you
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Proximity ring visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-4"
              >
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    {/* Concentric rings */}
                    {[1, 0.7, 0.4].map((scale, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-brand-200"
                        style={{ transform: `scale(${scale})` }}
                      />
                    ))}

                    {/* Center pin */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-500 border-3 border-white shadow-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-[10px] font-bold text-brand-600 text-center mt-1">YOU</div>
                    </motion.div>

                    {/* Nearby street dots */}
                    {streets.map((street, i) => {
                      const angle = (i / streets.length) * Math.PI * 2 - Math.PI / 2;
                      const radius = 30 + i * 15;
                      const x = 50 + Math.cos(angle) * radius;
                      const y = 50 + Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={street.street}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="absolute z-10"
                          style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                        >
                          <div className="group relative">
                            <div className={cn(
                              "w-7 h-7 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white",
                              i === 0 ? "bg-emerald-500" : "bg-brand-500"
                            )}>
                              {street.homes}
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              <div className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded-lg whitespace-nowrap font-medium">
                                {street.street}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2">
                  Hover the dots to see street names
                </p>
              </motion.div>

              {/* Street cards */}
              <div className="space-y-2.5">
                {streets.map((street, i) => (
                  <motion.div
                    key={street.street}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 hover:shadow-md hover:border-slate-300 transition-all group"
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                      i === 0 ? "bg-emerald-50" : "bg-slate-50"
                    )}>
                      <Home className={cn(
                        "w-5 h-5",
                        i === 0 ? "text-emerald-600" : "text-slate-500"
                      )} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900">{street.street}</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {street.homes} homes · {street.distance} away · Next: {street.nextClean}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
                        <Calendar className="w-3 h-3" />
                        {street.nextClean}
                      </span>
                      <button className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors group-hover:bg-brand-500">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-5 text-center"
              >
                <button className="h-13 py-3.5 px-8 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold shadow-lg shadow-brand-500/25 inline-flex items-center gap-2 transition-all active:scale-[0.98]">
                  Join a round near you
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {searched && streets.length === 0 && (
            <motion.div
              key="empty"
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
                  We&apos;re growing fast. Register your interest and you&apos;ll be the
                  first to know when we start a round near you.
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
