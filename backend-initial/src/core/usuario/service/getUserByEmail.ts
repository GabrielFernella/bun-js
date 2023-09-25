import UseCase from "../../shared/UseCase";
import Usuario from "../model/Usuario";
import RepositoryUsers from "./RepositoryUsers";


export default class GetUserByID implements UseCase<string, Usuario | null> {

  constructor(private readonly repository: RepositoryUsers){}

  async exec(id: string): Promise<Usuario | null> {
    
    const result = await this.repository.getUserById(id)
    return result
  }
}