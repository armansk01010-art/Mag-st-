import React, { useState } from "react";
import { X, Calendar, Clock, Users, Phone, Heart, MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/restaurantData";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [seating, setSeating] = useState<"indoor" | "outdoor">("indoor");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Mag St. Colaba, I would like to inquire about a table reservation:\n\nName: ${name || "Guest"}\nGuests: ${guests}\nDate: ${date || "Today/Upcoming"}\nTime: ${time}\nSeating Preference: ${seating === "outdoor" ? "Pet-Friendly Outdoor Courtyard" : "Indoor AC Dining Room"}\nNotes: ${notes || "None"}`
    );
    window.open(`https://wa.me/917208544366?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F5F1E8] text-[#263B32] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#263B32]/10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 lg:p-8 bg-[#263B32] text-[#F5F1E8] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#B66A4B] mb-0.5 sm:mb-1">
              <span>Table Inquiries</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal">
              Reserve at Mag St.
            </h2>
            <p className="text-[11px] sm:text-xs text-[#F5F1E8]/75 mt-0.5">
              4, Mandlik Rd, Apollo Bandar, Colaba, Mumbai
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 sm:p-2.5 rounded-full bg-[#192721] text-[#F5F1E8] hover:bg-[#B66A4B] transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-4 sm:space-y-6">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#263B32] text-[#F5F1E8] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle size={28} className="text-[#B66A4B]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#263B32]">
                Inquiry Details Prepared
              </h3>
              <p className="text-xs sm:text-sm text-[#263B32]/80 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#263B32]">{name || "Guest"}</strong>. You can now connect directly
                with our Colaba team via WhatsApp or telephone to finalize your table confirmation.
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-[#263B32]/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-[#263B32]/80">
                <div><strong>Party:</strong> {guests} · {date || "Preferred Date"} at {time}</div>
                <div><strong>Seating:</strong> {seating === "outdoor" ? "Pet-Friendly Outdoor Courtyard" : "Indoor AC Dining Room"}</div>
                {notes && <div><strong>Special Requests:</strong> {notes}</div>}
              </div>

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#263B32] text-[#F5F1E8] hover:bg-[#192721] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={15} className="text-[#B66A4B]" />
                  <span>Send via WhatsApp</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone size={15} />
                  <span>Call Restaurant</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="p-3 rounded-xl bg-[#263B32]/5 border border-[#263B32]/10 text-xs text-[#263B32]/80 flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-[#B66A4B] shrink-0 mt-0.5" />
                <span>
                  Tables are confirmed directly with our host team. Walk-ins are always warmly welcomed daily from 8:00 AM to 11:30 PM.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohini Sen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5-6 Guests">5-6 Guests</option>
                    <option value="7+ Guests (Large Table)">7+ Guests (Large Table)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                  >
                    <option value="08:30">08:30 AM (Breakfast)</option>
                    <option value="10:30">10:30 AM (Coffee &amp; Viennoiserie)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Afternoon Tea)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1.5">
                  Seating Area Preference
                </label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setSeating("indoor")}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      seating === "indoor"
                        ? "bg-[#263B32] text-[#F5F1E8] border-[#263B32]"
                        : "bg-white text-[#263B32] border-[#263B32]/15 hover:border-[#263B32]/30"
                    }`}
                  >
                    <div className="text-xs font-semibold">Indoor Dining</div>
                    <div className="text-[10px] sm:text-[11px] opacity-75">Air-conditioned bistro</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeating("outdoor")}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      seating === "outdoor"
                        ? "bg-[#263B32] text-[#F5F1E8] border-[#263B32]"
                        : "bg-white text-[#263B32] border-[#263B32]/15 hover:border-[#263B32]/30"
                    }`}
                  >
                    <div className="text-xs font-semibold flex items-center gap-1.5">
                      <Heart size={12} className="text-[#B66A4B] fill-[#B66A4B]" />
                      <span>Pet-Friendly</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] opacity-75">Outdoor terrace</div>
                  </button>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#263B32]/70 mb-1">
                  Special Occasion or Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Bringing our dog, anniversary, allergy notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-[#263B32]/15 rounded-xl text-[#263B32] focus:outline-none focus:border-[#B66A4B]"
                />
              </div>

              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 rounded-full bg-[#B66A4B] text-[#F5F1E8] hover:bg-[#A0573A] text-xs font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  Proceed with Table Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
