import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";

import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IRepository from "@/domain/useCases/contracts/commons/IRepository";

import InputCreate from "@/domain/useCases/user/InputCreate";
import UseCaseCreate from "@/domain/useCases/user/UseCaseCreate";

class RepositoryCreate implements IRepository<IEntity, IEntity> {
  handle(entity?: IEntity): Promise<IEntity> {
    const { name = "" } = entity || {};
    const out: IEntity = { id: "1", name };
    return Promise.resolve(out);
  }
}

describe("Domain/UseCase/User/UseCaseCreate/", () => {
  describe("When create user", () => {
    it("should return created user", async () => {
      const repository: IRepository<IEntity, IEntity> = new RepositoryCreate();
      const useCaseCreate: UseCaseCreate = new UseCaseCreate(repository);

      const input: IInpput = new InputCreate({ name: "test" });
      const output: IOutput = await useCaseCreate.handle(input);
      const user: IData = await output.handle();

      expect(user).toEqual({ id: "1", name: "test" });
    });
  });
});
