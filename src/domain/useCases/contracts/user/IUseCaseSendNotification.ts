import IInpput from "@/domain/useCases/contracts/user/IInpput";
import ICommonsUseCase from "@/domain/useCases/contracts/commons/IUseCase";

export default interface IUseCaseSendNotification extends ICommonsUseCase {
  handle(input: IInpput): Promise<void>;
}
