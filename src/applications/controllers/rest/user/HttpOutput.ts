import IHttpOutput from "@/applications/controllers/rest/contracts/user/IHttpOutput";
import IData from "@/applications/controllers/rest/contracts/user/IData";
import IHttpOutputData from "@/applications/controllers/rest/contracts/commons/IHttpOutputData";

export default class HttpOutput implements IHttpOutput {
  handle(status: number, data: IData): IHttpOutputData<IData> {
    return {
      status,
      data,
    };
  }
}
