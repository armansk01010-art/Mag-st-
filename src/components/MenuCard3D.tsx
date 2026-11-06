import React, { useState, useRef } from "react";
import { MenuItem } from "../data/restaurantData";
import { Sparkles } from "lucide-react";

interface MenuCard3DProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export const MenuCard3D: React.FC<MenuCard3DProps> = ({ item, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const calculateTilt = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max ~10 degrees)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    calculateTilt(e.clientX, e.clientY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsHovered(true);
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => onClick(item)}
      style={{ perspective: "1000px" }}
      className="cursor-pointer group touch-pan-y"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s ease-out",
        }}
        className="relative rounded-2xl bg-[#FAF8F5] border border-[#263B32]/12 p-6 sm:p-7 shadow-[0_8px_30px_rgba(38,59,50,0.06)] group-hover:shadow-[0_20px_45px_rgba(38,59,50,0.15)] transition-shadow duration-300 flex flex-col justify-between h-full min-h-[290px] sm:min-h-[310px]"
      >
        {/* Top Meta with subtle 3D translation */}
        <div style={{ transform: "translateZ(16px)" }}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#B66A4B]">
              {item.category}
            </span>
            <div className="flex items-center gap-2">
              {item.isSignature && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#263B32] bg-[#263B32]/10 px-2.5 py-0.5 rounded-full border border-[#263B32]/10">
                  <Sparkles size={11} className="text-[#B66A4B]" />
                  <span>Signature</span>
                </span>
              )}
              <span className="text-[11px] font-medium text-[#263B32]/70 px-2 py-0.5 rounded bg-black/5">
                {item.dietary}
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-normal tracking-tight text-[#263B32] mb-3 group-hover:text-[#B66A4B] transition-colors leading-snug">
            {item.name}
          </h3>

          <p className="text-sm text-[#263B32]/80 leading-relaxed font-normal mb-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Culinary Note & affordance */}
        <div
          style={{ transform: "translateZ(12px)" }}
          className="pt-4 border-t border-[#263B32]/10 flex items-center justify-between text-xs text-[#263B32]/60"
        >
          <span className="italic truncate max-w-[200px]">{item.notes}</span>
          <span className="text-[#B66A4B] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Details <span>→</span>
          </span>
        </div>

        {/* Specular Glare / Shine Effect on Hover */}
        {isHovered && (
          <div
            style={{
              background: `radial-gradient(circle at ${50 + rotate.y * 3}% ${
                50 + rotate.x * -3
              }%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%)`,
            }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

