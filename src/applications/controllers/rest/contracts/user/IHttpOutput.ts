import ICommonsHttpOutput from "@/applications/controllers/rest/contracts/commons/IHttpOutput";
import IData from "@/applications/controllers/rest/contracts/user/IData";

type IHttpOutput = ICommonsHttpOutput<IData>;

export default IHttpOutput;
