import type { Property } from "@/app/lib/data";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="border p-4 rounded shadow-md">
      <h2>{property.address}</h2>
      <p>Rent: {property.rent}</p>
      <p>{property.description}</p>
      <p>Bedrooms: {property.bedrooms}</p>
    </article>
  );
}