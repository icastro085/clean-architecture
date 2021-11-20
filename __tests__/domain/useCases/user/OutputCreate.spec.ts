import IData from "@/domain/useCases/contracts/user/IData";
import OutputCreate from "@/domain/useCases/user/OutputCreate";

describe("Domain/UseCase/User/OutputCreate/", () => {
  describe("When receive a null value", () => {
    it("should return null as output", async () => {
      const output = new OutputCreate();
      const user: IData = await output.handle(null);

      expect(user).toBeNull();
    });
  });

  describe("When receive a value", () => {
    it("should return user structure as output", async () => {
      const output = new OutputCreate();
      const user: IData = await output.handle({ name: "test" });
      const userExpected = {
        id: null,
        name: "test",
      };

      expect(user).toEqual(userExpected);
    });
  });
});
