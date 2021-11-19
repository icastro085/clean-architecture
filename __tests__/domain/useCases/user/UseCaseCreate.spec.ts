import IUser from "@/domain/entities/contracts/IUser";
import IRepositoryCreate from "@/domain/useCases/contracts/user/IRepositoryCreate";
import InputCreate from "@/domain/useCases/user/InputCreate";
import OutputCreate from "@/domain/useCases/user/OutputCreate";
import UseCaseCreate from "@/domain/useCases/user/UseCaseCreate";

class RepositoryCreate implements IRepositoryCreate {
  handle(user: IUser): Promise<IUser> {
    return Promise.resolve({ ...user, id: "1" });
  }
}

describe("Domain/UseCase/User/OutputCreate/", () => {
  describe("When createa user", () => {
    it("should return created user", async () => {
      const useCaseCreate: UseCaseCreate = new UseCaseCreate(
        new RepositoryCreate(),
      );
      const output: OutputCreate = await useCaseCreate.handle(
        new InputCreate({ name: "test" }),
      );

      expect(await output.handle()).toEqual({ id: "1", name: "test" });
    });
  });
});
