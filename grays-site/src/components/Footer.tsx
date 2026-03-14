"use client";

import { Droplets, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight tracking-tight">
                  Gray&apos;s
                </span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-tight">
                  Exterior Cleaning
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
              Professional exterior cleaning services across Leicestershire.
              Trusted by 650+ regular customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Window cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gutter clearing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Soffits & fascias</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Solar panel cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conservatory roofs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#quote" className="hover:text-white transition-colors">Get a quote</a></li>
              <li><a href="#round" className="hover:text-white transition-colors">Join our round</a></li>
              <li><a href="#plans" className="hover:text-white transition-colors">Cleaning plans</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <a href="tel:+441509000000" className="hover:text-white transition-colors">
                  01509 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <a href="mailto:hello@graysexteriorcleaning.com" className="hover:text-white transition-colors">
                  hello@graysexteriorcleaning.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>Loughborough, Leicestershire</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Gray&apos;s Exterior Cleaning. All rights reserved.</p>
          <p>
            Prototype built with purpose — a vision of what&apos;s possible.
          </p>
        </div>
      </div>
    </footer>
  );
}
