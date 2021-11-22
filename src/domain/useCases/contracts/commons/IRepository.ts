import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IRepository<
  INEntity extends IEntity = IEntity,
  OUTEntity extends IEntity = IEntity,
> {
  handle(entity: INEntity): Promise<OUTEntity>;
}
