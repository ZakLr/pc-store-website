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
  const categories = ["All", "Electronics", "Clothing", "Books", "Toys"];
  const years = Array.from({ length: 55 }, (_, i) => 2024 - i);

  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trier par prix
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Année
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Disponibilité
          </label>
          <select
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
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
