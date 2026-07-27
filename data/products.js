export const products = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Nova",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63Epdx-sRlrNyVhWESsWmyAy-KXdgwr55Uuf0_nYbgg&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzqmhCYFN2FJlXbswCj3sctUrrpK0f9HatGy0kLiRfA&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJxyNxpzQjtNAGUHuFtozc0RTyqRa37dOdIOImc9zxA&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvoFfQhQ2UgR2yFRBl1rMG5QJFF6mOOfC36CVnFuerg&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTtLOPCvT6rCZRSpGz9BZWpZgTqQisuOSgtDftsIagA&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bAAsXstg_N6dLVx5JsVv8q7I4QzfjWXv5XeEY5jjxw&s=10",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnesrm6PibrcsQsdO3XCo5Xxl0R2-gvFpmGvAUc3tiDw&s=10",
    description:
      "A soft, breathable cotton t-shirt with a relaxed fit, perfect for layering or wearing on its own.",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Sonic",
    rating: 5,
    image: "https://f.nooncdn.com/p/pzsku/Z7460617E3FB9F4D158C9Z/45/_/1779705467/d1bd00ac-c28f-42dd-8786-a5dd60e567a1.jpg?width=480",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend. A powerful smartphone with an edge-to-edge display, all-day battery, and a versatile camera system.",
  }
];

export const categories = ["All", "Electronics", "Clothing", "Home"];
export const brands = ["All", "Nova", "Sonic", "Trailhead", "Lumex", "Nestwell"];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}