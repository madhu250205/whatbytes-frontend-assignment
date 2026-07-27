"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  // Check if this card is the Smartphone featured card
  const isSmartphone = product.id === "8" || product.title.toLowerCase().includes("smartphone");

  // 1. Smartphone Side-by-Side Featured Card (Matches PDF Mockup)
  if (isSmartphone) {
    return (
      <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md gap-6">
        {/* Left Side: Large Phone Image */}
        <div className="relative aspect-[3/4] w-full sm:w-1/2 min-h-[260px] rounded-lg bg-slate-50 p-4 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-2"
          />
        </div>

        {/* Right Side: Details & Actions */}
        <div className="flex w-full sm:w-1/2 flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
            <p className="text-xl font-bold text-slate-900 mt-1">${product.price}</p>
            
            <div className="my-3">
              <StarRating rating={product.rating} />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed my-3">
              {product.description}
            </p>

            <div className="mt-4 mb-6">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Category
              </span>
              <span className="text-sm font-medium text-slate-800">
                {product.category}
              </span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-light shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  // 2. Standard Product Card Layout
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block bg-slate-50 p-4">
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-2"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex flex-col gap-1">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-slate-800 hover:text-brand truncate">
              {product.title}
            </h3>
          </Link>
          <p className="text-lg font-bold text-slate-900">${product.price}</p>
          <StarRating rating={product.rating} />
        </div>

        <button
          onClick={() => addToCart(product, 1)}
          className="mt-3 w-full rounded-lg bg-brand py-2 text-sm font-semibold text-white transition hover:bg-brand-light"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
