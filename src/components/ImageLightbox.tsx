import React from "react";
import { X, Sparkles, MapPin } from "lucide-react";
import { GALLERY_ITEMS } from "../data/restaurantData";

interface ImageLightboxProps {
  item: (typeof GALLERY_ITEMS)[0] | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#192721] rounded-3xl overflow-hidden shadow-2xl border border-[#F5F1E8]/15 cursor-default flex flex-col"
      >
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-[#F5F1E8] hover:bg-[#B66A4B] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/40 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain sm:object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 bg-[#192721] text-[#F5F1E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-1">
              {item.category} · Colaba, Mumbai
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F1E8]">
              {item.title}
            </h3>
            <p className="text-sm text-[#F5F1E8]/75 font-light mt-1">
              {item.subtitle}
            </p>
          </div>

          <div className="text-xs text-[#F5F1E8]/60 italic">
            Photography captured at Mag St. Apollo Bandar
          </div>
        </div>
      </div>
    </div>
  );
};
