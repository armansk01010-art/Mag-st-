import React, { useState } from "react";
import { BAKERY_SPECIALTIES, IMAGES } from "../data/restaurantData";
import { Wheat, Clock, Award, Sparkles } from "lucide-react";

interface BreadCoSectionProps {
  onOpenFullMenu: () => void;
}

export const BreadCoSection: React.FC<BreadCoSectionProps> = ({ onOpenFullMenu }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="bread-co" className="py-16 sm:py-24 lg:py-32 bg-[#263B32] text-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-Brand Header Lockup */}
        <div className="border-b border-[#F5F1E8]/15 pb-8 sm:pb-12 mb-10 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-2 sm:mb-3">
                <Wheat size={15} />
                <span>Section 05 · The In-House Artisan Bakery</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8]">
                Mag St. Bread Co.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm lg:text-base text-[#F5F1E8]/80 font-light leading-relaxed">
              Every loaf, croissant, and pastry is born of natural levain cultures, French butter lamination, and dawn
              baking at our Colaba bakery.
            </p>
          </div>
        </div>

        {/* Editorial Layout: Bakery Photography + Specialties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#F5F1E8]/10 bg-[#192721] group">
              {!imageError ? (
                <img
                  src={IMAGES.bakerySpread}
                  alt="Mag St. Bread Co. freshly baked croissants, cruffins, and signature tres leches"
                  onError={() => setImageError(true)}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full aspect-[4/3] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#192721] to-[#263B32]">
                  <Wheat size={36} className="text-[#B66A4B] mb-2" />
                  <span className="font-serif text-2xl">Mag St. Bread Co.</span>
                  <span className="text-xs text-[#F5F1E8]/60 mt-1">Artisan Morning Bakes</span>
                </div>
              )}
              <div className="p-5 sm:p-8 bg-[#192721]/90 backdrop-blur-sm border-t border-[#F5F1E8]/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-1">
                      Morning Bakery Ritual
                    </div>
                    <div className="font-serif text-lg sm:text-2xl text-[#F5F1E8]">
                      Fresh Out of the Ovens at 8:00 AM
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#F5F1E8]/70 shrink-0">
                    <Clock size={14} className="text-[#B66A4B]" />
                    <span>Daily</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-3 right-3 sm:-top-4 sm:-right-4 bg-[#B66A4B] text-[#F5F1E8] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Small Batch Daily</span>
            </div>
          </div>

          {/* Right Column: 4 Bakery Specialties */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 mt-4 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {BAKERY_SPECIALTIES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#192721]/60 border border-[#F5F1E8]/10 hover:border-[#B66A4B]/40 transition-colors"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B66A4B] mb-1.5">
                    {item.highlight}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-normal mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#F5F1E8]/10">
              <div className="text-xs text-[#F5F1E8]/70 font-light">
                Takeaway loaves, coffee pairings, and celebration cakes available daily.
              </div>
              <button
                onClick={onOpenFullMenu}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#F5F1E8]/30 hover:border-[#B66A4B] hover:text-[#B66A4B] text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                View Bakery Selection →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
