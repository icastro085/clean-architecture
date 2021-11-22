import { Request, Response, NextFunction } from "express";

import IController from "@/applications/controllers/rest/contracts/commons/IController";

export default interface IRouter {
  readonly controller: IController;

  handle(
    request: Request,
    response: Response,
    next?: NextFunction,
  ): Promise<void>;
}
