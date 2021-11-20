import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IRepository {
  handle(data?: IEntity): Promise<null | IEntity | IEntity[]>;
}
