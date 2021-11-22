import IDatabase from "@/infrastructure/database/contracts/IDatabase";
import IEntity from "@/infrastructure/database/contracts/IEntity";
import IData from "@/infrastructure/database/contracts/IData";

import IStorage from "./IStorage";

const database: IStorage = {};

export default class Memony implements IDatabase {
  async create<TEntity extends IEntity = IEntity, TData extends IData = IData>(
    tableName: string,
    data: TEntity,
  ): Promise<TData> {
    const table = database[tableName] || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataToReturn = { ...data } as any;
    const dataToCreate: TData = {
      ...dataToReturn,
      id: `${Math.random()}`,
    };
    table.push(dataToCreate);

    return Promise.resolve(dataToCreate);
  }
}
