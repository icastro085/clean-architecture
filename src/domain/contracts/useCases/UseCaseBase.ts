export interface UseCaseBase<T = void> {
  handle: () => Promise<T>;
}
