"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const rounds = [
  {
    area: "Loughborough",
    day: "Tuesday",
    slots: 3,
    nextDate: "Next visit: 18 Mar",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&q=80&auto=format&fit=crop",
  },
  {
    area: "Barrow upon Soar",
    day: "Wednesday",
    slots: 5,
    nextDate: "Next visit: 19 Mar",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80&auto=format&fit=crop",
  },
  {
    area: "Quorn",
    day: "Thursday",
    slots: 2,
    nextDate: "Next visit: 20 Mar",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80&auto=format&fit=crop",
  },
  {
    area: "Mountsorrel",
    day: "Friday",
    slots: 7,
    nextDate: "Next visit: 21 Mar",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format&fit=crop",
  },
];

export default function JoinRound() {
  return (
    <section id="round" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
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
          </motion.div>

          {/* Right cards */}
          <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rounds.map((round, i) => (
              <motion.div
                key={round.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Card image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={round.image}
                    alt={`Houses in ${round.area}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-slate-700 shadow-sm">
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        round.slots <= 3 ? "bg-amber-500" : "bg-emerald-500"
                      )} />
                      {round.day}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-slate-900">
                    {round.area}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{round.nextDate}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {round.slots} slots available
                  </p>
                  <a
                    href="#quote"
                    className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors no-underline"
                  >
                    Join this round
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
