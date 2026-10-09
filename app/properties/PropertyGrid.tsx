import PropertyCard from "./PropertyCard";
import { getProperties } from "@/app/lib/data";
import PropertyFilters from "./PropertyFilters";

export default async function PropertyGrid() {
  const properties = await getProperties();
  return (
    <PropertyFilters properties={properties}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </PropertyFilters>
  );
}
