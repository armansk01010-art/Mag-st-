import React, { useState } from "react";
import { Utensils, CheckCircle2, Sparkles } from "lucide-react";
import { SIGNATURE_HIGHLIGHTS, SignatureHighlightItem } from "../data/restaurantData";

interface SignatureHighlightsProps {
  onOpenMenu: () => void;
}

export const SignatureHighlightsSection: React.FC<SignatureHighlightsProps> = ({ onOpenMenu }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="signatures" className="py-16 sm:py-24 lg:py-32 bg-[#263B32] text-[#F5F1E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#B66A4B]" />
            <span>Section 03 · Signature Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#F5F1E8] mb-4 sm:mb-6">
            The Dishes That Define <span className="italic font-light text-[#F5F1E8]/90">Mag St.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#F5F1E8]/80 font-light leading-relaxed">
            From our house-baked brioche to artisan wood-fired sourdough, each signature reflects an unwavering
            dedication to craft, provenance, and memorable flavour.
          </p>
        </div>

        {/* Stacking Cards Container: Adaptive Sticky on Desktop, Clean Flow on Mobile */}
        <div className="relative space-y-8 lg:space-y-16 pb-8 sm:pb-12">
          {SIGNATURE_HIGHLIGHTS.map((item: SignatureHighlightItem, index: number) => {
            const hasError = imageErrors[item.id];
            // Desktop sticky offset
            const desktopTopOffset = 96 + index * 24;

            return (
              <div
                key={item.id}
                style={{
                  top: undefined,
                }}
                className="relative lg:sticky rounded-2xl sm:rounded-3xl bg-[#F5F1E8] text-[#263B32] p-5 sm:p-8 lg:p-12 shadow-[0_12px_36px_rgba(0,0,0,0.25)] border border-[#263B32]/10 transition-all duration-300 origin-top"
                ref={(el) => {
                  if (el && window.innerWidth >= 1024) {
                    el.style.top = `${desktopTopOffset}px`;
                  }
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Text Column */}
                  <div className="lg:col-span-6 space-y-4 sm:space-y-5 order-2 lg:order-1">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#B66A4B]">
                        0{index + 1} // {item.category}
                      </span>
                      <span className="text-[#263B32]/30">·</span>
                      <span className="text-[11px] sm:text-xs font-medium text-[#263B32]/70 bg-[#263B32]/5 px-2.5 py-0.5 rounded-full border border-[#263B32]/10">
                        {item.highlightBadge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-[#263B32] leading-tight">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base font-serif italic text-[#B66A4B]">
                      "{item.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm lg:text-base text-[#263B32]/85 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Key Ingredients */}
                    <div className="pt-3 sm:pt-4 border-t border-[#263B32]/10">
                      <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/60 mb-2">
                        Key Components &amp; Provenance
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#263B32]/85 bg-white/80 px-2.5 py-1 rounded-md border border-[#263B32]/10"
                          >
                            <CheckCircle2 size={12} className="text-[#B66A4B] shrink-0" />
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

                  {/* Image Column */}
                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-[#263B32]/10 shadow-inner group">
                      {!hasError ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={() => handleImageError(item.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#263B32] to-[#192721] text-[#F5F1E8]">
                          <Sparkles size={32} className="text-[#B66A4B] mb-2" />
                          <span className="font-serif text-xl">{item.name}</span>
                          <span className="text-xs text-[#F5F1E8]/60 mt-1">{item.category}</span>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#263B32]/90 text-[#F5F1E8] px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium tracking-wide backdrop-blur-sm border border-[#F5F1E8]/10">
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
