"use client";

import { Suspense, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "All";
  const brand = searchParams.get("brand") || "All";
  const maxPrice = Number(searchParams.get("price") || 1000);
  const search = searchParams.get("q") || "";

  function updateParams(next) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(next).forEach(([key, value]) => {
      const paramKey = key === "category" ? "category" : key === "brand" ? "brand" : key === "maxPrice" ? "price" : key;

      if (
        value === undefined ||
        value === "" ||
        (paramKey === "category" && value === "All") ||
        (paramKey === "brand" && value === "All") ||
        (paramKey === "price" && Number(value) >= 1000)
      ) {
        params.delete(paramKey);
      } else {
        params.set(paramKey, value);
      }
    });

    router.push(`/?${params.toString()}`, { scroll: false });
  }

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesBrand = brand === "All" || p.brand === brand;
      const matchesPrice = p.price <= maxPrice;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
    });
  }, [category, brand, maxPrice, search]);

  return (
    <>
      <Header
        searchTerm={search}
        onSearchChange={(value) => updateParams({ q: value })}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-brand-darker">
          Product Listing
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          <Sidebar
            filters={{ category, brand, maxPrice }}
            onChange={(next) => updateParams(next)}
          />

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-100">
                <p className="text-lg font-semibold text-slate-700">
                  No products found
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
