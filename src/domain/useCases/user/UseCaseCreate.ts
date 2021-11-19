import IUser from "@/domain/entities/contracts/IUser";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";
import IUseCaseCreate from "@/domain/useCases/contracts/user/IUseCaseCreate";
import IInpput from "@/domain/useCases/contracts/user/IInpput";
import OutputCreate from "@/domain/useCases/user/OutputCreate";

export default class UseCaseCreate implements IUseCaseCreate {
  constructor(readonly repository: IRepositoryCreate) {}

  async handle(input: IInpput): Promise<OutputCreate> {
    const userInput: IUser = await input.handle();
    const userOutput: IUser = await this.repository.handle(userInput);

    const output: OutputCreate = new OutputCreate(userOutput);

    return output;
  }
}
