import React, { useState } from "react";
import { IMAGES } from "../data/restaurantData";
import { Utensils, Check, Sparkles } from "lucide-react";

interface DishFeature {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  notes: string;
  image: string;
  dietary: "Veg" | "Non-Veg";
}

const FEATURED_DISHES: DishFeature[] = [
  {
    id: "dish-1",
    name: "The Mag St. Lobster Roll",
    category: "Continental",
    badge: "Flagship Icon",
    description: "Succulent Atlantic lobster gently poached in herbed butter, Meyer lemon aioli, garden chives, served inside golden toasted Mag St. Bread Co. brioche with hand-cut fries.",
    notes: "Signature toasted brioche",
    image: IMAGES.lobsterBrioche,
    dietary: "Non-Veg",
  },
  {
    id: "dish-2",
    name: "Prosciutto & Burrata Pizza",
    category: "Wood-Fired Pizza",
    badge: "48-Hr Ferment",
    description: "Hand-stretched sourdough base blistered in wood fire, topped with San Marzano pomodoro, creamy Pugliese burrata, aged Prosciutto di Parma, and peppery baby arugula.",
    notes: "Fired at 450°C",
    image: IMAGES.signaturePizza,
    dietary: "Non-Veg",
  },
  {
    id: "dish-3",
    name: "Fresh Morning Viennoiserie",
    category: "Mag St. Bread Co.",
    badge: "Baked at Dawn",
    description: "Golden flaky croissants laminated with 84% French butter, sugar-crusted cruffins filled with vanilla bean cream, and artisan sourdough boules.",
    notes: "Fresh daily at 8:00 AM",
    image: IMAGES.bakerySpread,
    dietary: "Veg",
  },
  {
    id: "dish-4",
    name: "Crisp Wasabi Tiger Prawns",
    category: "Asian Kitchen",
    badge: "Chef's Selection",
    description: "Crispy tempura tiger prawns glazed in silky wasabi-lime cream, accompanied by crunchy tobiko and tender daikon microgreens.",
    notes: "Colaba guest favourite",
    image: IMAGES.lobsterBrioche,
    dietary: "Non-Veg",
  },
];

interface SignatureDishesProps {
  onOpenFullMenu: () => void;
}

export const SignatureDishesSection: React.FC<SignatureDishesProps> = ({ onOpenFullMenu }) => {
  const [selectedId, setSelectedId] = useState<string>("dish-1");
  const activeDish = FEATURED_DISHES.find((d) => d.id === selectedId) || FEATURED_DISHES[0];

  return (
    <section className="py-24 lg:py-32 bg-[#263B32] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-4">
              <span className="w-8 h-[1px] bg-[#B66A4B]" />
              <span>Section 07 · Culinary Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#F5F1E8]">
              Signature Dishes &amp; Creations
            </h2>
          </div>
          <button
            onClick={onOpenFullMenu}
            className="self-start lg:self-auto text-xs font-semibold tracking-wider uppercase text-[#B66A4B] hover:text-[#C97957] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Utensils size={14} />
            <span>View Full Menu Catalogue →</span>
          </button>
        </div>

        {/* Interactive Showcase Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Selector list */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {FEATURED_DISHES.map((dish, i) => {
              const isSelected = dish.id === selectedId;
              return (
                <div
                  key={dish.id}
                  onClick={() => setSelectedId(dish.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#192721] border-[#B66A4B] shadow-lg translate-x-1"
                      : "bg-[#192721]/40 border-[#F5F1E8]/10 hover:border-[#F5F1E8]/30 hover:bg-[#192721]/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B66A4B]">
                      0{i + 1} · {dish.category}
                    </span>
                    <span className="text-[11px] font-medium text-[#F5F1E8]/60 bg-[#F5F1E8]/10 px-2.5 py-0.5 rounded-full">
                      {dish.dietary}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#F5F1E8] mb-1">
                    {dish.name}
                  </h3>
                  <div className="text-xs text-[#F5F1E8]/70 font-light truncate">
                    {dish.notes}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Showcase of Active Dish */}
          <div className="lg:col-span-7 rounded-3xl bg-[#192721] border border-[#F5F1E8]/15 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/20 mb-8 group">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#263B32]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F1E8] border border-[#F5F1E8]/15">
                {activeDish.badge}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B66A4B]">
                  {activeDish.category}
                </span>
                <span className="text-xs text-[#F5F1E8]/60 font-light">
                  Freshly Prepared to Order
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] font-normal tracking-tight">
                {activeDish.name}
              </h3>

              <p className="text-sm sm:text-base text-[#F5F1E8]/85 font-light leading-relaxed">
                {activeDish.description}
              </p>

              <div className="pt-4 border-t border-[#F5F1E8]/10 flex items-center justify-between">
                <div className="text-xs text-[#F5F1E8]/70 italic">
                  Crafted by our culinary team in Colaba.
                </div>
                <button
                  onClick={onOpenFullMenu}
                  className="px-5 py-2 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
