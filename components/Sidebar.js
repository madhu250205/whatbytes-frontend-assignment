"use client";

import { categories, brands } from "@/data/products";

export default function Sidebar({ filters, onChange }) {
  const { category, brand, maxPrice } = filters;

  return (
    <aside className="h-fit w-full shrink-0 space-y-4 lg:w-64">
      <div className="rounded-xl bg-brand p-5 text-white">
        <h2 className="mb-4 text-lg font-bold">Filters</h2>

        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
            Category
          </h3>
          <div className="space-y-2">
            {categories.map((c) => (
              <label
                key={c}
                className="flex cursor-pointer items-center gap-2 text-sm"
              >
                <input
                  type="radio"
                  name="category"
                  checked={category === c}
                  onChange={() => onChange({ category: c })}
                  className="h-4 w-4 accent-white"
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
            Price
          </h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={maxPrice}
            onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
            className="w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-white/80">
            <span>0</span>
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Brand
        </h3>
        <div className="space-y-2">
          {brands.map((b) => (
            <label
              key={b}
              className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
            >
              <input
                type="radio"
                name="brand"
                checked={brand === b}
                onChange={() => onChange({ brand: b })}
                className="h-4 w-4 accent-brand"
              />
              {b}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
