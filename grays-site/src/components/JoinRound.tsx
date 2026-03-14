"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const rounds = [
  {
    area: "Loughborough",
    day: "Tuesday",
    slots: 3,
    nextDate: "Next visit: 18 Mar",
    color: "border-brand-200 bg-brand-50/50",
    dotColor: "bg-brand-500",
  },
  {
    area: "Barrow upon Soar",
    day: "Wednesday",
    slots: 5,
    nextDate: "Next visit: 19 Mar",
    color: "border-emerald-200 bg-emerald-50/50",
    dotColor: "bg-emerald-500",
  },
  {
    area: "Quorn",
    day: "Thursday",
    slots: 2,
    nextDate: "Next visit: 20 Mar",
    color: "border-violet-200 bg-violet-50/50",
    dotColor: "bg-violet-500",
  },
  {
    area: "Mountsorrel",
    day: "Friday",
    slots: 7,
    nextDate: "Next visit: 21 Mar",
    color: "border-amber-200 bg-amber-50/50",
    dotColor: "bg-amber-500",
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
          <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rounds.map((round, i) => (
              <motion.div
                key={round.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "p-5 rounded-2xl border transition-all hover:shadow-md",
                  round.color
                )}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={cn("w-2.5 h-2.5 rounded-full", round.dotColor)} />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {round.day}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {round.area}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{round.nextDate}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {round.slots} slots available
                </p>
                <a
                  href="#quote"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mt-3 w-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 no-underline text-xs"
                  )}
                >
                  Join this round
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
