import { Elysia } from "elysia";
import RepositoryUsersMemory from "./external/memory/repositoryUsersMemory";
import RegisterUser from "./core/usuario/service/RegisterUser";
import RegisterUserController from "./adapters/registerUserController";
import GetUsers from "./core/usuario/service/getUsers";
import GetUsersController from "./adapters/getUsersController";

const app = new Elysia()

// ---------------------------------Register routes
const repositoryUserMemory = new RepositoryUsersMemory()

const registerUser = new RegisterUser(repositoryUserMemory)
new RegisterUserController(app, registerUser)

const getUsers = new GetUsers(repositoryUserMemory)
new GetUsersController(app, getUsers)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
