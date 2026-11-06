import React from "react";
import { Utensils, Sparkles, CheckCircle2 } from "lucide-react";
import { SIGNATURE_HIGHLIGHTS } from "../data/restaurantData";

interface SignatureHighlightsProps {
  onOpenMenu: () => void;
}

export const SignatureHighlightsSection: React.FC<SignatureHighlightsProps> = ({ onOpenMenu }) => {
  return (
    <section id="signatures" className="py-24 lg:py-32 bg-[#263B32] text-[#F5F1E8] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-4">
            <span className="w-8 h-[1px] bg-[#B66A4B]" />
            <span>Section 03 · Signature Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#F5F1E8] mb-6">
            The Dishes That Define <span className="italic font-light text-[#F5F1E8]/90">Mag St.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F1E8]/80 font-light leading-relaxed">
            From our house-baked brioche to artisan wood-fired sourdough, each signature reflects an unwavering
            dedication to craft, provenance, and memorable flavour.
          </p>
        </div>

        {/* Sticky Stacking Cards Container (ANIMATION 02) */}
        <div className="relative space-y-16 pb-12">
          {SIGNATURE_HIGHLIGHTS.map((item, index) => {
            // Calculate sticky top offset so cards gracefully layer over each other
            const topOffset = 100 + index * 24; // 100px, 124px, 148px, 172px

            return (
              <div
                key={item.id}
                style={{ top: `${topOffset}px` }}
                className="sticky rounded-3xl bg-[#F5F1E8] text-[#263B32] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-[#263B32]/10 transition-transform duration-500 origin-top"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Story & Details */}
                  <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#B66A4B]">
                        0{index + 1} // {item.category}
                      </span>
                      <span className="text-[#263B32]/30">·</span>
                      <span className="text-xs font-medium text-[#263B32]/70 bg-[#263B32]/5 px-3 py-1 rounded-full border border-[#263B32]/10">
                        {item.highlightBadge}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#263B32] leading-tight">
                      {item.name}
                    </h3>

                    <p className="text-sm sm:text-base font-serif italic text-[#B66A4B]">
                      "{item.tagline}"
                    </p>

                    <p className="text-sm sm:text-base text-[#263B32]/85 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Key Ingredients */}
                    <div className="pt-4 border-t border-[#263B32]/10">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#263B32]/60 mb-2">
                        Key Components &amp; Provenance
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs text-[#263B32]/85 bg-white/70 px-3 py-1 rounded-md border border-[#263B32]/10"
                          >
                            <CheckCircle2 size={12} className="text-[#B66A4B]" />
                            <span>{ing}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenMenu}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#B66A4B] hover:text-[#A0573A] transition-colors group cursor-pointer"
                      >
                        <Utensils size={14} />
                        <span>View on Full Menu</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: High Quality Culinary Photography */}
                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#263B32]/10 shadow-inner group">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-[#263B32]/85 text-[#F5F1E8] px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide backdrop-blur-sm">
                        {item.dietary}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
