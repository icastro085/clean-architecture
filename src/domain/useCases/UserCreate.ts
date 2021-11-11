import { UseCaseBase } from "@/domain/contracts/useCases/UseCaseBase";

export class UserCreate implements UseCaseBase {
  handle: () => Promise<void>;
}
