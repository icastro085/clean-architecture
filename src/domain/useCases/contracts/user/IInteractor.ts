import ICommonsInteractor from "@/domain/useCases/contracts/commons/IInteractor";
import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";

export default interface IInteractor extends ICommonsInteractor<IEntity> {
  readonly repository: IRepositoryCreate;
}
