export default interface IDatabase {
  create<TEntity = unknown>(tableName: string, data: TEntity): Promise<TEntity>;
}
