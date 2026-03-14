"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface ComparisonSliderProps {
  title: string;
  index: number;
}

function ComparisonSlider({ title, index }: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  const colors = [
    { before: "from-amber-800 to-amber-900", after: "from-brand-500 to-brand-600" },
    { before: "from-stone-700 to-stone-800", after: "from-emerald-500 to-emerald-600" },
    { before: "from-zinc-700 to-zinc-800", after: "from-sky-500 to-sky-600" },
  ];

  const color = colors[index % colors.length];

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* "Before" side */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.before} flex items-center justify-center`}>
        <div className="text-center px-8">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl">🏚️</span>
          </div>
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Before</span>
          <p className="text-white/40 text-xs mt-1">Dirt, grime & algae build-up</p>
        </div>
      </div>

      {/* "After" side */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color.after} flex items-center justify-center`}
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="text-center px-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
            <span className="text-3xl">✨</span>
          </div>
          <span className="text-white/90 text-sm font-medium uppercase tracking-wider">After</span>
          <p className="text-white/70 text-xs mt-1">Professionally cleaned & restored</p>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg
            className="w-5 h-5 text-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const examples = [
    { title: "Window Cleaning – Semi-detached" },
    { title: "Conservatory Roof – Full Clean" },
    { title: "Gutter & Fascia Restoration" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Results
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            See the difference
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Drag the slider to reveal the transformation. Real results, every
            time.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example, i) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ComparisonSlider title={example.title} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
