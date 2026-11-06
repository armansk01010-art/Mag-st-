import React from "react";
import { MapPin, Phone, Clock, Heart, Navigation, ExternalLink, Building2, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/restaurantData";

interface VisitSectionProps {
  onOpenReservation: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="visit" className="py-16 sm:py-24 lg:py-32 bg-[#263B32] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#B66A4B]" />
            <span>Section 09 · Visit Mag St.</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#F5F1E8] mb-4 sm:mb-6">
            Join Us in Historic Colaba
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#F5F1E8]/80 font-light leading-relaxed">
            Tucked along Mandlik Road in Apollo Bandar, we invite you to settle into our sunlit indoor dining room
            or relax with your pets in our leafy courtyard.
          </p>
        </div>

        {/* Info Grid + Interactive Map Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col justify-between">
            {/* Address & Hours Card */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#192721] border border-[#F5F1E8]/15 space-y-5 sm:space-y-6 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#B66A4B] text-[#F5F1E8] shrink-0 mt-0.5 sm:mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-1">
                    Flagship Location
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-normal mb-1 sm:mb-2">
                    Mag St. Colaba
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#F5F1E8]/85 leading-relaxed font-light">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#F5F1E8]/60 mt-1.5 sm:mt-2">
                    Neighbourhood: Apollo Bandar, just off Colaba Causeway near the Gateway of India.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#F5F1E8]/10 pt-4 sm:pt-6 flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#263B32] text-[#F5F1E8] border border-[#F5F1E8]/20 shrink-0 mt-0.5 sm:mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-1">
                    Operating Hours
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#F5F1E8] font-normal">
                    {BUSINESS_INFO.hours}
                  </div>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    Morning bakery &amp; coffee from 8:00 AM. Kitchen serves all day until 11:30 PM.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#F5F1E8]/10 pt-4 sm:pt-6 flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#263B32] text-[#F5F1E8] border border-[#F5F1E8]/20 shrink-0 mt-0.5 sm:mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B66A4B] font-semibold mb-1">
                    Telephone
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-serif text-lg sm:text-xl text-[#F5F1E8] hover:text-[#B66A4B] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#F5F1E8]/70 mt-1">
                    Direct line for table inquiries, party bookings &amp; cake orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#192721] border border-[#F5F1E8]/10 flex items-center gap-3">
                <Heart size={18} className="text-[#B66A4B] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F5F1E8]">Pet-Friendly Seating</div>
                  <div className="text-[11px] sm:text-xs text-[#F5F1E8]/70">Outdoor terrace welcomes pets</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#192721] border border-[#F5F1E8]/10 flex items-center gap-3">
                <Building2 size={18} className="text-[#B66A4B] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F5F1E8]">Sister Outlets</div>
                  <div className="text-[11px] sm:text-xs text-[#F5F1E8]/70">{BUSINESS_INFO.otherOutlets.join(" & ")}</div>
                </div>
              </div>
            </div>

            {/* Actions: Get Directions & Call */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Navigation size={15} />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-transparent border border-[#F5F1E8]/30 text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#263B32] text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Phone size={15} />
                <span>Call +91 72085 44366</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Colaba Map Preview */}
          <div className="lg:col-span-6 rounded-2xl sm:rounded-3xl bg-[#192721] border border-[#F5F1E8]/15 p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl overflow-hidden relative min-h-[380px] sm:min-h-[440px] mt-4 lg:mt-0">
            {/* Visual Cartographic Abstract Canvas */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#15221D] p-4 sm:p-6 border border-[#F5F1E8]/10 flex-1 flex flex-col justify-between">
              {/* Geometric road grid illustration */}
              <svg
                viewBox="0 0 600 400"
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              >
                <path d="M 50 0 L 50 400" stroke="#F5F1E8" strokeWidth="6" />
                <path d="M 200 0 L 200 400" stroke="#F5F1E8" strokeWidth="8" />
                <path d="M 450 0 L 450 400" stroke="#F5F1E8" strokeWidth="12" />
                <path d="M 0 150 L 600 150" stroke="#F5F1E8" strokeWidth="10" />
                <path d="M 0 280 L 600 280" stroke="#F5F1E8" strokeWidth="6" />
                <path
                  d="M 520 0 Q 560 200 530 400"
                  stroke="#3A554A"
                  strokeWidth="24"
                  fill="none"
                />
              </svg>

              {/* Landmark Pins */}
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B66A4B] bg-[#263B32]/90 px-2.5 sm:px-3 py-1 rounded-full border border-[#F5F1E8]/10">
                  South Mumbai Heritage Precinct
                </span>
                <span className="text-xs text-[#F5F1E8]/60">Apollo Bandar</span>
              </div>

              {/* Center Map Destination Card */}
              <div className="relative z-10 my-4 sm:my-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#263B32]/95 border border-[#B66A4B]/40 shadow-2xl backdrop-blur-md max-w-md mx-auto text-center w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B66A4B] text-[#F5F1E8] flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <MapPin size={20} />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-normal mb-1">
                  Mag St. Colaba
                </h4>
                <div className="text-xs text-[#F5F1E8]/80 mb-3 sm:mb-4">
                  4, Mandlik Rd, Apollo Bandar, Mumbai 400001
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-[#F5F1E8]/70">
                  <span className="bg-[#192721] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-[#F5F1E8]/10">
                    2 min from Gateway of India
                  </span>
                  <span className="bg-[#192721] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-[#F5F1E8]/10">
                    Behind Taj Mahal Palace
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 flex items-center justify-between text-xs text-[#F5F1E8]/70 pt-3 sm:pt-4 border-t border-[#F5F1E8]/10 flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#B66A4B]" />
                  <span>Verified Location</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B66A4B] hover:text-[#C97957] font-medium flex items-center gap-1"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-[#F5F1E8]/70 font-light">
                Valet assistance available during peak dinner hours.
              </span>
              <button
                onClick={onOpenReservation}
                className="text-xs font-semibold uppercase tracking-wider text-[#B66A4B] hover:text-[#C97957] transition-colors cursor-pointer self-start sm:self-auto"
              >
                Reserve Your Table →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
