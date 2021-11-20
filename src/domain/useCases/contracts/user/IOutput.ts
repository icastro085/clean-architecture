import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";
import ICommonsOutput from "@/domain/useCases/contracts/commons/IOutput";

type IOutput = ICommonsOutput<IEntity, IData>;

export default IOutput;
