import IEntity from "@/domain/useCases/contracts/user/IEntity";
import ICommonsRepository from "@/domain/useCases/contracts/commons/IRepository";

export default interface IRepository extends ICommonsRepository {
  handle(entity: IEntity): Promise<IEntity>;
}
