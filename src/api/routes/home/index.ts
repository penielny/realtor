import { AngularNodeAppEngine, writeResponseToNodeResponse } from "@angular/ssr/node";
import { NextFunction, Request, Response } from "express";
const angularApp = new AngularNodeAppEngine();

export default function homeRouteHandler(req: Request, res: Response,next:NextFunction) {
  return res.send("Welcome to the homepage!");
}
