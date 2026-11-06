import React from "react";
import { motion } from "motion/react";
import { Star, HeartHandshake, Sparkles, Building2 } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "../data/restaurantData";

export const BrandIntroSection: React.FC = () => {
  // Kinetic Typography Reveal words
  const headingWords = [
    "Crafted",
    "with",
    "care,",
    "inspired",
    "by",
    "Europe,",
    "rooted",
    "in",
    "Mumbai's",
    "vibrant",
    "Colaba.",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="philosophy" className="py-16 sm:py-20 lg:py-28 bg-[#F5F1E8] text-[#263B32] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#B66A4B] mb-6 sm:mb-8">
          <span className="w-8 h-[1px] bg-[#B66A4B]" />
          <span>Section 02 · Brand Philosophy</span>
        </div>

        {/* Kinetic Typography Reveal (ANIMATION 05) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.18] tracking-tight text-[#263B32] max-w-4xl flex flex-wrap gap-x-2.5 sm:gap-x-3 gap-y-1.5 sm:gap-y-2">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block ${
                  word.includes("Europe") || word.includes("Colaba")
                    ? "italic font-light text-[#B66A4B]"
                    : "text-[#263B32]"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Storytelling Grid: Text, Imagery & Verified Business Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Editorial Prose & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-[#263B32]/85 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            <p className="first-letter:font-serif first-letter:text-4xl sm:first-letter:text-5xl first-letter:float-left first-letter:mr-2.5 sm:first-letter:mr-3 first-letter:leading-none first-letter:text-[#263B32]">
              Founded in 2021 by restaurateurs <strong className="font-semibold text-[#263B32]">Gauri Devidayal</strong> and{" "}
              <strong className="font-semibold text-[#263B32]">Jay Yousuf</strong>, Mag St. (formerly known as Mag St. Cafe)
              was born out of a desire to create a sanctuary of warmth in Apollo Bandar, Colaba.
            </p>

            <p>
              Drawing inspiration from historic European bistro culture—where conversations flow easily over freshly brewed
              coffee and warm viennoiserie—Mag St. merges conscious culinary ethics with comforting, unpretentious dining.
              At its heart lies <strong className="font-semibold text-[#263B32]">Mag St. Bread Co.</strong>, our in-house
              artisan bakery dedicated to slow-fermented sourdoughs and hand-laminated pastries.
            </p>

            {/* Three Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-[#263B32]/12">
              <div className="space-y-1">
                <div className="font-serif text-lg sm:text-xl font-normal text-[#263B32]">Comfort</div>
                <div className="text-xs text-[#263B32]/70 leading-relaxed">
                  Homestyle warmth, buttery brioche, and unhurried hospitality.
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-lg sm:text-xl font-normal text-[#263B32]">Conscious</div>
                <div className="text-xs text-[#263B32]/70 leading-relaxed">
                  Sustainably sourced produce, honest ingredients &amp; scratch baking.
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-lg sm:text-xl font-normal text-[#263B32]">Community</div>
                <div className="text-xs text-[#263B32]/70 leading-relaxed">
                  A neighbourhood gathering spot welcoming families, friends &amp; pets.
                </div>
              </div>
            </div>

            {/* Verified Business Metas: Rating, Indicative Price, Outlets */}
            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Rating Card with strict Yappe.in attribution */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#263B32]/5 border border-[#263B32]/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#263B32] text-[#F5F1E8] shrink-0 mt-0.5">
                  <Star size={15} fill="currentColor" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#263B32] flex items-center gap-1.5">
                    <span>{BUSINESS_INFO.rating.score}</span>
                    <span className="text-xs font-normal text-[#263B32]/60">({BUSINESS_INFO.rating.reviewCount})</span>
                  </div>
                  <div className="text-xs text-[#263B32]/70">{BUSINESS_INFO.rating.source}</div>
                </div>
              </div>

              {/* Indicative Price for Two */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#263B32]/5 border border-[#263B32]/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#B66A4B] text-[#F5F1E8] shrink-0 mt-0.5">
                  <Sparkles size={15} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#263B32]">{BUSINESS_INFO.indicativePriceForTwo}</div>
                  <div className="text-xs text-[#263B32]/70">{BUSINESS_INFO.indicativePriceNote}</div>
                </div>
              </div>
            </div>

            {/* Other Outlets Information */}
            <div className="flex items-center gap-2 text-xs text-[#263B32]/70 pt-1 sm:pt-2">
              <Building2 size={14} className="text-[#B66A4B] shrink-0" />
              <span>
                Colaba Flagship (est. 2021) · Also serving at{" "}
                <span className="font-medium text-[#263B32]">
                  {BUSINESS_INFO.otherOutlets.join(" & ")}
                </span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#263B32]/10 bg-[#263B32]">
              <img
                src={IMAGES.outdoorSeating}
                alt="Mag St. pet-friendly outdoor courtyard in Colaba"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#263B32]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-[#F5F1E8]">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#B66A4B] mb-1">
                  <HeartHandshake size={14} />
                  <span>Pet-Friendly Sanctuary</span>
                </div>
                <div className="font-serif text-lg sm:text-2xl font-normal leading-snug">
                  4, Mandlik Rd, Apollo Bandar
                </div>
                <div className="text-xs text-[#F5F1E8]/80 font-light mt-1">
                  Quiet tree-lined Colaba lane, minutes away from the Gateway of India.
                </div>
              </div>
            </div>

            {/* Decorative Architectural Accent */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-2 border-[#B66A4B]/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
