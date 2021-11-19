import IInput from "@/domain/useCases/contracts/commons/IInput";
import IOutput from "@/domain/useCases/contracts/commons/IOutput";

export default interface IUseCase {
  handle(input: IInput): Promise<IOutput>;
}
