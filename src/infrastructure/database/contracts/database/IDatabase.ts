import IEntity from "./IEntity";
import IData from "./IData";

export default interface IDatabase {
  create<TEntity extends IEntity = IEntity, TData extends IData = IData>(
    tableName: string,
    data: TEntity,
  ): Promise<TData>;
}
