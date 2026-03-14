"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bell,
  CreditCard,
  LayoutDashboard,
  CloudRain,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "SMS reminders",
    description:
      "Get a text the day before your clean so you know exactly when to expect us.",
    color: "from-brand-500/10 to-brand-600/10",
    iconColor: "text-brand-600",
  },
  {
    icon: Bell,
    title: "Clean complete alerts",
    description:
      "Instant notification when we've finished. Check the results before you get home.",
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: CreditCard,
    title: "Tap-to-pay links",
    description:
      "Mobile payment links sent after every clean. Pay in seconds from your phone.",
    color: "from-violet-500/10 to-violet-600/10",
    iconColor: "text-violet-600",
  },
  {
    icon: LayoutDashboard,
    title: "Customer portal",
    description:
      "View your service history, upcoming cleans, invoices and plan details in one place.",
    color: "from-amber-500/10 to-amber-600/10",
    iconColor: "text-amber-600",
  },
  {
    icon: CloudRain,
    title: "Rain guarantee",
    description:
      "If it rains within 48 hours of your clean, we'll come back and redo your windows free.",
    color: "from-sky-500/10 to-sky-600/10",
    iconColor: "text-sky-600",
  },
  {
    icon: MapPinned,
    title: "Area scheduling",
    description:
      "Real-time updates on when we'll be in your area. Smart route-based scheduling.",
    color: "from-rose-500/10 to-rose-600/10",
    iconColor: "text-rose-600",
  },
];

export default function CustomerExperience() {
  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-sm text-brand-700 font-semibold mb-4">
            Coming soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            A smarter service experience
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            We&apos;re building the tools and technology to make exterior
            cleaning{" "}
            <span className="text-slate-700 font-medium">
              effortless, transparent, and modern
            </span>
            .
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
              >
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
