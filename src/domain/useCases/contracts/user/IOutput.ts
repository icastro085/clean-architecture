import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";
import ICommonsOutput from "@/domain/useCases/contracts/commons/IOutput";

export default interface IOutput extends ICommonsOutput {
  handle(user: IEntity | null): Promise<IData>;
}
