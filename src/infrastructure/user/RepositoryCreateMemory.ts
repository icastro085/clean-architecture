import IDatabase from "@/infrastructure/database/contracts/database/IDatabase";
import IRepositoryCreate from "@/data/contracts/user/IRepositoryCreate";
import IEntity from "@/data/contracts/user/IEntity";

export default class RepositoryCreateMemory implements IRepositoryCreate {
  constructor(readonly database: IDatabase) {}

  async handle(entity: IEntity): Promise<IEntity> {
    const entityResult: IEntity = await this.database.create<IEntity>(
      "user",
      entity,
    );

    return Promise.resolve(entityResult);
  }
}
