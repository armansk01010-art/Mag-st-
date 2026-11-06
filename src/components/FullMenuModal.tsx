import React, { useState } from "react";
import { X, Search, Sparkles, Utensils, Heart, Info, Check } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, BUSINESS_INFO } from "../data/restaurantData";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose, selectedItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dietaryFilter, setDietaryFilter] = useState<"All" | "Veg" | "Non-Veg">("All");

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary = dietaryFilter === "All" || item.dietary === dietaryFilter;
    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 lg:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#F5F1E8] text-[#263B32] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#263B32]/10">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 lg:p-8 bg-[#263B32] text-[#F5F1E8] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#B66A4B] mb-0.5 sm:mb-1">
              <Utensils size={13} />
              <span>Mag St. Culinary Catalogue</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal">
              Full Restaurant &amp; Bakery Menu
            </h2>
            <p className="text-[11px] sm:text-xs text-[#F5F1E8]/75 mt-0.5">
              Colaba Flagship · 4, Mandlik Rd, Mumbai
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 sm:p-2.5 rounded-full bg-[#192721] text-[#F5F1E8] hover:bg-[#B66A4B] transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-3 sm:p-5 lg:p-6 bg-[#FAF8F5] border-b border-[#263B32]/10 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#263B32]/50"
              />
              <input
                type="text"
                placeholder="Search dishes, bakery, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-full text-[#263B32] placeholder-[#263B32]/40 focus:outline-none focus:border-[#B66A4B]"
              />
            </div>

            {/* Dietary filter */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              {(["All", "Veg", "Non-Veg"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDietaryFilter(filter)}
                  className={`px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full transition-colors cursor-pointer ${
                    dietaryFilter === filter
                      ? "bg-[#263B32] text-[#F5F1E8]"
                      : "bg-[#263B32]/5 text-[#263B32]/70 hover:bg-[#263B32]/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#B66A4B] text-[#F5F1E8]"
                    : "bg-[#263B32]/5 text-[#263B32]/70 hover:bg-[#263B32]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 divide-y divide-[#263B32]/10 space-y-4 sm:space-y-6">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs sm:text-sm text-[#263B32]/60">
              No dishes found matching your selection. Try clearing the search query or filter.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="pt-4 sm:pt-6 first:pt-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B66A4B]">
                        {item.category}
                      </span>
                      {item.isSignature && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#263B32] bg-[#263B32]/10 px-2 py-0.5 rounded-full">
                          <Sparkles size={10} className="text-[#B66A4B]" />
                          <span>Signature</span>
                        </span>
                      )}
                      <span className="text-[10px] font-medium text-[#263B32]/60 bg-black/5 px-1.5 py-0.5 rounded">
                        {item.dietary}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[#263B32]">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#263B32]/80 leading-relaxed font-light mt-1 max-w-2xl">
                      {item.description}
                    </p>

                    <p className="text-[11px] sm:text-xs italic text-[#263B32]/60 mt-1.5">
                      Note: {item.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="p-3 sm:p-4 bg-[#FAF8F5] border-t border-[#263B32]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#263B32]/70 shrink-0">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-[#B66A4B] shrink-0" />
            <span className="text-[11px] sm:text-xs">
              {BUSINESS_INFO.indicativePriceNote}: {BUSINESS_INFO.indicativePriceForTwo} for two.
            </span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-[#B66A4B] font-semibold uppercase tracking-wider hover:underline text-[11px] sm:text-xs"
          >
            Call to Pre-Order ({BUSINESS_INFO.phone})
          </a>
        </div>
      </div>
    </div>
  );
};
