import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default class OutputCreate implements IOutput {
  handle(user: IEntity | null): Promise<IData> {
    if (!user) {
      return Promise.resolve(null);
    }

    const { id = null, name = "" } = user;
    return Promise.resolve({ id, name });
  }
}
