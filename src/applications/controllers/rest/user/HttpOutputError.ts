import IHttpOutputDataError from "@/applications/controllers/rest/contracts/commons/IHttpOutputDataError";
import IHttpOutputError from "@/applications/controllers/rest/contracts/user/IHttpOutputError";

export default class HttpOutputError implements IHttpOutputError {
  handle(status: number, messge: string): IHttpOutputDataError {
    return {
      status,
      messge,
    };
  }
}
