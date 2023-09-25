import Elysia from "elysia";
import getUsers from "../core/usuario/service/getUsers";
import GetUserByID from "../core/usuario/service/getUserByEmail";

export default class GetUserByIdController{
  constructor(
    readonly servidor: Elysia,
    readonly useCase: GetUserByID
  ){
    servidor.get('/users/:id', async ({params})=>{
      const user = await useCase.exec(params.id)
      return user
    })
  }
}