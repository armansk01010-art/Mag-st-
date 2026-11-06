import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone, UtensilsCrossed } from "lucide-react";
import { BUSINESS_INFO } from "../data/restaurantData";

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenFullMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenFullMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Signatures", href: "#signatures" },
    { name: "Menu", href: "#menu" },
    { name: "Bread Co.", href: "#bread-co" },
    { name: "Atmosphere", href: "#experience" },
    { name: "Visit", href: "#visit" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F1E8]/95 backdrop-blur-md py-4 border-b border-[#263B32]/10 shadow-[0_4px_20px_rgba(38,59,50,0.04)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className={`font-serif text-2xl sm:text-3xl font-medium tracking-tight whitespace-nowrap shrink-0 transition-colors duration-300 ${
              isScrolled ? "text-[#263B32]" : "text-[#263B32] lg:text-[#F5F1E8]"
            }`}
          >
            Mag St.
          </a>

          {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-[#B66A4B] whitespace-nowrap shrink-0 ${
                  isScrolled ? "text-[#263B32]/80 hover:text-[#B66A4B]" : "text-[#F5F1E8]/90 hover:text-[#B66A4B]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenReservation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${
                isScrolled
                  ? "bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A]"
                  : "bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] lg:bg-[#F5F1E8] lg:text-[#263B32] lg:hover:bg-[#B66A4B] lg:hover:text-[#F5F1E8]"
              }`}
            >
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled
                  ? "text-[#263B32] hover:bg-[#263B32]/10"
                  : "text-[#263B32] lg:text-[#F5F1E8] hover:bg-black/10"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#263B32]/98 text-[#F5F1E8] lg:hidden flex flex-col pt-24 px-8 pb-10 justify-between animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <div className="font-serif text-3xl font-light text-[#F5F1E8] pb-4 border-b border-[#F5F1E8]/10">
              Mag St.
              <span className="block font-sans text-xs tracking-widest text-[#B66A4B] uppercase mt-1">
                Colaba, Mumbai
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#F5F1E8]/90 hover:text-[#B66A4B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#F5F1E8]/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFullMenu();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase border border-[#F5F1E8]/30 rounded-full text-[#F5F1E8] hover:bg-[#F5F1E8]/10 transition-colors"
            >
              <UtensilsCrossed size={16} />
              <span>Explore Full Menu</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 px-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] transition-colors"
            >
              Reserve a Table
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-xs text-[#F5F1E8]/70 hover:text-[#F5F1E8] pt-2"
            >
              <Phone size={14} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
