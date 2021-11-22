import IDatabase from "@/infrastructure/database/contracts/database/IDatabase";
import IRepositoryCreate from "@/applications/controllers/rest/contracts/user/IRepositoryCreate";

import IEntity from "@/applications/controllers/rest/contracts/user/IEntity";
import IData from "@/applications/controllers/rest/contracts/user/IData";

export default class RepositoryCreateMemory implements IRepositoryCreate {
  constructor(readonly database: IDatabase) {}

  async handle(entity: IEntity): Promise<IEntity> {
    const entityResult: IData = await this.database.create<IEntity, IData>(
      "user",
      entity,
    );

    return Promise.resolve(entityResult);
  }
}
