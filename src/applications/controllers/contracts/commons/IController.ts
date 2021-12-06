import IInteractor from "@/domain/useCases/contracts/commons/IInteractor";
import IInputPort from "@/domain/useCases/contracts/commons/IInputPort";
import IOutputPort from "@/domain/useCases/contracts/commons/IOutputPort";

export default interface IController {
  readonly interactor: IInteractor;
  readonly inputPort: IInputPort;
  readonly outputPort: IOutputPort;

  handle(data: unknown): Promise<unknown>;
}
