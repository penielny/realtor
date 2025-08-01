export interface Address {
  id?: number;
  street: string;
  city: string;
  state?: string;
  zip_code?: string;
  country: string;
}

export interface Image {
  id: number;
  house_id: number;
  url: string;
}

export interface FeatureType {
  id: number;
  name: string;
}

export interface Feature {
  id: number;
  type_id: number;
  home_id: number;
}

export interface Home {
  id?: number;
  title: string;
  headline?: string;
  description?: string;
  price: number;
  address_id?: number;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  area?: number;
  location?: Address;
  features?: Feature[];
  created_at?: Date;
  available: boolean;
  selected?: boolean;
  listing_type: 'sale' | 'rent';
  property_type:
    | 'apartment' | 'house' | 'villa' | 'townhouse'
    | 'bungalow' | 'studio' | 'mansion' | 'chalet'
    | 'farmhouse' | 'penthouse' | 'loft' | 'other';
}
