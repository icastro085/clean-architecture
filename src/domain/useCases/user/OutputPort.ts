import IOutputPort from "@/domain/useCases/contracts/user/IOutputPort";
import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default class InputPort implements IOutputPort {
  handle(entity: IEntity): IOutput {
    return {
      isOk: true,
      data: entity,
    };
  }
}
