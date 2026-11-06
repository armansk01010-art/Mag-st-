import React from "react";
import { ArrowUp, Instagram, Phone, MapPin, Clock, Utensils, Heart } from "lucide-react";
import { BUSINESS_INFO } from "../data/restaurantData";

interface FooterSectionProps {
  onOpenReservation: () => void;
  onOpenFullMenu: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenReservation,
  onOpenFullMenu,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#192721] text-[#F5F1E8] pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 border-t border-[#F5F1E8]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Closing Headline & Call-to-Action Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#263B32] p-6 sm:p-10 lg:p-14 border border-[#F5F1E8]/15 mb-12 sm:mb-16 lg:mb-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B]">
              <span>Section 10 · Hospitality &amp; Gatherings</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-[#F5F1E8]">
              Your Table, Your Moments, Your Mag St.
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#F5F1E8]/80 font-light max-w-xl leading-relaxed">
              Whether you are dropping by for a morning croissant and cortado, an afternoon lunch with your dog, or a
              wood-fired dinner with loved ones, we look forward to hosting you.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Reserve a Table
              </button>
              <button
                onClick={onOpenFullMenu}
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-full bg-transparent border border-[#F5F1E8]/30 text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#263B32] text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-center"
              >
                <Utensils size={14} />
                <span>Explore Full Menu</span>
              </button>
            </div>
          </div>

          {/* Decorative watermark subtle outline */}
          <div className="absolute right-4 -bottom-10 font-serif text-[140px] lg:text-[180px] font-bold text-[#F5F1E8]/5 select-none pointer-events-none hidden md:block leading-none">
            Mag
          </div>
        </div>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-[#F5F1E8]/10">
          {/* Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F1E8]">
              Mag St.
            </div>
            <div className="text-xs uppercase tracking-widest text-[#B66A4B] font-semibold">
              {BUSINESS_INFO.tagline}
            </div>
            <p className="text-xs sm:text-sm text-[#F5F1E8]/75 leading-relaxed font-light max-w-sm">
              A European-inspired café, restaurant and in-house bakery in Apollo Bandar, Colaba.
              Founded in 2021 by Gauri Devidayal and Jay Yousuf.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#263B32] text-[#F5F1E8] hover:text-[#B66A4B] border border-[#F5F1E8]/15 text-xs transition-colors"
              >
                <Instagram size={14} />
                <span>{BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#B66A4B]">
              Navigation
            </div>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-light text-[#F5F1E8]/80">
              <li>
                <a href="#philosophy" className="hover:text-[#B66A4B] transition-colors">
                  Philosophy &amp; Story
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#B66A4B] transition-colors">
                  Signature Highlights
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#B66A4B] transition-colors">
                  Menu Preview
                </a>
              </li>
              <li>
                <a href="#bread-co" className="hover:text-[#B66A4B] transition-colors">
                  Mag St. Bread Co.
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#B66A4B] transition-colors">
                  The Café Experience
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#B66A4B] transition-colors">
                  Location &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#B66A4B]">
              Colaba Flagship
            </div>
            <div className="text-xs sm:text-sm text-[#F5F1E8]/80 leading-relaxed font-light">
              <div className="flex items-start gap-2 mb-2">
                <MapPin size={15} className="text-[#B66A4B] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={15} className="text-[#B66A4B] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#B66A4B] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-[#B66A4B] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#F5F1E8]/60">
              Sister Outlets: {BUSINESS_INFO.otherOutlets.join(" · ")}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Portfolio Credit & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#F5F1E8]/60">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Mag St. All rights reserved.
          </div>

          {/* PORTFOLIO CREDIT (Mandatory prompt requirement) */}
          <div className="text-center font-light text-[#F5F1E8]/70">
            Website Concept &amp; Design by <span className="text-[#F5F1E8] font-medium">Senzora</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#F5F1E8] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
