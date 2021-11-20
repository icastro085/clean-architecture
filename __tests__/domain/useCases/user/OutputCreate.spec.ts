import IData from "@/domain/useCases/contracts/user/IData";
import OutputCreate from "@/domain/useCases/user/OutputCreate";

describe("Domain/UseCase/User/OutputCreate/", () => {
  describe("When receive a value", () => {
    it("should return user structure as output", async () => {
      const output = new OutputCreate({ name: "test" });
      const user: IData | null = await output.handle();
      const userExpected = {
        id: null,
        name: "test",
      };

      expect(user).toEqual(userExpected);
    });
  });
});
