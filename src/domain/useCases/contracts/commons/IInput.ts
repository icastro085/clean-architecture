import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IInput extends IData {
  handle(): Promise<IData>;
}
