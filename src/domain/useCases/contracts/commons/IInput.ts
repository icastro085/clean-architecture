import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IInput {
  handle(): Promise<IEntity>;
}
