import ICommonsData from "@/domain/useCases/contracts/commons/IData";

export default interface IData extends ICommonsData {
  readonly id?: string | null;
  readonly name: string;
}
