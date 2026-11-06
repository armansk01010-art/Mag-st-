/**
 * Mag St. Verified Business Information & Culinary Showcase Data
 * Location: 4, Mandlik Rd, Apollo Bandar, Colaba, Mumbai 400001
 * Owners: Gauri Devidayal & Jay Yousuf (Opened in 2021)
 */

export const BUSINESS_INFO = {
  name: "Mag St.",
  formerName: "Mag St. Cafe",
  tagline: "Comfort, Conscious, Community",
  category: "Café, Restaurant & In-house Bakery",
  phone: "+91 72085 44366",
  phoneRaw: "+917208544366",
  address: "4, Mandlik Rd, Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
  hours: "Every Day — 8:00 AM to 11:30 PM",
  owners: "Gauri Devidayal and Jay Yousuf",
  foundedYear: 2021,
  flagshipLocation: "Colaba, Mumbai",
  otherOutlets: ["Lower Parel", "Bandra/Khar"],
  instagram: "@mag_st._restaurant",
  instagramUrl: "https://www.instagram.com/mag_st._restaurant/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mag+St.+4+Mandlik+Rd+Apollo+Bandar+Colaba+Mumbai+400001",
  rating: {
    score: "4.4 / 5",
    reviewCount: "1,056 reviews",
    source: "as listed on Yappe.in",
  },
  indicativePriceForTwo: "₹2,800 – ₹4,000",
  indicativePriceNote: "Indicative estimate from restaurant listings",
  cuisines: ["Bakery", "Pizza", "Asian", "Italian", "Continental", "Desserts"],
  highlights: [
    "Pet-friendly outdoor seating",
    "In-house bakery: Mag St. Bread Co.",
    "Freshly prepared croissants & cruffins",
    "Signature Tres Leches",
    "European-inspired café atmosphere",
  ],
};

export const IMAGES = {
  heroCafe: "/src/assets/images/hero_magst_cafe_1793944068647.jpg",
  lobsterBrioche: "/src/assets/images/food_lobster_brioche_1793944068554.jpg",
  bakerySpread: "/src/assets/images/bakery_croissants_cruffins_1793944069367.jpg",
  outdoorSeating: "/src/assets/images/cafe_outdoor_petfriendly_1793944070329.jpg",
  signaturePizza: "/src/assets/images/food_signature_pizza_1793944070198.jpg",
};

export interface SignatureHighlightItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  ingredients: string[];
  dietary: "Non-Veg" | "Veg";
  highlightBadge: string;
}

export const SIGNATURE_HIGHLIGHTS: SignatureHighlightItem[] = [
  {
    id: "lobster-roll",
    name: "Signature Lobster Roll",
    category: "Continental & Seafood",
    tagline: "Warm poached lobster in house-baked golden brioche",
    description: "Succulent Atlantic lobster gently poached in herbed butter, tossed with Meyer lemon aioli and garden chives, nestled inside our golden toasted Mag St. Bread Co. brioche roll. Served with hand-cut double-crisped fries.",
    image: IMAGES.lobsterBrioche,
    ingredients: ["Atlantic Lobster", "Mag St. Bread Co. Brioche", "Clarified Herbed Butter", "Citrus Aioli", "Chives"],
    dietary: "Non-Veg",
    highlightBadge: "House Classic",
  },
  {
    id: "prosciutto-pizza",
    name: "Wood-Fired Prosciutto Pizza",
    category: "Artisan Pizza",
    tagline: "48-hour cold-fermented sourdough crust & aged prosciutto",
    description: "Hand-stretched sourdough base fired at 450°C, layered with San Marzano pomodoro, creamy fior di latte mozzarella, 18-month aged prosciutto di Parma, peppery wild baby arugula and an extra virgin olive oil finish.",
    image: IMAGES.signaturePizza,
    ingredients: ["48-hr Sourdough Crust", "San Marzano Tomatoes", "Fior di Latte", "Prosciutto di Parma", "Wild Arugula"],
    dietary: "Non-Veg",
    highlightBadge: "Wood-Fired",
  },
  {
    id: "wasabi-prawns",
    name: "Crisp Wasabi Prawns",
    category: "Asian Small Plates",
    tagline: "Crisp tiger prawns with silky wasabi emulsion",
    description: "Plump wild tiger prawns enveloped in light golden tempura batter, tossed in our signature smooth wasabi-lime cream glaze, finished with flying fish roe crunch and tender daikon microgreens.",
    image: IMAGES.lobsterBrioche, // Fallback high-res culinary image
    ingredients: ["Wild Tiger Prawns", "Crisp Tempura Glaze", "House Wasabi Crema", "Lime Zest", "Daikon Sprouts"],
    dietary: "Non-Veg",
    highlightBadge: "Guest Favourite",
  },
  {
    id: "truffle-fries",
    name: "Hand-Cut Truffle Fries",
    category: "Continental Sides",
    tagline: "Italian white truffle oil & 24-month aged Parmigiano",
    description: "Russet potatoes double-fried to golden perfection, generously tossed in aromatic Italian white truffle oil, hand-grated 24-month aged Parmigiano-Reggiano, sea salt flakes and finely minced fresh garden chives.",
    image: IMAGES.heroCafe, // Fallback high-res hospitality image
    ingredients: ["Russet Potatoes", "Italian White Truffle Oil", "24-Month Parmigiano-Reggiano", "Sea Salt", "Chives"],
    dietary: "Veg",
    highlightBadge: "All-Day Staple",
  },
];

export interface MenuItem {
  id: string;
  name: string;
  category: "Bakery" | "Pizza" | "Asian" | "Italian" | "Continental" | "Desserts";
  description: string;
  dietary: "Veg" | "Non-Veg" | "Eggless";
  isSignature?: boolean;
  notes: string;
  image?: string;
}

export const MENU_CATEGORIES = [
  "All",
  "Bakery",
  "Pizza",
  "Asian",
  "Italian",
  "Continental",
  "Desserts",
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Bakery
  {
    id: "b1",
    name: "Mag St. Butter Croissant",
    category: "Bakery",
    description: "Laminated with 84% French butter, fermented over 36 hours for a crisp golden exterior and airy honeycomb interior.",
    dietary: "Veg",
    isSignature: true,
    notes: "Baked fresh every morning at 7:30 AM",
    image: IMAGES.bakerySpread,
  },
  {
    id: "b2",
    name: "Signature Cruffin",
    category: "Bakery",
    description: "Croissant-muffin hybrid with caramelized flaky layers, rolled in citrus sugar and piped with seasonal vanilla custard.",
    dietary: "Veg",
    isSignature: true,
    notes: "Limited daily bake by Mag St. Bread Co.",
    image: IMAGES.bakerySpread,
  },
  {
    id: "b3",
    name: "Country Sourdough Loaf",
    category: "Bakery",
    description: "Naturally leavened wild yeast bread with dark blistered crust, open tender crumb, and balanced lactic acidity.",
    dietary: "Veg",
    notes: "100% stoneground flour & slow cold fermentation",
  },
  {
    id: "b4",
    name: "Pain au Chocolat",
    category: "Bakery",
    description: "Layered flaky viennoiserie pastry folded around two batons of 55% single-origin dark chocolate.",
    dietary: "Veg",
    notes: "Served warm upon request",
  },

  // Pizza
  {
    id: "p1",
    name: "Prosciutto & Burrata Pizza",
    category: "Pizza",
    description: "San Marzano tomatoes, torn Puglia burrata, Prosciutto di Parma, baby rocket, and cold-pressed olive oil.",
    dietary: "Non-Veg",
    isSignature: true,
    notes: "Wood-fired sourdough base",
    image: IMAGES.signaturePizza,
  },
  {
    id: "p2",
    name: "Margherita Tradizionale",
    category: "Pizza",
    description: "San Marzano tomato coulis, fresh fior di latte mozzarella, sweet Genovese basil leaves, and sea salt flakes.",
    dietary: "Veg",
    notes: "Classic Neapolitan style",
  },
  {
    id: "p3",
    name: "Wild Mushroom & Truffle Pizza",
    category: "Pizza",
    description: "Roasted shiitake and oyster mushrooms, thyme, mascarpone cream base, fresh mozzarella, and white truffle oil drizzle.",
    dietary: "Veg",
    isSignature: true,
    notes: "Rich, earthy white base",
  },
  {
    id: "p4",
    name: "Spicy Pepperoni & Hot Honey",
    category: "Pizza",
    description: "Artisan pork pepperoni cups, spicy Calabrian chili tomato sauce, smoked provolone, and wildflower hot honey.",
    dietary: "Non-Veg",
    notes: "Crisp cupped pepperoni edges",
  },

  // Asian
  {
    id: "a1",
    name: "Signature Wasabi Prawns",
    category: "Asian",
    description: "Golden tempura tiger prawns glazed in Japanese wasabi cream emulsion, flying fish roe, and citrus microgreens.",
    dietary: "Non-Veg",
    isSignature: true,
    notes: "Mag St. perennial favourite",
    image: IMAGES.lobsterBrioche,
  },
  {
    id: "a2",
    name: "Crispy Tofu Bao Buns",
    category: "Asian",
    description: "Steamed lotus leaf buns filled with crispy panko-crusted organic tofu, house kimchi slaw, scallions, and gochujang glaze.",
    dietary: "Veg",
    notes: "Two pillowy bao buns per plate",
  },
  {
    id: "a3",
    name: "Truffle Edamame Dumplings",
    category: "Asian",
    description: "Translucent crystal skin parcels filled with crushed edamame, water chestnut, and black truffle broth essence.",
    dietary: "Veg",
    notes: "Delicate basket of 5 steamed dumplings",
  },
  {
    id: "a4",
    name: "Slow-Braised Pork Belly Donburi",
    category: "Asian",
    description: "Kurobuta pork belly braised in sweet soy and star anise, soft molten egg, pickled ginger, and steamed koshihikari rice.",
    dietary: "Non-Veg",
    notes: "Rich umami comfort bowl",
  },

  // Italian
  {
    id: "i1",
    name: "Handcrafted Ricotta Agnolotti",
    category: "Italian",
    description: "Folded silky pasta pillows stuffed with buffalo ricotta and nutmeg, tossed in brown butter, crispy sage, and toasted pine nuts.",
    dietary: "Veg",
    isSignature: true,
    notes: "Rolled fresh daily in our kitchen",
  },
  {
    id: "i2",
    name: "Wild Forest Mushroom Risotto",
    category: "Italian",
    description: "Aquerello carnaroli rice simmered slowly in rich porcini broth, finished with aged pecorino and alpine butter.",
    dietary: "Veg",
    notes: "Creamy mantecatura texture",
  },
  {
    id: "i3",
    name: "Spaghetti alle Vongole",
    category: "Italian",
    description: "Bronze-die spaghetti with fresh clams, white wine, garlic confit, chili slivers, and flat-leaf parsley.",
    dietary: "Non-Veg",
    notes: "Light coastal Italian classic",
  },

  // Continental
  {
    id: "c1",
    name: "The Mag St. Lobster Roll",
    category: "Continental",
    description: "Tender butter-poached lobster in warm toasted brioche roll, lemon-chive aioli, served with hand-cut fries.",
    dietary: "Non-Veg",
    isSignature: true,
    notes: "Flagship dish",
    image: IMAGES.lobsterBrioche,
  },
  {
    id: "c2",
    name: "Avocado Tartine on House Sourdough",
    category: "Continental",
    description: "Hass avocado ribbons on toasted Mag St. Bread Co. country sourdough, pickled shallots, dukkah spice, and radish.",
    dietary: "Veg",
    notes: "All-day breakfast favourite",
  },
  {
    id: "c3",
    name: "Hand-Cut Truffle Fries",
    category: "Continental",
    description: "Double-cooked crispy potato batons coated with white truffle oil, freshly shaved parmesan cheese, and chives.",
    dietary: "Veg",
    isSignature: true,
    notes: "Perfect pairing plate",
  },

  // Desserts
  {
    id: "d1",
    name: "Signature Tres Leches",
    category: "Desserts",
    description: "Featherlight airy sponge soaked in a three-milk vanilla nectar, layered with cloud Chantilly cream and toasted almonds.",
    dietary: "Veg",
    isSignature: true,
    notes: "The city's celebrated dessert icon",
    image: IMAGES.bakerySpread,
  },
  {
    id: "d2",
    name: "Valrhona Dark Chocolate Fondant",
    category: "Desserts",
    description: "Warm molten 70% Guanaja chocolate cake, accompanied by house-churned Tahitian vanilla bean gelato.",
    dietary: "Veg",
    notes: "Baked to order (12 min)",
  },
  {
    id: "d3",
    name: "Burnt Basque Cheesecake",
    category: "Desserts",
    description: "Caramelized dark exterior giving way to a rich, molten cream cheese center, infused with Madagascar vanilla bean.",
    dietary: "Veg",
    notes: "Baked fresh daily by Mag St. Bread Co.",
  },
];

export const BAKERY_SPECIALTIES = [
  {
    title: "Viennoiserie & Croissants",
    description: "Laminated daily using high-fat French butter, yielding golden honeycomb air pockets that shatter upon the first bite.",
    highlight: "Laminated Butter Pastry",
  },
  {
    title: "Signature Cruffins",
    description: "Our signature hybrid of crisp croissant dough baked in muffin molds, coated in spiced sugar and piped with velvety creams.",
    highlight: "House Specialty",
  },
  {
    title: "Signature Tres Leches",
    description: "Soaked in an exquisite reduction of three milks, scented with vanilla bean and crowned with light whipped cream.",
    highlight: "City Renowned",
  },
  {
    title: "Artisanal Sourdough",
    description: "Long cold-fermented country boules, baguettes, and sandwich loaves made with heritage grains and active natural sourdough cultures.",
    highlight: "Wild Yeast Ferment",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Heritage Arched Windows",
    subtitle: "Colaba Morning Sun",
    image: IMAGES.heroCafe,
    aspect: "landscape",
    category: "Atmosphere",
  },
  {
    id: "g2",
    title: "Lobster Roll & Hand-Cut Fries",
    subtitle: "Mag St. Flagship Dish",
    image: IMAGES.lobsterBrioche,
    aspect: "portrait",
    category: "Signature Food",
  },
  {
    id: "g3",
    title: "Mag St. Bread Co. Morning Spread",
    subtitle: "Fresh Croissants & Cruffins",
    image: IMAGES.bakerySpread,
    aspect: "square",
    category: "Bakery",
  },
  {
    id: "g4",
    title: "Pet-Friendly Outdoor Seating",
    subtitle: "Apollo Bandar Courtyard",
    image: IMAGES.outdoorSeating,
    aspect: "landscape",
    category: "Outdoors",
  },
  {
    id: "g5",
    title: "Wood-Fired Prosciutto Pizza",
    subtitle: "San Marzano & Fior di Latte",
    image: IMAGES.signaturePizza,
    aspect: "portrait",
    category: "Signature Food",
  },
];
