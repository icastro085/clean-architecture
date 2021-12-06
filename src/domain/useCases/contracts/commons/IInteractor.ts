import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IInteractor<TEntity extends IEntity = IEntity> {
  handle(input: TEntity): Promise<TEntity>;
}
