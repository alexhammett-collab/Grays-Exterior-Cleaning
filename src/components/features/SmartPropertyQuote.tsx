"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Home,
  Layers,
  Ruler,
  Zap,
  Plus,
  Check,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DetectedProperty {
  address: string;
  type: string;
  bedrooms: number;
  floors: number;
  estimatedSize: string;
  basePrice: number;
}

const mockProperties: Record<string, DetectedProperty> = {
  "12": {
    address: "12 Maple Close",
    type: "Semi-detached",
    bedrooms: 3,
    floors: 2,
    estimatedSize: "95 m²",
    basePrice: 19,
  },
  "4": {
    address: "4 Maple Close",
    type: "Detached",
    bedrooms: 4,
    floors: 2,
    estimatedSize: "130 m²",
    basePrice: 25,
  },
  "27": {
    address: "27 Maple Close",
    type: "Terraced",
    bedrooms: 2,
    floors: 2,
    estimatedSize: "72 m²",
    basePrice: 15,
  },
  "8": {
    address: "8 Maple Close",
    type: "Bungalow",
    bedrooms: 3,
    floors: 1,
    estimatedSize: "88 m²",
    basePrice: 14,
  },
};

const extraOptions = [
  { id: "gutters", label: "Gutter clearing", price: 45, icon: "🏠" },
  { id: "conservatory", label: "Conservatory roof", price: 35, icon: "🪟" },
  { id: "solar", label: "Solar panels", price: 30, icon: "☀️" },
  { id: "fascias", label: "Soffits & fascias", price: 40, icon: "🔧" },
];

type Step = "input" | "detecting" | "result";

export default function SmartPropertyQuote() {
  const [postcode, setPostcode] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [step, setStep] = useState<Step>("input");
  const [property, setProperty] = useState<DetectedProperty | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [detectionProgress, setDetectionProgress] = useState(0);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = extraOptions.find((e) => e.id === id);
    return sum + (extra?.price ?? 0);
  }, 0);

  const totalPrice = (property?.basePrice ?? 0) + extrasTotal;

  const handleDetect = () => {
    if (!postcode.trim() || !houseNumber.trim()) return;
    setStep("detecting");
    setDetectionProgress(0);
    setSelectedExtras([]);

    const steps = [
      { progress: 20, delay: 400 },
      { progress: 45, delay: 800 },
      { progress: 70, delay: 1200 },
      { progress: 90, delay: 1600 },
      { progress: 100, delay: 1900 },
    ];

    steps.forEach(({ progress, delay }) => {
      setTimeout(() => setDetectionProgress(progress), delay);
    });

    setTimeout(() => {
      const num = houseNumber.trim();
      const prop = mockProperties[num] || {
        address: `${num} Maple Close`,
        type: "Semi-detached",
        bedrooms: 3,
        floors: 2,
        estimatedSize: "90 m²",
        basePrice: 18,
      };
      setProperty(prop);
      setStep("result");
    }, 2200);
  };

  const handleReset = () => {
    setStep("input");
    setProperty(null);
    setSelectedExtras([]);
    setPostcode("");
    setHouseNumber("");
  };

  const detectionLabels = [
    { threshold: 0, label: "Locating address..." },
    { threshold: 25, label: "Analysing property type..." },
    { threshold: 50, label: "Estimating dimensions..." },
    { threshold: 75, label: "Calculating quote..." },
  ];

  const currentLabel =
    [...detectionLabels].reverse().find((l) => detectionProgress >= l.threshold)?.label ?? "";

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-sm font-semibold text-violet-700 mb-5">
            <Zap className="w-3.5 h-3.5" />
            AI-powered
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Smart property quote
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Enter your address and we&apos;ll automatically detect your property
            type, size, and give you an instant personalised quote.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Progress bar */}
            <div className="h-1 bg-slate-100">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-brand-500"
                initial={{ width: "0%" }}
                animate={{
                  width:
                    step === "input" ? "0%" :
                    step === "detecting" ? `${detectionProgress}%` :
                    "100%"
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Input */}
              {step === "input" && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Search className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Find your property
                      </h3>
                      <p className="text-sm text-slate-500">
                        We&apos;ll detect your home automatically
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                      <input
                        type="text"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        placeholder="Postcode, e.g. LE11 3AA"
                        className="w-full h-13 pl-11 pr-4 rounded-xl border-2 border-slate-200 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                      <input
                        type="text"
                        value={houseNumber}
                        onChange={(e) => setHouseNumber(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleDetect()}
                        placeholder="House number, e.g. 12"
                        className="w-full h-13 pl-11 pr-4 rounded-xl border-2 border-slate-200 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleDetect}
                    disabled={!postcode.trim() || !houseNumber.trim()}
                    className={cn(
                      "mt-5 w-full h-13 py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all",
                      postcode.trim() && houseNumber.trim()
                        ? "bg-gradient-to-r from-violet-500 to-brand-500 hover:from-violet-600 hover:to-brand-600 shadow-lg shadow-violet-500/25 active:scale-[0.98]"
                        : "bg-slate-200 text-slate-500 cursor-not-allowed"
                    )}
                  >
                    <Zap className="w-4 h-4" />
                    Detect my property
                  </button>

                  <p className="mt-3 text-xs text-slate-400 text-center">
                    Try house numbers: 4, 8, 12, or 27
                  </p>
                </motion.div>
              )}

              {/* Step 2: Detecting */}
              {step === "detecting" && (
                <motion.div
                  key="detecting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 sm:p-8"
                >
                  <div className="text-center py-8">
                    {/* Animated scan visual */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-violet-300"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-2 rounded-xl border-2 border-violet-400"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.3, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-violet-500 to-brand-500 flex items-center justify-center">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <p className="text-base font-semibold text-slate-900">
                      Detecting your property
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      {currentLabel}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-5 max-w-xs mx-auto">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-brand-500 rounded-full"
                          animate={{ width: `${detectionProgress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-400">
                        {detectionProgress}%
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result */}
              {step === "result" && property && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-6 sm:p-8"
                >
                  {/* Detected badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                      <Check className="w-3.5 h-3.5" />
                      Property detected
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      Search again
                    </button>
                  </div>

                  {/* Property card */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-5 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900">
                      {property.address}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {postcode.trim().toUpperCase()}
                    </p>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
                        <Home className="w-4 h-4 text-violet-500 mx-auto" />
                        <p className="mt-1 text-sm font-bold text-slate-900">{property.type}</p>
                        <p className="text-[10px] text-slate-500">Type</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
                        <Sparkles className="w-4 h-4 text-violet-500 mx-auto" />
                        <p className="mt-1 text-sm font-bold text-slate-900">{property.bedrooms} bed</p>
                        <p className="text-[10px] text-slate-500">Bedrooms</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
                        <Layers className="w-4 h-4 text-violet-500 mx-auto" />
                        <p className="mt-1 text-sm font-bold text-slate-900">{property.floors}</p>
                        <p className="text-[10px] text-slate-500">Floors</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 text-center border border-slate-100">
                        <Ruler className="w-4 h-4 text-violet-500 mx-auto" />
                        <p className="mt-1 text-sm font-bold text-slate-900">{property.estimatedSize}</p>
                        <p className="text-[10px] text-slate-500">Est. size</p>
                      </div>
                    </div>
                  </div>

                  {/* Base price */}
                  <div className="mt-5 flex items-center justify-between px-1">
                    <span className="text-sm font-medium text-slate-600">
                      Regular window clean
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                      £{property.basePrice}
                    </span>
                  </div>

                  {/* Extras */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2.5 flex items-center gap-2">
                      <Plus className="w-4 h-4 text-violet-500" />
                      Add extras to your quote
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {extraOptions.map((extra) => {
                        const selected = selectedExtras.includes(extra.id);
                        return (
                          <button
                            key={extra.id}
                            onClick={() => toggleExtra(extra.id)}
                            className={cn(
                              "flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all text-left",
                              selected
                                ? "border-violet-500 bg-violet-50 shadow-sm"
                                : "border-slate-100 hover:border-slate-200 bg-white"
                            )}
                          >
                            <span className="text-lg">{extra.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-900 truncate">
                                {extra.label}
                              </p>
                              <p className="text-[11px] text-slate-500">+£{extra.price}</p>
                            </div>
                            {selected && (
                              <Check className="w-4 h-4 text-violet-500 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Total */}
                  <motion.div
                    layout
                    className="mt-6 bg-gradient-to-r from-violet-500 to-brand-500 rounded-2xl p-5 text-white text-center"
                  >
                    <p className="text-sm font-medium text-white/80">
                      Your estimated quote
                    </p>
                    <motion.p
                      key={totalPrice}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-4xl sm:text-5xl font-bold tracking-tight mt-1"
                    >
                      £{totalPrice}
                    </motion.p>
                    <p className="text-sm text-white/70 mt-1">per regular clean</p>

                    {selectedExtras.length > 0 && (
                      <p className="text-xs text-white/60 mt-1">
                        Window clean £{property.basePrice} + extras £{extrasTotal}
                      </p>
                    )}

                    <button className="mt-4 w-full sm:w-auto h-12 px-8 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50 shadow-lg inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                      Book this clean
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
