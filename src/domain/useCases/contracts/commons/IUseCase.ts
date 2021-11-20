import IEntity from "@/domain/entities/contracts/IEntity";
import IInput from "@/domain/useCases/contracts/commons/IInput";
import IOutput from "@/domain/useCases/contracts/commons/IOutput";
import IRepository from "@/domain/useCases/contracts/commons/IRepository";

export default interface IUseCase<
  INInput extends IInput = IInput,
  TOutput extends IOutput | void = IOutput,
> {
  readonly repository: IRepository<IEntity, IEntity>;
  handle(input: INInput): Promise<TOutput>;
}
