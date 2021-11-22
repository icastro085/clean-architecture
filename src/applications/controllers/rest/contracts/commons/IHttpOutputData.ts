export default interface IHttpOutputData<TData = unknown> {
  status: number;
  data: TData;
}
