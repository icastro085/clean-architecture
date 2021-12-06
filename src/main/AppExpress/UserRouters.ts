import { Router } from "express";

import Interactor from "@/domain/useCases/user/Interactor";
import InputPort from "@/domain/useCases/user/InputPort";
import OutputPort from "@/domain/useCases/user/OutputPort";

import IControllerCreate from "@/applications/controllers/contracts/user/IControllerCreate";
import ControllerCreate from "@/applications/controllers/user/ControllerCreate";

import IHttpOutputPort from "@/applications/presenters/contracts/user/IHttpOutputPort";
import HttpOutputPort from "@/applications/presenters/user/HttpOutputPort";

import IRepositoryCreate from "@/data/contracts/user/IRepositoryCreate";

import RestRouterExpressCreate from "@/infrastructure/user/RestRouterExpressCreate";

export default class UserRouters {
  constructor(readonly repository: IRepositoryCreate) {}

  private buildController(): IControllerCreate {
    const interactor = new Interactor(this.repository);
    const inputPort = new InputPort();
    const outputPort = new OutputPort();
    const controller = new ControllerCreate(interactor, inputPort, outputPort);
    return controller;
  }

  private buildPresenter(): IHttpOutputPort {
    const presenter = new HttpOutputPort();
    return presenter;
  }

  handle(): Router {
    const router: Router = Router({ mergeParams: true });

    const controller: IControllerCreate = this.buildController();
    const presenter: IHttpOutputPort = this.buildPresenter();
    const routerCreate = new RestRouterExpressCreate(controller, presenter);

    router.post("/", (req, res) => routerCreate.handle(req, res));
    router.get("/", (req, res) => res.send("hello"));

    return router;
  }
}
