import app from "./external/api/config";
import RepositoryUsersMemory from "./external/memory/repositoryUsersMemory";
import RegisterUser from "./core/usuario/service/RegisterUser";
import RegisterUserController from "./adapters/registerUserController";
import GetUsers from "./core/usuario/service/getUsers";
import GetUsersController from "./adapters/getUsersController";
import GetUserByID from "./core/usuario/service/getUserByEmail";
import GetUserByIdController from "./adapters/getUserByIdController";

// ---------------------------------Register routes
const repositoryUserMemory = new RepositoryUsersMemory()

const registerUser = new RegisterUser(repositoryUserMemory)
new RegisterUserController(app, registerUser)

const getUsers = new GetUsers(repositoryUserMemory)
new GetUsersController(app, getUsers)

const getUserByID = new GetUserByID(repositoryUserMemory)
new GetUserByIdController(app, getUserByID)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
