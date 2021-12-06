import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IInteractor from "@/domain/useCases/contracts/user/IInteractor";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";

export default class Interactor implements IInteractor {
  constructor(readonly repository: IRepositoryCreate) {}

  async handle(entity: IEntity): Promise<IEntity> {
    const entityUpdated = await this.repository.handle(entity);
    return entityUpdated;
  }
}
