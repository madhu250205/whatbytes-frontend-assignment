export const products = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Nova",
    rating: 4,
    image: "https://picsum.photos/seed/running-shoes/500/500",
    description:
      "Lightweight running shoes built for everyday training. Breathable mesh upper, cushioned midsole, and a durable rubber outsole for reliable grip on any surface.",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    brand: "Sonic",
    rating: 4,
    image: "https://picsum.photos/seed/wireless-headphones/500/500",
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and quick-charge support for all-day listening.",
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    category: "Clothing",
    brand: "Trailhead",
    rating: 5,
    image: "https://picsum.photos/seed/backpack/500/500",
    description:
      "A durable everyday backpack with a padded laptop sleeve, multiple compartments, and water-resistant fabric for commuting or travel.",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    brand: "Sonic",
    rating: 4,
    image: "https://picsum.photos/seed/smartwatch/500/500",
    description:
      "Track your workouts, heart rate, and sleep with this always-on smartwatch. Water resistant with a week-long battery life.",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    brand: "Nova",
    rating: 3,
    image: "https://picsum.photos/seed/sunglasses/500/500",
    description:
      "Polarized UV-protection sunglasses with a lightweight acetate frame, designed for everyday wear and long-lasting comfort.",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    brand: "Lumex",
    rating: 5,
    image: "https://picsum.photos/seed/digital-camera/500/500",
    description:
      "A compact digital camera with a 24MP sensor, 4K video recording, and a fast autofocus system for crisp, detailed shots.",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    brand: "Trailhead",
    rating: 4,
    image: "https://picsum.photos/seed/t-shirt/500/500",
    description:
      "A soft, breathable cotton t-shirt with a relaxed fit, perfect for layering or wearing on its own.",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Sonic",
    rating: 4,
    image: "https://picsum.photos/seed/smartphone/500/500",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend. A powerful smartphone with an edge-to-edge display, all-day battery, and a versatile camera system.",
  },
  {
    id: "9",
    title: "Table Lamp",
    price: 45,
    category: "Home",
    brand: "Nestwell",
    rating: 4,
    image: "https://picsum.photos/seed/table-lamp/500/500",
    description:
      "A warm-toned table lamp with a fabric shade and a sturdy ceramic base, ideal for reading nooks and bedside tables.",
  },
  {
    id: "10",
    title: "Coffee Mug Set",
    price: 25,
    category: "Home",
    brand: "Nestwell",
    rating: 5,
    image: "https://picsum.photos/seed/coffee-mug-set/500/500",
    description:
      "A set of four stoneware coffee mugs, dishwasher and microwave safe, finished with a smooth matte glaze.",
  },
  {
    id: "11",
    title: "Throw Blanket",
    price: 39,
    category: "Home",
    brand: "Nestwell",
    rating: 4,
    image: "https://picsum.photos/seed/throw-blanket/500/500",
    description:
      "A cozy woven throw blanket, soft to the touch and perfect for the couch or bed on cooler evenings.",
  },
  {
    id: "12",
    title: "Bluetooth Speaker",
    price: 79,
    category: "Electronics",
    brand: "Sonic",
    rating: 4,
    image: "https://picsum.photos/seed/bluetooth-speaker/500/500",
    description:
      "A portable Bluetooth speaker with rich bass, 12-hour battery life, and an IPX7 waterproof rating.",
  },
];

export const categories = ["All", "Electronics", "Clothing", "Home"];
export const brands = ["All", "Nova", "Sonic", "Trailhead", "Lumex", "Nestwell"];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
