import IEntity from "@/domain/entities/contracts/IEntity";
import IData from "@/domain/useCases/contracts/commons/IData";

export default interface IOutput<
  INEntity extends IEntity = IEntity,
  OUTData extends IData = IEntity,
> {
  readonly entity: INEntity;
  handle(): Promise<OUTData>;
}
