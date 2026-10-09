import { getProperty } from "@/app/lib/data";
import {notFound} from "next/navigation";

export default async function PropertyPage({params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  const property=await getProperty(id);

  return (
    <div>
      <h1>Property Page</h1>
      <p>{property?.address ?? notFound()}</p>
    </div>
  )
}