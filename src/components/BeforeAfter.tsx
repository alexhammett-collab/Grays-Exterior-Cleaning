"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ComparisonSliderProps {
  title: string;
  beforeImage: string;
  afterImage: string;
}

function ComparisonSlider({ title, beforeImage, afterImage }: ComparisonSliderProps) {
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

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* "Before" image (full background) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Before cleaning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-amber-900/20" />
      </div>

      {/* "After" image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={afterImage}
          alt="After cleaning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky-500/5" />
      </div>

      {/* Before/After labels */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-red-500/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
          After
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-slate-200">
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <svg
            className="w-5 h-5 text-slate-600 -ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <span className="inline-block px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const examples = [
    {
      title: "Window Cleaning – Semi-detached",
      beforeImage:
        "https://images.unsplash.com/photo-1710883734889-5a0b8ab6bfcf?w=800&q=80&auto=format&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1621983209344-d3152696e84f?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Conservatory Roof – Full Clean",
      beforeImage:
        "https://images.unsplash.com/photo-1604605823030-27a58eb74a49?w=800&q=80&auto=format&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1710883727427-59d1ccc368fa?w=800&q=80&auto=format&fit=crop",
    },
    {
      title: "Gutter & Fascia Restoration",
      beforeImage:
        "https://images.unsplash.com/photo-1621983209342-ebf870427308?w=800&q=80&auto=format&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1547638599-d4bf222cf5d1?w=800&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-14 lg:py-20 bg-slate-50">
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
              <ComparisonSlider
                title={example.title}
                beforeImage={example.beforeImage}
                afterImage={example.afterImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
