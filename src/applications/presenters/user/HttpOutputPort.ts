import IHttpOutputPort from "@/applications/presenters/contracts/user/IHttpOutputPort";
import IOutput from "@/domain/useCases/contracts/user/IOutput";

import IHttpOutput from "@/applications/presenters/contracts/user/IHttpOutput";

export default class InputPort implements IHttpOutputPort {
  handle({ data }: IOutput): IHttpOutput {
    return {
      status: 201,
      data,
    };
  }
}
