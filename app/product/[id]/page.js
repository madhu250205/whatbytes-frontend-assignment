"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = getProductById(params.id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-slate-700">
            Product not found
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to products
          </button>
        </main>
        <Footer />
      </>
    );
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button
          onClick={() => router.push("/")}
          className="mb-6 flex items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-2">
              <StarRating rating={product.rating} size={18} />
            </div>

            <p className="mt-4 text-3xl font-bold text-brand-darker">
              ${product.price}
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              {product.description}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Category:{" "}
              <span className="font-medium text-slate-700">
                {product.category}
              </span>
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-medium text-slate-700">
                Quantity
              </span>
              <div className="flex items-center rounded-lg border border-slate-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-9 w-9 items-center justify-center text-slate-600 hover:bg-slate-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-light sm:w-64"
            >
              {added ? "Added!" : "Add to Cart"}
            </button>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <h2 className="mb-3 text-lg font-semibold text-slate-800">
                Reviews
              </h2>
              <p className="text-sm text-slate-500">
                No reviews yet. Be the first to review this product.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
