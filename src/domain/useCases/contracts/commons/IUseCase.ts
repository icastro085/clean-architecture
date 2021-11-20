import IInput from "@/domain/useCases/contracts/commons/IInput";
import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IUseCase {
  handle(input: IInput): Promise<IData | void | null>;
}
