import IControllerCreate from "@/applications/controllers/contracts/user/IControllerCreate";

import IInteractor from "@/domain/useCases/contracts/user/IInteractor";
import IInputPort from "@/domain/useCases/contracts/user/IInputPort";
import IOutputPort from "@/domain/useCases/contracts/user/IOutputPort";

import IInput from "@/domain/useCases/contracts/user/IInput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IEntity from "@/domain/useCases/contracts/user/IEntity";

export default class ControllerCreate implements IControllerCreate {
  constructor(
    readonly interactor: IInteractor,
    readonly inputPort: IInputPort,
    readonly outputPort: IOutputPort,
  ) {}

  async handle(input: IInput): Promise<IOutput> {
    const entity: IEntity = this.inputPort.handle(input);
    const entityUpdated: IEntity = await this.interactor.handle(entity);
    const output: IOutput = this.outputPort.handle(entityUpdated);
    return output;
  }
}
