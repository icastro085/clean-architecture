import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IData from "@/domain/useCases/contracts/user/IData";
import ICommonsUseCase from "@/domain/useCases/contracts/commons/IUseCase";

export default interface IUseCaseCreate extends ICommonsUseCase {
  handle(input: IInpput): Promise<IData | null>;
}
