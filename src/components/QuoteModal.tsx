"use client";

import { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Home, Layers, Plus, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const propertyTypes = [
  { id: "flat", label: "Flat", icon: "🏢", base: 8 },
  { id: "terrace", label: "Terrace", icon: "🏠", base: 12 },
  { id: "semi", label: "Semi-detached", icon: "🏡", base: 15 },
  { id: "detached", label: "Detached", icon: "🏘️", base: 20 },
];

const floorOptions = [
  { id: 1, label: "1 floor", multiplier: 1 },
  { id: 2, label: "2 floors", multiplier: 1.5 },
  { id: 3, label: "3 floors", multiplier: 2.1 },
];

const extras = [
  { id: "conservatory", label: "Conservatory", price: 15 },
  { id: "gutters", label: "Gutter clearing", price: 45 },
  { id: "solar", label: "Solar panels", price: 35 },
  { id: "fascias", label: "Soffits & fascias", price: 40 },
];

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  area?: string;
}

export default function QuoteModal({ open, onClose, area }: QuoteModalProps) {
  const [property, setProperty] = useState<string | null>(null);
  const [floors, setFloors] = useState<number>(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    if (!property) return null;
    const base = propertyTypes.find((p) => p.id === property)?.base ?? 0;
    const floorMult = floorOptions.find((f) => f.id === floors)?.multiplier ?? 1;
    const extrasTotal = selectedExtras.reduce((sum, id) => {
      const extra = extras.find((e) => e.id === id);
      return sum + (extra?.price ?? 0);
    }, 0);
    const windowPrice = Math.round(base * floorMult);
    const total = windowPrice + extrasTotal;
    return { low: total, high: Math.round(total * 1.3) };
  }, [property, floors, selectedExtras]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 pb-3 bg-white border-b border-slate-100 rounded-t-2xl">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Get a price
                  {area && (
                    <span className="text-brand-600"> – {area}</span>
                  )}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Tell us about your property
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* Property Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                  <Home className="w-4 h-4 text-brand-500" />
                  Property type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProperty(type.id)}
                      className={cn(
                        "flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all text-center",
                        property === type.id
                          ? "border-brand-500 bg-brand-50 shadow-sm"
                          : "border-slate-100 hover:border-slate-200 bg-white"
                      )}
                    >
                      <span className="text-2xl">{type.icon}</span>
                      <span className="text-xs font-medium text-slate-700">
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floors */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                  <Layers className="w-4 h-4 text-brand-500" />
                  Number of floors
                </label>
                <div className="flex gap-2">
                  {floorOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFloors(option.id)}
                      className={cn(
                        "flex-1 py-2.5 px-4 rounded-xl border-2 text-sm font-medium transition-all",
                        floors === option.id
                          ? "border-brand-500 bg-brand-50 text-brand-700"
                          : "border-slate-100 text-slate-600 hover:border-slate-200"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                  <Plus className="w-4 h-4 text-brand-500" />
                  Add extras
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl border-2 transition-all text-left",
                        selectedExtras.includes(extra.id)
                          ? "border-brand-500 bg-brand-50"
                          : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {extra.label}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        +£{extra.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Postcode */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                  <MapPin className="w-4 h-4 text-brand-500" />
                  Your postcode
                </label>
                <Input
                  placeholder="e.g. LE11 1AA"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="h-11 rounded-xl text-base"
                />
              </div>

              {/* Result */}
              <AnimatePresence>
                {estimate && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-5 text-center text-white">
                      <p className="text-sm font-medium text-brand-100">
                        Estimated price range
                      </p>
                      <div className="mt-2 flex items-baseline justify-center gap-2">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                          £{estimate.low}
                        </span>
                        <span className="text-xl text-brand-200">–</span>
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                          £{estimate.high}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-brand-100">
                        per regular clean
                      </p>
                      <Button
                        className="mt-3 bg-white text-brand-700 hover:bg-brand-50 font-semibold shadow-lg"
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Book this clean
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
