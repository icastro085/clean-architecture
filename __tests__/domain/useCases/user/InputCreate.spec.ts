import InputCreate from "@/domain/useCases/user/InputCreate";

describe("Domain/UseCase/User/InputCreate/", () => {
  describe("When receive a value", () => {
    it("should return user structure as output", async () => {
      const output = new InputCreate({ name: "test" });
      expect(await output.handle()).toEqual({ id: null, name: "test" });
    });
  });
});
