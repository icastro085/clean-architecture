import ICommonsUseCase from "@/domain/useCases/contracts/commons/IUseCase";

import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

type IUseCaseCreate = ICommonsUseCase<IInpput, IOutput>;

export default IUseCaseCreate;
