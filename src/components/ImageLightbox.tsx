import React, { useState } from "react";
import { X, Sparkles, MapPin } from "lucide-react";
import { GALLERY_ITEMS } from "../data/restaurantData";

interface ImageLightboxProps {
  item: (typeof GALLERY_ITEMS)[0] | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 lg:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#192721] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#F5F1E8]/15 cursor-default flex flex-col max-h-[92vh]"
      >
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 text-[#F5F1E8] hover:bg-[#B66A4B] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-black/50 overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-contain sm:object-cover"
            />
          ) : (
            <div className="p-8 text-center text-[#F5F1E8]">
              <Sparkles size={36} className="text-[#B66A4B] mx-auto mb-2" />
              <h4 className="font-serif text-2xl">{item.title}</h4>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 lg:p-8 bg-[#192721] text-[#F5F1E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-0.5 sm:mb-1">
              {item.category} · Colaba, Mumbai
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-[#F5F1E8]">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 font-light mt-0.5 sm:mt-1">
              {item.subtitle}
            </p>
          </div>

          <div className="text-[11px] sm:text-xs text-[#F5F1E8]/60 italic">
            Photography captured at Mag St. Apollo Bandar
          </div>
        </div>
      </div>
    </div>
  );
};
