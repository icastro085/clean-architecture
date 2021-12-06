export default interface IRepository {
  handle(param: unknown): Promise<unknown>;
}
