import IEntity from "@/domain/useCases/contracts/user/IEntity";

export default interface INotificationService {
  handle(user: IEntity): void;
}
