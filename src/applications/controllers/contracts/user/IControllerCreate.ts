import IController from "@/applications/controllers/contracts/commons/IController";
import IInteractor from "@/domain/useCases/contracts/user/IInteractor";
import IInputPort from "@/domain/useCases/contracts/user/IInputPort";
import IOutputPort from "@/domain/useCases/contracts/user/IOutputPort";
import IInput from "@/domain/useCases/contracts/user/IInput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default interface IControllerCreate extends IController {
  readonly interactor: IInteractor;
  readonly inputPort: IInputPort;
  readonly outputPort: IOutputPort;

  handle(data: IInput): Promise<IOutput>;
}
