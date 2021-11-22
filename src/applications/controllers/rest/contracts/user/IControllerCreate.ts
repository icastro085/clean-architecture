import IUseCaseCreate from "@/domain/useCases/contracts/user/IUseCaseCreate";

import ICommonsController from "@/applications/controllers/rest/contracts/commons/IController";
import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";
import IData from "@/applications/controllers/rest/contracts/user/IData";
import IHttpOutput from "@/applications/controllers/rest/contracts/user/IHttpOutput";
import IHttpOutputError from "@/applications/controllers/rest/contracts/user/IHttpOutputError";

export default interface IControllerCreate
  extends ICommonsController<IHttpOutputData<IData>> {
  readonly useCase: IUseCaseCreate;
  readonly httpOutput: IHttpOutput;
  readonly httpOutputError: IHttpOutputError;
}
