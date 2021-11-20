import IEntity from "@/domain/useCases/contracts/user/IEntity";
import InputCreate from "@/domain/useCases/user/InputCreate";

describe("Domain/UseCase/User/InputCreate/", () => {
  describe("When receive a value", () => {
    it("should return user structure as output", async () => {
      const output = new InputCreate({ name: "test" });
      const user: IEntity = await output.handle();

      expect(user).toEqual({ id: null, name: "test" });
    });
  });
});
