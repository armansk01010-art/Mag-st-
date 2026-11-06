import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, MapPin, Compass, Clock, Utensils, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { BUSINESS_INFO, IMAGES } from "../data/restaurantData";

interface HeroSectionProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu, onVisitUs }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Scroll parallax
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const textY = useTransform(scrollY, [0, 800], [0, 80]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0.2]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Subtle mouse depth on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-end lg:items-center overflow-hidden bg-[#263B32] pb-16 pt-24 sm:pt-28 lg:py-0"
    >
      {/* Background Cinematic Photo with Scroll & Mouse Parallax */}
      <motion.div
        style={{
          y: bgY,
          x: isDesktop ? mousePos.x * -12 : 0,
          scale: 1.08,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute inset-0 z-0 origin-center"
      >
        {!imageError ? (
          <img
            src={IMAGES.heroCafe}
            alt="Mag St. Café interior in Colaba Mumbai with heritage arched windows"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#192721] via-[#263B32] to-[#121c17]" />
        )}
        {/* Measured Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#263B32] via-[#263B32]/50 to-[#263B32]/30 lg:bg-gradient-to-r lg:from-[#263B32]/90 lg:via-[#263B32]/50 lg:to-transparent" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end lg:items-center">
          {/* Main Text Content */}
          <motion.div
            style={{
              y: textY,
              x: isDesktop ? mousePos.x * 6 : 0,
              opacity: opacityFade,
            }}
            transition={{ type: "spring", stiffness: 45, damping: 25 }}
            className="lg:col-span-8 max-w-2xl text-[#F5F1E8]"
          >
            {/* Tagline / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#F5F1E8]/80 mb-3 sm:mb-4 flex-wrap"
            >
              <span className="w-6 h-[1px] bg-[#B66A4B]" />
              <span>{BUSINESS_INFO.tagline}</span>
              <span className="text-[#F5F1E8]/40">·</span>
              <span>Colaba, Mumbai</span>
            </motion.div>

            {/* Staggered Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] sm:leading-[1.04] tracking-tight mb-4 sm:mb-6 text-balance text-[#F5F1E8]">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                className="block"
              >
                Good Food.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                className="block italic font-light text-[#F5F1E8]/95"
              >
                Beautiful Moments.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                className="block font-medium text-[#F5F1E8]"
              >
                Mag St.
              </motion.span>
            </h1>

            {/* Introductory Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-sm sm:text-base lg:text-lg text-[#F5F1E8]/90 max-w-xl font-light leading-relaxed mb-6 sm:mb-8"
            >
              A European-inspired café, dining room and in-house bakery nestled in Apollo Bandar, Colaba.
              Crafting honest flavours, morning viennoiserie, and memorable hospitality since 2021.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#B66A4B] text-[#F5F1E8] rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#A0573A] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Utensils size={15} />
                <span>Explore Menu</span>
              </button>

              <button
                onClick={onVisitUs}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent border border-[#F5F1E8]/40 text-[#F5F1E8] rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#F5F1E8] hover:text-[#263B32] hover:border-[#F5F1E8] cursor-pointer flex items-center justify-center gap-2"
              >
                <MapPin size={15} />
                <span>Visit Us</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Editorial Badge (Desktop) */}
          <motion.div
            style={{
              y: textY,
              x: isDesktop ? mousePos.x * -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 35, damping: 25 }}
            className="lg:col-span-4 hidden lg:flex flex-col items-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="bg-[#F5F1E8]/95 text-[#263B32] p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs border border-[#263B32]/10"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B66A4B] mb-2">
                <Clock size={14} />
                <span>Open Daily</span>
              </div>
              <div className="font-serif text-xl font-normal leading-snug mb-2">
                8:00 AM — 11:30 PM
              </div>
              <div className="text-xs text-[#263B32]/80 leading-relaxed pb-3 border-b border-[#263B32]/10 mb-3">
                Breakfast, in-house bakery &amp; coffee from dawn. Cocktails, artisanal pizza &amp; dinner till late.
              </div>
              <div className="flex items-center justify-between text-xs text-[#263B32]/70">
                <span className="flex items-center gap-1.5">
                  <Compass size={13} className="text-[#B66A4B]" />
                  <span>Mandlik Rd, Colaba</span>
                </span>
                <span className="font-medium text-[#263B32]">Pet-Friendly</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 sm:gap-2 text-[#F5F1E8]/60 hover:text-[#F5F1E8] transition-colors cursor-pointer pointer-events-auto"
        onClick={() => {
          document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
};
