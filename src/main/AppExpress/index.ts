import express, { Application } from "express";
import UserRouters from "@/main/AppExpress/UserRouters";
import MemoryDatabase from "@/infrastructure/database/Memory";
import RepositoryCreateMemory from "@/infrastructure/user/RepositoryCreateMemory";

const PORT = 3001;

export default class AppExpress {
  private buildUserRouters(app: Application): void {
    const database = new MemoryDatabase();
    const repository = new RepositoryCreateMemory(database);
    const userRouters = new UserRouters(repository);

    userRouters.handle(app);
  }

  async handle(): Promise<Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());

    this.buildUserRouters(app);

    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });

    return app;
  }
}
