"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah T.",
    location: "Loughborough",
    text: "Absolutely brilliant service. Windows are sparkling and the team were so professional. Been using Gray's for over two years now and wouldn't go anywhere else.",
    rating: 5,
  },
  {
    name: "Mark & Helen D.",
    location: "Quorn",
    text: "Really impressed with how easy the whole process is. They just turn up on schedule, do a fantastic job, and we barely even notice. Exactly what you want.",
    rating: 5,
  },
  {
    name: "James P.",
    location: "Barrow upon Soar",
    text: "Had the gutters cleared and all windows done. Incredible difference. Very fair pricing and the communication throughout was excellent.",
    rating: 5,
  },
  {
    name: "Linda W.",
    location: "Mountsorrel",
    text: "The conservatory roof looks like new! I'd been putting it off for ages. Gray's made it so simple and the result is amazing. Highly recommend.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Social proof
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Loved by our customers
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            5-star rated across Leicestershire. Here&apos;s what our regulars
            have to say.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-100" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
