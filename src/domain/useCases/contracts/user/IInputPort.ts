import ICommonsInputPort from "@/domain/useCases/contracts/commons/IInputPort";
import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IInput from "@/domain/useCases/contracts/user/IInput";

export default interface IInputPort extends ICommonsInputPort {
  handle(input: IInput): IEntity;
}
