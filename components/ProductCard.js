"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block bg-slate-50">
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-slate-800 hover:text-brand">
            {product.title}
          </h3>
        </Link>
        <p className="text-lg font-bold text-slate-900">${product.price}</p>
        <StarRating rating={product.rating} />

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
