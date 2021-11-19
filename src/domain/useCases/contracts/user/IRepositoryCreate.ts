import IUser from "@/domain/entities/contracts/IUser";
import IRepository from "@/domain/useCases/contracts/commons/IRepository";

export default interface IRepositoryCreate extends IRepository {
  handle(user: IUser): Promise<IUser>;
}
