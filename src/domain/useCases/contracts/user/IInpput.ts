import IUser from "@/domain/entities/contracts/IUser";
import IInputCommon from "@/domain/useCases/contracts/commons/IInput";

export default interface IInpput extends IInputCommon {
  handle(): Promise<IUser>;
}
