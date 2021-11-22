import { Request, Response } from "express";

import IControllerCreate from "@/applications/controllers/rest/contracts/user/IControllerCreate";
import IRouter from "@/infrastructure/rest/contracts/express/IRouter";

import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";
import IHttpOutputDataError from "@/applications/controllers/rest/contracts/commons/IHttpOutputDataError";

export default class RestRouterExpressCreate implements IRouter {
  constructor(readonly controller: IControllerCreate) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { body } = request;
    const data: IHttpOutputData | IHttpOutputDataError =
      await this.controller.handle(body);

    response.status(data.status).json(data);
  }
}
