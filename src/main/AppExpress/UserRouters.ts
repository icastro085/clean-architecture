import { Router, Application } from "express";

import UseCaseCreate from "@/domain/useCases/user/UseCaseCreate";

import HttpOutput from "@/applications/controllers/rest/user/HttpOutput";
import HttpOutputError from "@/applications/controllers/rest/user/HttpOutputError";
import ControllerCreate from "@/applications/controllers/rest/user/ControllerCreate";

import IControllerCreate from "@/applications/controllers/rest/contracts/user/IControllerCreate";
import IRepositoryCreate from "@/applications/controllers/rest/contracts/user/IRepositoryCreate";

import RestRouterExpressCreate from "@/infrastructure/user/RestRouterExpressCreate";

export default class UserRouters {
  constructor(readonly repository: IRepositoryCreate) {}

  private buildController(): IControllerCreate {
    const useCaseCreate = new UseCaseCreate(this.repository);
    const httpOutput = new HttpOutput();
    const httpOutputError = new HttpOutputError();
    const controller = new ControllerCreate(
      useCaseCreate,
      httpOutput,
      httpOutputError,
    );

    return controller;
  }

  private buildRouter(app: Application): void {
    const router: Router = Router({ mergeParams: true });
    const controller = this.buildController();
    const routerCreate = new RestRouterExpressCreate(controller);

    router.post("/", (req, res) => routerCreate.handle(req, res));

    app.use("/user", router);
  }

  handle(app: Application): void {
    this.buildRouter(app);
  }
}
