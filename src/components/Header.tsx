"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Quote", href: "#quote" },
  { label: "Our Round", href: "#round" },
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 leading-tight tracking-tight">
                  Gray&apos;s
                </span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-tight">
                  Exterior Cleaning
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+441509000000"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call us</span>
              </a>
              <a
                href="#quote"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg shadow-brand-500/25 no-underline"
                )}
              >
                Get instant quote
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-xl">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-1">
                <a
                  href="tel:+441509000000"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors no-underline mb-2"
                >
                  <Phone className="w-4 h-4" />
                  Call us
                </a>
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 no-underline"
                >
                  Get instant quote
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
