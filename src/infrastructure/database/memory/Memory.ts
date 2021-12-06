import IDatabase from "@/infrastructure/database/contracts/database/IDatabase";
import IStorage from "./IStorage";

const database: IStorage = {};

export default class Memony implements IDatabase {
  async create<TEntity = unknown>(
    tableName: string,
    entity: TEntity,
  ): Promise<TEntity> {
    const table = database[tableName] || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataToReturn = { ...entity } as any;
    const dataToCreate: TEntity = {
      ...dataToReturn,
      id: `${Math.random()}`,
    };

    table.push(dataToCreate);
    database[tableName] = table;

    return Promise.resolve(dataToCreate);
  }
}
