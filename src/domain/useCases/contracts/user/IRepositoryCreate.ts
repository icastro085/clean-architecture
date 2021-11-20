import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IRepository from "@/domain/useCases/contracts/commons/IRepository";

export default interface IRepositoryCreate extends IRepository {
  handle(user: IEntity): Promise<IEntity | null>;
}
