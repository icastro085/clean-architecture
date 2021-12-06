import IInputPort from "@/domain/useCases/contracts/user/IInputPort";
import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IInput from "@/domain/useCases/contracts/user/IInput";

export default class InputPort implements IInputPort {
  handle(data: IInput): IEntity {
    const { name } = data;
    const entity: IEntity = { name };

    return entity;
  }
}
