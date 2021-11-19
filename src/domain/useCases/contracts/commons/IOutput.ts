import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IOutput {
  handle(data: IData): Promise<null | IData | IData[]>;
}
