import IEntity from "@/domain/entities/contracts/IEntity";

export default interface IUser extends IEntity {
  readonly name: string;
}
