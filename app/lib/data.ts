export interface Property {
  id: string;
  address: string;
  rent: number;
  description: string;
  bedrooms: number;
}
const properties: Property[] = [
  {
    id: "1",
    address: "123 Main St",
    rent: 1000,
    description: "A nice property",
    bedrooms: 3,
  },
  {
    id: "2",
    address: "123 Main St",
    rent: 1000,
    description: "A nice property",
    bedrooms: 3,
  },
];

export async function getProperties(): Promise<Property[]> {
  return properties;
}

export async function getProperty(id: string): Promise<Property | undefined> {
  return properties.find((property) => property.id === id);
}

export interface Lease {
  id: string;
  propertyId: string;
  tenantName: string;
  startDate: string;
  endDate: string;
  rent: number;
}
const leases: Lease[] = [
  {
    id: "1",
    propertyId: "1",
    tenantName: "John Doe",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    rent: 1000,
  },
];

export async function getLeases(): Promise<Lease[]> {
  return leases;
}

export async function getLease(id: string): Promise<Lease | undefined> {
  return leases.find((lease) => lease.id === id);
}

export interface MaintenanceRequest {
  id: string;
  propertyId: string;
  description: string;
  status: "open" | "in progress" | "closed";
}
const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: "1",
    propertyId: "1",
    description: "Broken window",
    status: "open",
  },
];

export async function getMaintenanceRequests(): Promise<MaintenanceRequest[]> {
  return maintenanceRequests;
}

export async function getMaintenanceRequest(
  id: string,
): Promise<MaintenanceRequest | undefined> {
  return maintenanceRequests.find(
    (maintenanceRequest) => maintenanceRequest.id === id,
  );
}
