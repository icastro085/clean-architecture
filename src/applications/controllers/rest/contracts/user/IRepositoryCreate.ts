import IEntity from "@/applications/controllers/rest/contracts/user/IEntity";
import IUserRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";

type IRepositoryCreate = IUserRepositoryCreate<IEntity, IEntity>;

export default IRepositoryCreate;
