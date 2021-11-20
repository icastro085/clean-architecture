import IEntity from "@/domain/useCases/contracts/user/IEntity";
import IData from "@/domain/useCases/contracts/user/IData";

import IInpput from "@/domain/useCases/contracts/user/IInpput";
import IOutput from "@/domain/useCases/contracts/user/IOutput";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";

import InputCreate from "@/domain/useCases/user/InputCreate";
import OutputCreate from "@/domain/useCases/user/OutputCreate";
import UseCaseCreate from "@/domain/useCases/user/UseCaseCreate";

class RepositoryCreate implements IRepositoryCreate {
  handle(user: IEntity): Promise<IEntity> {
    return Promise.resolve({ ...user, id: "1" });
  }
}

class RepositoryCreateError implements IRepositoryCreate {
  handle(): Promise<IEntity | null> {
    return Promise.resolve(null);
  }
}

describe("Domain/UseCase/User/UseCaseCreate/", () => {
  describe("When create user", () => {
    it("should return created user", async () => {
      const repository: IRepositoryCreate = new RepositoryCreate();
      const output: IOutput = new OutputCreate();
      const useCaseCreate: UseCaseCreate = new UseCaseCreate(
        output,
        repository,
      );

      const input: IInpput = new InputCreate({ name: "test" });
      const user: IData = await useCaseCreate.handle(input);

      expect(user).toEqual({ id: "1", name: "test" });
    });
  });

  describe("When not create user", () => {
    it("should return null", async () => {
      const repository: IRepositoryCreate = new RepositoryCreateError();
      const output: IOutput = new OutputCreate();

      const useCaseCreate: UseCaseCreate = new UseCaseCreate(
        output,
        repository,
      );

      const input: IInpput = new InputCreate({ name: "test" });
      const user: IData = await useCaseCreate.handle(input);

      expect(user).toBeNull();
    });
  });
});
