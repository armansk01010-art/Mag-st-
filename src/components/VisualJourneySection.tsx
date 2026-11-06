import React from "react";
import { GALLERY_ITEMS } from "../data/restaurantData";
import { Eye, Sparkles } from "lucide-react";

interface VisualJourneySectionProps {
  onSelectImage: (item: (typeof GALLERY_ITEMS)[0]) => void;
}

export const VisualJourneySection: React.FC<VisualJourneySectionProps> = ({ onSelectImage }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#F5F1E8] text-[#263B32]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-4">
            <span className="w-8 h-[1px] bg-[#B66A4B]" />
            <span>Section 08 · A Visual Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#263B32] mb-6">
            Life at Mag St.
          </h2>
          <p className="text-base sm:text-lg text-[#263B32]/85 font-light leading-relaxed">
            Morning light across travertine stone, the gentle crackle of freshly baked loaves, and relaxed afternoons
            under Colaba's coastal trees.
          </p>
        </div>

        {/* Asymmetrical Editorial Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Item 1: Large Featured Interior Landscape */}
          <div
            onClick={() => onSelectImage(GALLERY_ITEMS[0])}
            className="md:col-span-8 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg bg-[#263B32]/10 aspect-[16/10]"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F5F1E8] flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold block mb-1">
                  {GALLERY_ITEMS[0].category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                  {GALLERY_ITEMS[0].title}
                </h3>
                <p className="text-xs text-[#F5F1E8]/75 font-light">{GALLERY_ITEMS[0].subtitle}</p>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-[#F5F1E8] group-hover:bg-[#B66A4B] transition-colors">
                <Eye size={16} />
              </div>
            </div>
          </div>

          {/* Item 2: Lobster Roll Portrait */}
          <div
            onClick={() => onSelectImage(GALLERY_ITEMS[1])}
            className="md:col-span-4 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg bg-[#263B32]/10 aspect-[4/5]"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F5F1E8] flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold block mb-1">
                  {GALLERY_ITEMS[1].category}
                </span>
                <h3 className="font-serif text-2xl font-normal">{GALLERY_ITEMS[1].title}</h3>
                <p className="text-xs text-[#F5F1E8]/75 font-light">{GALLERY_ITEMS[1].subtitle}</p>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-[#F5F1E8] group-hover:bg-[#B66A4B] transition-colors">
                <Eye size={16} />
              </div>
            </div>
          </div>

          {/* Item 3: Bakery Spread */}
          <div
            onClick={() => onSelectImage(GALLERY_ITEMS[2])}
            className="md:col-span-4 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg bg-[#263B32]/10 aspect-[4/3] md:aspect-square"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F5F1E8] flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold block mb-1">
                  {GALLERY_ITEMS[2].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal">
                  {GALLERY_ITEMS[2].title}
                </h3>
                <p className="text-xs text-[#F5F1E8]/75 font-light">{GALLERY_ITEMS[2].subtitle}</p>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-[#F5F1E8] group-hover:bg-[#B66A4B] transition-colors">
                <Eye size={16} />
              </div>
            </div>
          </div>

          {/* Item 4: Outdoor Courtyard */}
          <div
            onClick={() => onSelectImage(GALLERY_ITEMS[3])}
            className="md:col-span-4 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg bg-[#263B32]/10 aspect-[4/3] md:aspect-square"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F5F1E8] flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold block mb-1">
                  {GALLERY_ITEMS[3].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal">
                  {GALLERY_ITEMS[3].title}
                </h3>
                <p className="text-xs text-[#F5F1E8]/75 font-light">{GALLERY_ITEMS[3].subtitle}</p>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-[#F5F1E8] group-hover:bg-[#B66A4B] transition-colors">
                <Eye size={16} />
              </div>
            </div>
          </div>

          {/* Item 5: Wood Fired Pizza */}
          <div
            onClick={() => onSelectImage(GALLERY_ITEMS[4])}
            className="md:col-span-4 rounded-3xl overflow-hidden relative group cursor-pointer shadow-lg bg-[#263B32]/10 aspect-[4/3] md:aspect-square"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F5F1E8] flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold block mb-1">
                  {GALLERY_ITEMS[4].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal">
                  {GALLERY_ITEMS[4].title}
                </h3>
                <p className="text-xs text-[#F5F1E8]/75 font-light">{GALLERY_ITEMS[4].subtitle}</p>
              </div>
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-[#F5F1E8] group-hover:bg-[#B66A4B] transition-colors">
                <Eye size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
