import IUser from "@/domain/entities/contracts/IUser";
import IInpput from "@/domain/useCases/contracts/user/IInpput";

export default class InputCreate implements IInpput {
  constructor(readonly user: IUser) {}

  handle(): Promise<IUser> {
    const { id = null, name = "" } = this.user;
    return Promise.resolve({ id, name });
  }
}
