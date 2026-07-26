"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  const shipping = items.length === 0 ? 0 : 15;
  const tax = Math.round(totalPrice * 0.05 * 100) / 100;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 flex w-fit items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Continue shopping
        </Link>

        <h1 className="mb-6 text-2xl font-bold text-brand-darker">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-100">
            <p className="text-lg font-semibold text-slate-700">
              Your cart is empty
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-light"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <Link
                      href={`/product/${item.id}`}
                      className="font-semibold text-slate-800 hover:text-brand"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-slate-500">${item.price}</p>
                  </div>

                  <div className="flex items-center rounded-lg border border-slate-200">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-50"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <p className="w-20 text-right font-semibold text-slate-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    className="text-slate-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="mb-4 text-lg font-bold text-slate-800">
                Price Summary
              </h2>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-light">
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
