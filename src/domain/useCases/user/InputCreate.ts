import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IInpput from "@/domain/useCases/contracts/user/IInpput";

export default class InputCreate implements IInpput {
  constructor(readonly entity: IEntity) {}

  handle(): Promise<IEntity> {
    const { id = null, name = "" } = this.entity;
    return Promise.resolve({ id, name });
  }
}
