import IEntity from "@/domain/useCases/contracts/user/IEntity";

export default interface IOutput {
  isOk: boolean;
  data?: IEntity;
  errors?: { key: string; messages?: string[] }[];
}
