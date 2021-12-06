import IEntity from "@/domain/useCases/contracts/user/IEntity";

export default interface IOutput {
  status: number;
  data?: IEntity;
}
