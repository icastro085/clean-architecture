import IUser from "@/domain/entities/contracts/IUser";

export class User implements IUser {
  constructor(readonly id: string | null, readonly name: string) {}
}
