import appleImg from "../assets/images/products/apple.jpg";
import bananaImg from "../assets/images/products/bananas.jpg";
import oilImg from "../assets/images/products/oil.jpg";
import aataImg from "../assets/images/products/aata.jpg";
import chipsImg from "../assets/images/products/chips.jpg";
import riceImg from "../assets/images/products/rice.jpg";
import breadImg from "../assets/images/products/bread.jpg";
import milkImg from "../assets/images/products/milk.jpg";
import potatoImg from "../assets/images/products/potato.jpg";
import tomatosImg from "../assets/images/products/tomatos.jpg";

export const categories = [
  { name: "Fruits", mr: "फळे", icon: "🍎" },
  { name: "Vegetables", mr: "भाज्या", icon: "🥔" },
  { name: "Grocery", mr: "किराणा", icon: "🛒" },
  { name: "Rice", mr: "तांदूळ", icon: "🍚" },
  { name: "Flour", mr: "पीठ", icon: "🌾" },
  { name: "Oil", mr: "तेल", icon: "🫙" },
  { name: "Dairy", mr: "दुग्धजन्य", icon: "🥛" },
  { name: "Snacks", mr: "नाश्ता", icon: "🍟" },
  { name: "Beverages", mr: "पेये", icon: "🧃" },
  { name: "Household", mr: "घरगुती", icon: "🧺" },
];

export const products = [
  {
    id: 1,
    name: "Fresh Red Apples",
    category: "Fruits",
    price: 180,
    oldPrice: 220,
    unit: "1 kg",
    rating: 4.6,
    stock: "In Stock",
    image: appleImg,
    images: [appleImg],
    weights: ["500 g", "1 kg", "2 kg"],
    description:
      "Crisp, juicy and hand-picked red apples sourced fresh from the orchard every morning. Rich in fibre and a great daily snack for the whole family.",
  },
  {
    id: 2,
    name: "Ripe Bananas",
    category: "Fruits",
    price: 60,
    oldPrice: 75,
    unit: "1 dozen",
    rating: 4.5,
    stock: "In Stock",
    image: bananaImg,
    images: [bananaImg],
    weights: ["6 pcs", "1 dozen", "2 dozen"],
    description:
      "Naturally ripened bananas, a great source of instant energy and potassium. Perfect for breakfast, smoothies or an evening snack.",
  },
  {
    id: 3,
    name: "Farm Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    oldPrice: 50,
    unit: "1 kg",
    rating: 4.4,
    stock: "In Stock",
    image: tomatosImg,
    images: [tomatosImg],
    weights: ["500 g", "1 kg"],
    description:
      "Farm-fresh, juicy tomatoes picked at peak ripeness — perfect for curries, salads and chutneys.",
  },
  {
    id: 4,
    name: "Onion & Potato Combo",
    category: "Vegetables",
    price: 55,
    oldPrice: 70,
    unit: "2 kg",
    rating: 4.3,
    stock: "In Stock",
    image: potatoImg,
    images: [potatoImg],
    weights: ["1 kg", "2 kg", "5 kg"],
    description:
      "Everyday kitchen essentials — a fresh combo pack of quality onions and potatoes at the best local price.",
  },
  {
    id: 5,
    name: "Toned Milk",
    category: "Dairy",
    price: 32,
    oldPrice: 36,
    unit: "500 ml",
    rating: 4.7,
    stock: "In Stock",
    image: milkImg,
    images: [milkImg],
    weights: ["500 ml", "1 L"],
    description:
      "Fresh, pasteurised toned milk delivered daily — pure, hygienic and packed with calcium and protein.",
  },
  {
    id: 6,
    name: "Brown Bread",
    category: "Grocery",
    price: 45,
    oldPrice: 55,
    unit: "400 g",
    rating: 4.4,
    stock: "In Stock",
    image: breadImg,
    images: [breadImg],
    weights: ["400 g"],
    description:
      "Soft, wholesome brown bread baked fresh — a healthy start to your mornings.",
  },
  {
    id: 7,
    name: "Basmati Rice Premium",
    category: "Rice",
    price: 620,
    oldPrice: 700,
    unit: "5 kg",
    rating: 4.8,
    stock: "In Stock",
    image: riceImg,
    images: [riceImg],
    weights: ["1 kg", "5 kg", "10 kg"],
    description:
      "Long-grain, aromatic basmati rice — aged for extra length and a fluffy texture, perfect for daily meals and biryani.",
  },
  {
    id: 8,
    name: "Crispy Potato Chips",
    category: "Snacks",
    price: 20,
    oldPrice: 25,
    unit: "70 g pack",
    rating: 4.2,
    stock: "In Stock",
    image: chipsImg,
    images: [chipsImg],
    weights: ["70 g", "150 g"],
    description:
      "Crunchy, perfectly salted potato chips — the go-to snack for movie nights and tea-time cravings.",
  },
  {
    id: 9,
    name: "Wheat Flour (Atta)",
    category: "Flour",
    price: 260,
    oldPrice: 300,
    unit: "5 kg",
    rating: 4.6,
    stock: "In Stock",
    image: aataImg,
    images: [aataImg],
    weights: ["1 kg", "5 kg", "10 kg"],
    description:
      "Stone-ground, 100% whole wheat flour — soft rotis and chapatis every single time.",
  },
  {
    id: 10,
    name: "Refined Sunflower Oil",
    category: "Oil",
    price: 145,
    oldPrice: 165,
    unit: "1 L",
    rating: 4.5,
    stock: "Limited Stock",
    image: oilImg,
    images: [oilImg],
    weights: ["1 L", "5 L"],
    description:
      "Light, heart-healthy refined sunflower oil for everyday cooking and frying.",
  },
];
