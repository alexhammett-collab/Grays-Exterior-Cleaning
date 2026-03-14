"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  Sun,
  ArrowRight,
  Sparkles,
  WindIcon,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Window Cleaning",
    description:
      "Crystal-clear windows using pure water technology. Regular or one-off cleans for residential properties.",
    color: "from-brand-500/10 to-brand-600/10",
    iconColor: "text-brand-600",
  },
  {
    icon: Home,
    title: "Gutter Clearing",
    description:
      "Full gutter clearing and flush to prevent blockages, leaks, and water damage to your property.",
    color: "from-slate-500/10 to-slate-600/10",
    iconColor: "text-slate-600",
  },
  {
    icon: Sparkles,
    title: "Soffits & Fascias",
    description:
      "Deep clean of all soffits, fascias and cladding. Restores your roofline to a bright, fresh finish.",
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Improve energy output with professional solar panel cleaning. Safe, streak-free results every time.",
    color: "from-amber-500/10 to-amber-600/10",
    iconColor: "text-amber-600",
  },
  {
    icon: WindIcon,
    title: "Conservatory Roofs",
    description:
      "Transform your conservatory with a full roof clean. Removes algae, moss and built-up grime.",
    color: "from-violet-500/10 to-violet-600/10",
    iconColor: "text-violet-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            What we do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Complete exterior care
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Everything your property needs to look its best, delivered by a
            local team you can trust.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
              >
                <service.icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
