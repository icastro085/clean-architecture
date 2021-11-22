import IUseCaseCreate from "@/domain/useCases/contracts/user/IUseCaseCreate";

import IEntity from "@/applications/controllers/rest/contracts/user/IEntity";
import IData from "@/applications/controllers/rest/contracts/user/IData";
import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";
import IHttpOutputDataError from "@/applications/controllers/rest/contracts/commons/IHttpOutputDataError";
import IControllerCreate from "@/applications/controllers/rest/contracts/user/IControllerCreate";

import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IInpput from "@/domain/useCases/contracts/user/IInpput";
import InputCreate from "@/domain/useCases/user/InputCreate";

import IHttpOutput from "@/applications/controllers/rest/contracts/user/IHttpOutput";
import IHttpOutputError from "@/applications/controllers/rest/contracts/user/IHttpOutputError";

export default class ControllerCreate implements IControllerCreate {
  constructor(
    readonly useCase: IUseCaseCreate,
    readonly httpOutput: IHttpOutput,
    readonly httpOutputError: IHttpOutputError,
  ) {}

  async handle(
    data: unknown = {},
  ): Promise<IHttpOutputData<IData> | IHttpOutputDataError> {
    try {
      const { name } = data as IEntity;
      const input: IInpput = new InputCreate({ name });
      const output: IOutput = await this.useCase.handle(input);
      const dataOutput: IData = await output.handle();

      return this.httpOutput.handle(204, dataOutput);
    } catch (e) {
      const error: Error = e as Error;
      return this.httpOutputError.handle(500, error.message);
    }
  }
}
