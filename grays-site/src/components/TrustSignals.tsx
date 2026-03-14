"use client";

import { motion } from "framer-motion";
import { Users, Calendar, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "650+",
    label: "Regular customers",
  },
  {
    icon: Calendar,
    value: "8+",
    label: "Years of service",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Fully insured",
  },
  {
    icon: Award,
    value: "5.0★",
    label: "Google rating",
  },
];

export default function TrustSignals() {
  return (
    <section className="relative py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/80"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-brand-600" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-slate-500 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
