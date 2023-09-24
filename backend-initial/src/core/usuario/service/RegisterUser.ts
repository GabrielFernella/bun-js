import { randomUUID } from "crypto";
import UseCase from "../../shared/UseCase";
import RepositoryUsers from "./RepositoryUsers";

type Params = {
  name: string,
  email: string,
  password: string
}

export default class RegisterUser implements UseCase<Params, void> {

  constructor(private readonly repository: RepositoryUsers){}

  async exec(params: Params): Promise<void> {
    const { name, email, password} = params

    const userAlreadyExists = await this.repository.getUserByEmail(email)
    if(userAlreadyExists){
      throw new Error('User already exists!')
    }

    await this.repository.create({
      id: randomUUID(),
      name,
      email,
      password,
    })


  }
}