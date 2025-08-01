import { NextFunction, Request, Response } from "express";
import { getRecentHomes, getSponsoredHomes } from "../../database/services";

export default async function homeRouteHandler(req: Request, res: Response, next: NextFunction) {
  const [sponsored, recentHomes] = await Promise.all([
    getSponsoredHomes(),
    getRecentHomes(),
  ]);
  return res.json({ sponsored, recentHomes });
}


