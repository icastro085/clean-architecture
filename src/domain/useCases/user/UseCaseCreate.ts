import IRepository from "@/domain/useCases/contracts/commons/IRepository";

import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IUseCaseCreate from "@/domain/useCases/contracts/user/IUseCaseCreate";

import OutputCreate from "@/domain/useCases/user/OutputCreate";

export default class UseCaseCreate implements IUseCaseCreate {
  constructor(readonly repository: IRepository<IEntity, IEntity>) {}

  async handle(input: IInpput): Promise<IOutput> {
    const userInput: IEntity = await input.handle();
    const userOutput: IEntity = await this.repository.handle(userInput);

    const output: IOutput = new OutputCreate(userOutput);

    return output;
  }
}
