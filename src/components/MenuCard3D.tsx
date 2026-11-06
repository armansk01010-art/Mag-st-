import React, { useState, useRef } from "react";
import { MenuItem } from "../data/restaurantData";
import { Sparkles, Utensils } from "lucide-react";

interface MenuCard3DProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export const MenuCard3D: React.FC<MenuCard3DProps> = ({ item, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles (max ~10 degrees)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item)}
      className="perspective-1000 cursor-pointer group"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
        className="transform-style-3d relative rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10 p-6 sm:p-7 shadow-[0_8px_30px_rgba(38,59,50,0.06)] hover:shadow-[0_20px_40px_rgba(38,59,50,0.14)] transition-shadow duration-300 flex flex-col justify-between h-full min-h-[300px]"
      >
        {/* Top Meta */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#B66A4B]">
              {item.category}
            </span>
            <div className="flex items-center gap-2">
              {item.isSignature && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#263B32] bg-[#263B32]/10 px-2.5 py-0.5 rounded-full">
                  <Sparkles size={11} className="text-[#B66A4B]" />
                  <span>Signature</span>
                </span>
              )}
              <span className="text-[11px] font-medium text-[#263B32]/60 px-2 py-0.5 rounded bg-black/5">
                {item.dietary}
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-normal tracking-tight text-[#263B32] mb-3 group-hover:text-[#B66A4B] transition-colors leading-snug">
            {item.name}
          </h3>

          <p className="text-sm text-[#263B32]/75 leading-relaxed font-normal mb-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Culinary Note & Subtle affordance */}
        <div className="pt-4 border-t border-[#263B32]/10 flex items-center justify-between text-xs text-[#263B32]/60">
          <span className="italic truncate max-w-[200px]">{item.notes}</span>
          <span className="text-[#B66A4B] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
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
