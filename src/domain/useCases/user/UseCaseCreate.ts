import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";
import IUseCaseCreate from "@/domain/useCases/contracts/user/IUseCaseCreate";
import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default class UseCaseCreate implements IUseCaseCreate {
  constructor(
    readonly output: IOutput,
    readonly repository: IRepositoryCreate,
  ) {}

  async handle(input: IInpput): Promise<IData | null> {
    const userInput: IEntity = await input.handle();
    const userOutput: IEntity | null = await this.repository.handle(userInput);
    const outputData: IData = await this.output.handle(userOutput);
    return outputData;
  }
}
