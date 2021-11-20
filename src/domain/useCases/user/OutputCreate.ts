import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default class OutputCreate implements IOutput {
  constructor(readonly entity: IEntity) {}

  handle(): Promise<IData> {
    const { id = null, name = "" } = this.entity;
    return Promise.resolve({ id, name });
  }
}
