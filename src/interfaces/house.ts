export type ListingType = 'sale' | 'rent';
export type PropertyType = 'apartment' | 'house' | 'villa' | 'townhouse' | 'bungalow' | 'studio' | 'mansion' | 'chalet' | 'farmhouse' | 'penthouse' | 'loft' | 'other';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Feature {
  type: {
    name: string;
  };
}

export interface Image {
  id: number;
  url: string;
  home_id: number;
}

export interface House {
  id: number;
  title: string;
  headline: string;
  description: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  available: boolean;
  sponsored: boolean;
  listing_type: 'sale' | 'rent';
  property_type: 'apartment' | 'house' | string;
  created_at: string;
  address_id: number;
  address: Address;
  features: Feature[];
  images: Image[];
}


export type IQueryResponse<T> = {
  homes: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }
};

export type IResponse<T> = {
  message?: string;
  data?: T;
  error?: boolean;
};