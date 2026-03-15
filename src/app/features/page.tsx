import StreetClean from "@/components/features/StreetClean";
import NearbyActivity from "@/components/features/NearbyActivity";
import SmartPropertyQuote from "@/components/features/SmartPropertyQuote";
import { Droplets } from "lucide-react";

export const metadata = {
  title: "Feature Prototypes | Gray's Exterior Cleaning",
  description:
    "Prototype features demonstrating future scope for Gray's Exterior Cleaning — smart scheduling, local discovery, and AI-powered quoting.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-900">
                Gray&apos;s Exterior Cleaning
              </span>
            </a>
            <a
              href="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Back to site
            </a>
          </div>
        </div>
      </header>

      {/* Page intro */}
      <section className="pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-wider mb-5">
            Prototype features
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            The future of exterior cleaning
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Three high-impact features that demonstrate how technology can
            differentiate the business, improve conversion, and optimise route
            efficiency.
          </p>
        </div>
      </section>

      {/* Feature 1 */}
      <div id="street-clean">
        <StreetClean />
      </div>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-4">
        <div className="border-t border-slate-200" />
      </div>

      {/* Feature 2 */}
      <div id="nearby">
        <NearbyActivity />
      </div>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-4">
        <div className="border-t border-slate-200" />
      </div>

      {/* Feature 3 */}
      <div id="smart-quote">
        <SmartPropertyQuote />
      </div>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-400">
            These are interactive prototypes using mock data. No live backend
            systems are connected.
          </p>
          <a
            href="/"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Back to main site
          </a>
        </div>
      </footer>
    </main>
  );
}
