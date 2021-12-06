import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IInputPort {
  handle(input: unknown): IEntity;
}
