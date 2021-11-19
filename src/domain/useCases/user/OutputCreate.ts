import IUser from "@/domain/entities/contracts/IUser";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

export default class OutputCreate implements IOutput {
  constructor(readonly user: IUser | null) {}

  handle(): Promise<IUser | null> {
    if (!this.user) {
      return Promise.resolve(null);
    }

    const { id = null, name = "" } = this.user;
    return Promise.resolve({ id, name });
  }
}
