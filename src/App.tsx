/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * MAG ST. — European-Inspired Café, Restaurant & In-House Bakery
 * 4, Mandlik Rd, Apollo Bandar, Colaba, Mumbai 400001
 * Concept & Design Demo by Senzora
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BrandIntroSection } from "./components/BrandIntroSection";
import { SignatureHighlightsSection } from "./components/SignatureHighlightsSection";
import { MenuPreviewSection } from "./components/MenuPreviewSection";
import { BreadCoSection } from "./components/BreadCoSection";
import { CafeExperienceSection } from "./components/CafeExperienceSection";
import { SignatureDishesSection } from "./components/SignatureDishesSection";
import { VisualJourneySection } from "./components/VisualJourneySection";
import { VisitSection } from "./components/VisitSection";
import { FooterSection } from "./components/FooterSection";
import { FullMenuModal } from "./components/FullMenuModal";
import { ReservationModal } from "./components/ReservationModal";
import { ImageLightbox } from "./components/ImageLightbox";
import { MenuItem, GALLERY_ITEMS } from "./data/restaurantData";

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const handleOpenReservation = () => {
    setReservationOpen(true);
  };

  const handleOpenFullMenu = () => {
    setSelectedMenuItem(null);
    setFullMenuOpen(true);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setFullMenuOpen(true);
  };

  const handleVisitUs = () => {
    document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#263B32] font-sans selection:bg-[#B66A4B] selection:text-[#F5F1E8]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onOpenFullMenu={handleOpenFullMenu}
      />

      {/* Main Content: 10 Sections */}
      <main>
        {/* Section 01: Cinematic Hero with Depth Parallax */}
        <HeroSection
          onExploreMenu={handleOpenFullMenu}
          onVisitUs={handleVisitUs}
        />

        {/* Section 02: Brand Introduction with Kinetic Typography */}
        <BrandIntroSection />

        {/* Section 03: Signature Highlights with Sticky Stacking Cards */}
        <SignatureHighlightsSection onOpenMenu={handleOpenFullMenu} />

        {/* Section 04: Explore Our Menu with 3D Interactive Tilt Cards */}
        <MenuPreviewSection
          onOpenFullMenu={handleOpenFullMenu}
          onSelectItem={handleSelectItem}
        />

        {/* Section 05: Mag St. Bread Co. In-House Bakery Feature */}
        <BreadCoSection onOpenFullMenu={handleOpenFullMenu} />

        {/* Section 06: The Café Experience with Clip-Path Image Expansion */}
        <CafeExperienceSection />

        {/* Section 07: Signature Dishes Gourmet Showcase */}
        <SignatureDishesSection onOpenFullMenu={handleOpenFullMenu} />

        {/* Section 08: A Visual Journey Editorial Asymmetrical Gallery */}
        <VisualJourneySection onSelectImage={setActiveGalleryItem} />

        {/* Section 09: Visit Mag St. Verified Information & Map */}
        <VisitSection onOpenReservation={handleOpenReservation} />

        {/* Section 10: Final Closing CTA & Footer with Senzora Portfolio Credit */}
        <FooterSection
          onOpenReservation={handleOpenReservation}
          onOpenFullMenu={handleOpenFullMenu}
        />
      </main>

      {/* Interactive Modals */}
      <FullMenuModal
        isOpen={fullMenuOpen}
        onClose={() => setFullMenuOpen(false)}
        selectedItem={selectedMenuItem}
      />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <ImageLightbox
        item={activeGalleryItem}
        onClose={() => setActiveGalleryItem(null)}
      />
    </div>
  );
}
