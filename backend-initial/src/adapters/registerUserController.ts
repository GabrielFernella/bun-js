import Elysia from "elysia";
import RegisterUser from "../core/usuario/service/RegisterUser";

export default class RegisterUserController{
  constructor(
    readonly servidor: Elysia,
    readonly useCase: RegisterUser
  ){
    servidor.post('/users', async ({ body })=>{
      const { name, email, password } = body as any

      await useCase.exec({name, email, password})
    })
  }
}