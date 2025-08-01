import { House, Address } from '../interfaces/house';

export const SAMPLE_HOUSES: House[] = [
  {
    id: 1,
    title: 'Modern Family Home',
    description: 'A beautiful modern family home with spacious garden and pool.',
    price: 450000,
    address: {
      street: '12 Independence Ave',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-123-4567',
      country: 'Ghana',
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        id: 0,
        home_id: 0
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        id: 0,
        home_id: 0
      },
      {
        url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961',
        id: 0,
        home_id: 0
      },
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    available: true,
    features: [
      { type: { name: 'Pool' } },
      { type: { name: 'Garage' } },
      { type: { name: 'Garden' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    description: 'Cozy apartment in the heart of the city, close to all amenities.',
    price: 320000,
    address: {
      street: '5 Oxford Street',
      city: 'Osu',
      state: 'Greater Accra',
      zipCode: 'GA-456-7890',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', id: 0, home_id: 0 }
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    available: true,
    features: [
      { type: { name: 'Balcony' } },
      { type: { name: 'Elevator' } }
    ],
    listing_type: 'rent',
    property_type: 'apartment',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 3,
    title: 'Luxury Beachfront Villa',
    description: 'Stunning villa with ocean views, private beach access, and modern amenities.',
    price: 1200000,
    address: {
      street: '1 Labadi Beach Road',
      city: 'Labadi',
      state: 'Greater Accra',
      zipCode: 'GA-789-1234',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', id: 0, home_id: 0 },
      { url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', id: 0, home_id: 0 },
    ],
    bedrooms: 5,
    bathrooms: 5,
    area: 5000,
    available: false,
    features: [
      { type: { name: 'Beachfront' } },
      { type: { name: 'Infinity Pool' } },
      { type: { name: 'Home Theater' } },
      { type: { name: 'Smart Home' } }
    ],
    listing_type: 'sale',
    property_type: 'villa',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 4,
    title: 'Suburban Starter Home',
    description: 'Affordable single-family home in a quiet neighborhood, perfect for first-time buyers.',
    price: 210000,
    address: {
      street: '23 Spintex Road',
      city: 'Tema',
      state: 'Greater Accra',
      zipCode: 'GE-234-5678',
      country: 'Ghana',
    },
    images: [
      { url: 'https://static.wixstatic.com/media/6800cb_9bf2a114a40249fc8a8364ae60993b0a~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85,enc_avif,quality_auto/6800cb_9bf2a114a40249fc8a8364ae60993b0a~mv2.jpg', id: 0, home_id: 0 },
      { url: 'https://static.wixstatic.com/media/6800cb_350ac90c4d454ff191c2d97af0a64ca2~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85,enc_avif,quality_auto/6800cb_350ac90c4d454ff191c2d97af0a64ca2~mv2.jpg', id: 0, home_id: 0 },
      { url: 'https://static.wixstatic.com/media/6800cb_95e9451ff60a49938d7c182c39b2f236~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85,enc_avif,quality_auto/6800cb_95e9451ff60a49938d7c182c39b2f236~mv2.jpg', id: 0, home_id: 0 },
      { url: 'https://static.wixstatic.com/media/6800cb_e74dfbe82615441ebd4e67eb54c06d70~mv2.jpg/v1/fill/w_768,h_432,al_c,q_80,enc_avif,quality_auto/6800cb_e74dfbe82615441ebd4e67eb54c06d70~mv2.jpg', id: 0, home_id: 0 },
      { url: 'https://static.wixstatic.com/media/6800cb_4ef567f44d1d4c42b068d76114a0ee01~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85,enc_avif,quality_auto/6800cb_4ef567f44d1d4c42b068d76114a0ee01~mv2.jpg', id: 0, home_id: 0 },
      { url: 'https://static.wixstatic.com/media/6800cb_2a8d9659d05949b7837b6b37b7b4fcf7~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85,enc_avif,quality_auto/6800cb_2a8d9659d05949b7837b6b37b7b4fcf7~mv2.jpg', id: 0, home_id: 0 }
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    available: true,
    features: [
      { type: { name: 'Garage' } },
      { type: { name: 'Basement' } },
      { type: { name: 'Fenced Yard' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 5,
    title: 'Urban Loft',
    description: 'Trendy loft apartment with open floor plan and city skyline views.',
    price: 540000,
    address: {
      street: '15 Liberation Road',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-321-6549',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', id: 0, home_id: 0 }
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 900,
    available: true,
    features: [
      { type: { name: 'Open Floor Plan' } },
      { type: { name: 'Rooftop Access' } },
      { type: { name: 'Pet Friendly' } }
    ],
    listing_type: 'rent',
    property_type: 'loft',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 6,
    title: 'Mountain Cabin Retreat',
    description: 'Rustic cabin with breathtaking mountain views and hiking trails nearby.',
    price: 375000,
    address: {
      street: '7 Aburi Hills',
      city: 'Aburi',
      state: 'Eastern Region',
      zipCode: 'ER-111-2222',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', id: 0, home_id: 0 }
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    available: true,
    features: [
      { type: { name: 'Fireplace' } },
      { type: { name: 'Deck' } },
      { type: { name: 'Mountain View' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 7,
    title: 'Historic Townhouse',
    description: 'Charming townhouse in a historic district, recently renovated.',
    price: 600000,
    address: {
      street: '10 Cape Coast Castle Road',
      city: 'Cape Coast',
      state: 'Central Region',
      zipCode: 'CR-333-4444',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', id: 0, home_id: 0 }
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    available: true,
    features: [
      { type: { name: 'Historic' } },
      { type: { name: 'Courtyard' } },
      { type: { name: 'Renovated' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 8,
    title: 'Country Farmhouse',
    description: 'Spacious farmhouse with barn and acres of land, ideal for horses.',
    price: 480000,
    address: {
      street: '3 Kumasi Road',
      city: 'Kumasi',
      state: 'Ashanti Region',
      zipCode: 'AS-555-6666',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', id: 0, home_id: 0 }
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    available: true,
    features: [
      { type: { name: 'Barn' } },
      { type: { name: 'Acreage' } },
      { type: { name: 'Wraparound Porch' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 9,
    title: 'Lakefront Cottage',
    description: 'Cozy cottage with private dock and beautiful lake views.',
    price: 390000,
    address: {
      street: '22 Volta Lake Road',
      city: 'Akosombo',
      state: 'Eastern Region',
      zipCode: 'ER-777-8888',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', id: 0, home_id: 0 }
    ],
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    available: false,
    features: [
      { type: { name: 'Lakefront' } },
      { type: { name: 'Dock' } },
      { type: { name: 'Firepit' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 10,
    title: 'Eco-Friendly Smart Home',
    description: 'Modern home with solar panels, smart appliances, and energy-efficient design.',
    price: 700000,
    address: {
      street: '8 Ridge Road',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-654-9870',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', id: 0, home_id: 0 }
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    available: true,
    features: [
      { type: { name: 'Solar Panels' } },
      { type: { name: 'Smart Home' } },
      { type: { name: 'EV Charger' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 11,
    title: 'Desert Oasis',
    description: 'Beautiful home with pool and desert landscaping, perfect for warm climates.',
    price: 520000,
    address: {
      street: '4 Tamale Road',
      city: 'Tamale',
      state: 'Northern Region',
      zipCode: 'NR-111-3333',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6', id: 0, home_id: 0 }
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    available: true,
    features: [
      { type: { name: 'Pool' } },
      { type: { name: 'Desert Landscaping' } },
      { type: { name: 'Patio' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 12,
    title: 'Penthouse Suite',
    description: 'Luxury penthouse with panoramic city views and private elevator access.',
    price: 1500000,
    address: {
      street: '2 Airport City',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-888-9999',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', id: 0, home_id: 0 }
    ],
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    available: false,
    features: [
      { type: { name: 'Penthouse' } },
      { type: { name: 'Private Elevator' } },
      { type: { name: 'City View' } }
    ],
    listing_type: 'sale',
    property_type: 'apartment',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 13,
    title: 'Tiny Home',
    description: 'Efficient and affordable tiny home, perfect for minimalist living.',
    price: 95000,
    address: {
      street: '9 Adenta Road',
      city: 'Adenta',
      state: 'Greater Accra',
      zipCode: 'GA-222-3333',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', id: 0, home_id: 0 }
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 400,
    available: true,
    features: [
      { type: { name: 'Tiny Home' } },
      { type: { name: 'Minimalist' } },
      { type: { name: 'Efficient' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 14,
    title: 'Classic Colonial',
    description: 'Traditional colonial home with spacious yard and classic architecture.',
    price: 430000,
    address: {
      street: '17 Sekondi Road',
      city: 'Sekondi',
      state: 'Western Region',
      zipCode: 'WR-444-5555',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961', id: 0, home_id: 0 }
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 2700,
    available: true,
    features: [
      { type: { name: 'Colonial' } },
      { type: { name: 'Large Yard' } },
      { type: { name: 'Fireplace' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 15,
    title: 'Modern Row House',
    description: 'Contemporary row house in a vibrant urban neighborhood.',
    price: 380000,
    address: {
      street: '6 Kanda Highway',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-555-6666',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', id: 0, home_id: 0 }
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    available: true,
    features: [
      { type: { name: 'Row House' } },
      { type: { name: 'Modern' } },
      { type: { name: 'Walkable' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 16,
    title: 'Ski Chalet',
    description: 'Cozy chalet near ski slopes, perfect for winter getaways.',
    price: 650000,
    address: {
      street: '1 Kwahu Ridge',
      city: 'Kwahu',
      state: 'Eastern Region',
      zipCode: 'ER-999-0000',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', id: 0, home_id: 0 }
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 2300,
    available: true,
    features: [
      { type: { name: 'Mountain View' } },
      { type: { name: 'Fireplace' } },
      { type: { name: 'Hot Tub' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 17,
    title: 'Victorian Mansion',
    description: 'Grand Victorian mansion with ornate details and large garden.',
    price: 2000000,
    address: {
      street: '3 Ridge Road',
      city: 'Kumasi',
      state: 'Ashanti Region',
      zipCode: 'AS-777-8888',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961', id: 0, home_id: 0 }
    ],
    bedrooms: 6,
    bathrooms: 5,
    area: 7000,
    available: false,
    features: [
      { type: { name: 'Victorian' } },
      { type: { name: 'Garden' } },
      { type: { name: 'Historic' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 18,
    title: 'Golf Course Estate',
    description: 'Elegant estate home overlooking a championship golf course.',
    price: 1100000,
    address: {
      street: '2 Achimota Golf Road',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-888-1111',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', id: 0, home_id: 0 }
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: 4800,
    available: true,
    features: [
      { type: { name: 'Golf Course' } },
      { type: { name: 'Pool' } },
      { type: { name: 'Gated Community' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 19,
    title: 'Seaside Bungalow',
    description: 'Charming bungalow steps from the beach, perfect for summer vacations.',
    price: 420000,
    address: {
      street: '8 Busua Beach Road',
      city: 'Busua',
      state: 'Western Region',
      zipCode: 'WR-222-3333',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', id: 0, home_id: 0 }
    ],
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    available: true,
    features: [
      { type: { name: 'Beach Access' } },
      { type: { name: 'Porch' } },
      { type: { name: 'Bungalow' } }
    ],
    listing_type: 'sale',
    property_type: 'house',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
  {
    id: 20,
    title: 'Downtown Studio',
    description: 'Compact studio apartment in the heart of downtown, ideal for young professionals.',
    price: 275000,
    address: {
      street: '14 Ring Road Central',
      city: 'Accra',
      state: 'Greater Accra',
      zipCode: 'GA-444-5555',
      country: 'Ghana',
    },
    images: [
      { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', id: 0, home_id: 0 }
    ],
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    available: true,
    features: [
      { type: { name: 'Studio' } },
      { type: { name: 'Downtown' } },
      { type: { name: 'Modern' } }
    ],
    listing_type: 'rent',
    property_type: 'apartment',
    headline: '',
    sponsored: false,
    created_at: '',
    address_id: 0
  },
];