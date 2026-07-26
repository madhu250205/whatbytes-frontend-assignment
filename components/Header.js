"use client";

import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header({ searchTerm = "", onSearchChange }) {
  const { totalItems } = useCart();

  return (
    <header className="bg-brand text-white sticky top-0 z-20 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight">
          Logo
        </Link>

        <div className="relative mx-auto hidden w-full max-w-md flex-1 sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-full bg-white py-2 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
          />
        </div>

        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-lg bg-brand-darker px-4 py-2 text-sm font-medium hover:bg-black/40"
          >
            <span className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold leading-none">
                  {totalItems}
                </span>
              )}
            </span>
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <button
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="px-4 pb-4 sm:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-full bg-white py-2 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-light"
          />
        </div>
      </div>
    </header>
  );
}
