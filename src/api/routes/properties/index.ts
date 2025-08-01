import { NextFunction, Request, Response } from "express";
import { addFeaturesToHome, addImages, createAddress, createHome, getHomeById, getHomes } from "../../database/services";
import { Address, Home } from "../../database/model";

export default async function getPropertiesHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const page = parseInt(req.query['page'] as string) || 1;
    const limit = parseInt(req.query['limit'] as string) || 10;
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { error, data, count } = await getHomes(req, res);
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({
      homes: data,
      meta: {
        total: count,
        page,
        limit,
        totalPages: count ? Math.ceil(count / limit) : 0,
      },
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }


}

export async function addPropertyHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const property = req.body;
    if (!property) {
      return res.status(400).json({ error: "Property data is required" });
    }

    const address: Address = {
      street: property.address.street,
      city: property.address.city,
      state: property.address.state,
      zip_code: property.address.zipCode,
      country: property.address.country,
    }
    // frist create the address get id
    const address_res = await createAddress(address);

    // then create the property get id , add address id
    const newProperty: Home = {
      title: property.title,
      headline: property.headline,
      description: property.description,
      price: property.price,
      address_id: address_res.id,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      available: property.available,
      listing_type: property.listingType,
      property_type: property.propertyType,
      area: property.area,
    };
    const newPropertyRes = await createHome(newProperty);
    console.log("New Property Created:", newPropertyRes.id);
    // then create rows for images add property id
    await Promise.all([
      addImages(newPropertyRes.id, property.imageUrls),
      addFeaturesToHome(newPropertyRes.id, property.features.map((feature_: { type_id: string }) => feature_.type_id)),
    ]);

    return res.status(201).json({ message: "Property added successfully", property });
  } catch (error) {
    console.error("Error adding property:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getPropertyHandler(req: Request, res: Response, next: NextFunction) {
  const property_id = req.params['id']
  if (!property_id) {
    return res.status(400).json({ error: "Property ID is required" });
  }
  try {
    const property = await getHomeById(parseInt(property_id))
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    return res.status(200).json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

}




