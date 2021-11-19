import IUser from "@/domain/entities/contracts/IUser";

export default interface INotificationService {
  handle(user: IUser): void;
}
