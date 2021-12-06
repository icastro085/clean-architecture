import express, { Application, Router } from "express";

import UserRouters from "@/main/AppExpress/UserRouters";
import MemoryDatabase from "@/infrastructure/database/memory/Memory";
import RepositoryCreateMemory from "@/infrastructure/user/RepositoryCreateMemory";

const PORT = 3001;
const database = new MemoryDatabase();

export default class AppExpress {
  private buildUserRouters(): Router {
    const repository = new RepositoryCreateMemory(database);
    const userRouters = new UserRouters(repository);

    return userRouters.handle();
  }

  async handle(): Promise<Application> {
    const app = express();
    app.use(express.json());

    const userRouters = this.buildUserRouters();

    app.use("/user", userRouters);

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });

    return app;
  }
}
