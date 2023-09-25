import Elysia from "elysia";
import getUsers from "../core/usuario/service/getUsers";

export default class GetUsersController{
  constructor(
    readonly servidor: Elysia,
    readonly useCase: getUsers
  ){
    servidor.get('/users', async ()=>{
      const users = await useCase.exec()
      return users
    })
  }
}