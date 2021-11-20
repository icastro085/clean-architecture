import IEntity from "@/domain/entities/contracts/IEntity";
import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IOutput {
  handle(data: null | IEntity): Promise<null | IData | IData[]>;
}
