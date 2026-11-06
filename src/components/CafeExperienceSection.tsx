import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Heart, Sun, Coffee, Users2, Sparkles } from "lucide-react";
import { IMAGES } from "../data/restaurantData";

export const CafeExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [imageError, setImageError] = useState(false);

  // Drive clip-path and scale expansion on scroll (ANIMATION 04)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);
  const paddingX = useTransform(scrollYProgress, [0, 1], ["3%", "0%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.4]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-16 sm:py-24 lg:py-32 bg-[#F5F1E8] text-[#263B32] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-3 sm:mb-4">
            <span className="w-8 h-[1px] bg-[#B66A4B]" />
            <span>Section 06 · The Café Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-[#263B32] mb-4 sm:mb-6">
            European Warmth, Mumbai Soul
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#263B32]/85 font-light leading-relaxed">
            Step through arched doorways into a sanctuary of dappled light, aroma of roasted espresso, and pet-friendly
            verandahs welcoming slow mornings and animated evening conversations.
          </p>
        </div>
      </div>

      {/* CLIP-PATH / EXPANSION CONTAINER (ANIMATION 04) */}
      <div className="w-full relative flex justify-center items-center px-4 sm:px-6 lg:px-0">
        <motion.div
          style={{
            scale,
            borderRadius,
            paddingLeft: paddingX,
            paddingRight: paddingX,
          }}
          className="w-full max-w-[1440px] overflow-hidden relative shadow-2xl transition-all duration-300 rounded-2xl lg:rounded-none"
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
            {!imageError ? (
              <img
                src={IMAGES.outdoorSeating}
                alt="Mag St. pet-friendly outdoor dining terrace in Apollo Bandar, Colaba"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#192721] to-[#263B32]" />
            )}

            {/* Measured overlay scrim */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-[#263B32]"
            />

            {/* In-Frame Typography Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-14 text-[#F5F1E8]">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#263B32]/75 backdrop-blur-md border border-[#F5F1E8]/20 text-[11px] sm:text-xs font-medium tracking-wider uppercase text-[#F5F1E8]">
                  <Heart size={13} className="text-[#B66A4B] fill-[#B66A4B]" />
                  <span>Pet-Friendly Courtyard</span>
                </div>
                <div className="text-[11px] sm:text-xs tracking-widest uppercase text-[#F5F1E8]/80 hidden sm:block">
                  Colaba Flagship
                </div>
              </div>

              <div className="max-w-2xl">
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight text-[#F5F1E8] mb-2 sm:mb-4 leading-snug">
                  Where Your Four-Legged Companions Are Always Welcome
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#F5F1E8]/90 font-light leading-relaxed max-w-xl">
                  Our leafy outdoor terrace offers dedicated water bowls, shady spots under historic trees, and a
                  genuinely warm embrace for you and your pets.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Supporting Experience Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10">
            <div className="w-10 h-10 rounded-xl bg-[#263B32] text-[#F5F1E8] flex items-center justify-center mb-3 sm:mb-4">
              <Sun size={18} />
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#263B32] mb-1.5 sm:mb-2">Sunlit Heritage</h4>
            <p className="text-xs sm:text-sm text-[#263B32]/75 leading-relaxed">
              Arched French windows, high ceilings, and warm brass fixtures inspired by European bistros.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10">
            <div className="w-10 h-10 rounded-xl bg-[#B66A4B] text-[#F5F1E8] flex items-center justify-center mb-3 sm:mb-4">
              <Heart size={18} />
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#263B32] mb-1.5 sm:mb-2">Pet-Friendly Living</h4>
            <p className="text-xs sm:text-sm text-[#263B32]/75 leading-relaxed">
              Thoughtfully arranged outdoor seating where pets rest comfortably while you dine.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10">
            <div className="w-10 h-10 rounded-xl bg-[#263B32] text-[#F5F1E8] flex items-center justify-center mb-3 sm:mb-4">
              <Coffee size={18} />
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#263B32] mb-1.5 sm:mb-2">Artisanal Coffee Bar</h4>
            <p className="text-xs sm:text-sm text-[#263B32]/75 leading-relaxed">
              Single-origin roasts, velvety flat whites, and slow pour-overs to accompany your morning reads.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10">
            <div className="w-10 h-10 rounded-xl bg-[#B66A4B] text-[#F5F1E8] flex items-center justify-center mb-3 sm:mb-4">
              <Users2 size={18} />
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-[#263B32] mb-1.5 sm:mb-2">Colaba Community</h4>
            <p className="text-xs sm:text-sm text-[#263B32]/75 leading-relaxed">
              A serene neighbourhood retreat just steps from Apollo Bandar and the Arabian Sea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
