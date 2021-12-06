import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IHttpOutput from "@/applications/presenters/contracts/user/IHttpOutput";

export default interface InputPort {
  handle(output: IOutput): IHttpOutput;
}
