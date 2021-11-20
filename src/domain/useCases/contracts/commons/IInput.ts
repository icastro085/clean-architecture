import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IInput<OUTEntity extends IEntity = IEntity> {
  readonly entity: IEntity;
  handle(): Promise<OUTEntity>;
}
