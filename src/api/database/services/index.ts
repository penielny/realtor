import { Request, Response } from 'express';
import supabase from '../client';
import { Home } from '../model';


// ---------------------------------------------
// HOME SERVICE
// ---------------------------------------------

export const getHomes = async (req: Request, res: Response) => {
  const page = parseInt(req.query['page'] as string) || 1;
  const limit = parseInt(req.query['limit'] as string) || 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from('home')
    .select('*, address(*), images(*), features(type:feature_types(name))', { count: 'exact' })
    .range(from, to);

  return { data, error, count };
};


export const getHomeById = async (id: number) => {
  const { data, error } = await supabase
    .from('home')
    .select('*, address(*), images(*), features(type:feature_types(name))')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};

export const getRecentHomes = async () => {
  const { data, error } = await supabase
    .from('home')
    .select('*, address(*), images(*), features(type:feature_types(name))')
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) throw error;
  return data;
};


export const getSponsoredHomes = async () => {
  const { data, error } = await supabase
    .from('home')
    .select('*, address(*), images(*), features(type:feature_types(name))')
    .eq('sponsored', true);

  if (error) throw error;
  return data;
};


export const createHome = async (home: Home) => {
  const { data, error } = await supabase.from('home').insert(home).select().single();
  if (error) throw error;
  return data;
};

export const updateHome = async (id: number, updates: any) => {
  const { data, error } = await supabase.from('home').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
};

export const deleteHome = async (id: number) => {
  const { error } = await supabase.from('home').delete().eq('id', id);
  if (error) throw error;
};

export const makeHomeSponsored = async (id: number, value: boolean = true) => {
  const { data, error } = await supabase.from('home').update({ sponsored: value }).eq('id', id).select().single();
  if (error) throw error;
  return data;
};

// ---------------------------------------------
// ADDRESS SERVICE
// ---------------------------------------------

export const createAddress = async (address: any) => {
  const { data, error } = await supabase.from('address').insert(address).select().single();
  if (error) throw error;
  return data;
};

export const updateAddress = async (id: number, updates: any) => {
  const { data, error } = await supabase.from('address').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
};

export const deleteAddress = async (id: number) => {
  const { error } = await supabase.from('address').delete().eq('id', id);
  if (error) throw error;
};

// ---------------------------------------------
// IMAGE SERVICE
// ---------------------------------------------

export const getImagesByHome = async (homeId: number) => {
  const { data, error } = await supabase.from('images').select('*').eq('home_id', homeId);
  if (error) throw error;
  return data;
};

export const addImage = async (image: { home_id: number; url: string }) => {
  const { data, error } = await supabase.from('images').insert(image).select().single();
  if (error) throw error;
  return data;
};

export const addImages = async (homeId: number, images: string[]) => {
  const imageObjects = images.map(url => ({ home_id: homeId, url }));
  const { data, error } = await supabase.from('images').insert(imageObjects);
  if (error) throw error;
  return data;
};

export const deleteImage = async (id: number) => {
  const { error } = await supabase.from('images').delete().eq('id', id);
  if (error) throw error;
};

// ---------------------------------------------
// FEATURE SERVICE
// ---------------------------------------------

export const getFeatureTypes = async () => {
  const { data, error } = await supabase.from('feature_types').select('*');
  if (error) throw error;
  return data;
};

export const addFeatureToHome = async (feature: { home_id: number; type_id: number }) => {
  const { data, error } = await supabase.from('features').insert(feature).select().single();
  if (error) throw error;
  return data;
};

export const addFeaturesToHome = async (homeId: number, features: string[]) => {
  const featureObjects = features.map(type_id => ({ home_id: homeId, type_id: parseInt(type_id) }));
  const { data, error } = await supabase.from('features').insert(featureObjects);
  if (error) throw error;
  return data;
};

export const deleteFeature = async (id: number) => {
  const { error } = await supabase.from('features').delete().eq('id', id);
  if (error) throw error;
};

