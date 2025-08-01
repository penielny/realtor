-- Drop existing tables and types
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS feature_types CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS home CASCADE;
DROP TABLE IF EXISTS address CASCADE;

DROP TYPE IF EXISTS listing_type CASCADE;
DROP TYPE IF EXISTS property_type CASCADE;

-- Create custom types
CREATE TYPE listing_type AS ENUM ('sale', 'rent');

CREATE TYPE property_type AS ENUM (
  'apartment', 'house', 'villa', 'townhouse', 'bungalow', 'studio',
  'mansion', 'chalet', 'farmhouse', 'penthouse', 'loft', 'other'
);

-- Create address table
CREATE TABLE address (
  id SERIAL PRIMARY KEY,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT NOT NULL
);

-- Create home table
CREATE TABLE home (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  headline TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  address_id INTEGER NOT NULL REFERENCES address(id) ON DELETE CASCADE,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  area NUMERIC NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  listing_type listing_type NOT NULL,
  property_type property_type NOT NULL,
  sponsored BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create feature_types table
CREATE TABLE feature_types (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Create features table
CREATE TABLE features (
  id SERIAL PRIMARY KEY,
  type_id INTEGER NOT NULL REFERENCES feature_types(id) ON DELETE CASCADE,
  home_id INTEGER NOT NULL REFERENCES home(id) ON DELETE CASCADE
);

-- Create images table
CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  home_id INTEGER NOT NULL REFERENCES home(id) ON DELETE CASCADE,
  url TEXT NOT NULL
);
