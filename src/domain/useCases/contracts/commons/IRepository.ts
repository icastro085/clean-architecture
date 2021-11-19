import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IRepository {
  handle(data?: IData): Promise<null | IData | IData[]>;
}
