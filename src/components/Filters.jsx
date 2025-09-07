import React from "react";

export default function Filters({
  year,
  setYear,
  category,
  setCategory,
  priceSort,
  setPriceSort,
  availability,
  setAvailability,
}) {
  const categories = [
    "All",
    "Laptop",
    "Gaming-Laptop",
    "Desktop",
    "Monitor",
    "Accessory",
    "Component",
  ];
  const years = Array.from({ length: 55 }, (_, i) => 2024 - i);

  return (
    <div className="w-full p-6 bg-[var(--color-background)] rounded-xl shadow-[var(--color-shadow)] border border-[var(--color-border)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category Filter */}
        <div className="w-full">
          <label className="block text-base font-semibold text-[var(--color-text)] mb-2">
            Catégorie
          </label>
          <select
            className="w-full p-3 h-12 border border-[var(--color-border)] rounded-lg bg-[var(--color-background-secondary)] text-[var(--color-text)] text-base focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors duration-200 hover:border-[var(--color-accent)]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat === "All" ? "" : cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price Sort Filter */}
        <div className="w-full">
          <label className="block text-base font-semibold text-[var(--color-text)] mb-2">
            Trier par prix
          </label>
          <select
            className="w-full p-3 h-12 border border-[var(--color-border)] rounded-lg bg-[var(--color-background-secondary)] text-[var(--color-text)] text-base focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors duration-200 hover:border-[var(--color-accent)]"
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="">Par défaut</option>
            <option value="asc">Prix croissant</option>
            <option value="desc">Prix décroissant</option>
          </select>
        </div>

        {/* Year Filter */}
        <div className="w-full">
          <label className="block text-base font-semibold text-[var(--color-text)] mb-2">
            Année
          </label>
          <select
            className="w-full p-3 h-12 border border-[var(--color-border)] rounded-lg bg-[var(--color-background-secondary)] text-[var(--color-text)] text-base focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors duration-200 hover:border-[var(--color-accent)]"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Toutes les années</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div className="w-full">
          <label className="block text-base font-semibold text-[var(--color-text)] mb-2">
            Disponibilité
          </label>
          <select
            className="w-full p-3 h-12 border border-[var(--color-border)] rounded-lg bg-[var(--color-background-secondary)] text-[var(--color-text)] text-base focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors duration-200 hover:border-[var(--color-accent)]"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="">Tous</option>
            <option value="in-stock">En stock</option>
            <option value="out-of-stock">Rupture de stock</option>
          </select>
        </div>
      </div>
    </div>
  );
}
