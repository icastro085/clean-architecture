import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IUseCase from "@/domain/useCases/contracts/commons/IUseCase";

export default interface IUseCaseCreate extends IUseCase {
  handle(input: IInpput): Promise<IOutput>;
}
