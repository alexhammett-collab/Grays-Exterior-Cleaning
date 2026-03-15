"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import QuoteModal from "./QuoteModal";

const rounds = [
  {
    area: "Loughborough",
    day: "Tuesday",
    slots: 3,
    nextDate: "Next visit: 18 Mar",
    lat: 52.772,
    lng: -1.206,
  },
  {
    area: "Barrow upon Soar",
    day: "Wednesday",
    slots: 5,
    nextDate: "Next visit: 19 Mar",
    lat: 52.749,
    lng: -1.149,
  },
  {
    area: "Quorn",
    day: "Thursday",
    slots: 2,
    nextDate: "Next visit: 20 Mar",
    lat: 52.733,
    lng: -1.166,
  },
  {
    area: "Mountsorrel",
    day: "Friday",
    slots: 7,
    nextDate: "Next visit: 21 Mar",
    lat: 52.721,
    lng: -1.148,
  },
];

export default function JoinRound() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | undefined>();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const openQuote = (area: string) => {
    setSelectedArea(area);
    setModalOpen(true);
  };

  return (
    <>
      <section id="round" className="py-14 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
                Route-based scheduling
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Join our cleaning round
              </h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                We clean by area, not by appointment. This means{" "}
                <span className="text-slate-700 font-medium">
                  better prices, predictable scheduling, and a team that&apos;s
                  always nearby
                </span>
                .
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-600" />
                  </div>
                  <span>Route density keeps your costs down</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-brand-600" />
                  </div>
                  <span>Know exactly when we&apos;ll be in your area</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-brand-600" />
                  </div>
                  <span>Join 650+ customers already on our rounds</span>
                </div>
              </div>

              {/* Area cards below the text */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rounds.map((round) => (
                  <div
                    key={round.area}
                    onMouseEnter={() => setHoveredArea(round.area)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={cn(
                      "rounded-xl border bg-white p-4 transition-all duration-200 cursor-pointer",
                      hoveredArea === round.area
                        ? "border-brand-300 shadow-md shadow-brand-100"
                        : "border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {round.area}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">{round.nextDate}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          round.slots <= 3 ? "bg-amber-500" : "bg-emerald-500"
                        )} />
                        {round.day}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {round.slots} slots left
                      </span>
                      <button
                        onClick={() => openQuote(round.area)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Join
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Real map embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 lg:mt-0 lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/3]">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-1.2800%2C52.7050%2C-1.1000%2C52.7900&amp;layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Gray's Exterior Cleaning service area – Leicestershire"
                />

                {/* Overlay pins positioned on top of the iframe */}
                {rounds.map((round) => {
                  const x = ((round.lng - (-1.28)) / ((-1.10) - (-1.28))) * 100;
                  const y = ((52.79 - round.lat) / (52.79 - 52.705)) * 100;
                  const isHovered = hoveredArea === round.area;

                  return (
                    <button
                      key={round.area}
                      onClick={() => openQuote(round.area)}
                      onMouseEnter={() => setHoveredArea(round.area)}
                      onMouseLeave={() => setHoveredArea(null)}
                      className="absolute z-10"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      <div className={cn(
                        "relative transition-all duration-200",
                        isHovered ? "scale-125" : "scale-100"
                      )}>
                        <div className={cn(
                          "w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white",
                          round.slots <= 3 ? "bg-amber-500" : "bg-brand-500"
                        )}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className={cn(
                          "absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 border-b-2 border-r-2 border-white",
                          round.slots <= 3 ? "bg-amber-500" : "bg-brand-500"
                        )} />
                      </div>

                      {/* Tooltip */}
                      <div className={cn(
                        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap transition-all duration-200 pointer-events-none",
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                      )}>
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 px-3 py-2 text-left">
                          <p className="text-xs font-bold text-slate-900">{round.area}</p>
                          <p className="text-[10px] text-slate-500">{round.day} · {round.slots} slots</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        area={selectedArea}
      />
    </>
  );
}
