import { Request, Response } from "express";

import IInput from "@/domain/useCases/contracts/user/IInput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IControllerCreate from "@/applications/controllers/contracts/user/IControllerCreate";
import IHttpOutputPort from "@/applications/presenters/contracts/user/IHttpOutputPort";

import IRouter from "@/infrastructure/rest/contracts/express/IRouter";

export default class RestRouterExpressCreate implements IRouter {
  constructor(
    readonly controller: IControllerCreate,
    readonly presenter: IHttpOutputPort,
  ) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { body } = request;
    const input: IInput = body;
    const output: IOutput = await this.controller.handle(input);
    const httpOutput = this.presenter.handle(output);

    response.status(httpOutput.status).json(httpOutput);
  }
}
