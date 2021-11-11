import { IUser } from "@/domain/contracts/entities/IUser";

export class User implements IUser {
  constructor(readonly name: string, readonly email: string) {}
}
