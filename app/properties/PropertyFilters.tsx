"use client";
import { Children, useState, type ReactNode } from "react";
import type { Property } from "@/app/lib/data";

export default function PropertyFilters({
  properties,
  children,
}: {
  properties: Property[];
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const cards = Children.toArray(children);
  const normalizedSearch = search.trim().toLowerCase();
  const filteredCards = properties
    .map((property, index) => ({ property, card: cards[index] }))
    .filter(({ property }) =>
      property.address.toLowerCase().includes(normalizedSearch),
    );

  return (
    <>
      <label htmlFor="property-search">Search properties</label>
      <input
        id="property-search"
        type="search"
        placeholder="Search by address"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <p aria-live="polite">
        {filteredCards.length} {filteredCards.length === 1 ? "property" : "properties"}
      </p>
      {filteredCards.length > 0 ? (
        <section aria-label="Property listings" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map(({ card }) => card)}
        </section>
      ) : (
        <p>No properties match your search.</p>
      )}
    </>
  );
}
