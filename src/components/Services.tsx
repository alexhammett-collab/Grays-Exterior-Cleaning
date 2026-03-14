"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Window Cleaning",
    description:
      "Crystal-clear windows using pure water technology. Regular or one-off cleans for residential properties.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Gutter Clearing",
    description:
      "Full gutter clearing and flush to prevent blockages, leaks, and water damage to your property.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Soffits & Fascias",
    description:
      "Deep clean of all soffits, fascias and cladding. Restores your roofline to a bright, fresh finish.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "Improve energy output with professional solar panel cleaning. Safe, streak-free results every time.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Conservatory Roofs",
    description:
      "Transform your conservatory with a full roof clean. Removes algae, moss and built-up grime.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop",
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

        {/* Top row: 2 large cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.slice(0, 2).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 md:h-80"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <div className="mt-3 flex items-center text-sm font-medium text-brand-300 group-hover:text-brand-200 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {services.slice(2).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 2) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-64"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-2 flex items-center text-xs font-medium text-brand-300 group-hover:text-brand-200 transition-colors">
                  Learn more
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
