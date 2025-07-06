export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export type ListingType = 'sale' | 'rent';
export type PropertyType = 'apartment' | 'house' | 'villa' | 'townhouse' | 'bungalow' | 'studio' | 'mansion' | 'chalet' | 'farmhouse' | 'penthouse' | 'loft' | 'other';

export interface House {
  id: string;
  title: string;
  description: string;
  price: number;
  address: Address;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet or meters
  listedBy: string; // user or agent id
  available: boolean;
  features: string[];
  listingType: ListingType;
  propertyType: PropertyType;
}
