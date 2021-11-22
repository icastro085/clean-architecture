import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";
import IHttpOutputDataError from "@/applications/controllers/rest/contracts/commons/IHttpOutputDataError";

import IUseCase from "@/domain/useCases/contracts/commons/IUseCase";
import IHttpOutput from "@/applications/controllers/rest/contracts/commons/IHttpOutput";
import IHttpOutputError from "@/applications/controllers/rest/contracts/commons/IHttpOutputError";

export default interface IController<
  THttpOutputData extends IHttpOutputData = IHttpOutputData,
  THttpOutputDataError extends IHttpOutputDataError = IHttpOutputDataError,
> {
  readonly useCase: IUseCase;
  readonly httpOutput: IHttpOutput;
  readonly httpOutputError: IHttpOutputError;

  handle(data?: unknown): Promise<THttpOutputData | THttpOutputDataError>;
}
