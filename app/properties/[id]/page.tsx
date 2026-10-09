import { getProperty } from "@/app/lib/data";
import {notFound} from "next/navigation";
import PropertyCard from "../PropertyCard";

export default async function PropertyPage({params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  const property=await getProperty(id);

  return (
    <div>
      <h1>Property Page</h1>
      {property ?<PropertyCard property={property}/>:notFound()}
    </div>
  )
}