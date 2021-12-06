import ICommonsOutputPort from "@/domain/useCases/contracts/commons/IOutputPort";
import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default interface IOutputPort extends ICommonsOutputPort {
  handle(entity: IEntity): IOutput;
}
