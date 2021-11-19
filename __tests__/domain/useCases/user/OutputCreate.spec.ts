import OutputCreate from "@/domain/useCases/user/OutputCreate";

describe("Domain/UseCase/User/OutputCreate/", () => {
  describe("When receive a null value", () => {
    it("should return null as output", async () => {
      const output = new OutputCreate(null);
      expect(await output.handle()).toBeNull();
    });
  });

  describe("When receive a value", () => {
    it("should return user structure as output", async () => {
      const output = new OutputCreate({ name: "test" });
      expect(await output.handle()).toEqual({ id: null, name: "test" });
    });
  });
});
