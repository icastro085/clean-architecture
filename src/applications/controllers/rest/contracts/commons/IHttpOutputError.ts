import IHttpOutputDataError from "@/applications/controllers/rest/contracts/commons/IHttpOutputDataError";

export default interface IHttpOutputError {
  handle(status: number, messge: string): IHttpOutputDataError;
}
