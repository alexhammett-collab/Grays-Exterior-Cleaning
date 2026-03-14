"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const plans = [
  {
    name: "Regular",
    frequency: "Every 8 weeks",
    icon: Zap,
    price: "From £12",
    period: "per clean",
    featured: false,
    benefits: [
      "Scheduled window cleaning",
      "Consistent clean appearance",
      "No need to remember to book",
      "Cancel anytime",
    ],
    color: "border-slate-200",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  {
    name: "Premium",
    frequency: "Every 6 weeks",
    icon: Crown,
    price: "From £12",
    period: "per clean",
    featured: true,
    benefits: [
      "Priority scheduling",
      "Shorter gap between cleans",
      "Better long-term appearance",
      "SMS reminders included",
      "Rain guarantee",
    ],
    color: "border-brand-200",
    iconBg: "bg-brand-100",
    iconColor: "text-brand-600",
  },
  {
    name: "Pristine",
    frequency: "Every 4 weeks",
    icon: Sparkles,
    price: "From £10",
    period: "per clean",
    featured: false,
    benefits: [
      "Maximum frequency",
      "Always spotless windows",
      "Best per-clean pricing",
      "Priority booking & scheduling",
      "Full notification suite",
      "Exclusive member perks",
    ],
    color: "border-slate-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function CleaningPlans() {
  return (
    <section id="plans" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Subscription plans
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Cleaning on autopilot
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Set it and forget it. Choose a plan that fits your schedule and
            we&apos;ll handle the rest.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-6 sm:p-8 rounded-2xl border-2 bg-white transition-all",
                plan.featured
                  ? "border-brand-300 shadow-xl shadow-brand-500/10 scale-[1.02]"
                  : plan.color
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold">
                    Most popular
                  </span>
                </div>
              )}

              <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", plan.iconBg)}>
                <plan.icon className={cn("w-5 h-5", plan.iconColor)} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{plan.frequency}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900 tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 w-full no-underline",
                  plan.featured
                    ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white hover:from-brand-600 hover:to-brand-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
