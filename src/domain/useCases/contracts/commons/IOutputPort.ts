import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IOutputPort {
  handle(entity: IEntity): unknown;
}
