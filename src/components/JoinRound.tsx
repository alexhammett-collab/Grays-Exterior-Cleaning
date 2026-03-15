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

            {/* Right: Google Maps style mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 lg:mt-0 lg:sticky lg:top-24"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#e8e4d8] aspect-[4/3]">
                {/* Map tiles mock - styled roads and terrain */}
                <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background terrain */}
                  <rect width="400" height="300" fill="#e8e4d8" />

                  {/* Green areas (parks/fields) */}
                  <ellipse cx="80" cy="60" rx="50" ry="35" fill="#c5deb5" opacity="0.7" />
                  <ellipse cx="320" cy="240" rx="60" ry="40" fill="#c5deb5" opacity="0.6" />
                  <ellipse cx="200" cy="280" rx="80" ry="30" fill="#c5deb5" opacity="0.5" />
                  <ellipse cx="350" cy="80" rx="40" ry="30" fill="#c5deb5" opacity="0.7" />
                  <rect x="0" y="0" width="45" height="120" fill="#c5deb5" opacity="0.5" rx="10" />

                  {/* Water - River Soar */}
                  <path d="M 260 0 Q 250 50 270 100 Q 285 150 260 200 Q 240 250 255 300" fill="none" stroke="#a8d4e6" strokeWidth="8" opacity="0.8" />
                  <path d="M 260 0 Q 250 50 270 100 Q 285 150 260 200 Q 240 250 255 300" fill="none" stroke="#90c8e0" strokeWidth="4" opacity="0.6" />

                  {/* Major roads */}
                  <path d="M 0 140 L 400 140" stroke="#fcd577" strokeWidth="5" opacity="0.8" />
                  <path d="M 180 0 L 180 300" stroke="#fcd577" strokeWidth="4" opacity="0.7" />
                  <path d="M 100 0 Q 140 80 180 140" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
                  <path d="M 180 140 Q 220 180 300 200" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
                  <path d="M 0 80 Q 100 90 180 100 Q 250 110 400 100" stroke="#ffffff" strokeWidth="2.5" opacity="0.8" />
                  <path d="M 100 200 Q 150 180 180 140" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
                  <path d="M 180 140 L 240 60" stroke="#ffffff" strokeWidth="2" opacity="0.7" />

                  {/* Minor roads grid */}
                  <path d="M 130 60 L 230 60" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
                  <path d="M 120 180 L 240 180" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
                  <path d="M 140 0 L 140 120" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
                  <path d="M 220 100 L 220 200" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />

                  {/* Built-up areas (light grey blocks) */}
                  <rect x="140" y="100" width="80" height="80" fill="#d4d0c8" opacity="0.5" rx="4" />
                  <rect x="150" y="50" width="40" height="30" fill="#d4d0c8" opacity="0.4" rx="3" />
                  <rect x="230" y="150" width="50" height="40" fill="#d4d0c8" opacity="0.4" rx="3" />
                  <rect x="190" y="200" width="35" height="25" fill="#d4d0c8" opacity="0.4" rx="3" />
                </svg>

                {/* Map pins for each area */}
                {rounds.map((round) => {
                  // Map lat/lng to pixel positions within the SVG
                  const x = ((round.lng - (-1.25)) / 0.15) * 400;
                  const y = ((52.79 - round.lat) / 0.09) * 300;
                  const isHovered = hoveredArea === round.area;

                  return (
                    <button
                      key={round.area}
                      onClick={() => openQuote(round.area)}
                      onMouseEnter={() => setHoveredArea(round.area)}
                      onMouseLeave={() => setHoveredArea(null)}
                      className="absolute group"
                      style={{
                        left: `${(x / 400) * 100}%`,
                        top: `${(y / 300) * 100}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      {/* Pin */}
                      <div className={cn(
                        "relative flex items-center justify-center transition-all duration-200",
                        isHovered ? "scale-125" : "scale-100"
                      )}>
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white",
                          round.slots <= 3 ? "bg-amber-500" : "bg-brand-500"
                        )}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className={cn(
                          "absolute -bottom-1 w-2 h-2 rotate-45 border-b-2 border-r-2 border-white",
                          round.slots <= 3 ? "bg-amber-500" : "bg-brand-500"
                        )} />
                      </div>

                      {/* Tooltip */}
                      <div className={cn(
                        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap transition-all duration-200",
                        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                      )}>
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 px-3 py-2 text-left">
                          <p className="text-xs font-bold text-slate-900">{round.area}</p>
                          <p className="text-[10px] text-slate-500">{round.day} · {round.slots} slots</p>
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Google Maps-style controls */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  <div className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-slate-600 text-sm font-bold">+</div>
                  <div className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-slate-600 text-sm font-bold">−</div>
                </div>

                {/* Map attribution */}
                <div className="absolute bottom-2 left-2 text-[9px] text-slate-500/80 bg-white/70 px-1.5 py-0.5 rounded">
                  Leicestershire, UK
                </div>

                {/* Google Maps-style branding */}
                <div className="absolute bottom-2 right-2 text-[9px] text-slate-500/60 bg-white/70 px-1.5 py-0.5 rounded">
                  Map data ©2026
                </div>
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
