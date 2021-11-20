import IRepository from "@/domain/useCases/contracts/commons/IRepository";
import IEntity from "@/domain/useCases/contracts/user/IEntity";

type IRepositoryCreate<
  INEntity extends IEntity = IEntity,
  OUTEntity extends IEntity = IEntity,
> = IRepository<INEntity, OUTEntity>;

export default IRepositoryCreate;
