import React, { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "../data/restaurantData";
import { MenuCard3D } from "./MenuCard3D";
import { Utensils, BookOpen, Sparkles } from "lucide-react";

interface MenuPreviewSectionProps {
  onOpenFullMenu: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuPreviewSection: React.FC<MenuPreviewSectionProps> = ({
  onOpenFullMenu,
  onSelectItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? MENU_ITEMS.slice(0, 6)
      : MENU_ITEMS.filter((item) => item.category === activeCategory).slice(0, 6);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-[#F5F1E8] text-[#263B32]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-4">
              <span className="w-8 h-[1px] bg-[#B66A4B]" />
              <span>Section 04 · Explore Our Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#263B32]">
              From Morning Bakes to Evening Feasts
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenFullMenu}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
            >
              <BookOpen size={15} />
              <span>Explore Full Menu</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#263B32] text-[#F5F1E8] shadow-sm"
                    : "bg-[#263B32]/5 text-[#263B32]/80 hover:bg-[#263B32]/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3D Interactive Cards Grid (ANIMATION 03) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <MenuCard3D key={item.id} item={item} onClick={onSelectItem} />
          ))}
        </div>

        {/* Indicative Pricing Note (Strict Compliance with Brief) */}
        <div className="mt-12 p-6 rounded-2xl bg-[#263B32]/5 border border-[#263B32]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#263B32] text-[#F5F1E8]">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#263B32]">
                Indicative Price for Two: ₹2,800 – ₹4,000
              </div>
              <div className="text-xs text-[#263B32]/70">
                Prices vary by selection and beverage pairings. For current daily specials, inquire with our team.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenFullMenu}
            className="text-xs font-semibold uppercase tracking-wider text-[#B66A4B] hover:text-[#A0573A] transition-colors whitespace-nowrap cursor-pointer"
          >
            Browse Full Menu Drawer →
          </button>
        </div>
      </div>
    </section>
  );
};
