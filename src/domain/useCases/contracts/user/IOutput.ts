import IUser from "@/domain/entities/contracts/IUser";
import IData from "@/domain/useCases/contracts/commons/IData";
import IOutputCommon from "@/domain/useCases/contracts/commons/IOutput";

export default interface IOutput extends IOutputCommon {
  handle(user: IUser): Promise<IData | null>;
}
