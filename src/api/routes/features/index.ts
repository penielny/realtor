import { NextFunction, Request, Response } from "express";
import { getFeatureTypes } from "../../database/services";

export default async function getFeaturesRouteHandler(req: Request, res: Response, next: NextFunction) {
    const feature_types = await getFeatureTypes()
    return res.json(feature_types);
}
