import IEntity from "@/domain/useCases/contracts/user/IEntity";
import ICommonsInput from "@/domain/useCases/contracts/commons/IInput";

export default interface IInpput extends ICommonsInput {
  handle(): Promise<IEntity>;
}
