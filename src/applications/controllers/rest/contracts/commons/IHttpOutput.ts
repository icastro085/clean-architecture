import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";

export default interface IHttpOutput<TData = unknown> {
  handle(status: number, data: TData): IHttpOutputData<TData>;
}
